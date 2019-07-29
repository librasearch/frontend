/* eslint-disable react/prefer-stateless-function */
import { h, Component } from 'preact';
import style from './style';

export class pageHeader extends Component {
	render(props) {
		return (
			<div class={style.pageHeader}>
				<h1>{ props.title }</h1>
				<hr />
			</div>
		);
	}
}
