import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper/index'

import ContentCard from '../../packages/components/content-card/index';

// Story Time
export default {
	title: 'Content Card',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const defaultCard = () => {
	return(
		<ComponentWrapper layout="content">
			<ContentCard 
				title={text('title', 'Pellentesque Habitant', previewGroupID)}
				description={text('description', 'Morbi tristique senectus et netus et malesuada.', previewGroupID)}
				addressLine1={text('addressLine1', '12345 Etiam rutrum lectus', previewGroupID)}
				addressLine2={text('addressLine2', 'Pullman, WA 99163', previewGroupID)}
				phoneNumber={text('phoneNumber', '123-456-7890', previewGroupID)}
				email={text('email', 'info@wsu.edu', previewGroupID)}
				website={text('website', 'https://wsu.edu/', previewGroupID)}
			/>
		</ComponentWrapper>
	)
}