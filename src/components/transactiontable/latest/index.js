/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import axios from 'axios';
import style from './style';

export default class LatestTransactionTable extends Component {
	// Query pull function
	pullLatest() {
		axios.get('http://localhost:3000/latest')
			.then(response => {
				// Stringify response data
				const result = JSON.stringify(response.data);
				this.setState({
					latestTransactions: result // Set latestTransactions to equal resulting data
				});
				console.log(this.state.latestTransactions);
			}).catch(err => {
				// Catch errors if any
				console.log('Please contact support. There seems to be an error. Error code:' + err);
			});
	}
	
	// Constructor setup
	constructor() {
		super();

		this.state = {
			latestTransactions: [] // Initializing empty latestTransactions array
		};

		this.pullLatest = this.pullLatest.bind(this); // Binding this to pullLatest()
	}

	// On mount component update.
	componentDidMount() {
		this.pullLatest; // First pull from '/latest'
		setInterval(this.pullLatest, 1000); // Set interval to update every second.
	}
	
	render() {
		return (
			<footer class={style.latesttable}>
				<div className="pageItem">
					<p>Table here</p>
					<button onClick={this.check}>Check</button>
				</div>
			</footer>
		);
	}
}
