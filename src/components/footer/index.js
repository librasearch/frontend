/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

// TODO: fix this navigation, and random last child highlight
export default class Footer extends Component {
	render() {
		return (
			<footer class={style.footer}>
				<div className="pageItem">
					<div>
						<p>&copy; 2019 <span>Librasearch</span>. All rights reserved.</p>
					</div>
					<div>
						<nav class={style.footerNav}>
							<Link activeClassName={style.active} href="/">Twitter</Link>
							<Link activeClassName={style.active} href="/transactions">Privacy Policy</Link>
							<Link activeClassName={style.active} href="/statistics">Contact Us</Link>
						</nav>
					</div>
				</div>
			</footer>
		);
	}
}
