/* 
 * Addon Feedback
 * 
 * Creates and adds a feedback button to the top bar which directs users to a Qualtrics form and passes the current story ID as embedded data
 * 
 */

import React from 'react';
import { addons, types } from '@storybook/addons';
import { useStorybookState } from '@storybook/api';

const ADDON_ID = 'feedbackaddon';
const PARAM_KEY = 'feedbackaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

const MyPanel = (props) => {
	const state = useStorybookState();
	const feedbackIcon = () => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" xmlns:v="https://vecta.io/nano"><path d="M16 5a1 1 0 0 0-1-1h-3V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7.143a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h6.73l2.563 2.564A1 1 0 0 0 15 16a1 1 0 0 0 .923-.618A1 1 0 0 0 16 15V5zm-3.475 6.22a1 1 0 0 0-.382-.077H6V6h8v6.586l-1.15-1.15a1 1 0 0 0-.326-.217zM2 7.143V2h8v2H5a1 1 0 0 0-1 1v2.143H2z" fill="#404040"/></svg>';

	return (
		<a 
			href={"https://wsu.co1.qualtrics.com/jfe/form/SV_6GrIu9WNUojNAtT?storyId=" + state.storyId} 
			style={{
				color: 'inherit',
				fontSize: '14px',
				height: '100%',
				width: '14px',
				padding: '15px 0'
			}} 
			target="_blank"
		>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 5a1 1 0 0 0-1-1h-3V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7.143a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h6.73l2.563 2.564A1 1 0 0 0 15 16a1 1 0 0 0 .923-.618A1 1 0 0 0 16 15V5zm-3.475 6.22a1 1 0 0 0-.382-.077H6V6h8v6.586l-1.15-1.15a1 1 0 0 0-.326-.217zM2 7.143V2h8v2H5a1 1 0 0 0-1 1v2.143H2z" fill="currentColor"/></svg> <span style={{opacity: "0"}}>Feedback</span>
		</a>
	);
}

addons.register(ADDON_ID, api => {

	const storyId = api.getUrlState().storyId;

	const render = () => (
		<MyPanel />
	);
	
	const title = 'Feedback';

	addons.add(PANEL_ID, {
		type: types.TOOL,
		title,
		render,
		paramKey: PARAM_KEY,
	});
});