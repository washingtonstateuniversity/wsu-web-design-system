import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../../packages/storybook-components/content-wrapper/index'

// Component Imports
import { EmContentCallout } from '../../../packages/em-components/index.js';

const spacingOptions = ['default','none','xsmall','small','medium','medium-large','large','xlarge'];

// Story Time
export default {
	title: 'EM/Components/Callout',
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const Default = () => {


	return (
		<ComponentWrapper layout="content" className='wsu-c-content'>
			<EmContentCallout
				imageSrc='https://source.unsplash.com/collection/895539'
				imageAlt={ text( 'imageAlt','Alt Text', optionsGroupID ) }
				eyebrowTitle={text( 'eyebrowTitle','', optionsGroupID )}
				title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				titleSize={select( 'titleSize',['default','small','medium','large','xlarge'],'default', optionsGroupID )}
				tag={select( 'tag',['h2','h3','h4','h5','div'],'h3', optionsGroupID )}
				link={ text( 'link','#', optionsGroupID ) }
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget massa ut erat ultrices consectetur vitae a enim. Pellentesque risus diam, posuere ac nulla mattis, pulvinar efficitur massa. Nullam a nisl pretium leo pretium tincidunt quis at velit. Pellentesque posuere tincidunt fringilla. Curabitur ullamcorper pharetra ligula eget imperdiet.'
				imageSize={select( 'imageSize',['default','xsmall','small','medium','medium-large','large'],'default', optionsGroupID )}
				shape={select( 'shape',['default','square','portrait','landscape','video','circle'],'default', optionsGroupID )}
				style={select( 'style',['default','overlay'],'default', optionsGroupID )}
				layout={select( 'layout',['default','horizontal','vertical','image-right','image-left'],'default', optionsGroupID )}
				verticalAlign={select( 'verticalAlign',['default','top','center','bottom'],'default', optionsGroupID )}
				isNotched={ boolean('isNotched', false, optionsGroupID ) }
				buttonText={ text( 'buttonText','Learn More', optionsGroupID ) }
				buttonUrl={ text( 'buttonUrl','#', optionsGroupID ) }
				borderColor={select( 'borderColor',['default','black','crimson','none'],'default', optionsGroupID )}
				bleedImage={ boolean('bleedImage', false, optionsGroupID ) }
				/>
		</ComponentWrapper>
	)
}

