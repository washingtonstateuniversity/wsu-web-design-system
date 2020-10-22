import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

// Component Imports
import { WsuNews } from '../../packages/components';

let newsItem = {
	title:'Lorem ipsum dolor sit amet',
	caption: 'Ut lorem tortor, posuere non pulvinar nec, mollis non sem. Praesent euismod consectetur ligula, eu rutrum risus cursus rhoncus. Vestibulum eu commodo massa. Nullam eget scelerisque massa, dignissim tempor nibh.',
	authorName: 'Butch Cougar',
	authorLink: 'https://wsu.edu',
	imageSrc: 'https://source.unsplash.com/collection/895539',
	imageAlt: 'Image Alt Text',
	publishDate: '0/00/2020',
	className: 'custom-class-name',
	link: 'https://wsu.edu',
}


const getNewsItems = ( count ) => {

	count = parseInt( count );

	let newsItems = [];

	for ( let i = 0; i < count; i++ ) {
		newsItems.push( newsItem );
	}

	return newsItems;
}

// Story Time
export default {
	title: 'Components/Content/News',
	parameters: {
		status: 'In Development' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	],
};



export const DefaultNews = () => {

	let count = text( 'count', '6', previewGroupID );
	let style = select( 'style',['default','card'],'default', optionsGroupID );

	return(
		<ComponentWrapper layout="full">
			<WsuNews
				newsItems={ getNewsItems( count ) }
				style={style}
				/>
		</ComponentWrapper>
	)
}
