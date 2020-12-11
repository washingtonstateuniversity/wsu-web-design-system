import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';
import { WsuCard } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Card',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	],
	component: WsuCard
};

export const defaultCard = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return(
		<ComponentWrapper layout={layout} className={classes}>
			<WsuCard 
				title={text('title', 'Title', optionsGroupID)}
				subtitle={text('subtitle', 'Subtitle', optionsGroupID)}
				positionTitle={text('positionTitle', 'Position Title', optionsGroupID)}
				caption={text('caption', 'Description Morbi tristique senectus et netus et malesuada.', optionsGroupID)}
				imgSrc={'https://source.unsplash.com/collection/895539'}
				imgAlt={'This is alt text for the image.'}
			/>
		</ComponentWrapper>
	)
}

export const personCard = () => {
	
	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return(
		<ComponentWrapper layout={layout} className={classes}>
			<WsuCard 
				title={text('title', 'Butch Cougar', optionsGroupID)}
				subtitle={text('subtitle', 'Mascot', optionsGroupID)}
				caption={text('caption', 'The cougar was named Butch after Herbert "Butch" Meeker of Spokane, a WSU football star from the 1920s. Butch was represented by a live cougar until 1978; Butch VI, in declining health with multiple ailments and approaching age 15, was euthanized in late August.', optionsGroupID)}
				addressLine1={text('addressLine1', '12345 Etiam rutrum lectus', optionsGroupID)}
				addressLine2={text('addressLine2', 'Pullman, WA 99163', optionsGroupID)}
				phoneNumber={text('phoneNumber', '123-456-7890', optionsGroupID)}
				email={text('email', 'info@wsu.edu', optionsGroupID)}
				website={text('website', 'https://wsu.edu/', optionsGroupID)}
				imgSrc={'https://s3media.247sports.com/Uploads/Assets/161/403/6_8403161.jpg'}
				imgAlt={'This is alt text for the image.'}
				cardType={'person'}
			/>
		</ComponentWrapper>
	)
}

export const newsCard = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return(
		<ComponentWrapper layout={layout} className={classes}>
			<WsuCard 
				title={text('title', 'Sed bibendum efficitur tellus non tristique', optionsGroupID)}
				caption={text('caption','Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam rutrum lectus in metus pulvinar, quis gravida nulla pellentesque. Praesent dignissim et mi nec faucibus. Ut luctus, justo blandit suscipit placerat, purus velit ornare leo, ac lobortis nisi arcu consectetur erat. Integer in sapien augue. ', optionsGroupID)}
				imgSrc={'https://source.unsplash.com/collection/895539'}
				imgAlt={'This is alt text for the image.'}
				categories={[
					{
						'name': 'Sed category',
						'url': '#' 
					},
					{
						'name': 'Sed category',
						'url': '#' 
					}
				]}
				tags={[
					{
						'name': 'Fames',
						'url': '#'
					},
					{
						'name': 'Tristique',
						'url': '#'
					},
					{
						'name': 'Malesuada',
						'url': '#'
					}
				]}
				authorName={'John Doe'}
				authorUrl={'https//wsu.edu'}
				date={'7/17/2020'}
				cardType={'news'}
			/>
		</ComponentWrapper>
	)
}