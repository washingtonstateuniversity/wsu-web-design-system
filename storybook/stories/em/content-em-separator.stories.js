import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../../packages/storybook-components/content-wrapper';

// Component Imports
import { EmHr } from '../../../packages/em-components';

// Story Time
export default {
	title: 'EM/Components/Separator',
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const EMSeparator = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : ''; 

	return(
		<ComponentWrapper layout="centered" className={classes}>
			<EmHr isHatched showMoreIndicator/>
		</ComponentWrapper>
	)
}
