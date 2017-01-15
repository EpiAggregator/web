import { h, Component } from 'preact';
import style from './style';

import TiRss from 'react-icons/lib/ti/rss';

export default class Feedentry extends Component {
    render() {
        return (
            <div class={style.feedListItem}><TiRss />
            <span title={this.props.description}>
            <a href={this.props.link}>{this.props.title}</a>
            </span>
            </div>
        );
    }
}

