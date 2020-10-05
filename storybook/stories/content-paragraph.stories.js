import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

import { WsuP } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Paragraph',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	],
	component: WsuP
};

const widthOptions = ['default','full','wide','medium','narrow','xnarrow'];

const contentGroupID = 'Preview';
const optionsGroupID = 'Options';

export const DefaultParagraph = () => {

	let widthOption = select('width', widthOptions, 'full', optionsGroupID );

	return(
		<ComponentWrapper layout="content" className="wsu-c-content" showEnds={boolean('Show Spacing', false, contentGroupID )}>
			<WsuP width={ widthOption } >
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</WsuP>
		</ComponentWrapper>
	)
}

export const ParagraphGroups = () => {

	let widthOption = select('width', widthOptions, 'full', optionsGroupID );

	return(
		<ComponentWrapper layout="content" className="wsu-c-content">
			<WsuP width={ widthOption } >
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</WsuP>
			<WsuP width={ widthOption } >
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</WsuP>
			<WsuP width={ widthOption } >
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</WsuP>
		</ComponentWrapper>
	)
}
