/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import style from './style';

export default class Search extends Component {
	render() {
		return (
			<div class={style.search}>
				<div className="pageItem">
					<input type="search" placeholder="Enter Address / Transaction ID" />
				</div>
			</div>
		);
	}
}
