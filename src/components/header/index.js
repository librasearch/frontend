import { h } from 'preact';
import { Link } from 'preact-router/match';
// import { Visible } from 'preact-visible';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<div>
			<Link href="/"><img src="../../assets/librasearch.png" alt="Librasearch logo" /></Link>
		</div>
		<div>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/transactions">Transactions</Link>
				<Link activeClassName={style.active} href="/statistics">Statistics</Link>
				<Link activeClassName={style.active} href="/faucet">Faucet</Link>
				<Link activeClassName={style.active} href="/developer">Developer</Link>
			</nav>
		</div>
		<div>
			<nav>
				<Link activeClassName={style.active} href="/">Home</Link>
				<Link activeClassName={style.active} href="/transactions">Transactions</Link>
				<Link activeClassName={style.active} href="/statistics">Statistics</Link>
				<Link activeClassName={style.active} href="/faucet">Faucet</Link>
				<Link activeClassName={style.active} href="/developer">Developer</Link>
			</nav>
		</div>
		<button>Press me</button>
	</header>
);

export default Header;
