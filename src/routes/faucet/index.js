import { h } from 'preact';
import PageHeader from '../../components/pageheader';
import style from './style';
import WIP from '../../components/underdevelopment';

const Faucet = () => (
	<div class={style.faucet}>
		<div className="pageItem">
			<PageHeader name="Faucet" parentLink="/" parentLinkName="Home" linkName="Faucet" />
			<WIP />
		</div>
	</div>
);

export default Faucet;
