import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

import { SiteHeader } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Site/Header',
	decorators: [
		withA11y,
		withKnobs
	],
	component: SiteHeader
};

export const DefaultHeader = () => {

	return (
		<ComponentWrapper layout="full">

			<SiteHeader />
			
		</ComponentWrapper>
	)
}

export const DarkHeader = () => {

	return (
		<ComponentWrapper layout="full">

			<SiteHeader isDark/>
			
		</ComponentWrapper>
	)
}