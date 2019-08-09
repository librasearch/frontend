/* eslint-disable react/prefer-stateless-function */
import { h } from 'preact';
import PageHeader from '../../components/pageheader';
import SmallStatCard from '../../components/statcard/smallstatcard';
import AllTransactionTable from '../../components/transactiontable/all';
import style from './style';

export default class Transactions {
	render() {
		return (
			<div class={style.transactions}>
				<div className="pageItem">
					<PageHeader name="Transactions" parentLink="/" parentLinkName="Home" linkName="All Transactions" />
					<SmallStatCard />
					<AllTransactionTable />
				</div>
			</div>
		);
	}
}
