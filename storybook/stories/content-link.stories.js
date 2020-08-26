import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';


// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

import {
	WsuLink,
	WsuP,
	WsuHeading,
} from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Link',
	decorators: [
		withA11y,
		withKnobs
	],
	component: WsuLink
};

export const DefaultLink = () => {

	return (
		<ComponentWrapper layout="content" className={'wsu-c-content'}>

			<WsuHeading tag="h2" link="#">Content Link Default Style Headlines</WsuHeading>

			<WsuP>
				<strong>Content Link default style in paragraphs.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. <WsuLink href="#">Lorem ipsum dolor sit amet</WsuLink>, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. <WsuLink href="#">Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero</WsuLink>, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</WsuP>

			<WsuLink href="#">Content Link Default Style</WsuLink>
			
		</ComponentWrapper>
	)
}

export const Secondary = () => {

	return (
		<ComponentWrapper layout="content" className={'wsu-c-content'}>
			<WsuP>
				<strong>Content Link <code>isSecondary</code> for limited use, primarily in lists of tags or categories.</strong>
			</WsuP>
			<WsuLink isSecondary>Lorem</WsuLink>, <WsuLink isSecondary>Ipsum</WsuLink>, <WsuLink isSecondary>Dolor</WsuLink>
		</ComponentWrapper>
	)
}

export const Animated = () => {
	
	return (
		<ComponentWrapper layout="content" className={'wsu-c-content'}>

			<WsuP>
				<strong>Content Link <code>isAnimated</code> style in paragraphs.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. <WsuLink isAnimated>Lorem ipsum dolor sit amet</WsuLink>, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. <WsuLink isAnimated>Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero</WsuLink>, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</WsuP>

			<WsuLink href="#" isAnimated>Lorem ipsum dolor sit amet</WsuLink>
		</ComponentWrapper>
	)
}

export const HighlyAccessible = () => {
	
	return (
		<ComponentWrapper layout="content" className={'wsu-c-content'}>

			<WsuP>
				<strong>Content Link <code>isHighlyAccessible</code> style in paragraphs.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. <WsuLink isHighlyAccessible>Lorem ipsum dolor sit amet</WsuLink>, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. <WsuLink isHighlyAccessible>Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero</WsuLink>, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</WsuP>

			<WsuLink href="#" isHighlyAccessible>Lorem ipsum dolor sit amet</WsuLink>
		</ComponentWrapper>
	)
}