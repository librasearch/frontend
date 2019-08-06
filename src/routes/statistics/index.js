import { h } from 'preact';
import PageHeader from '../../components/pageheader';
import LargeStatCard from '../../components/statcard/largestatcard';
import style from './style';
import WIP from '../../components/underdevelopment';

export default class Statistics {
	render() {
		return (
			<div class={style.statistics}>
				<div className="pageItem">
					<PageHeader name="Statistics" parentLink="/" parentLinkName="Home" linkName="Network Statistics" />
					<WIP />
					<LargeStatCard />
				</div>
			</div>
		);
	}
}
