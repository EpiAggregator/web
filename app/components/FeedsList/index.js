/**
*
* FeedsList
*
*/

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Avatar from 'material-ui/Avatar';

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

// leftIcon={feed.image}
class FeedsList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.error)
        return (<div><FormattedMessage {...messages.error} /></div>);
    if (this.props.loading)
        return (<div style={loadStyle.container}>
          <RefreshIndicator
            size={40}
            left={10}
            top={0}
            status="loading"
            style={loadStyle.refresh}
          />
        </div>);
    if (this.props.feedsList.length < 1)
      return (<div><FormattedMessage {...messages.emptyList} /></div>);
    return (
        <div>
        <List>
            {this.props.feedsList.map((feed, i) =>
                <ListItem key={i} primaryText={feed.title}
                  leftAvatar={
                      <Avatar src={feed.image ? feed.image.url : 'https://perishablepress.com/wp/wp-content/images/2006/feed-collection/feed-icon_orange-128px+.png' } />
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
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        image: React.PropTypes.object,
    })),
};

export default FeedsList;
