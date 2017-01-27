/**
 *
 * FeedsList
 *
 */

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Avatar from 'material-ui/Avatar';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import { transparent } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

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

const style = {
    star: {
        width: 24,
        height: 24,
        padding: 0,
        color: 'grey'
    },
    starred: {
        width: 24,
        height: 24,
        padding: 0,
        color: 'yellow'
    },
    check: {
        padding: '10px',
        paddingTop: '0px',
    }
};

// leftIcon={feed.image}
class FeedsEntries extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
        if (this.props.feedsEntries.length < 1)
            return (<div><FormattedMessage {...messages.emptyList} /></div>);
        let defaultIcon = 'https://perishablepress.com/wp/wp-content/images/2006/feed-collection/feed-icon_orange-128px+.png';
        return (
            <div>
            <List>
            {this.props.feedsEntries.map((feed, i) => {
                if (feed.read && this.props.unReadOnly) {
                    return ;
                }
               return  (<ListItem key={i} value={i} primaryText={<a href={feed.link}>{feed.title}</a>}
                secondaryText={
                    <div dangerouslySetInnerHTML={{__html: feed.description}}></div>
                }
                secondaryTextLines={2}
                onTouchTap={this.props.onRead.bind(this, i)}
                leftAvatar={
                    <Avatar src={feed.link ? (getLocation(feed.link).protocol + '//' + getLocation(feed.link).host + '/favicon.ico') : defaultIcon } backgroundColor={transparent} />
                }
                rightIcon={
                    <div>
                    <IconButton style={{padding: 0}}
                    onTouchTap={this.props.onFav.bind(this, i)}
                    tooltip="Favorite" iconStyle={feed.favorite ? style.starred : style.start} iconClassName='material-icons'>
                    star
                    </IconButton>
                    <div style={style.check}>
                    <FontIcon color={feed.read ? 'green' : 'grey'} className='material-icons'>
                    done
                    </FontIcon>
                    </div>
                    </div>
                }
                />);
                }
            )}
            </List>
            </div>
        );
    }
}

FeedsEntries.propTypes = {
    feedsEntries: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.string.isRequired,
        link: React.PropTypes.string,
        title: React.PropTypes.string,
        description: React.PropTypes.string,
    })),
    onRead: React.PropTypes.func.isRequired,
    onFav: React.PropTypes.func.isRequired,
    unReadOnly: React.PropTypes.bool.isRequired,
};

export default FeedsEntries;
