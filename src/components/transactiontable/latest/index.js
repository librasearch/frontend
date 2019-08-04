/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import ReactTable from 'react-table';
import moment from 'moment';
import axios from 'axios';
import style from './style';

export default class LatestTransactionTable extends Component {
	// Query pull function
	pullLatest() {
		axios.get('http://localhost:3000/latest')
			.then(response => {
				const result = response.data; // Setup response.data as result variable
				for (let i = 0; i < result.length; i++) {

					// Setup additional property for link
					result[i].link = result[i].from;

					// Add mint / p2p option.
					if (result[i].from === '0000000000000000000000000000000000000000000000000000000000000000') {
						result[i].type = 'Mint';
						result[i].from = 'Minter';
					}
					else {
						result[i].type = 'P2P';
					}

					// Fix libra value to use top-level units by dividing by a million
					result[i].value = result[i].value/1000000;

					// Prettify date formatting via Moment
					result[i].time = moment.unix(result[i].time).fromNow();
				}
				this.setState({
					latestTransactions: result // Set latestTransactions to equal resulting data
				});
			}).catch(err => {
				// Catch errors if any
				console.log('Please contact support. There seems to be an error. Error code:' + err);
			});
	}

	// Constructor setup
	constructor() {
		super();

		this.state = {
			latestTransactions: [], // Initializing empty latestTransactions array
			tableColumns: [{ Header: 'TX ID',accessor: '_id' },{ Header: 'EXPIRATION TIME',accessor: 'time' },{ Header: 'FROM',accessor: 'from' },{ Header: 'TO',accessor: 'to' },{ Header: 'AMOUNT',accessor: 'value' },{ Header: 'TX FEE',accessor: 'gas_price' }] // Setting up dynamic table columns
		};

		this.pullLatest = this.pullLatest.bind(this); // Binding this to pullLatest()
	}

	// On mount component update.
	componentDidMount() {
		this.pullLatest; // First pull from '/latest'
		setInterval(this.pullLatest, 500);
	}
	
	render() {
		return (
			<footer class={style.latesttable}>
				<div className="pageItem">
					<ReactTable
						data={this.state.latestTransactions}
						columns={this.state.tableColumns}
					/>
				</div>
			</footer>
		);
	}
}
