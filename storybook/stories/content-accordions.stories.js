import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

import ContentAccordion from '../../packages/components/content-accordion/index';
import P from '../../packages/components/content-paragraph/index';

// Story Time
export default {
	title: 'Components/Content/Accordion',
	decorators: [
		withA11y,
		withKnobs
	]
};

const contentGroupID = 'Preview';
const optionsGroupID = 'Options';

export const Accordion = () => {


	let classes = ( boolean('Apply wsu-c-content class', false, contentGroupID ) ) ? ['wsu-c-content'] : '';

	return(
		<ComponentWrapper layout="content" className={classes}>
			<ContentAccordion
				title="Accordion Title Goes Here"
				>
				<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium blandit lacus at dignissim. Sed elit leo, auctor sed diam eu, vulputate laoreet lectus. Duis fringilla tellus ac metus dictum, sit amet volutpat dolor ultricies. In sed tincidunt sem, interdum bibendum quam. Praesent ornare feugiat massa, et lobortis est blandit vel. Ut ullamcorper mi ipsum, vel blandit justo cursus egestas. Sed et mauris turpis. Maecenas vel felis sagittis, ultrices risus non, auctor mi. Proin ultrices mauris lacus, eget finibus quam viverra nec. In hac habitasse platea dictumst. Vivamus ut luctus massa. Nam vehicula nec felis auctor gravida. Quisque pulvinar odio sed sapien rutrum tincidunt. Maecenas eget enim sollicitudin, molestie est et, tristique augue. Nulla interdum arcu et libero aliquam consequat. Nam rhoncus placerat orci, id sodales augue.</P>
			</ContentAccordion>
		</ComponentWrapper>
	)
}

