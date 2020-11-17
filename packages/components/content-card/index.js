// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import './style.scss';

import DefaultCard from './templates/default-card';
import NewsCard from './templates/news-card';
import PersonCard from './templates/person-card';
import CustomCard from './templates/person-card';

// Component Starts
const ContentCard = ( props ) => {

	switch ( props.cardType ) {

		case 'default':
			return <DefaultCard {...props} />

		case 'news':
			return <NewsCard {...props} />

		case 'person':
			return <PersonCard {...props} />

		case 'custom':
			return <CustomCard {...props} />

	}

}

ContentCard.propTypes = {
	cardType: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string,
	titleTag: PropTypes.string,
	link: PropTypes.string,
	caption: PropTypes.string,
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
	authorUrl: PropTypes.string,
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	subtitle: PropTypes.string,
	positionTitle: PropTypes.string,
	imgFocalPoint: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number
	})
}

ContentCard.defaultProps = {
	cardType: 'default',
	className: '',
	title: '',
	titleTag: 'h3',
	link: '',
	caption: '',
	addressLine1: '',
	addressLine2: '',
	phoneNumber: '',
	email: '',
	website: '',
	tags: [],
	categories: [],
	date: '',
	authorName: '',
	authorUrl: '',
	imgSrc: '',
	imgAlt: '',
	subtitle: '',
	positionTitle: '',
	imgFocalPoint: {
		x: 0.5,
		y: 0.5
	}
}

export default ContentCard;

