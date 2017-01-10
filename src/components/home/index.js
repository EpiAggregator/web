import { h, Component } from 'preact';
import style from './style';

import { Row, Col } from 'react-grid-system';

import VirtualList from 'preact-virtual-list';
import TiRss from 'react-icons/lib/ti/rss';

// Generate 100,000 rows of data
const DATA = [];
for (let x=1e2; x--; ) DATA[x] = `Item #${x+1}`;

export default class Home extends Component {

    // 30px tall rows
    rowHeight = 30;

    // Renders a single row
    renderRow(row) {
        return <div class={style.feedListItem}><TiRss />  {row}</div>;
    }

	render() {
		return (
			<div class={style.home}>
			<h1>Home</h1>
			<Col xs={3} >
                <div class={style.feedListContainer}>
                    <VirtualList
                    sync
                    class={style.feedListTable}
                    data={DATA}
                    rowHeight={this.rowHeight}
                    renderRow={this.renderRow}
                    />
                </div>
			</Col>
			<Col xs={9} style={{ border: '1px solid silver' }}>Content</Col>
			</div>
		);
	}
}
