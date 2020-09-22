import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';
import { WsuForm, WsuFormCheatsheet } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Form',
	parameters: {
		status: 'Stable, Needs Deployment' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	]
};

export const DefaultForm = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : ''; 

	return (
		<ComponentWrapper layout="content">

			{/* <WsuForm /> */}
			<WsuFormCheatsheet />

		</ComponentWrapper>
	)
}