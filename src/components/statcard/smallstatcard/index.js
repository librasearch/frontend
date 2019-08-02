/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import style from './style';

// TODO: Figure out changing class name to increase/decrease depending on positive/negative change.
/*
	--- Sent Transactions ---
	If over 24 hours, take current number - number (date 24 hours ago).
	Else, take current number.

	--- Libra Volume ---
	If over 24 hours, take current number - number (date 24 hours ago).
	Else, take current number.

	--- Average TX Fee ---
	Sample 10 transactions per hour, divide?
	Calculate over all transactions?

	Remember to update time interval in header.
*/
export default class SmallStatCard extends Component {
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
							<span>{ this.state.value1[1] }%</span>
						</div>
					</div>
					<div>
						<div>
							<p>TOTAL TRANSACTIONS</p>
						</div>
						<div>
							<h1>{ this.state.value2[0] }</h1>
							<span>{ this.state.value2[1] }%</span>
						</div>
					</div>
					<div>
						<div>
							<p>TOTAL LIBRA SUPPLY</p>
						</div>
						<div>
							<h1>{ this.state.value3[0] }</h1>
							<span>{ this.state.value3[1] }%</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
