import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../../packages/component-parts/content-wrapper';

import './global-colors.scss';

// Story Time
export default {
	title: 'Elements/Color',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const AllColors = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<ComponentWrapper layout={layout} className={classes}>
			<h2>Crimson</h2>
			<div className="wsu-c-colors_crimson">
				<div className="box"></div>
				<div className="box"></div>
			</div>

			<hr />

			<h2>Gray</h2>
			<div className="wsu-c-colors_gray">
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
			</div>
		</ComponentWrapper>
	)
}