/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import style from './style';

// TODO: Figure out changing class name to increase/decrease depending on positive/negative change.
export default class LargeStatCard extends Component {
	constructor() {
		super();

		this.state = {
			value1: [1, 1],
			value2: [2, 2],
			value3: [3, 3],
			value4: [4, 4],
			value5: [5, 5],
			value6: [6, 6]
		};
	}

	render(props) {
		return (
			<div class={style.largestatcard}>
				<div>
					<div>
						<div>
							<p>SENT TRANSACTIONS (24H)</p>
						</div>
						<div>
							<h1>{ this.state.value1[0] }</h1>
							<span>{ this.state.value1[1] }%</span>
						</div>
					</div>
					<div>
						<div>
							<p>LIBRA VOLUME (24H)</p>
						</div>
						<div>
							<h1>{ this.state.value2[0] }</h1>
							<span>{ this.state.value2[1] }%</span>
						</div>
					</div>
					<div>
						<div>
							<p>AVERAGE TX FEE</p>
						</div>
						<div>
							<h1>{ this.state.value3[0] }</h1>
							<span>{ this.state.value3[1] }%</span>
						</div>
					</div>
					<div>
						<div>
							<p>SENT TRANSACTIONS (24H)</p>
						</div>
						<div>
							<h1>{ this.state.value4[0] }</h1>
							<span>{ this.state.value4[1] }%</span>
						</div>
					</div>
					<div>
						<div>
							<p>LIBRA VOLUME (24H)</p>
						</div>
						<div>
							<h1>{ this.state.value5[0] }</h1>
							<span>{ this.state.value5[1] }%</span>
						</div>
					</div>
					<div>
						<div>
							<p>AVERAGE TX FEE</p>
						</div>
						<div>
							<h1>{ this.state.value6[0] }</h1>
							<span>{ this.state.value6[1] }%</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
