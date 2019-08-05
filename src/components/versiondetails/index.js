/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import style from './style';

export default class VersionDetails extends Component {
	componentDidMount() {
		console.log(this.props.version);
	}
	render() {
		return (
			<div class={style.versiondetails}>
				<div>
					<div>
						<h3>Transaction #{this.props.version}</h3>
					</div>
					<div>
						<p>Something:</p>
						<p>Other something</p>
					</div>
					<div>
						<p>Something:</p>
						<p>Other something</p>
					</div>
					<div>
						<p>Something:</p>
						<p>Other something</p>
					</div>
					<div>
						<p>Something:</p>
						<p>Other something</p>
					</div>
					<div>
						<p>Something:</p>
						<p>Other something</p>
					</div>
					<div>
						<p>Something:</p>
						<p>Other something</p>
					</div>
				</div>
			</div>
		);
	}
}
