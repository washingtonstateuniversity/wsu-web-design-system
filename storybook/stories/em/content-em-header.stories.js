import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../../packages/storybook-components/content-wrapper/index'

// Component Imports
import { EmContentHeader } from '../../../packages/em-components/index.js';

const spacingOptions = ['default','none','xsmall','small','medium','medium-large','large','xlarge'];

// Story Time
export default {
	title: 'EM/Components/Heading',
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const Default = () => {


	return (
		<ComponentWrapper layout="content" className='wsu-c-content'>
			<EmContentHeader 
				style={select( 'style',['default','hero'],'default', optionsGroupID )}
				>Lorum Ipsum</EmContentHeader>
		</ComponentWrapper>
	)
}

export const Headings = () => {


	return (
		<ComponentWrapper layout="content" className='wsu-c-content'>
			<EmContentHeader tag="h1">Lorum Ipsum</EmContentHeader>
			<EmContentHeader tag="h2">Lorum Ipsum</EmContentHeader>
			<EmContentHeader tag="h3">Lorum Ipsum</EmContentHeader>
			<EmContentHeader tag="h4">Lorum Ipsum</EmContentHeader>
			<EmContentHeader tag="h5">Lorum Ipsum</EmContentHeader>
			<EmContentHeader tag="h6">Lorum Ipsum</EmContentHeader>
		</ComponentWrapper>
	)
}

