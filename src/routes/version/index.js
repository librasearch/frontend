import { h } from 'preact';
import PageHeader from '../../components/pageheader';
import VersionDetails from '../../components/versiondetails';
import style from './style';

export default class Version {
	render() {
		return (
			<div class={style.developer}>
				<div className="pageItem">
					<PageHeader name="Transaction Details (849019)" parentLink="/transactions" parentLinkName="Transactions" linkName="Transaction Details" />
					<VersionDetails />
				</div>
			</div>
		);
	}
}