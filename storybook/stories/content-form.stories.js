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
		status: 'Has Known Issues' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	]
};

export const DefaultForm = () => {

	let classes = ( boolean('Apply wsu-c-content class', true, previewGroupID ) ) ? ['wsu-c-content'] : ''; 

	return (
		<>
			<ComponentWrapper layout="content"  className={classes}>
				<WsuFormCheatsheet />
			</ComponentWrapper>

			<ComponentWrapper layout="content" type="notice">
				<p>At this time, all form styles are inherited based on the `wsu-c-content` wrapper class. If this class is not present your form styles will not inherit correctly.</p>
			</ComponentWrapper>
		</>
	)
}