export const AccordionGroup = () => {


	let classes = ( boolean('Apply wsu-c-content class', false, contentGroupID ) ) ? ['wsu-c-content'] : '';

	return(
		<ComponentWrapper layout="content" className={classes}>
			<ContentAccordion
				title="Accordion Title Goes Here"
				>
				<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium blandit lacus at dignissim. Sed elit leo, auctor sed diam eu, vulputate laoreet lectus. Duis fringilla tellus ac metus dictum, sit amet volutpat dolor ultricies. In sed tincidunt sem, interdum bibendum quam. Praesent ornare feugiat massa, et lobortis est blandit vel. Ut ullamcorper mi ipsum, vel blandit justo cursus egestas. Sed et mauris turpis. Maecenas vel felis sagittis, ultrices risus non, auctor mi. Proin ultrices mauris lacus, eget finibus quam viverra nec. In hac habitasse platea dictumst. Vivamus ut luctus massa. Nam vehicula nec felis auctor gravida. Quisque pulvinar odio sed sapien rutrum tincidunt. Maecenas eget enim sollicitudin, molestie est et, tristique augue. Nulla interdum arcu et libero aliquam consequat. Nam rhoncus placerat orci, id sodales augue.</P>
			</ContentAccordion>
			<ContentAccordion
				title="Accordion Title Goes Here"
				>
				<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium blandit lacus at dignissim. Sed elit leo, auctor sed diam eu, vulputate laoreet lectus. Duis fringilla tellus ac metus dictum, sit amet volutpat dolor ultricies. In sed tincidunt sem, interdum bibendum quam. Praesent ornare feugiat massa, et lobortis est blandit vel. Ut ullamcorper mi ipsum, vel blandit justo cursus egestas. Sed et mauris turpis. Maecenas vel felis sagittis, ultrices risus non, auctor mi. Proin ultrices mauris lacus, eget finibus quam viverra nec. In hac habitasse platea dictumst. Vivamus ut luctus massa. Nam vehicula nec felis auctor gravida. Quisque pulvinar odio sed sapien rutrum tincidunt. Maecenas eget enim sollicitudin, molestie est et, tristique augue. Nulla interdum arcu et libero aliquam consequat. Nam rhoncus placerat orci, id sodales augue.</P>
			</ContentAccordion>
			<ContentAccordion
				title="Accordion Title Goes Here Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit."
				>
				<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium blandit lacus at dignissim. Sed elit leo, auctor sed diam eu, vulputate laoreet lectus. Duis fringilla tellus ac metus dictum, sit amet volutpat dolor ultricies. In sed tincidunt sem, interdum bibendum quam. Praesent ornare feugiat massa, et lobortis est blandit vel. Ut ullamcorper mi ipsum, vel blandit justo cursus egestas. Sed et mauris turpis. Maecenas vel felis sagittis, ultrices risus non, auctor mi. Proin ultrices mauris lacus, eget finibus quam viverra nec. In hac habitasse platea dictumst. Vivamus ut luctus massa. Nam vehicula nec felis auctor gravida. Quisque pulvinar odio sed sapien rutrum tincidunt. Maecenas eget enim sollicitudin, molestie est et, tristique augue. Nulla interdum arcu et libero aliquam consequat. Nam rhoncus placerat orci, id sodales augue.</P>
			</ContentAccordion>
			<ContentAccordion
				title="Accordion Title Goes Here"
				>
				<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium blandit lacus at dignissim. Sed elit leo, auctor sed diam eu, vulputate laoreet lectus. Duis fringilla tellus ac metus dictum, sit amet volutpat dolor ultricies. In sed tincidunt sem, interdum bibendum quam. Praesent ornare feugiat massa, et lobortis est blandit vel. Ut ullamcorper mi ipsum, vel blandit justo cursus egestas. Sed et mauris turpis. Maecenas vel felis sagittis, ultrices risus non, auctor mi. Proin ultrices mauris lacus, eget finibus quam viverra nec. In hac habitasse platea dictumst. Vivamus ut luctus massa. Nam vehicula nec felis auctor gravida. Quisque pulvinar odio sed sapien rutrum tincidunt. Maecenas eget enim sollicitudin, molestie est et, tristique augue. Nulla interdum arcu et libero aliquam consequat. Nam rhoncus placerat orci, id sodales augue.</P>
			</ContentAccordion>
			<ContentAccordion
				title="Accordion Title Goes Here"
				>
				<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium blandit lacus at dignissim. Sed elit leo, auctor sed diam eu, vulputate laoreet lectus. Duis fringilla tellus ac metus dictum, sit amet volutpat dolor ultricies. In sed tincidunt sem, interdum bibendum quam. Praesent ornare feugiat massa, et lobortis est blandit vel. Ut ullamcorper mi ipsum, vel blandit justo cursus egestas. Sed et mauris turpis. Maecenas vel felis sagittis, ultrices risus non, auctor mi. Proin ultrices mauris lacus, eget finibus quam viverra nec. In hac habitasse platea dictumst. Vivamus ut luctus massa. Nam vehicula nec felis auctor gravida. Quisque pulvinar odio sed sapien rutrum tincidunt. Maecenas eget enim sollicitudin, molestie est et, tristique augue. Nulla interdum arcu et libero aliquam consequat. Nam rhoncus placerat orci, id sodales augue.</P>
			</ContentAccordion>
			<ContentAccordion
				title="Accordion Title Goes Here"
				>
				<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium blandit lacus at dignissim. Sed elit leo, auctor sed diam eu, vulputate laoreet lectus. Duis fringilla tellus ac metus dictum, sit amet volutpat dolor ultricies. In sed tincidunt sem, interdum bibendum quam. Praesent ornare feugiat massa, et lobortis est blandit vel. Ut ullamcorper mi ipsum, vel blandit justo cursus egestas. Sed et mauris turpis. Maecenas vel felis sagittis, ultrices risus non, auctor mi. Proin ultrices mauris lacus, eget finibus quam viverra nec. In hac habitasse platea dictumst. Vivamus ut luctus massa. Nam vehicula nec felis auctor gravida. Quisque pulvinar odio sed sapien rutrum tincidunt. Maecenas eget enim sollicitudin, molestie est et, tristique augue. Nulla interdum arcu et libero aliquam consequat. Nam rhoncus placerat orci, id sodales augue.</P>
			</ContentAccordion>
		</ComponentWrapper>
	)
}