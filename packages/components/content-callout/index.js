import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import {
	ContentCalloutImg,
	ContentCalloutTitle,
	ContentCalloutDescription
} from './component-parts.js';

import ContentButton from '../content-button/index';

import './style.scss';

const ContentCallout = ( props ) => { 

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'imageSize', prefix:'wsu-c-callout__image--' },
			{ key:'shape', prefix:'wsu-c-callout__image--' },
			{ key:'layout', prefix:'wsu-c-callout__layout--' },
			{ key:'verticalAlign', prefix:'wsu-c-callout__vertical-align--' },
			{ key:'isNotched', prefix:'wsu-c-callout__image--', isBool:true, value:'notched' },
		],
		props,
		['wsu-c-callout__wrapper']
	)

	return (
		<div className={wrapperClasses}>
			<div className="wsu-c-callout__container">
				<ContentCalloutImg
					imageSrc={props.imageSrc}
					imageAlt={props.imageAlt}
					link={props.link}
					/>
				<div className="wsu-c-callout__content">
				<ContentCalloutTitle
					title={props.title}
					tag={props.tag}
					link={props.link}
					/>
				<ContentCalloutDescription
					description={props.description}
					/>
				<ContentButton
					buttonUrl={props.buttonUrl}
					buttonText={props.buttonText} 
					size='small'
					color='white'
					shape='round'
					/>
				</div>
			</div>
		</div>
	);

}

ContentCallout.propTypes = {
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	className: PropTypes.string,
	link: PropTypes.string,
	title: PropTypes.string,
	imageSize: PropTypes.string,
	shape: PropTypes.string,
	description: PropTypes.string,
	tag: PropTypes.string,
	layout:PropTypes.string,
	verticalAlign:PropTypes.string,
	onClick: PropTypes.func,
	isNotched:PropTypes.bool,
	buttonText: PropTypes.string,
	buttonUrl: PropTypes.string,
}

ContentCallout.defaultProps = {
	imageSrc:'',
	imageAlt:'',
	imageSize:'default',
	shape:'default',
	link:'',
	title:'',
	tag:'h3',
	description:'',
	layout:'default',
	verticalAlign:'default', 
	isNotched:false,
	buttonText: '',
	buttonUrl: '',
}

export default ContentCallout;