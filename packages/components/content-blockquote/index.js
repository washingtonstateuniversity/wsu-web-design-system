import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import {
	Cite,
} from '../../component-parts/index';

import ContentBlockquoteFooter from './component-parts';

import './style.scss';



const ContentBlockquote = ( props, ref ) => {

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
	
	return (
		<blockquote className={wrapperClasses}>
			{props.children}
			<ContentBlockquoteFooter 
				name={props.name} 
				title={props.title} 
				cite={props.cite} 
				citeUrl={props.citeUrl}
				className={footerClasses}
				/>
		</blockquote>
	)

}

ContentBlockquote.propTypes = {
	align: PropTypes.string,
	textSize: PropTypes.string,
	cite: PropTypes.string,
}

ContentBlockquote.defaultProps = {
	align: 'default',
	textSize: 'default',
	width: 'default',
	cite: '',
	name: '',
	title: '',
	cite: '',
	citeUrl: '',
	citeAlign: 'default',
}

export default ContentBlockquote;
