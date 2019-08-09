/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class AddressStatCard extends Component {
	render(props) {
		return (
			<div class={style.smallstatcard}>
				<div>
					<div>
						<div>
							<p>IN TRANSACTIONS</p>
						</div>
						<div>
							<h1>{ this.props.value1 }</h1>
						</div>
					</div>
					<div>
						<div>
							<p>OUT TRANSACTIONS</p>
						</div>
						<div>
							<h1>{ this.props.value2 }</h1>
						</div>
					</div>
					<div>
						<div>
							<p>RECENT TX SEEN</p>
						</div>
						<div>
							<h1><Link href={`/version/${this.props.value3}`}>{ this.props.value3 }</Link></h1>
						</div>
					</div>
					<div>
						<div>
							<p>FIRST TX SEEN</p>
						</div>
						<div>
							<h1><Link href={`/version/${this.props.value4}`}>{ this.props.value4 }</Link></h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
