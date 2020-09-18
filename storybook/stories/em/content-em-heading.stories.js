import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../../packages/storybook-components/content-wrapper';

// Component Imports
import { EmContentHeader } from '../../../packages/em-components';

import { WsuHeading } from '../../../packages/components';

const spacingOptions = ['default','none','xsmall','small','medium','medium-large','large','xlarge'];

// Story Time
export default {
	title: 'EM/Components/Heading',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment
	},
	decorators: [
		withA11y,
		withKnobs,
	]
};

const headingTagOptions = {
	h1:'h1',
	h2:'h2',
	h3:'h3',
	h4:'h4',
	h5:'h5',
	h6:'h6',
};

const headingLengthOptions = {
	short:'short', 
	medium:'medium',
	long:'long',
	extraLong:'extra long',
}

const headingStyleOptions = {
	default:'default', 
	callout:'callout',
	EM:'em',
	EmHero:'em-hero',
}

const headingWidthOptions = ['default','full','wide','medium','narrow','xnarrow'];

const getHeadingLength = ( headingLength ) => {

	let heading = '';

	switch ( headingLength ) {
		case 'extra long':
			heading = 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Donec ut Lacinia turpis. Nam commodo elit eget varius ultricies. Nunc bibendum in libero nec egestas';
			break;
		case 'long':
			heading = 'Lorem Ipsum Dolor sit Amet, Consectetur Adipiscing Elit.';
			break;
		case 'medium':
			heading ='Lorem Ipsum Dolor sit Amet';
			break;
	}

	return heading;

}

export const Default = () => {


	return (
		<ComponentWrapper layout="content" className='wsu-c-content'>
			<EmContentHeader 
				style={select( 'style',['default','hero'],'default', optionsGroupID )}
			>
				Lorum Ipsum
			</EmContentHeader>
		</ComponentWrapper>
	)
}

export const allHeadings = () => {

let headingLength = select( 'Heading Length', headingLengthOptions,'short', previewGroupID );
let width         = select( 'width', headingWidthOptions, 'full', optionsGroupID );

return(
	<ComponentWrapper layout="content" className="wsu-c-content">
		<EmContentHeader tag="h1" style={'hero'} width={width} >HERO - Heading Level 1 {getHeadingLength( headingLength ) }</EmContentHeader>
		<EmContentHeader tag="h1" style={'em'} width={width} >Heading Level 1 {getHeadingLength( headingLength ) }</EmContentHeader>
		<EmContentHeader tag="h2" style={'em'} width={width} >Heading Level 2 {getHeadingLength( headingLength ) }</EmContentHeader>
		<EmContentHeader tag="h3" style={'em'} width={width} >Heading Level 3 {getHeadingLength( headingLength ) }</EmContentHeader>
		<EmContentHeader tag="h4" style={'em'} width={width} >Heading Level 4 {getHeadingLength( headingLength ) }</EmContentHeader>
		<EmContentHeader tag="h5" style={'em'} width={width} >Heading Level 5 {getHeadingLength( headingLength ) }</EmContentHeader>
		<EmContentHeader tag="h6" style={'em'} width={width} >Heading Level 6 {getHeadingLength( headingLength ) }</EmContentHeader>
	</ComponentWrapper>
)
};
