import { h } from 'preact';
import AddressDetails from '../../components/addressdetails';
import style from './style';

export default class Version {
	render() {
		return (
			<div class={style.developer}>
				<AddressDetails address={this.props.address} />
			</div>
		);
	}
}
