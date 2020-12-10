// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

// Component Deps
import { WsuSlider } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Slider',
	parameters: {
		status: 'Has Known Issues' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	],
	component: WsuSlider
};

export const DefaultSlider = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
    let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<ComponentWrapper layout={layout} className={classes}>
			<WsuSlider
				slideTitle={
					text( 
						'Heading Text',
						'Lorem Ipsum Dolor sit Amet',
						previewGroupID
					)
				}
				slidesPerView={
					number(
						"slidesPerView", 
						4, 
						{
							range: true,
							min: 1,
							max: 12,
							step: 1,
						}, 
						optionsGroupID
					)
				} 
				spaceBetween={
					number(
						"spaceBetween",
						60,
						{
							range: true,
							min: 0,
							max: 100,
							step: 20,
						},
						optionsGroupID
					)
				} 
				autoplayEnabled={
					boolean(
						"autoplayEnabled",
						true,
						optionsGroupID
					)
				} 
				autoplayDelay={
					number(
						"autoplayDelay",
						3000,
						{
							range: true,
							min: 0,
							max: 9000,
							step: 500,
						},
						optionsGroupID
					)
				}
			/>
		</ComponentWrapper>
	)
}