import { h, Component } from 'preact';
import style from './style';

import TiRss from 'react-icons/lib/ti/rss';

export default class Feedentry extends Component {
    render() {
        return (
            <div class={style.feedListItem}><TiRss />{this.props.title}</div>
        );
    }
}

