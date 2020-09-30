// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

// Component Deps
import { WsuHeading } from '../../packages/components';

// Story Time
// export default {
// 	title: 'Components/Site/Navigation/Mega Menu',
// 	parameters: {
// 		status: 'In Development' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
// 	},
// 	decorators: [
// 		withA11y,
// 		withKnobs
// 	]
// };

// export const Default = () => {

// 	return (
// 		<ComponentWrapper layout="content">
// 			<WsuHeading>Coming Soon</WsuHeading>
// 		</ComponentWrapper>
// 	)
// }