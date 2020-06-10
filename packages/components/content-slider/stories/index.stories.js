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
	]
};

const slidesPerViewOptions = {
	range: true,
	min: 1,
	max: 12,
	step: 1,
};

const spaceBetweenOptions = {
	range: true,
	min: 0,
	max: 100,
	step: 20,
};

const autoplayDelayOptions = {
	range: true,
	min: 0,
	max: 9000,
	step: 500,
};

export const DefaultSlider = () => <ContentSlider slidesPerView={number("slidesPerView", 4, slidesPerViewOptions)} spaceBetween={number("spaceBetween", 60, spaceBetweenOptions)} autoplayEnabled={boolean("autoplayEnabled", true)} autoplayDelay={number("autoplayDelay", 3000, autoplayDelayOptions)} />;