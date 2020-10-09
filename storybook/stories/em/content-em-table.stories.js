import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../../packages/component-parts/content-wrapper';

// Component Imports
import { EmContentTable } from '../../../packages/em-components';

// Story Time
export default {
	title: 'EM/Components/Table',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const Default = () => {

	return (
		<ComponentWrapper layout="content" className="wsu-c-content">
			<div style={{maxWidth: "588px"}}>
				<EmContentTable />
			</div>
		</ComponentWrapper>
	)
}