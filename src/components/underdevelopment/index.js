/* eslint-disable react/prefer-stateless-function */
import {  h , Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

export default class WIP extends Component {
	render() {
		return (
			<div class={style.wip}>
				<h3>Under Development</h3>
				<p>Hey there, thanks for your interest in <Link href="/">Librasearch</Link>! The platform is currently under development (thus, not delivering its 100%) and is slated for a beta launch on September 15th, 2019. We apologize for the inconveience, but mark your calendars, and we'll be right back! If you'd like to keep track of the projects development and milestones, feel free to check-out our <a href="https://github.org/librasearch">Github</a> (we're completely open-source), or <a href="https://twitter.com/_anishagnihotri">Anish's Twitter</a>!</p>
			</div>
		);
	}
}
