import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';
import {ContentContainer} from '../../containers/index';

import {A} from '../index';
import P from '../../content-paragraph/index';
import ContentHeading from '../../content-heading/index';

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
		<ContentContainer className={'wsu-c-content'}>
			<A href="#">Lorem ipsum dolor sit amet</A>
		</ContentContainer>
	)
}

export const ParagraphLink = () => {

	return (
		<ContentContainer className={'wsu-c-content'}>
			<P width="narrow">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. <A href="#">Lorem ipsum dolor sit amet</A>, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. <A href="#">Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero</A>, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</P>
		</ContentContainer>
	)
}

export const HeadingLink = () => {

	return (
		<ContentContainer className={'wsu-c-content'}>
			<ContentHeading tag="h2" link="#">Lorem ipsum dolor</ContentHeading>
			<P width="narrow">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. <A href="#">Lorem ipsum dolor sit amet</A>, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. <A href="#">Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero</A>, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.
			</P>
		</ContentContainer>
	)
}