/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import style from './style';

// TODO: fix this navigation, and random last child highlight
export default class TopSearch extends Component {
	render() {
		return (
			<footer class={style.topsearch}>
				<div className="pageItem">
					<div />
				</div>
			</footer>
		);
	}
}
