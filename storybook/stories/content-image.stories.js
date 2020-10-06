import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

import { WsuImage } from '../../packages/components';

const spacingOptions = ['default','none','xsmall','small','medium','medium-large','large','xlarge'];

// Story Time
export default {
	title: 'Components/Content/Image',
	parameters: {
		status: 'In Development' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	],
	component: WsuImage
};

export const DefaultBanner = () => {

	return <WsuImage />
}