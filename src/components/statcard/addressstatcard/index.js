/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import style from './style';

export default class AddressStatCard extends Component {
	constructor() {
		super();

		this.state = {
			value1: [1, 1],
			value2: [2, 2],
			value3: [3, 3]
		};
	}

	render(props) {
		return (
			<div class={style.smallstatcard}>
				<div>
					<div>
						<div>
							<p>UNIQUE ADDRESSES</p>
						</div>
						<div>
							<h1>{ this.state.value1[0] }</h1>
						</div>
					</div>
					<div>
						<div>
							<p>TOTAL TRANSACTIONS</p>
						</div>
						<div>
							<h1>{ this.state.value2[0] }</h1>
						</div>
					</div>
					<div>
						<div>
							<p>TOTAL LIBRA SUPPLY</p>
						</div>
						<div>
							<h1>{ this.state.value3[0] }</h1>
						</div>
					</div>
					<div>
						<div>
							<p>TOTAL LIBRA SUPPLY</p>
						</div>
						<div>
							<h1>{ this.state.value3[0] }</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
