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
	return(
		<ComponentWrapper layout="content">
			<WsuCard 
				title={text('title', 'Title', previewGroupID)}
				subtitle={text('subtitle', 'Subtitle', previewGroupID)}
				positionTitle={text('positionTitle', 'Position Title', previewGroupID)}
				caption={text('caption', 'Description Morbi tristique senectus et netus et malesuada.', previewGroupID)}
				imgSrc={'https://source.unsplash.com/collection/895539'}
				imgAlt={'This is alt text for the image.'}
			/>
		</ComponentWrapper>
	)
}

export const personCard = () => {
	return(
		<ComponentWrapper layout="content">
			<WsuCard 
				title={text('title', 'Butch Cougar', previewGroupID)}
				subtitle={text('subtitle', 'Mascot', previewGroupID)}
				caption={text('caption', 'The cougar was named Butch after Herbert "Butch" Meeker of Spokane, a WSU football star from the 1920s. Butch was represented by a live cougar until 1978; Butch VI, in declining health with multiple ailments and approaching age 15, was euthanized in late August.', previewGroupID)}
				addressLine1={text('addressLine1', '12345 Etiam rutrum lectus', previewGroupID)}
				addressLine2={text('addressLine2', 'Pullman, WA 99163', previewGroupID)}
				phoneNumber={text('phoneNumber', '123-456-7890', previewGroupID)}
				email={text('email', 'info@wsu.edu', previewGroupID)}
				website={text('website', 'https://wsu.edu/', previewGroupID)}
				imgSrc={'https://s3media.247sports.com/Uploads/Assets/161/403/6_8403161.jpg'}
				imgAlt={'This is alt text for the image.'}
				cardType={'person'}
			/>
		</ComponentWrapper>
	)
}

export const newsCard = () => {
	return(
		<ComponentWrapper layout="content">
			<WsuCard 
				title={'Sed bibendum efficitur tellus non tristique'}
				caption={'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam rutrum lectus in metus pulvinar, quis gravida nulla pellentesque. Praesent dignissim et mi nec faucibus. Ut luctus, justo blandit suscipit placerat, purus velit ornare leo, ac lobortis nisi arcu consectetur erat. Integer in sapien augue. '}
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