import { h } from 'preact';
import pageHeader from '../../components/pageHeader';
import style from './style';

const Transactions = () => (
	<div class={style.transactions}>
		<pageHeader title="Transactions" />
	</div>
);

export default Transactions;
