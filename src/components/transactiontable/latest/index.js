/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import style from './style';

// TODO: fix this navigation, and random last child highlight
export default class LatestTransactionTable extends Component {
	render() {
		return (
			<footer class={style.latesttable}>
				<div className="pageItem">
					<p>Table here</p>
				</div>
			</footer>
		);
	}
}
