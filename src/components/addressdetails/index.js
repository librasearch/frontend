/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';

/*import commaNumber from 'comma-number';
import moment from 'moment';
import axios from 'axios';*/
import { Link } from 'preact-router/match';
import style from './style';
import AddressStatCard from '../statcard/addressstatcard';

export default class AddressDetails extends Component {

	componentDidMount() {
		this.update();
	}
	render() {
		return (
			<div class={style.addressdetails}>
				<div>
					<div className="pageItem">
						<div>
							<p>Address Information</p>
							<p><Link href={`/address/${this.props.address}`}>{this.props.address}</Link></p>
						</div>
						<div>
							<p>Libra Balance</p>
							<p>900,000 <span class={style.libraText}> LIB</span></p>
						</div>
					</div>
				</div>
				<div className="pageItem">
					<AddressStatCard />
					<div>
						<p>Something</p>
					</div>
				</div>
			</div>
		);
	}
}
