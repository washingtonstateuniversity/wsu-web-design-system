import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

import ContentHero from '../../packages/components/content-hero/index';

const spacingOptions = ['default','none','xsmall','small','medium','medium-large','large','xlarge'];

// Story Time
export default {
	title: 'Content Hero Banner',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const DefaultBanner = () => {

	return <ContentHero
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
}