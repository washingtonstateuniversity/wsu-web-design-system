import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../../packages/storybook-components/content-wrapper';

// Component Imports
import { ImageFrame, Pattern } from '../../../packages/component-parts';

// Story Time
export default {
	title: 'EM/Components/Patterns',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment
	},
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const Default = () => {

	return (

		<ComponentWrapper layout="content">
			<div style={{maxWidth: "500px", margin: "auto", position: "relative"}}>
				<ImageFrame imageSrc="https://source.unsplash.com/collection/895539" /> 
				<Pattern name="solid-crimson-top-right" />
				<Pattern name="plus-crimson-bottom-left" />
			</div>
		</ComponentWrapper>
	)
}