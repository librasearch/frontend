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
					<PageHeader name="Transactions" parentLink="/" parentLinkName="Home" linkName="All Transactions" />
					<SmallStatCard />
				</div>
			</div>
		);
	}
}
