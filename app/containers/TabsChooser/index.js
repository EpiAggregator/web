/*
 *
 * TabsChooser
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { changeTab } from 'containers/App/actions';
import { makeSelectLocationState, makeSelectTabsChooser } from 'containers/App/selectors';
import messages from './messages';

import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

const locationId = [
  '/',
  '/settings',
  '/about',
];

export class TabsChooser extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    this.contentsTab = [
        { route: this.props.onChangeTab.bind(null, locationId[0]), icon: <FontIcon className='material-icons'>home</FontIcon>, label: <FormattedMessage  {...messages.home} />, },
        { route: this.props.onChangeTab.bind(null, locationId[1]), icon: <FontIcon className='material-icons'>settings</FontIcon>, label: <FormattedMessage  {...messages.settings} />, },
        { route: this.props.onChangeTab.bind(null, locationId[2]), icon: <FontIcon className='material-icons'>favorite</FontIcon>, label: <FormattedMessage  {...messages.about} />, },
    ];
    let tabId = locationId.indexOf(this.props.tabLocation);
    return (
        <div>
        <Tabs value={tabId} >
            {this.contentsTab.map((tab, i) =>
                <Tab key={i} value={i} icon={tab.icon} label={tab.label} onActive={tab.route} />
            )}
        </Tabs>
        </div>
    );
  }
}

TabsChooser.propTypes = {
  onChangeTab: React.PropTypes.func,
  tabLocation: React.PropTypes.string,
};

function mapDispatchToProps(dispatch) {
    return {
        onChangeTab: (location) => dispatch(changeTab(location)),
    };
}

const mapStateToProps = createStructuredSelector({
    tabLocation: makeSelectTabsChooser(),
});

export default connect(mapStateToProps, mapDispatchToProps)(TabsChooser);
