import { h } from 'preact';
import Subfooter from '../../components/subfooter';
import style from './style';
import LatestTransactionTable from '../../components/transactiontable/latest';
import WIP from '../../components/underdevelopment';

export default class Home {
	render() {
		return (
			<div class={style.developer}>
				<div className="pageItem">
					<WIP />
					<LatestTransactionTable />
				</div>
				<Subfooter />
			</div>
		);
	}
}
