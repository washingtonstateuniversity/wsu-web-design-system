import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import { WsuCallout, WsuCard } from '../index';


import './style.scss';

const ContentNews = ( props, ref ) => {

	let supportsPerRow = ['card'];
	let baseClasses = ['wsu-c-news__wrapper'];

	// Only add per row class if style supports it
	if ( supportsPerRow.includes( props.style) ) {
		baseClasses.push( 'wsu-c-news--per-row-' + props.itemsPerRow );
	}


	let wrapperClasses = getUtilityClasses(
		[
			{ key:'style', prefix: 'wsu-c-news--style-' },
			{ key:'marginBefore', classSlug:'margin-before' },
			{ key:'marginAfter', classSlug:'margin-after' },
			{ key:'marginLeft', classSlug:'margin-left' },
			{ key:'marginRight', classSlug:'margin-right' },
		],
		props,
		baseClasses
	)

	
	return (
		<div className={ wrapperClasses }>
			{props.children}
			{props.newsItems.map( ( newsItem, index ) => {

				console.log( newsItem );
				
				switch ( props.style ) {

					case 'card':
						return (
							<WsuCard
								style='news'
								title={ newsItem.title }
								caption={ newsItem.caption }
								date={ newsItem.publishDate }
								authorName={ newsItem.authorName }
								imageSrc={ newsItem.imageSrc}
								className='wsu-c-news__item'
								link={newsItem.link}
							 />
						)

					default:
						return (
							<WsuCallout
								title={newsItem.title}
								imageSrc={newsItem.imageSrc}
								description={newsItem.caption}
								link={newsItem.link}
								className='wsu-c-news__item'
								/>
						)
				}
			} ) }
		</div>
	);

}


ContentNews.propTypes = {
	style: PropTypes.string,
	className: PropTypes.string,
	title: PropTypes.string,
	titleTag: PropTypes.string,
	newsItems: PropTypes.array,
	itemTag: PropTypes.string,
	itemsPerRow: PropTypes.integer,
	count: PropTypes.integer,
	showImage: PropTypes.boolean,
	showTitle: PropTypes.boolean,
	showPublishDate: PropTypes.boolean,
	showAuthor: PropTypes.boolean,
	linkItem: PropTypes.boolean,
}

ContentNews.defaultProps = {
	style: 'default',
	className: '',
	title:'',
	titleTag:'h2',
	newsItems:[],
	itemTag: 'h3',
	itemsPerRow: 3,
	count: 6,
	showImage: true,
	showTitle: true,
	showPublishDate: true,
	showAuthor: true,
	linkItem: true,

}

export default ContentNews;