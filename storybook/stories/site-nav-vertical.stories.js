// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper/index'

// Component Deps
import SiteNavVertical from '../../packages/components/site-nav-vertical/index';

// Story Time
export default {
	title: 'Site Navigation Vertical',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const DefaultVertical = () => {

	return (
		<SiteNavVertical />
	)
}