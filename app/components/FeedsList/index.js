/**
*
* FeedsList
*
*/

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Avatar from 'material-ui/Avatar';
import { transparent } from 'material-ui/styles/colors';

import CenterDiv from 'components/CenterDiv';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const loadStyle = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    },
};

function getLocation(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    }
}

// leftIcon={feed.image}
class FeedsList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.error)
        return (<div><FormattedMessage {...messages.error} /></div>);
    if (this.props.loading)
        return (
            <CenterDiv>
            <div style={loadStyle.container}>
          <RefreshIndicator
            size={40}
            left={10}
            top={0}
            status="loading"
            style={loadStyle.refresh}
          />
        </div>
        </CenterDiv>
        );
    if (this.props.feedsList.length < 1)
      return (<div><FormattedMessage {...messages.emptyList} /></div>);
    let defaultIcon = 'https://perishablepress.com/wp/wp-content/images/2006/feed-collection/feed-icon_orange-128px+.png';
    return (
        <div>
        <List>
            {this.props.feedsList.map((feed, i) =>
                <ListItem key={i} value={i} primaryText={feed.title}
                onTouchTap={this.props.onSelect.bind(this, i)}
                  leftAvatar={
                      <Avatar src={feed.link ? (getLocation(feed.link).protocol + '//' + getLocation(feed.link).host + '/favicon.ico') : defaultIcon }
                      backgroundColor={transparent} />
                  }/>
            )}
        </List>
        </div>
    );
  }
}

FeedsList.propTypes = {
    feedsList: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        link: React.PropTypes.string,
        title: React.PropTypes.string,
        description: React.PropTypes.string,
    })),
    onSelect: React.PropTypes.func.isRequired,
};

export default FeedsList;
