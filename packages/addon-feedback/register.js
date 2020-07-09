import React from 'react';
import { addons, types } from '@storybook/addons';
import { useParameter, useStorybookState } from '@storybook/api';
import { AddonPanel } from '@storybook/components';

const ADDON_ID = 'feedbackaddon';
const PARAM_KEY = 'feedbackaddon';
const PANEL_ID = `${ADDON_ID}/panel`;

const MyPanel = (props) => {
	const state = useStorybookState();
	return <iframe frameBorder="0" width="100%" style={{height: "95vh"}} src={"https://wsu.co1.qualtrics.com/jfe/form/SV_6GrIu9WNUojNAtT?storyId=" + state.storyId}></iframe>;
}

addons.register(ADDON_ID, api => {

	const storyId = api.getUrlState().storyId;

	const render = ({ active, key }) => (
		<AddonPanel active={active} key={key}>
			<MyPanel storyId={storyId} />
		</AddonPanel>
	);
	
	const title = 'Component Feedback';

	addons.add(PANEL_ID, {
		type: types.PANEL,
		title,
		render,
		paramKey: PARAM_KEY,
	});
});