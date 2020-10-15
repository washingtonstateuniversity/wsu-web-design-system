import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

import { EmHero } from '../../../packages/em-components';

// Story Time
export default {
	title: 'EM/Components/Hero Banner',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	],
	component: EmHero
};

export const DefaultBanner = () => {

	return <EmHero
		title={ text( 'title','Odio et purus metus placerat neque.', optionsGroupID ) }
		titleTag={ select( 'titleTag',['default','div','h1'],'default', optionsGroupID ) }
		titleAriaLabel={ text( 'title', 'Become a #FutureCoug today!', optionsGroupID ) }
		description={ text( 'description', 'Aliquam finibus vestibulum nisl, id tincidunt justo consectetur et. Proin ac semper ante. Vivamus massa elit, porttitor et commodo sit amet, eleifend eget nisi.', optionsGroupID ) }
	/>
}