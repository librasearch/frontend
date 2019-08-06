/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import style from './style';

export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footer}>
				<div class={style.surround}>
					<div>
						<p>&copy; 2019 <span>Librasearch</span>. All rights reserved.</p>
					</div>
					<div>
						<nav class={style.footerNav}>
							<a activeClassName={style.active} target="_blank" rel="noopener noreferrer" href="https://twitter.com/_anishagnihotri">Twitter</a>
							<a activeClassName={style.active} href="mailto:info@librasearch.org">Contact Us</a>
						</nav>
					</div>
				</div>
			</footer>
		);
	}
}
