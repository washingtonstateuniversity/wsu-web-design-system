// External Deps
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

const EmContentHeader = ( props ) => {

	if ( ! props.children  ) {
		return null;
	}

	let Tag     = props.tag;
	
	let wrapperClasses = getUtilityClasses(
		[
			{ key:'width', prefix:'wsu-c-em-heading--' },
			{ key:'style', prefix:'wsu-c-em-heading--' },
			{ key:'marginBefore', classSlug:'margin-before' },
			{ key:'marginAfter', classSlug:'margin-after' },
			{ key:'marginLeft', classSlug:'margin-left' },
			{ key:'marginRight', classSlug:'margin-right' },
			{ key:'textAlign', classSlug:'textalign' },
		],
		props,
		'wsu-c-em-heading'
	)

	return (
		<Tag className={wrapperClasses} >
			<WrapperLink href={props.link}>{props.children}</WrapperLink>
		</Tag>
	);
}

EmContentHeader.propTypes = {
	tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	name: PropTypes.string,
	link: PropTypes.string,
	style: PropTypes.string,
	width: PropTypes.string
}

EmContentHeader.defaultProps = {
	tag: 'h1',
	name: '',
	link: '',
	style: 'default',
	width: 'default',
}

export default EmContentHeader;