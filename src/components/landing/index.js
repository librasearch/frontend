/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import style from './style';

export default class Landing extends Component {
	render() {
		return (
			<div class={style.landing}>
				<div className="pageItem">
					<p>Something</p>
				</div>
			</div>
		);
	}
}
