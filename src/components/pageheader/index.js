/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class PageHeader extends Component {
	render(props) {
		return (
			<div class={style.pageheader}>
				<div>
					<h1>{ props.name }</h1>
				</div>
				<div>
					<p><Link href="/">Home</Link> / { props.linkName }</p>
				</div>
			</div>
		);
	}
}
