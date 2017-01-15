import { h, Component } from 'preact';
import style from './style';

import { Grid, Row, Col } from 'react-flexbox-grid';

import Feedlist from '../feedlist'

export default class Home extends Component {
    render() {
        return (
            <div class={style.home}>
            <h1>Home</h1>
            <Grid>
                <Row>
                    <Col md={3} >
                        <Feedlist api={this.props.api} />
                    </Col>
                    <Col md={9} style={{ border: '1px solid silver' }}>Content</Col>
                </Row>
            </Grid>
            </div>
        );
    }
}
