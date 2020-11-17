import React, { Component } from 'react';

import { 
	WsuIcon,
	WsuLink
} from '../..'

import { empty } from '@wsuwebteam/build-tools/js/helpers';

const ContentCardFooterWrapper = ( props ) => {

	return (
		<div className="wsu-c-card__content-footer">
			{props.children}
		</div>
	)
}

const ContentCardFooterTaxonomies = ( props ) =>  {

	if (empty(props.categories) && empty(props.tags)) {
		return null;
	}

	return (
		<div className="wsu-c-card__taxonomy-container">
			{ !empty(props.categories) && <p className="wsu-c-card__categories">
				<span className="wsu-c-card__categories-label">More on: </span>
				{
					props.categories.map( (category, i) => {
						let isLast = ((props.categories.length - 1) == i) ? true : false;

						return <WsuLink url={category.url} isSecondary isList={true} isLast={isLast}>{category.name}</WsuLink>;
					})
				}
			</p> }

			{ !empty(props.tags) && <p className="wsu-c-card__tags">
				<span className="wsu-c-card__tags-label"><WsuIcon name='tag' /></span>
				{/* TODO: This currently displays all tags, this might be an issue if a post/item has a ton of tags. We need to add some sort of mechanism to cap tags at a certain point and display the "more" ellipsis WsuIcon instead */}
				{
					props.tags.map( (tag, i) => {
						let isLast = ((props.tags.length - 1) == i) ? true : false;

						return <WsuLink url={tag.url} isSecondary isList={true} isLast={isLast}>{tag.name}</WsuLink>;
					})
				}
			</p> }
		</div>
	)
}
const ContentCardFooterByline = ( props ) =>  {

	if (empty(props.date) && empty(props.authorName)) {
		return null;
	}
	
	return (
		<div className="wsu-c-card__byline-container">
			{props.date &&  <p className="wsu-c-card__byline-meta"> Published on {props.date}</p> }
			{!empty(props.authorName) && <p className="wsu-c-card__author">
				By <WsuLink isSecondary rel="author" href={props.authorLink}>{props.authorName}</WsuLink>
			</p>}
		</div>
	)
}

export {
	ContentCardFooterWrapper, 
	ContentCardFooterTaxonomies, 
	ContentCardFooterByline
}; 