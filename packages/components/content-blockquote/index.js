import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import {
	Cite,
} from '../../component-parts/index';

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
	
	return (
		<blockquote className={wrapperClasses}>
			{props.children}
			<Cite cite={props.cite} />
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
}

export default ContentBlockquote;
