import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

// Component Imports
import { WsuTypewriter } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Typewriter Heading',
	parameters: {
		status: 'In Development' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs,
	],
	component: WsuTypewriter
};
 


export const Default = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';

	return (
		<ComponentWrapper className={classes}>
			<WsuTypewriter
				beforeText={ text( 'beforeText','Lorem Ipsum', optionsGroupID ) }
				text={ text( 'text','Dolor', optionsGroupID ) }
				afterText={ text( 'afterText','Sit Amet', optionsGroupID ) }
			/>
		</ComponentWrapper>
	)
}