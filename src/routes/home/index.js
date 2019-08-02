import { h } from 'preact';
import Subfooter from '../../components/subfooter';
import style from './style';
import LatestTransactionTable from '../../components/transactiontable/latest';

export default class Home {
	render() {
		return (
			<div class={style.developer}>
				<div className="pageItem">
					<p>Something</p>
					<LatestTransactionTable />
				</div>
				<Subfooter />
			</div>
		);
	}
}
