import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>Librasearch</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Home</Link>
			<Link activeClassName={style.active} href="/transactions">Transactions</Link>
			<Link activeClassName={style.active} href="/statistics">Statistics</Link>
			<Link activeClassName={style.active} href="/richlist">Rich List</Link>
			<Link activeClassName={style.active} href="/faucet">Faucet</Link>
			<Link activeClassName={style.active} href="/developer">Developer</Link>
		</nav>
	</header>
);

export default Header;
