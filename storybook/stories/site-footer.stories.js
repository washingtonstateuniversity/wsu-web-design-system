// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

// Component Deps
import { WsuSiteFooter, WsuSiteFooterCondensed } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Site/Footer',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const DefaultFooter = () => {

	return (
		<WsuSiteFooter />
	)
}

export const CondensedFooter = () => {

	return (
		<WsuSiteFooterCondensed />
	)
}