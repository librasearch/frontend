/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

// TODO: Fix Links and respective redirects. Add norel/blank targets
export default class Subfooter extends Component {
	render() {
		return (
			<footer class={style.subfooter}>
				<div className="pageItem">
					<div>
						<h3>About Libra</h3>
						<ul>
							<li><Link href="https://twitter.com">What is Libra?</Link></li>
							<li><Link href="https://twitter.com">Official White Paper</Link></li>
							<li><Link href="https://twitter.com">Understanding the Libra Reserve</Link></li>
							<li><Link href="https://twitter.com">The Role of Libra Association</Link></li>
						</ul>
					</div>
					<div>
						<h3>Getting Started</h3>
						<ul>
							<li><Link href="https://twitter.com">Develop with Libra</Link></li>
							<li><Link href="https://twitter.com">Learning the Move Language</Link></li>
							<li><Link href="https://twitter.com">Contribute to Open Source</Link></li>
							<li><Link href="https://twitter.com">Join The Discussion</Link></li>
						</ul>
					</div>
					<div>
						<h3>In The News</h3>
						<ul>
							<li><Link href="https://twitter.com">All You Need To Know About Libra</Link></li>
							<li><Link href="https://twitter.com">Libra Explained & Demystified</Link></li>
							<li><Link href="https://twitter.com">What Is Libra Token?</Link></li>
							<li><Link href="https://twitter.com">10 Questions About Libra</Link></li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}
