import { h, Component } from 'preact';
import style from './style';

import VirtualList from 'preact-virtual-list';

import Feedentry from './Feedentry';

const API_ENDPOINT = '/feed';

const asJson = r => r.json();

// Generate 100,000 rows of data
const DATA = [];
for (let x=1e2; x--; ) DATA[x] = `Item #${x+1}`;

export default class Feedlist extends Component {

    loadList(endpoint) {
        fetch(endpoint).then(asJson).then( data => {
            console.log(data);
        });
    }

    componentDidMount() {
        this.loadList(this.props.api + API_ENDPOINT);
    }

    // 30px tall rows
    rowHeight = 30;

    // Renders a single row
    renderRow(row) {
        return <Feedentry title={row} />;
    }

    render() {
        return (
            <div class={style.feedListContainer}>
                <VirtualList
                sync
                class={style.feedListTable}
                data={DATA}
                rowHeight={this.rowHeight}
                renderRow={this.renderRow}
                />
            </div>
        );
    }
}
