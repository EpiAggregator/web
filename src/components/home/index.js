import { h, Component } from 'preact';
import style from './style';

import VirtualList from 'preact-virtual-list';

// Generate 100,000 rows of data
const DATA = [];
for (let x=1e5; x--; ) DATA[x] = `Item #${x+1}`;

export default class Home extends Component {

    // 30px tall rows
    rowHeight = 30;

    // Renders a single row
    renderRow(row) {
        return <div class="rss-row">{row}</div>;
    }

	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<VirtualList sync class="list"
                data={DATA}
                rowHeight={this.rowHeight}
                renderRow={this.renderRow}
                />
			</div>
		);
	}
}
