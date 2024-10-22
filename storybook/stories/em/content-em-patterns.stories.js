import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../../packages/component-parts/content-wrapper';

// Component Imports
import { ImageFrame, Pattern } from '../../../packages/component-parts';

// Story Time
export default {
	title: 'EM/Components/Patterns',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const Default = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (

		<ComponentWrapper layout={layout} className={classes}>
			<div style={{maxWidth: "500px", margin: "auto", position: "relative"}}>
				<ImageFrame imageSrc="https://source.unsplash.com/collection/895539" /> 
				<Pattern name="solid-crimson-top-right" />
				<Pattern name="plus-crimson-bottom-left" />
			</div>
		</ComponentWrapper>
	)
}