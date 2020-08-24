import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import {
	ImageFrame,
	EyebrowHeader,
	Title,
	Caption,
	WrapperLink,
} from '../../component-parts/index';

import './style.scss';

const ContentPageBanner = ( props, ref ) => {

	let defaultOverlayClass = ( '' != props.title && 'default' == props.overlay ) ? 'wsu-c-page-banner__overlay--gray' : false;


	let wrapperClasses = getUtilityClasses(
		[
			{ key:'marginBefore', classSlug:'margin-before' },
			{ key:'marginAfter', classSlug:'margin-after' },
			{ key:'marginLeft', classSlug:'margin-left' },
			{ key:'marginRight', classSlug:'margin-right' },
			{ key:'height', prefix:'wsu-c-page-banner__image--' },
			{ key:'overlay', prefix:'wsu-c-page-banner__overlay--', defaultClass: defaultOverlayClass },
			{ key:'isFullBleed', prefix:'wsu-c-page-banner--', isBool:true, value:'full-bleed' },
			{ key:'textAlign', classSlug:'textalign' },
		],
		props,
		['wsu-c-page-banner']
	)
	
	return (
		<div className={ wrapperClasses }>
			<ImageFrame 
				imageSrc={props.imageSrc}
				imageAlt={props.imageAlt}
				imageCaption={props.imageCaption}
				isNotched={props.isNotched}
				/>
			<div className="wsu-c-page-banner__container">
				<EyebrowHeader className='wsu-c-page-banner__eyebrow-header'>{props.eyebrowHeader}</EyebrowHeader>
				<Title className='wsu-c-page-banner__title'>{props.title}</Title>
			</div>
		</div>
	);

}


ContentPageBanner.propTypes = {
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	imageCaption: PropTypes.string,
	backgroundColor: PropTypes.string,
	height: PropTypes.string,
	isFullBleed:PropTypes.bool,
	isNotched:PropTypes.bool,
	textAlign: PropTypes.string,
	title: PropTypes.string,
	EyebrowHeader: PropTypes.string,
}

ContentPageBanner.defaultProps = {
	imageSrc:'',
	imageAlt:'',
	title: '',
	EyebrowHeader:'',
	imageCaption:'',
	backgroundColor:'default',
	height:'default',
	isFullBleed:false,
	isNotched:false,
	textAlign:'default',
	overlay:'default',
}

export default ContentPageBanner;