import { h } from 'preact';
import Subfooter from '../../components/subfooter';
import style from './style';
import LatestTransactionTable from '../../components/transactiontable/latest';
import Landing from '../../components/landing';

export default class Home {
	render() {
		return (
			<div class={style.developer}>
				<Landing />
				<div className="pageItem">
					<LatestTransactionTable />
				</div>
				<Subfooter />
			</div>
		);
	}
}
