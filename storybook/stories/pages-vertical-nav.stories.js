// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

// Component Deps
import {
	WsuGlobalHeader,
	WsuGlobalFooter,
	WsuSiteFooter,
	WsuHero,
	WsuSiteNavVerticalSplit,
	WsuGlobalContainer,
	WsuSiteContainer,
	WsuContentContainer
} from '../../packages/components';

// Story Time
export default {
	title: 'Pages/Vertical Nav',
	parameters: {
		status: 'In Development' // In Development | Needs Feedback | Stable | Needs Deployment
	},
	decorators: [
		withA11y,
		withKnobs
	]
};

const navMenu = {
	label:'',
	classList: '',
	children: [
		{ 
			label:'Home',
			classList: '',
			children:[]
		},
		{ 
			label:'Nav Item',
			classList: '',
			children:[
				{ 
					label:'Child Nav Item',
					classList: '',
					children:[]
				},
				{ 
					label:'Child Nav Item',
					classList: '',
					children:[]
				},
				{ 
					label:'Child Nav Item',
					classList: '',
					children:[]
				}
			
			]
		},
		{ 
			label:'Nav Item',
			classList: '',
			children:[]
		},
		{ 
			label:'Nav Item',
			classList: '',
			children:[]
		},
		{ 
			label:'Nav Item',
			classList: '',
			children:[]
		},
		{ 
			label:'Nav Item',
			classList: '',
			children:[]
		}
	]
}

export const startOpen = () => {

	return (
		<WsuGlobalContainer>
			<WsuGlobalHeader />
			<WsuSiteNavVerticalSplit menu={navMenu} />
			<WsuSiteContainer>
				<WsuHero />
				<WsuSiteFooter />
				<WsuGlobalFooter />
			</WsuSiteContainer>
		</WsuGlobalContainer>
	)
}