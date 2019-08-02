import { h } from 'preact';
import PageHeader from '../../components/pageheader';
import style from './style';

export default class Header {
	render() {
		return (
			<div class={style.developer}>
				<div className="pageItem">
					<PageHeader name="Developer" parentLink="/" parentLinkName="Home" linkName="Developer Resources" />
					<p>Something</p>
				</div>
			</div>
		);
	}
}
