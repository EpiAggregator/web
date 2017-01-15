import { h, Component } from 'preact';
import style from './style';

import VirtualList from 'preact-virtual-list';

import Loading from '../loading';

import Feedentry from './Feedentry';

import FeedListStore from '../../stores/FeedListStore'
import FeedListActions from '../../actions/FeedListActions'

const asJson = r => r.json();

export default class Feedlist extends Component {
    constructor(props) {
        super(props);
        this.apiBase = props.api;
        this.state = this.getInitialState();
        this.onChange = this.onChange.bind(this);
    }

    getInitialState() {
        return FeedListStore.getState();
    }

    componentDidMount() {
        FeedListStore.listen(this.onChange);
        FeedListActions.fetchFeeds(this.apiBase);
    }

    componentWillUnmount() {
        FeedListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    // 30px tall rows
    rowHeight = 30;

    // Renders a single row
    renderRow(entry) {
        return <Feedentry link={entry.link} title={entry.title} description={entry.description} />;
    }

    render() {
        if (this.state.errorMessage) {
            return (<div>Something is wrong: {this.state.errorMessage}</div>);
        }
        if (!this.state.loaded) {
            return (<div class={style.feedListContainer}>
                <Loading />
            </div>
            );
        }
        return (
            <div class={style.feedListContainer}>
                <VirtualList
                sync
                class={style.feedListTable}
                data={this.state.feeds}
                rowHeight={this.rowHeight}
                renderRow={this.renderRow}
                />
            </div>
        );
    }
}
