import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';


// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

import { ListCheatsheet } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/List',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const DefaultList = () => {

	return (
		<ComponentWrapper layout="content" className={'wsu-c-content'}>

			<ListCheatsheet />
			
		</ComponentWrapper>
	)
}