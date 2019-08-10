/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';

import commaNumber from 'comma-number';
import AddressTable from '../transactiontable/addresses';
import axios from 'axios';
import { Link } from 'preact-router/match';
import style from './style';
import AddressStatCard from '../statcard/addressstatcard';

export default class AddressDetails extends Component {
	update() {
		if (this.props.address === 'Minting Account') {
			this.setState({
				mintingAccount: true
			});
			console.log('Minting');
		}
		else {
			this.setState({
				mintingAccount: false
			});
			this.pullAddress;
			setTimeout(this.pullAddress, 1);
			console.log('Not Minting');
		}
		console.log(this.state.mintingAccount);
	}
	pullAddress() {
		axios.post('http://localhost:3000/query/', this.props.address)
			.then(response => {
				console.log(response.data);
				const result = response.data; // Save response to result const to be used for modification

				// Add stat identifiers
				result.statIn = 0;
				result.statOut =0;
				for (let i = 0; i < result.txs.length; i++) {
					if (result.txs[i].from === this.props.address) {
						result.statOut += 1;
					}
					else {
						result.statIn += 1;
					}
				}
				result.statRecent = result.txs[0]._id;
				result.statFirst = result.txs[result.txs.length - 1]._id;
				
				// Clean up LIB value formatting
				result.balance = commaNumber(result.balance/1000000);

				this.setState({
					postResponse: result // Set new and cleaned result to equal postResponse
				});
			}).catch(err => {
				console.log('Please contact support. There seems to be an error. Error code:' + err);
			});
	}
	constructor() {
		super();

		this.state = {
			postResponse: [], // Setup container for post response
			mintingAccount: true
		};

		this.pullAddress = this.pullAddress.bind(this);
		this.update = this.update.bind(this);
	}
	componentDidMount() {
		this.update();
	}
	render() {
		return (
			<div>
				{
					!this.state.mintingAccount
						? (
							<div class={style.addressdetails}>
								<div>
									<div className="pageItem">
										<div>
											<p>Address Information</p>
											<p><Link href={`/address/${this.props.address}`}>{this.props.address}</Link></p>
										</div>
										<div>
											<p>Libra Balance</p>
											<p>{this.state.postResponse.balance} <span class={style.libraText}> LIB</span></p>
										</div>
									</div>
								</div>
								<div className="pageItem">
									<AddressStatCard
										value1={this.state.postResponse.statIn}
										value2={this.state.postResponse.statOut}
										value3={this.state.postResponse.statRecent}
										value4={this.state.postResponse.statFirst}
									/>
									<AddressTable address={this.props.address} updateParent={this.update} />
								</div>
							</div>
						)
						: (
							<div className="pageItem">
								<p>Can't do this.</p>
							</div>
						)
				}
			</div>
		);
	}
}
