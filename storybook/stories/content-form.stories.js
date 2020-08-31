import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';
import { WsuForm, WsuFormCheatsheet } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Form',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const DefaultForm = () => {

	return (
		<ComponentWrapper layout="content">

			<WsuForm />
			<WsuFormCheatsheet />

		</ComponentWrapper>
	)
}