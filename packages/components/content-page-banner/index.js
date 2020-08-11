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


	let wrapperClasses = getUtilityClasses(
		[
			{ key:'marginBefore', classSlug:'margin-before' },
			{ key:'marginAfter', classSlug:'margin-after' },
			{ key:'marginLeft', classSlug:'margin-left' },
			{ key:'marginRight', classSlug:'margin-right' },
			{ key:'height', prefix:'wsu-c-page-banner__image--' },
			{ key:'isFullBleed', prefix:'wsu-c-page-banner--', isBool:true, value:'full-bleed' },
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
}

ContentPageBanner.defaultProps = {
	imageSrc:'',
	imageAlt:'',
	imageCaption:'',
	backgroundColor:'default',
	height:'default',
	isFullBleed:false,
	isNotched:false,
}

export default ContentPageBanner;