// External Deps
import React, { Component } from 'react';

// Component Deps
import empty from '../../storybook-components/field-checker';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

const ContentCalloutLink = ( props ) => {

	if ( props.link ) {

		return (
			<a href={props.link} className={props.className}>
				{props.children}
			</a>
		)
	} else {
		return props.children;
	}
}

// Component Starts
const ContentCalloutImg = ( props ) => {

	if ( empty( props.imageSrc ) ) {
		return null;
	} else if ( ! empty( props.videoSrc ) ) {

	    let videoSrc = props.videoSrc + '?&byline=0&title=0&portrait=0';

		return (
			<div className="wsu-c-callout__image-frame">
				<div className="wsu-c-callout__image-wrapper">
					{ props.imageSrc && <img className="wsu-c-callout__image" src={props.imageSrc} alt={props.imageAlt} /> }
					<iframe
						className="wsu-c-callout__video"
						src={videoSrc}
						frameborder="0" 
						allow="autoplay; fullscreen" 
						allowfullscreen>
					</iframe>
					<span className="wsu-c-callout__video-play"></span>
				</div>
			</div>
		);

	} else {

		return (
			<div className="wsu-c-callout__image-frame">
				<div className="wsu-c-callout__image-wrapper">
					<ContentCalloutLink link={props.link} className="wsu-c-callout__image-link" >
					<img className="wsu-c-callout__image" src={props.imageSrc} alt={props.imageAlt} />
					</ContentCalloutLink>
				</div>
			</div>
		);

	}

}

ContentCalloutImg.defaultProps = {
	imageSrc:'',
	imageAlt:'',
	link:'',
}

const ContentCalloutTitle = ( props ) => {

	if (empty(props.title)) {
		return null;
	}

	let Tag = props.tag;

	return (
		<Tag className="wsu-c-callout__title"><ContentCalloutLink link={props.link}  className="wsu-c-callout__title-link" >{props.title}</ContentCalloutLink></Tag>
	);
}

ContentCalloutTitle.defaultProps = {
	title:'',
	tag:'h3',
	link:'',
}

const ContentCalloutDescription = ( props ) => {

	if (empty(props.description)) {
		return null;
	}

	return (
		<p className="wsu-c-callout__description">{props.description}</p>
	);
}

ContentCalloutDescription.defaultProps = {
	description:'',
}



export { ContentCalloutImg, ContentCalloutTitle, ContentCalloutDescription };