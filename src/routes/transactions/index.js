/* eslint-disable react/prefer-stateless-function */
import { h } from 'preact';
import PageHeader from '../../components/pageheader';
import SmallStatCard from '../../components/statcard/smallstatcard';
import style from './style';

export default class Transactions {
	render() {
		return (
			<div class={style.transactions.section}>
				<div className="pageItem">
					<PageHeader name="Transactions" linkName="All Transactions" />
					<SmallStatCard
						name1="SENT TRANSACTIONS (24H)"
						value1="1"
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
