// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper/index'

// Component Deps
import GlobalHeader from '../../packages/components/global-header';
import GlobalFooter from '../../packages/components/global-footer';
import SiteFooter from '../../packages/components/site-footer';
import ContentHero from '../../packages/components/content-hero';

// Story Time
export default {
	title: 'Page Templates/WSU',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const homepage = () => {

	return (
		<>
			<GlobalHeader />
			<ContentHero />
			<SiteFooter />
			<GlobalFooter />
		</>
	)
}