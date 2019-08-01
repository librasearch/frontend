/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import { h } from 'preact';
import PageHeader from '../../components/pageheader';
import SmallStatCard from '../../components/statcard/smallstatcard';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import style from './style';

// JSON.parse(message.data).bitcoin;
const connection = new W3CWebSocket('wss://ws.coincap.io/prices?assets=bitcoin');

export default class Transactions {
	constructor() {
		this.state = {
			response: ''
		};
		this.connect.onmessage = this.connect.on
	}

	componentDidMount() {

	}
	render() {
		const { response } = this.state;
		return (
			<div class={style.transactions.section}>
				<div className="pageItem">
					<PageHeader name="Transactions" linkName="All Transactions" />
					<SmallStatCard
						name1="SENT TRANSACTIONS (24H)"
						value1={response}
						percentage1="1"
						name2="LIBRA VOLUME (24H)"
						value2="1"
						percentage2="1"
						name3="AVERAGE TX FEE"
						value3="1"
						percentage3="1"
					/>
				</div>
			</div>
		);
	}
}
