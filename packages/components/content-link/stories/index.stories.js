import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

import ContentLink from '../';

// Story Time
export default {
	title: 'Content Link',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const defaultLink = () => {
	return(
		<ContentLink href="https://wsu.edu/">This is a Link</ContentLink>
	)
}
