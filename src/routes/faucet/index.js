import { h } from 'preact';
import PageHeader from '../../components/pageheader';
import style from './style';

const Faucet = () => (
	<div class={style.faucet}>
		<div className="pageItem">
			<PageHeader name="Faucet" parentLink="/" parentLinkName="Home" linkName="Faucet" />
			<h1>Faucet</h1>
			<p>This is the developer component.</p>
		</div>
	</div>
);

export default Faucet;
