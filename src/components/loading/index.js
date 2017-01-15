import { h, Component } from 'preact';
import style from './style';

export default class Loading extends Component {

    render() {
        return (<div class={style.loader}>Loading...</div>);
    }
}
