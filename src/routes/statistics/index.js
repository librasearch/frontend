import { h } from 'preact';
import PageHeader from '../../components/pageheader';
import style from './style';

const Statistics = () => (
	<div class={style.statistics}>
		<div className="pageItem">
			<PageHeader name="Statistics" linkName="Network Statistics" />
			<h1>Statistics</h1>
			<p>This is the statistics component.</p>
		</div>
	</div>
);

export default Statistics;
