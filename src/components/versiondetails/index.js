/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import style from './style';

export default class VersionDetails extends Component {
	render() {
		return (
			<div class={style.versiondetails}>
				<div>
					<div>
						<p>Something:</p>
						<p>Other something</p>
					</div>
				</div>
			</div>
		);
	}
}
