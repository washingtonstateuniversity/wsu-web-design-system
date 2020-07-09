import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';


// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper/index'

import ContentLink from '../../packages/components/content-link/index';
import P from '../../packages/components/content-paragraph/index';
import ContentHeading from '../../packages/components/content-heading/index';

// Story Time
export default {
	title: 'Content Link',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const DefaultLink = () => {

	return (
		<ComponentWrapper layout="centered" className={'wsu-c-content'}>
			<ContentLink href="#">Lorem ipsum dolor sit amet</ContentLink>
		</ComponentWrapper>
	)
}

export const ParagraphLink = () => {

	return (
		<ComponentWrapper layout="content" width="narrow" className={'wsu-c-content'}>
			<P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. <ContentLink href="#">Lorem ipsum dolor sit amet</ContentLink>, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. <ContentLink href="#">Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero</ContentLink>, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</P>
		</ComponentWrapper>
	)
}

export const HeadingLink = () => {

	return (
		<ComponentWrapper layout="content" width="narrow" className={'wsu-c-content'}>
			<ContentHeading tag="h2" link="#">Lorem ipsum dolor</ContentHeading>
			<P>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. <ContentLink href="#">Lorem ipsum dolor sit amet</ContentLink>, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. <ContentLink href="#">Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero</ContentLink>, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</P>
		</ComponentWrapper>
	)
}