import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper/index'

// Component Imports
import { WsuCallout } from '../../packages/components';

const spacingOptions = ['default','none','xsmall','small','medium','medium-large','large','xlarge'];

// Story Time
export default {
	title: 'Components/Content/Callout',
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const DefaultCallout = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : ''; 
	return (
		<ComponentWrapper layout="content" className={classes}>
			<WsuCallout
				imageSrc='https://source.unsplash.com/collection/895539'
				imageAlt={ text( 'imageAlt','Alt Text', optionsGroupID ) }
				eyebrowTitle={text( 'eyebrowTitle','', optionsGroupID )}
				title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				titleSize={select( 'titleSize',['default','small','medium','large','xlarge'],'default', optionsGroupID )}
				tag={select( 'tag',['h2','h3','h4','h5','div'],'h3', optionsGroupID )}
				link={ text( 'link','#', optionsGroupID ) }
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget massa ut erat ultrices consectetur vitae a enim. Pellentesque risus diam, posuere ac nulla mattis, pulvinar efficitur massa. Nullam a nisl pretium leo pretium tincidunt quis at velit. Pellentesque posuere tincidunt fringilla. Curabitur ullamcorper pharetra ligula eget imperdiet.'
				imageSize={select( 'imageSize',['default','xsmall','small','medium','large'],'default', optionsGroupID )}
				shape={select( 'shape',['default','square','portrait','landscape','video','circle'],'default', optionsGroupID )}
				layout={select( 'layout',['default','horizontal','vertical'],'default', optionsGroupID )}
				verticalAlign={select( 'verticalAlign',['default','top','center','bottom'],'default', optionsGroupID )}
				style={select( 'style',['default','em'],'default', optionsGroupID )}
				isNotched={ boolean('isNotched', false, optionsGroupID ) }
				buttonText={ text( 'buttonText','Learn More', optionsGroupID ) }
				buttonUrl={ text( 'buttonUrl','#', optionsGroupID ) }
				videoSrc={text( 'videoSrc','', optionsGroupID )}
			/>
		</ComponentWrapper>
	)
}

export const CalloutList = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : ''; 
	return (
		<ComponentWrapper layout="content" className={classes}>
			<WsuCallout
				imageSrc='https://source.unsplash.com/collection/895539'
				imageAlt={ text( 'imageAlt','Alt Text', optionsGroupID ) }
				title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				titleSize={select( 'titleSize',['default','small','medium','large','xlarge'],'default', optionsGroupID )}
				link={ text( 'link','#', optionsGroupID ) }
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget massa ut erat ultrices consectetur vitae a enim. Pellentesque risus diam, posuere ac nulla mattis, pulvinar efficitur massa. Nullam a nisl pretium leo pretium tincidunt quis at velit. Pellentesque posuere tincidunt fringilla. Curabitur ullamcorper pharetra ligula eget imperdiet.'
				imageSize={select( 'imageSize',['default','xsmall','small','medium','half'],'default', optionsGroupID )}
				imageRatio={select( 'imageRatio',['default','square','portrait','landscape','video'],'default', optionsGroupID )}
				layout={select( 'layout',['default','horizontal','vertical'],'default', optionsGroupID )}
				verticalAlign={select( 'verticalAlign',['default','top','center','bottom'],'default', optionsGroupID )}
				isNotched={ boolean('isNotched', false, optionsGroupID ) }
				buttonText={ text( 'buttonText','Learn More', optionsGroupID ) }
				buttonUrl={ text( 'buttonUrl','#', optionsGroupID ) }
			/>
			<WsuCallout
				imageSrc='https://source.unsplash.com/collection/895539'
				imageAlt={ text( 'imageAlt','Alt Text', optionsGroupID ) }
				title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				titleSize={select( 'titleSize',['default','small','medium','large','xlarge'],'default', optionsGroupID )}
				link={ text( 'link','#', optionsGroupID ) }
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget massa ut erat ultrices consectetur vitae a enim. Pellentesque risus diam, posuere ac nulla mattis, pulvinar efficitur massa. Nullam a nisl pretium leo pretium tincidunt quis at velit. Pellentesque posuere tincidunt fringilla. Curabitur ullamcorper pharetra ligula eget imperdiet.'
				imageSize={select( 'imageSize',['default','xsmall','small','medium','half'],'default', optionsGroupID )}
				imageRatio={select( 'imageRatio',['default','square','portrait','landscape','video'],'default', optionsGroupID )}
				layout={select( 'layout',['default','horizontal','vertical'],'default', optionsGroupID )}
				verticalAlign={select( 'verticalAlign',['default','top','center','bottom'],'default', optionsGroupID )}
				isNotched={ boolean('isNotched', false, optionsGroupID ) }
				buttonText={ text( 'buttonText','Learn More', optionsGroupID ) }
				buttonUrl={ text( 'buttonUrl','#', optionsGroupID ) }
			/>
			<WsuCallout
				imageSrc='https://source.unsplash.com/collection/895539'
				imageAlt={ text( 'imageAlt','Alt Text', optionsGroupID ) }
				title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				titleSize={select( 'titleSize',['default','small','medium','large','xlarge'],'default', optionsGroupID )}
				link={ text( 'link','#', optionsGroupID ) }
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget massa ut erat ultrices consectetur vitae a enim. Pellentesque risus diam, posuere ac nulla mattis, pulvinar efficitur massa. Nullam a nisl pretium leo pretium tincidunt quis at velit. Pellentesque posuere tincidunt fringilla. Curabitur ullamcorper pharetra ligula eget imperdiet.'
				imageSize={select( 'imageSize',['default','xsmall','small','medium','half'],'default', optionsGroupID )}
				imageRatio={select( 'imageRatio',['default','square','portrait','landscape','video'],'default', optionsGroupID )}
				layout={select( 'layout',['default','horizontal','vertical'],'default', optionsGroupID )}
				verticalAlign={select( 'verticalAlign',['default','top','center','bottom'],'default', optionsGroupID )}
				isNotched={ boolean('isNotched', false, optionsGroupID ) }
				buttonText={ text( 'buttonText','Learn More', optionsGroupID ) }
				buttonUrl={ text( 'buttonUrl','#', optionsGroupID ) }
			/>
		</ComponentWrapper>
	)
}