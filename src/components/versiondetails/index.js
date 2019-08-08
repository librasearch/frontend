/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import commaNumber from 'comma-number';
import { Link } from 'preact-router/match';
import moment from 'moment';
import axios from 'axios';
import style from './style';

export default class VersionDetails extends Component {
	pullVersion() {
		axios.post('http://localhost:3000/', this.props.version)
			.then(response => {
				const result = response.data;

				result.linkFrom = result.from;

				if (result.from === '0000000000000000000000000000000000000000000000000000000000000000') {
					result.type = 'Mint';
					result.from = 'Minting Account';
				}
				else {
					result.type = 'P2P';
				}

				result.value = commaNumber(result.value/1000000);

				// Prettify date formatting via Moment
				result.time = moment.unix(result.time).fromNow();

				this.setState({
					postResponse: result
				});
				console.log(this.state.postResponse);
			}).catch(err => {
				console.log('Please contact support. There seems to be an error. Error code:' + err);
			});
	}
	constructor() {
		super();

		this.state = {
			postResponse: []
		};

		this.pullVersion = this.pullVersion.bind(this);
	}
	componentDidMount() {
		this.pullVersion;
		setTimeout(this.pullVersion, 500);
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
							<p><Link href={`/version/${this.state.postResponse._id}`}>{this.state.postResponse._id}</Link></p>
						</div>
						<div>
							<p>Sequence Number:</p>
							<p><Link href={`/version/${this.state.postResponse.seq_nr}`}>{this.state.postResponse.seq_nr}</Link></p>
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
