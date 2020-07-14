// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper/index'

// Component Deps
import GlobalFooter from '../../packages/components/global-footer/index';

// Story Time
export default {
	title: 'Global Footer',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const DefaultGlobalFooter = () => {

	return (
		<GlobalFooter />
	)
}