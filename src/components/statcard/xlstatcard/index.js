/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import style from './style';

export default class XLStatCard extends Component {
	render(props) {
		return (
			<div class={style.xlstatcard}>
				<div>
					<p>{this.props.name}</p>
				</div>
				<div>
					<p>Some other stuff</p>
				</div>
			</div>
		);
	}
}
