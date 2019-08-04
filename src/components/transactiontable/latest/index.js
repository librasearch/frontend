/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import ReactTable from 'react-table';
import axios from 'axios';
import style from './style';

export default class LatestTransactionTable extends Component {
	// Query pull function
	pullLatest() {
		axios.get('http://localhost:3000/latest')
			.then(response => {
				const result = response.data; // Stringify response data
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
		setInterval(this.pullLatest, 500);
	}
	
	render() {
		let columns = [
			{
				Header: 'TX ID',
				accessor: '_id'
			},
			{
				Header: 'EXPIRATION TIME',
				accessor: 'time'
			},
			{
				Header: 'FROM',
				accessor: 'from'
			},
			{
				Header: 'TO',
				accessor: 'to'
			},
			{
				Header: 'AMOUNT',
				accessor: 'value'
			},
			{
				Header: 'TX FEE',
				accessor: 'gas_price'
			}
		];
		return (
			<footer class={style.latesttable}>
				<div className="pageItem">
					<ReactTable
						data={this.state.latestTransactions}
						columns={columns}
					/>
				</div>
			</footer>
		);
	}
}
