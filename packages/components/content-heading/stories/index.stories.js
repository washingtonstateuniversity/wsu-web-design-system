import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

import ContentHeading from '../index';
import {ContentContainer} from '../../containers/index';

// Story Time
export default {
	title: 'Content Heading',
	decorators: [
		withA11y,
		withKnobs
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

export const DefaultHeading = () => {

	let classes = ( boolean('Apply wsu-c-content class', false ) ) ? ['wsu-c-content'] : '';

	return(
		<ContentContainer className={classes}>
			<ContentHeading 
				tag={ select('tag', headingTagOptions, 'h1' ) }
				name={ text( 'name','' ) }
				link={ text( 'link','' ) }
				>
				Heading Text
			</ContentHeading>
		</ContentContainer>
	)
}

export const AllHeadings = () => {
	return(
		<ContentContainer className={'wsu-c-content'}>
			<ContentHeading tag="h1" >Heading Level 1</ContentHeading>
			<ContentHeading tag="h2" >Heading Level 2</ContentHeading>
			<ContentHeading tag="h3" >Heading Level 3</ContentHeading>
			<ContentHeading tag="h4" >Heading Level 4</ContentHeading>
			<ContentHeading tag="h5" >Heading Level 5</ContentHeading>
			<ContentHeading tag="h6" >Heading Level 6</ContentHeading>
		</ContentContainer>
	)
};

export const WithParagraphs = () => {
	return(
		<ContentContainer className={'wsu-c-content'}>
			<ContentHeading tag="h1" >Heading Level 1</ContentHeading>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</p>
			<ContentHeading tag="h2" >Heading Level 2</ContentHeading>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</p>
			<ContentHeading tag="h3" >Heading Level 3</ContentHeading>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</p>
			<ContentHeading tag="h4" >Heading Level 4</ContentHeading>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</p>
			<ContentHeading tag="h5" >Heading Level 5</ContentHeading>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</p>
			<ContentHeading tag="h6" >Heading Level 6</ContentHeading>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
				varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
				platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
				purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
				rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
				suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
				arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
				eleifend et suscipit vel, faucibus vitae lorem.</p>
		</ContentContainer>
	)
};
