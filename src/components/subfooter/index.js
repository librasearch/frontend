/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
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
							<li><a target='_blank' rel='noopener norefferer' href="https://libra.org/en-US/learn-faqs/">What is Libra?</a></li>
							<li><a target='_blank' rel='noopener norefferer' href="https://libra.org/en-US/white-paper/">Official White Paper</a></li>
							<li><a target='_blank' rel='noopener norefferer' href="https://libra.org/en-US/about-currency-reserve/#the_reserve">Understanding the Libra Reserve</a></li>
							<li><a target='_blank' rel='noopener norefferer' href="https://libra.org/en-US/association/#goals_organization">The Role of Libra Association</a></li>
						</ul>
					</div>
					<div>
						<h3>Getting Started</h3>
						<ul>
							<li><a target='_blank' rel='noopener norefferer' href="https://libra.org/en-US/open-source-developers/">Develop with Libra</a></li>
							<li><a target='_blank' rel='noopener norefferer' href="https://developers.libra.org/docs/move-paper">Learning the Move Language</a></li>
							<li><a target='_blank' rel='noopener norefferer' href="https://github.com/libra/libra">Contribute to Open Source</a></li>
							<li><a target='_blank' rel='noopener norefferer' href="https://community.libra.org/t/libexplorer-com-a-new-libra-blockchain-explorer-launches/1135">Join The Discussion</a></li>
						</ul>
					</div>
					<div>
						<h3>In The News</h3>
						<ul>
							<li><a target='_blank' rel='noopener norefferer' href="https://techcrunch.com/2019/06/18/facebook-libra/">All You Need To Know About Libra</a></li>
							<li><a target='_blank' rel='noopener norefferer' href="https://www.theverge.com/2019/6/26/18716326/facebook-libra-cryptocurrency-blockchain-irs-starbucks">Libra Explained & Demystified</a></li>
							<li><a target='_blank' rel='noopener norefferer' href="https://www.coindesk.com/billion-dollar-returns-the-upside-of-facebooks-libra-cryptocurrency">What Is Libra Token?</a></li>
							<li><a target='_blank' rel='noopener norefferer' href="https://blog.usejournal.com/10-questions-about-libra-facebooks-new-digital-currency-db4715c6a240">10 Questions About Libra</a></li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}
