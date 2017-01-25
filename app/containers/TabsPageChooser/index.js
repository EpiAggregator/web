/*
 *
 * TabsPageChooser
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { changeTab } from './actions';
import makeSelectTab from './selectors';
import messages from './messages';

import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

export class TabsPageChooser extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)

    this.handleHome = this.props.onChangeTab.bind(null, 0, '/');
    this.handleSettings = this.props.onChangeTab.bind(null, 1, '/settings');
    this.handleAbout = this.props.onChangeTab.bind(null, 2, '/about');
  }

  render() {
    return (
        <Tabs initialSelectedIndex={this.props.tab.tabIdx} >
          <Tab
            icon={<FontIcon className="material-icons">home</FontIcon>}
            label={<FormattedMessage {...messages.home} />}
            onActive={this.handleHome} />
          <Tab
            icon={<FontIcon className="material-icons">settings</FontIcon>}
            label={<FormattedMessage {...messages.settings} />}
            onActive={this.handleSettings} />
          <Tab
            icon={<FontIcon className="material-icons">favorite</FontIcon>}
            label={<FormattedMessage {...messages.about} />}
            onActive={this.handleAbout} />
        </Tabs>
    );
  }
}

TabsPageChooser.propTypes = {
  onChangeTab: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    tab: makeSelectTab(),
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onChangeTab: (tabId, url) => {
        dispatch(push(url));
        dispatch(changeTab(tabId, url));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsPageChooser);
