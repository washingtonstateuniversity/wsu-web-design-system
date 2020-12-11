import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

// Component Imports
import { WsuTiles } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Tiles',
	parameters: {
		status: 'In Development' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs,
	],
	component: WsuTiles
};

export const DefaultTiles = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<ComponentWrapper layout={ layout } className={ classes }>
			<WsuTiles 
				overlayColor={ select( 'overlayColor', ['default', 'crimson'], 'default', optionsGroupID )  }
				tileLayout={ select( 'tileLayout', ['default', 'left', 'right', 'center'], 'default', optionsGroupID )  }
			/>
		</ComponentWrapper>
	)
}