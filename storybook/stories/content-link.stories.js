import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';


// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

import ContentLink from '../../packages/components/content-link/index';
import P from '../../packages/components/content-paragraph/index';
import ContentHeading from '../../packages/components/content-heading/index';

// Story Time
export default {
	title: 'Components/Content/Link',
	decorators: [
		withA11y,
		withKnobs
	],
	component: ContentLink
};

export const DefaultLink = () => {

	return (
		<ComponentWrapper layout="content" className={'wsu-c-content'}>

			<ContentHeading tag="h2" link="#">Content Link Default Style Headlines</ContentHeading>

			<P>
				<strong>Content Link default style in paragraphs.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. <ContentLink href="#">Lorem ipsum dolor sit amet</ContentLink>, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. <ContentLink href="#">Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero</ContentLink>, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</P>

			<ContentLink href="#">Content Link Default Style</ContentLink>
			
		</ComponentWrapper>
	)
}

export const Secondary = () => {

	return (
		<ComponentWrapper layout="content" className={'wsu-c-content'}>
			<P>
				<strong>Content Link <code>isSecondary</code> for limited use, primarily in lists of tags or categories.</strong>
			</P>
			<ContentLink isSecondary>Lorem</ContentLink>, <ContentLink isSecondary>Ipsum</ContentLink>, <ContentLink isSecondary>Dolor</ContentLink>
		</ComponentWrapper>
	)
}

export const Animated = () => {
	
	return (
		<ComponentWrapper layout="content" className={'wsu-c-content'}>

			<P>
				<strong>Content Link <code>isAnimated</code> style in paragraphs.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. <ContentLink isAnimated>Lorem ipsum dolor sit amet</ContentLink>, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. <ContentLink isAnimated>Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero</ContentLink>, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</P>

			<ContentLink href="#" isAnimated>Lorem ipsum dolor sit amet</ContentLink>
		</ComponentWrapper>
	)
}

export const HighlyAccessible = () => {
	
	return (
		<ComponentWrapper layout="content" className={'wsu-c-content'}>

			<P>
				<strong>Content Link <code>isHighlyAccessible</code> style in paragraphs.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. <ContentLink isHighlyAccessible>Lorem ipsum dolor sit amet</ContentLink>, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. <ContentLink isHighlyAccessible>Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero</ContentLink>, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</P>

			<ContentLink href="#" isHighlyAccessible>Lorem ipsum dolor sit amet</ContentLink>
		</ComponentWrapper>
	)
}