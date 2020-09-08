import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import {
	ContentCalloutImg,
	ContentCalloutTitle,
	ContentCalloutDescription,
	ContentCalloutVideo,
	ContentCalloutEyebrowTitle,
} from './component-parts.js';

import ContentButton from '../content-button/index';

import './style.scss';

const ContentCallout = ( props ) => { 

	let baseClass = ( props.style && 'default' != props.style ) ? 'wsu-c-callout--' + props.style : 'wsu-c-callout';

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'imageSize', prefix:'wsu-c-callout__image--' },
			{ key:'titleSize', prefix:'wsu-c-callout__title--' },
			{ key:'shape', prefix:'wsu-c-callout__image--' },
			{ key:'layout', prefix:'wsu-c-callout__layout--' },
			{ key:'verticalAlign', prefix:'wsu-c-callout__vertical-align--' },
			{ key:'isNotched', prefix:'wsu-c-callout__image--', isBool:true, value:'notched' },
		],
		props,
		baseClass
	)

	return (
		<div className={wrapperClasses}>
			<div className="wsu-c-callout__container">
				<ContentCalloutImg
					imageSrc={props.imageSrc}
					imageAlt={props.imageAlt}
					link={props.link}
					videoSrc={props.videoSrc}
					/>
				<ContentCalloutVideo
					videoSrc={props.videoSrc}
					/>
				<div className="wsu-c-callout__content">
					<div className="wsu-c-callout__content-inner">
						<ContentCalloutEyebrowTitle
							eyebrowTitle={props.eyebrowTitle}
						/>
						<ContentCalloutTitle
							title={props.title}
							tag={props.tag}
							link={props.link}
						/>
						<ContentCalloutDescription
							description={props.description}
						/>
						{props.children}
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
		</div>
	);

}

ContentCallout.propTypes = {
	style: PropTypes.string,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	className: PropTypes.string,
	link: PropTypes.string,
	eyebrowTitle: PropTypes.string,
	title: PropTypes.string,
	titleSize: PropTypes.string,
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
	videoSrc: PropTypes.string,
}

ContentCallout.defaultProps = {
	style: 'default',
	imageSrc: '',
	imageAlt: '',
	imageSize: 'default',
	shape: 'default',
	link: '',
	eyebrowTitle: '',
	title: '',
	tag: 'h3',
	description: '',
	layout: 'default',
	verticalAlign: 'default', 
	isNotched: false,
	buttonText: '',
	buttonUrl:  '',
	videoSrc: '',
	titleSize: 'default',
}

export default ContentCallout;