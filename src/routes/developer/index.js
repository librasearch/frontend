import { h } from 'preact';
import PageHeader from '../../components/pageheader';
import style from './style';
import WIP from '../../components/underdevelopment';

export default class Header {
	render() {
		return (
			<div class={style.developer}>
				<div className="pageItem">
					<PageHeader name="Developer" parentLink="/" parentLinkName="Home" linkName="Developer Resources" />
					<WIP />
				</div>
			</div>
		);
	}
}
