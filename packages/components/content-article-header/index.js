import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import {
	ContentMetaAuthor,
	ContentMetaPublishDate,
} from '../../component-parts';


import './style.scss';



const ContentArticleTitle = ( props, ref ) => {

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'marginBefore', classSlug:'margin-before' },
			{ key:'marginAfter', classSlug:'margin-after' },
			{ key:'marginLeft', classSlug:'margin-left' },
			{ key:'marginRight', classSlug:'margin-right' },
			{ key:'align', prefix:'wsu-c-blockquote--align-' },
			{ key:'width', prefix:'wsu-c-blockquote--width-' },
			{ key:'textSize', prefix:'wsu-c-blockquote--text-size-' },
		],
		props,
		['wsu-c-blockquote']
	)

	let footerClasses = getUtilityClasses(
		[
			{ key:'citeAlign', prefix:'wsu-c-blockquote__footer--align-' },
		],
		props,
		['wsu-c-blockquote__footer']
	)

	let hasByline = ( '' != props.author || '' != props.publishDate ) ? true : false;
	
	return (
		<header className="wsu-c-article-header">
			<h1 className="wsu-c-article-header__title">{props.title}</h1>
			{ '' != props.subtitle && <div className="wsu-c-article-header__subtitle">{props.subtitle}</div> }
			{ true == hasByline && <div className="wsu-c-article-header__byline"><ContentMetaAuthor name={props.authorName} link={props.authorLink} /><ContentMetaPublishDate date={props.publishDate} /></div>}
		</header>
	)

}

ContentArticleTitle.propTypes = {
	align: PropTypes.string,
	textSize: PropTypes.string,
	cite: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	authorName: PropTypes.string,
	authorLink: PropTypes.string,
	publishDate: PropTypes.string,
}

ContentArticleTitle.defaultProps = {
	title: '',
	subtitle: '',
	authorName: '',
	authorLink: '',
	publishDate: '',
}

export default ContentArticleTitle;