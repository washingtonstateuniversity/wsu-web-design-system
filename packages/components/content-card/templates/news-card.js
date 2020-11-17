// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
	CardWrapper,
	CardPhoto,
	CardCopyWrapper,
	CardTitle,
	CardCaption,
	CardFooterWrapper,
	CardFooterTaxonomies,
	CardFooterByline
} from '../component-parts';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

const NewsCardFooter = ( props ) => {

	return (
		<CardFooterWrapper>

			<CardFooterByline authorName={props.authorName} date={props.date} />
			
		</CardFooterWrapper>
	)
}

// Component Starts
const NewsCard = ( props ) => {

	return (
		<CardWrapper {...props}>

			<CardPhoto imgSrc={props.imgSrc} imgAlt={props.imgAlt} imgFocalPoint={props.imgFocalPoint} />

			<CardCopyWrapper {...props}>

				<CardTitle title={props.title} titleTag={props.titleTag} />

				<CardCaption caption={props.caption} />

				<NewsCardFooter {...props } />

			</CardCopyWrapper>

		</CardWrapper>
	);
}

export default NewsCard;