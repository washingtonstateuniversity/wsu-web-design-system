import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper/index';
import ContentCard from '../../packages/components/content-card/index';

// Story Time
export default {
	title: 'Components/Content/Card',
	decorators: [
		withA11y,
		withKnobs
	],
	component: ContentCard
};

export const defaultCard = () => {
	return(
		<ComponentWrapper layout="content">
			<ContentCard 
				title={text('title', 'Pellentesque Habitant', previewGroupID)}
				description={text('description', 'Morbi tristique senectus et netus et malesuada.', previewGroupID)}
				addressLine1={text('addressLine1', '12345 Etiam rutrum lectus', previewGroupID)}
				addressLine2={text('addressLine2', 'Pullman, WA 99163', previewGroupID)}
				phoneNumber={text('phoneNumber', '123-456-7890', previewGroupID)}
				email={text('email', 'info@wsu.edu', previewGroupID)}
				website={text('website', 'https://wsu.edu/', previewGroupID)}
				image={{'src': 'https://source.unsplash.com/collection/895539', 'alt': 'alt text for image'}}
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
				author={{
					'name': 'John Doe', 
					'url': 'https//wsu.edu'
				}}
				date={'7/17/2020'}
			/>
		</ComponentWrapper>
	)
}

export const personCard = () => {
	return(
		<ComponentWrapper layout="content">
			<ContentCard 
				title={text('title', 'Pellentesque Habitant', previewGroupID)}
				description={text('description', 'Morbi tristique senectus et netus et malesuada.', previewGroupID)}
				addressLine1={text('addressLine1', '12345 Etiam rutrum lectus', previewGroupID)}
				addressLine2={text('addressLine2', 'Pullman, WA 99163', previewGroupID)}
				phoneNumber={text('phoneNumber', '123-456-7890', previewGroupID)}
				email={text('email', 'info@wsu.edu', previewGroupID)}
				website={text('website', 'https://wsu.edu/', previewGroupID)}
				image={{'src': 'https://source.unsplash.com/collection/895539', 'alt': 'alt text for image'}}
			/>
		</ComponentWrapper>
	)
}

export const newsCard = () => {
	return(
		<ComponentWrapper layout="content">
			<ContentCard 
				title={'Sed bibendum efficitur tellus non tristique'}
				description={'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam rutrum lectus in metus pulvinar, quis gravida nulla pellentesque. Praesent dignissim et mi nec faucibus. Ut luctus, justo blandit suscipit placerat, purus velit ornare leo, ac lobortis nisi arcu consectetur erat. Integer in sapien augue. '}
				image={{'src': 'https://source.unsplash.com/collection/895539', 'alt': 'alt text for image'}}
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
				author={{
					'name': 'John Doe', 
					'url': 'https//wsu.edu'
				}}
				date={'7/17/2020'}
			/>
		</ComponentWrapper>
	)
}