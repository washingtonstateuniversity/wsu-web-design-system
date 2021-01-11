// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Component Deps
import { WsuLoadingIcon } from '../../packages/components';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';


// Story Time
export default {
	title: 'Components/Content/Loading Icon',
	parameters: {
		status: 'Needs Feedback' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	]
};

export const defaultIcon = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'centered', previewGroupID ) );

	return(
		<ComponentWrapper layout={layout} className={classes} ><WsuLoadingIcon /></ComponentWrapper>
	)
}