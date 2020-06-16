// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

// Component Deps
import Icon from '../';

// Story Time
export default {
	title: 'Icons',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const all = () => <Icon />;
