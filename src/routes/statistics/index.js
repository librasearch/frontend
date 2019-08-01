import { h } from 'preact';
import PageHeader from '../../components/pageheader';
import LargeStatCard from '../../components/statcard/largestatcard';
import style from './style';

export default class Statistics {
	render() {
		return (
			<div class={style.statistics}>
				<div className="pageItem">
					<PageHeader name="Statistics" linkName="Network Statistics" />
					<LargeStatCard />
				</div>
			</div>
		);
	}
}
