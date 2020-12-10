import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

// Component Imports
import Stat from '../../packages/components/content-stat';

// Story Time
export default {
	title: 'Components/Content/Stat',
	parameters: {
		status: 'Needs Feedback' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs,
	],
	component: Stat
};

export const DefaultStat = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );
	
	return (
		<ComponentWrapper layout={layout} className={classes}>
			<Stat value={100000} prefix="$" suffix="+" label="Total Money Saved" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
			<Stat value={21022} label="Total Students" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" alignLeft/>
			<Stat value={200} label="Total Degrees" suffix="+" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" alignRight/>
		</ComponentWrapper>
	)
}

export const DarkStat = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );
	
	return (
		<ComponentWrapper layout={layout} className={classes}>
			<Stat isDark value={100000} prefix="$" suffix="+" label="Total Money Saved" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
			<Stat isDark value={21022} label="Total Students" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" alignLeft/>
			<Stat isDark value={200} label="Total Degrees" suffix="+" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit" alignRight/>
		</ComponentWrapper>
	)
}