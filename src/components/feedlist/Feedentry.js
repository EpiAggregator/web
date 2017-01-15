import { h, Component } from 'preact';
import style from './style';

export default class Feedentry extends Component {
    render() {
        let icon = this.props.entry.link + 'favicon.ico';
        return (
            <div class={style.feedEntry}><a href={this.props.entry.link}>
            <img class={style.feedEntryIcon} src={icon} onerror="this.src=https://static1.squarespace.com/static/566066cfe4b071b0153ad98b/t/570690eef699bbbdf4450acc/1460048110862/rss.svg;" />
            <span class={style.feedEntryLink} title={this.props.entry.description}>{this.props.entry.title}</span>
            </a>
            </div>
        );
    }
}

