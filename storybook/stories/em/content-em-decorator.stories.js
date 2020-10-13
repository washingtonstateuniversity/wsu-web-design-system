import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../../packages/component-parts/content-wrapper';

// Component Imports
import { EmContentDecorator } from '../../../packages/em-components';

// Story Time
export default {
	title: 'EM/Components/Decorator',
	parameters: {
		status: 'In Development' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const EMDecorator = () => {

	let typeOptions = [
		'crimson-bar',
		'crimson-bar-light',
		'angled-lines-gray',
		'angled-lines-crimson',
		'plus-gray',
		'plus-crimson',
		'text-white',
		'text-outline-gray',
		'text-outline-crimson',
		'cougar-head-white',
		'cougar-head-crimson',
		'overlay-crimson',
		'overlay-gray',
		'wsu-watermark-vertical-white',
		'wsu-watermark-vertical-crimson',
	]


	return(
		<div style={ { margin: '100px', position:'relative', minHeight: '80vh', border: '1px dashed #555', backgroundColor:'#333', backgroundImage:'url(https://source.unsplash.com/collection/895539)', backgroundSize: 'cover' } }>
			<EmContentDecorator
				type={ select( 'type',typeOptions ,'crimson-bar', optionsGroupID ) }
				positionTop = { text( 'positionTop','0', optionsGroupID ) }
				positionBottom = { text( 'positionBottom','auto', optionsGroupID ) }
				positionRight = { text( 'positionRight','auto', optionsGroupID ) }
				positionLeft = { text( 'positionLeft','0', optionsGroupID ) }
				width = { text( 'width','50%', optionsGroupID ) }
				height = { text( 'height','30px', optionsGroupID ) }
				text = { text( 'text','LORUM IPSUM', optionsGroupID ) }
				fontSize={ text( 'fontSize','', optionsGroupID ) }
			/>
		</div>
	)
}
