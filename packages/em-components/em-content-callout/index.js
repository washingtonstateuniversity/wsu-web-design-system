import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import { 
	ContentButton 
} from '../index';

import {
	ImageFrame,
	EyebrowHeader,
	Title,
	Caption,
	WrapperLink,
} from '../../component-parts/index';


import './style.scss';

const EmContentCallout = ( props ) => { 

	let baseClass = ( 'default' != props.style ) ? 'wsu-c-em-callout--' + props.style : 'wsu-c-em-callout';

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'layout', prefix:'wsu-c-em-callout__layout--' },
			{ key:'verticalAlign', prefix:'wsu-c-em-callout__vertical-align--' },
			{ key:'imageSize', prefix:'wsu-c-em-callout__image-size--' },
			{ key:'borderColor', prefix:'wsu-c-em-callout__border-color--' },
			{ key:'bleedImage', prefix:'wsu-c-em-callout--', value:'bleed-image', isBool:true },
		],
		props,
		baseClass
	)

	if ( 'image-right' == props.layout ) {

		return (
			<div className={wrapperClasses}>
				<div className="wsu-c-em-callout__container">
				<div className="wsu-c-em-callout__content">
						<div className="wsu-c-em-callout__content-inner">
							<EyebrowHeader >Lorem ipsum dolor sit amet</EyebrowHeader>
							<Title link={ props.link }>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
							<Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus varius nunc, ac tincidunt nulla iaculis dictum. Cras eget lectus vehicula nisi vehicula viverra quis a sem. Vestibulum tincidunt quis dui vitae porttitor. Ut volutpat sem quis elit pellentesque gravida. Vivamus vehicula orci non turpis vehicula ultrices. </Caption>
							<div className="wsu-c-em-callout__link-wrapper">
								<WrapperLink href={props.buttonUrl} hideEmpty={true} >{ props.buttonText }</WrapperLink>
							</div>
						</div>
					</div>
					<ImageFrame
						imageSrc={ props.imageSrc }
						imageAlt={ props.imageAlt }
						imageSize={ props.imageSize }
						link={ props.link }
						imageShape={ props.shape }
						isNotched={ props.isNotched }
						/>
				</div>
			</div>
		);

	} else {

		return (
			<div className={wrapperClasses}>
				<div className="wsu-c-em-callout__container">
					<ImageFrame
						imageSrc={ props.imageSrc }
						imageAlt={ props.imageAlt }
						imageSize={ props.imageSize }
						link={ props.link }
						imageShape={ props.shape }
						isNotched={ props.isNotched }
						/>
					<div className="wsu-c-em-callout__content">
						<div className="wsu-c-em-callout__content-inner">
							<EyebrowHeader >Lorem ipsum dolor sit amet</EyebrowHeader>
							<Title link={ props.link } titleSize={props.titleSize}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
							<Caption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus varius nunc, ac tincidunt nulla iaculis dictum. Cras eget lectus vehicula nisi vehicula viverra quis a sem. Vestibulum tincidunt quis dui vitae porttitor. Ut volutpat sem quis elit pellentesque gravida. Vivamus vehicula orci non turpis vehicula ultrices. </Caption>
							<div className="wsu-c-em-callout__link-wrapper">
								<WrapperLink href={props.buttonUrl} hideEmpty={true} >{ props.buttonText }</WrapperLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		);

	}

}

EmContentCallout.propTypes = {
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	className: PropTypes.string,
	link: PropTypes.string,
	eyebrowTitle: PropTypes.string,
	title: PropTypes.string,
	titleSize: PropTypes.string,
	imageSize: PropTypes.string,
	style: PropTypes.string,
	shape: PropTypes.string,
	description: PropTypes.string,
	tag: PropTypes.string,
	layout:PropTypes.string,
	verticalAlign:PropTypes.string,
	onClick: PropTypes.func,
	isNotched:PropTypes.bool,
	buttonText: PropTypes.string,
	buttonUrl: PropTypes.string,
	borderColor:PropTypes.string,
}

EmContentCallout.defaultProps = {
	imageSrc:'',
	imageAlt:'',
	imageSize:'default',
	shape:'default',
	link:'',
	eyebrowTitle:'',
	title:'',
	tag:'h3',
	style: 'default',
	description:'',
	layout:'default',
	verticalAlign:'default', 
	isNotched:true,
	buttonText: '',
	buttonUrl: '',
	titleSize:'default',
	borderColor:'default',
	bleedImage:false,
}

export default EmContentCallout;