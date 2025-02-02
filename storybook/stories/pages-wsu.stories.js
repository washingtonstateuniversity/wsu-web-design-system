// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

// Component Deps
import {
	WsuGlobalHeader,
	WsuSiteNavVertical,
	WsuGlobalFooter,
	WsuSiteFooter,
	WsuHero
} from '../../packages/components';

// Story Time
export default {
	title: 'Pages/Landing Pages',
	parameters: {
		status: 'In Development' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	]
};

export const defaultHome = () => {

	return (
		<div className="wsu-g-container">
			<WsuGlobalHeader />
			<WsuSiteNavVertical />

			<div className="wsu-s-container">
				<div className="wsu-c-container wsu-c-content">
					<WsuHero title="Odio et purus metus placerat neque." subtitle="Consectetur adipiscing elit donec fringilla" buttonText="Lorem Ipsum" imageCaption="By consectetur adipiscing elit donec fringilla" />
				</div>
				<WsuSiteFooter />
				<WsuGlobalFooter />
			</div>

		</div>
	)
}