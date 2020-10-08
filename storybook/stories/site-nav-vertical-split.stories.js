// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Component Deps
import { WsuSiteNavVerticalSplit } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Site/Navigation/Split Button',
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
					children:[],
				},
				{ 
					label:'Child Nav Item',
					classList: '',
					children:[]
				}
			
			]
		},
		{ 
			label:'Nav Item Current',
			classList: '',
			isCurrent: true,
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
			children:[
				{ 
					label:'Child Nav Item',
					classList: '',
					children:[]
				},
				{ 
					label:'Child Nav Item',
					classList: '',
					children:[],
				},
				{ 
					label:'Child Nav Item',
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
							children:[],
						},
						{ 
							label:'Child Nav Item',
							classList: '',
							children:[]
						}
					]
				}
			]
		},
		{ 
			label:'Nav Item',
			classList: '',
			children:[]
		}
	]
}

export const Default = () => {

	return (
		<WsuSiteNavVerticalSplit menu={navMenu} />
	)
}