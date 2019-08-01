/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
// import { Link } from 'preact-router/match';
import style from './style';

// TODO: Figure out changing class name to increase/decrease depending on positive/negative change.
export default class SmallStatCard extends Component {
	render(props) {
		return (
			<div class={style.smallstatcard}>
				<div>
					<div>
						<div>
							<p>{ props.name1 }</p>
						</div>
						<div>
							<h1>{ props.value1 }</h1>
							<span>{ props.percentage1 }%</span>
						</div>
					</div>
					<div>
						<div>
							<p>{ props.name2 }</p>
						</div>
						<div>
							<h1>{ props.value2 }</h1>
							<span>{ props.percentage2 }%</span>
						</div>
					</div>
					<div>
						<div>
							<p>{ props.name3 }</p>
						</div>
						<div>
							<h1>{ props.value2 }</h1>
							<span>{ props.percentage3 }%</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
