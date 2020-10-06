import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

// Component Imports
import { WsuPageBanner } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Page Banner',
	parameters: {
		status: 'Needs Feedback' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	],
	component: WsuPageBanner
};

export const Default = () => {

	return(
		<ComponentWrapper layout="content">
			<WsuPageBanner
				title='Lorum Ipsum'
				eyebrowHeader='consectetur adipiscing elit'
				imageSrc='https://source.unsplash.com/collection/895539'
				imageAlt={ text( 'imageAlt','Alt Text', optionsGroupID ) }
				imageCaption={ text( 'imageCaption','Image Caption', optionsGroupID ) }
				height={select( 'height',['default','xsmall','small','medium','medium-large','large','xlarge','full'],'default', optionsGroupID )}
				isNotched={ boolean('isNotched', false, optionsGroupID ) }
				isFullBleed={ boolean('isFullBleed', false, optionsGroupID ) }
				textAlign={ select( 'textAlign',['left','right','center'],'default', optionsGroupID )  }
				overlay={ select( 'overlay',['gray','black','crimson','none'],'default', optionsGroupID )  }
			/>
		</ComponentWrapper>
	)
}

