import { h } from 'preact';
import Subfooter from '../../components/subfooter';
import style from './style';

export default class Home {
	render() {
		return (
			<div class={style.developer}>
				<div className="pageItem">
					<p>Something</p>
				</div>
				<Subfooter />
			</div>
		);
	}
}
