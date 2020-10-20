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

	if ( empty( props.tags ) && empty( props.categories ) && empty( props.authorName ) && empty( props.date )  ) {

		return null;

	}

	return (
		<CardFooterWrapper>
			<CardFooterTaxonomies categories={props.categories} tags={props.tags} />
			<CardFooterByline authorName={props.authorName} date={props.date} />
		</CardFooterWrapper>
	)

}

// Component Starts
const NewsCard = ( props ) => {

	return (
		<CardWrapper {...props} >
			<CardPhoto {...props} />
			<CardCopyWrapper {...props} >
				<CardTitle {...props} />
				<CardCaption {...props} />
				<NewsCardFooter {...props } />
			</CardCopyWrapper> 
		</CardWrapper>
	);
}


NewsCard.propTypes = {
	title: PropTypes.string,
	titleTag: PropTypes.string,
	link: PropTypes.string,
	caption: PropTypes.string,
	tags: PropTypes.arrayOf( PropTypes.shape({
		name: PropTypes.string,
		url: PropTypes.string
	} ) ),
	categories: PropTypes.arrayOf( PropTypes.shape({
		name: PropTypes.string,
		url: PropTypes.string
	} ) ),
	date: PropTypes.string,
	authorName: PropTypes.string,
	authorLink: PropTypes.string,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	subtitle: PropTypes.string,
	imgFocalPoint: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number
	})
}

NewsCard.defaultProps = {
	title: '',
	titleTag: 'h3',
	link: '',
	caption: '',
	tags: [],
	categories: [],
	date: '',
	authorName: '',
	authorLink: '',
	imageSrc: '',
	imageAlt: '',
	subtitle: '',
	imgFocalPoint: {
		x: 0.5,
		y: 0.5
	}
}

export default NewsCard;