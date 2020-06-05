// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

// Component Deps
import ContentSlider from '../';

// Story Time
export default {
	title: 'Content Slider',
	decorators: [
		withA11y,
		withKnobs
	],
	component: ContentSlider,
	parameters: {
		componentSubtitle: 'Handy status label',
		description: 'This is a description.'
	},
};

const options = {
   range: true,
   min: 1,
   max: 12,
   step: 1,
};

export const DefaultSlider = () => <ContentSlider slidesPerView={number('Slides Per View', 1, options)} />;

export const DefaultSlider2 = () => <ContentSlider slidesPerView={number('Slides Per View', 2, options)} />;

export const DefaultSlider3 = () => <ContentSlider slidesPerView={number('Slides Per View', 3, options)} />;

export const DefaultSlider4 = () => <ContentSlider slidesPerView={number('Slides Per View', 4, options)} />;
