import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper/index'

// Component Imports
import ContentCallout from '../../packages/components/content-callout/index';
import '../../packages/components/content-link/content-link.scss';

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

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : false;
 
	return (
		<ComponentWrapper layout="content" className={classes}>
			<ContentCallout
				imageSrc='https://source.unsplash.com/collection/895539'
				imageAlt={ text( 'imageAlt','Alt Text', optionsGroupID ) }
				title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
				link={ text( 'link','#', optionsGroupID ) }
				description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget massa ut erat ultrices consectetur vitae a enim. Pellentesque risus diam, posuere ac nulla mattis, pulvinar efficitur massa. Nullam a nisl pretium leo pretium tincidunt quis at velit. Pellentesque posuere tincidunt fringilla. Curabitur ullamcorper pharetra ligula eget imperdiet.'
				imageSize={select( 'imageSize',['default','xsmall','small','medium','large'],'default', optionsGroupID )}
				shape={select( 'shape',['default','square','portrait','landscape','video','circle'],'default', optionsGroupID )}
				layout={select( 'layout',['default','horizontal','vertical'],'default', optionsGroupID )}
				verticalAlign={select( 'verticalAlign',['default','top','center','bottom'],'default', optionsGroupID )}
				isNotched={ boolean('isNotched', false, optionsGroupID ) }
				buttonText={ text( 'buttonText','Learn More', optionsGroupID ) }
				buttonUrl={ text( 'buttonUrl','#', optionsGroupID ) }
				/>
		</ComponentWrapper>
	)
}

export const CalloutList = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : false;
 
	return (
		<ComponentWrapper layout="content" className={classes}>
			<ContentCallout
				imageSrc='https://source.unsplash.com/collection/895539'
				imageAlt={ text( 'imageAlt','Alt Text', optionsGroupID ) }
				title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
			<ContentCallout
				imageSrc='https://source.unsplash.com/collection/895539'
				imageAlt={ text( 'imageAlt','Alt Text', optionsGroupID ) }
				title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
			<ContentCallout
				imageSrc='https://source.unsplash.com/collection/895539'
				imageAlt={ text( 'imageAlt','Alt Text', optionsGroupID ) }
				title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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