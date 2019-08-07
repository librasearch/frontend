import {  h , Component } from 'preact';
import { Link } from 'preact-router/match';
import Search from './search';
import style from './style';
import { HamburgerButton } from 'react-hamburger-button';

export default class Header extends Component {

	showMenu(event) {
		event.preventDefault();
		
		this.setState({
			showMenu: !this.state.showMenu,
			open: !this.state.open
		});
	}

	linkCloseMenu(event) {
		event.preventDefault();

		this.setState({
			showMenu: false,
			open: false
		});
	}

	updateDimensions() {
		if (window.innerWidth > 780) {
			this.setState({
				showMenu: false,
				open: false,
				showMenuIcon: false
			});
		}
		else {
			this.setState({
				showMenuIcon: true
			});
		}
	}
	
	constructor() {
		super();
		
		this.state = {
			showMenu: false,
			showMenuIcon: true
		};
		
		this.showMenu = this.showMenu.bind(this);
		this.linkCloseMenu = this.linkCloseMenu.bind(this);
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions.bind(this));
	}

	render() {
		return (
			<div>
				<header class={style.header}>
					<div>
						<Link onClick={this.linkCloseMenu} href="/"><img src="../../assets/librasearch.png" alt="Librasearch logo"/></Link>
					</div>
					<div>
						<nav>
							<Link activeClassName={style.active} href="/">Home</Link>
							<Link activeClassName={style.active} href="/transactions">Transactions</Link>
							<Link activeClassName={style.active} href="/statistics">Statistics</Link>
							<Link activeClassName={style.active} href="/faucet">Faucet</Link>
							<Link activeClassName={style.active} href="/developer">Developer</Link>
						</nav>
						{
							this.state.showMenuIcon
								? (
									<HamburgerButton
										open={this.state.open}
										onClick={this.showMenu}
										strokeWidth={3}
										color="#565761"
										height={17}
										width={25}
									/>
								)
								: (
									null
								)
						}
					</div>
					{
						this.state.showMenu
							? (
								<div>
									<nav>
										<Link onClick={this.linkCloseMenu} activeClassName={style.active} href="/">Home</Link>
										<Link onClick={this.linkCloseMenu} activeClassName={style.active} href="/transactions">Transactions</Link>
										<Link onClick={this.linkCloseMenu} activeClassName={style.active} href="/statistics">Statistics</Link>
										<Link onClick={this.linkCloseMenu} activeClassName={style.active} href="/faucet">Faucet</Link>
										<Link onClick={this.linkCloseMenu} activeClassName={style.active} href="/developer">Developer</Link>
									</nav>
								</div>
							)
							: (
								null
							)
					}
				</header>
			</div>
		);
	}
}
