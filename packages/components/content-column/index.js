// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';
import {getInlineStyle, setInlineStyleDefaults } from '@wsuwebteam/build-tools/js/helpers/inline-style';

import './style.scss';


const legacySpacingMap = {
	'none': '0',
	'xsmall': '0.5rem',
	'small': '1rem',
	'medium': '2rem',
	'medium-large': '3rem',
	'large': '4rem',
	'xlarge': '6rem',
}


const ContentColumnWrapper = ( props ) => {

	let inlineStyle = getInlineStyle(
		props,
		[
			{ key:'marginBefore', property:'marginTop', legacyMap: legacySpacingMap },
			{ key:'marginAfter', property:'marginBottom', legacyMap: legacySpacingMap },
			{ key:'paddingAfter', property:'paddingBottom', legacyMap: legacySpacingMap },
			{ key:'paddingBefore', property:'paddingTop', legacyMap: legacySpacingMap },
			{ key:'marginTop'},
			{ key:'marginBottom'},
			{ key:'paddingBottom'},
			{ key:'paddingTop'},
		]
	);

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'backgroundColor', classSlug:'background' },
			{ key:'layout', prefix:'wsu-c-columns--' },
			{ key:'bleedLeft', prefix:'wsu-c-columns--', isBool:true, value:'bleed-left' },
			{ key:'bleedRight', prefix:'wsu-c-columns--', isBool:true, value:'bleed-right' },
		],
		props,
		['wsu-c-column__wrapper']
	)

	return (
		<div className={ wrapperClasses } style={inlineStyle}>
			{props.children}
		</div>
	);


}

ContentColumnWrapper.defaultProps = {
	layout: 'default',
	backgroundColor: '',
	backgroundImageSrc:'',
	backgroundImageAlt:'',
	useCustomSpacing: false,
	marginBefore: '',
	marginAfter: '',
	paddingBefore: '',
	paddingAfter: '',
}

const ContentColumn = ( props ) =>  {

	let inlineStyle = getInlineStyle(
		props,
		[
			{ key:'marginBefore', property:'marginTop', legacyMap: legacySpacingMap },
			{ key:'marginAfter', property:'marginBottom', legacyMap: legacySpacingMap },
			{ key:'paddingAfter', property:'paddingBottom', legacyMap: legacySpacingMap },
			{ key:'paddingBefore', property:'paddingTop', legacyMap: legacySpacingMap },
			{ key:'marginTop', property:'marginTop'},
			{ key:'marginBottom', property:'marginBottom'},
			{ key:'paddingBottom', property:'paddingBottom' },
			{ key:'paddingTop', property:'paddingTop'},
		]
	)

	if ( '' != props.backgroundColor && 'default' != props.backgroundColor ) {

		inlineStyle = setInlineStyleDefaults( inlineStyle, {
			'paddingBottom':'1.5em',
			'paddingTop':'1.5em',
		}); 

	}


	let wrapperClasses = getUtilityClasses(
		[
			{ key:'backgroundColor', classSlug:'background' },
			{ key:'layout', prefix:'wsu-c-columns--' },
			{ key:'bleedLeft', prefix:'wsu-c-column--', isBool:true, value:'bleed-left' },
			{ key:'bleedRight', prefix:'wsu-c-column--', isBool:true, value:'bleed-right' },
		],
		props,
		['wsu-c-column']
	)


	return (
		<div className={ wrapperClasses } style={inlineStyle}>
			{props.children}
		</div>
	);
}

ContentColumn.defaultProps = {
	backgroundColor: '',
	backgroundImageSrc:'',
	backgroundImageAlt:'',
	marginBefore: '',
	marginAfter: '',
	paddingBefore: '',
	paddingAfter: '',
}

export { 
	ContentColumn,
	ContentColumnWrapper
};