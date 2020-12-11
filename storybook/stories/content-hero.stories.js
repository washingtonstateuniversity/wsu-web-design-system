import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

import { WsuHero } from '../../packages/components';
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

const spacingOptions = ['default','none','xsmall','small','medium','medium-large','large','xlarge'];

// Story Time
export default {
	title: 'Components/Content/Hero Banner',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	],
	component: WsuHero
};

export const DefaultBanner = () => {

	let classes = (boolean('Apply wsu-c-content class', false, previewGroupID)) ? ['wsu-c-content'] : '';
	let layout = (select('Wrapper Layout', ['full', 'content', 'centered'], 'full', previewGroupID));

	return (
		<ComponentWrapper layout={layout} className={classes}>
			<WsuHero
				title={ text( 'title','Odio et purus metus placerat neque.', optionsGroupID ) }
				titleTag={ select( 'titleTag',['default','div','h1'],'default', optionsGroupID ) }
				subtitle={ text( 'subtilte','Consectetur adipiscing elit donec fringilla', optionsGroupID ) }
				caption={ text( 'caption','', optionsGroupID ) }
				buttonText={ text( 'buttonText','Lorem Ipsum', optionsGroupID ) }
				buttonUrl={ text( 'buttonUrl','#', optionsGroupID ) }
				imageCaption={ text( 'imageCaption','By consectetur adipiscing elit donec fringilla', optionsGroupID ) }
				imageCaptionUrl={ text( 'imageCaptionUrl','#', optionsGroupID ) }
				verticalSpacing={ select( 'verticalSpacing',['default','xsmall','small','medium','large','full'],'default', optionsGroupID )  }
				marginBefore={ select( 'marginBefore',spacingOptions,'default', optionsGroupID )  }
				marginAfter={ select( 'marginAfter',spacingOptions,'default', optionsGroupID )  }
				style=""
			/>
		</ComponentWrapper>
	)
}