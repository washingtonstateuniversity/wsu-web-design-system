// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import './style.scss';

import {
	NewsCard
} from './component-styles';



// Component Starts
const ContentCard = ( props ) => {

	switch ( props.style ) {

		case 'news':
			return <NewsCard {...props} />
			
	}

}

ContentCard.propTypes = {
	style: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string,
	titleTag: PropTypes.string,
	link: PropTypes.string,
	description: PropTypes.string,
	addressLine1: PropTypes.string,
	addressLine2: PropTypes.string,
	phoneNumber: PropTypes.string,
	email: PropTypes.string,
	website: PropTypes.string,
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
	positionTitle: PropTypes.string,
	imgFocalPoint: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number
	})
}

ContentCard.defaultProps = {
	style: 'default',
	className: '',
	title: '',
	titleTag: 'h3',
	link: '',
	description: '',
	addressLine1: '',
	addressLine2: '',
	phoneNumber: '',
	email: '',
	website: '',
	tags: [],
	categories: [],
	date: '',
	authorName: '',
	imageSrc: '',
	imageAlt: '',
	subtitle: '',
	positionTitle: '',
	imgFocalPoint: {
		x: 0.5,
		y: 0.5
	}
}

export default ContentCard;

