import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Transactions from '../routes/transactions';
import Statistics from '../routes/statistics';
import Faucet from '../routes/faucet';
import Developer from '../routes/developer';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Transactions path="/transactions" />
					<Statistics path="/statistics" />
					<Faucet path="/faucet" />
					<Developer path="/developer" />
				</Router>
			</div>
		);
	}
}
