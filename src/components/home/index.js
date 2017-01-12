import { h, Component } from 'preact';
import style from './style';

import { Row, Col } from 'react-grid-system';

import Feedlist from './Feedlist'

export default class Home extends Component {
    render() {
        return (
            <div class={style.home}>
            <h1>Home</h1>
            <Col xs={3} >
                <Feedlist api={this.props.api} />
            </Col>
            <Col xs={9} style={{ border: '1px solid silver' }}>Content</Col>
            </div>
        );
    }
}
