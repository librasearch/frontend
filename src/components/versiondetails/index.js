/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import commaNumber from 'comma-number';
import { Link } from 'preact-router/match';
import moment from 'moment';
import axios from 'axios';
import style from './style';

// TODO: Breaks when pressing back button, fix.
export default class VersionDetails extends Component {
	update() {
		this.pullVersion;
		setTimeout(this.pullVersion, 1);
	}
	pullVersion() {
		// Make post request with the version from the address prop
		axios.post('http://localhost:3000/query/', this.props.version)
			.then(response => {
				const result = response.data; // Save response to result const to be used for modification

				result.linkFrom = result.from; // Setup a linkFrom (because we rename the from for 'Minting Account')

				if (result.from === '0000000000000000000000000000000000000000000000000000000000000000') {
					result.type = 'Mint'; // Setup transaction types
					result.from = 'Minting Account'; // Change from name in case of 64 0's
				}
				else {
					result.type = 'P2P'; // Setup transaction types
				}

				// Clean up LIB value
				result.value = commaNumber(result.value/1000000);

				// Prettify date formatting via Moment
				result.time = moment.unix(result.time).fromNow();

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
			postResponse: [] // Setup container for post response
		};

		this.pullVersion = this.pullVersion.bind(this);
		this.update = this.update.bind(this);
	}
	componentDidMount() {
		this.update();
	}
	render() {
		return (
			<div class={style.versiondetails}>
				<div>
					<div>
						<h3>Transaction #{this.props.version}</h3>
					</div>
					<div>
						<div>
							<p>Transaction Information</p>
						</div>
						<div>
							<p>Sender:</p>
							<p><Link href={`/address/${this.state.postResponse.linkFrom}`}>{this.state.postResponse.from}</Link></p>
						</div>
						<div>
							<p>Recipient:</p>
							<p><Link href={`/address/${this.state.postResponse.to}`}>{this.state.postResponse.to}</Link></p>
						</div>
						<div>
							<p>Transaction Value:</p>
							<p>{this.state.postResponse.value}<span class={style.libratext}> LIB</span></p>
						</div>
					</div>
					<div>
						<div>
							<p>Version Information</p>
						</div>
						<div>
							<p>Version ID:</p>
							<p>{this.state.postResponse._id}</p>
						</div>
						<div>
							<p>Sequence Number:</p>
							<p><Link onClick={this.update} href={`/version/${this.state.postResponse.seq_nr}`}>{this.state.postResponse.seq_nr}</Link></p>
						</div>
						<div>
							<p>Expiration Time:</p>
							<p>{this.state.postResponse.time}</p>
						</div>
						<div>
							<p>TX Type:</p>
							<p>{this.state.postResponse.type}</p>
						</div>
					</div>
					<div>
						<div>
							<p>Fee Information</p>
						</div>
						<div>
							<p>Transaction Fee:</p>
							<p>{this.state.postResponse.gas_price}<span class={style.libratext}> LIB</span></p>
						</div>
						<div>
							<p>Maximum Gas:</p>
							<p>{this.state.postResponse.gas_max}<span class={style.libratext}> LIB</span></p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
