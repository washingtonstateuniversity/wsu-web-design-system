import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getMarginSpacingClasses} from '@wsuwebteam/build-tools/js/helpers/spacingUtilityClasses';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import './style.scss';

const ContentButton = ( props, ref ) => {
	console.log(props);

	let Tag = ('default' == props.tag ) ? 'button' : props.tag;

	let containerClasses = getUtilityClasses(
		[
			{ key:'color', prefix:'wsu-c-button--' },
			{ key:'size', prefix:'wsu-c-button--' },
			{ key:'shape', prefix:'wsu-c-button--' },
		],
		props,
		['wsu-c-button']
	)

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'marginBefore', classSlug:'margin-before' },
			{ key:'marginAfter', classSlug:'margin-after' },
			{ key:'marginLeft', classSlug:'margin-left' },
			{ key:'marginRight', classSlug:'margin-right' },
			{ key:'buttonAlign', classSlug:'textalign' },
		],
		props,
		['wsu-c-button__wrapper']
	)

	wrapperClasses.push('wsu-c-button__wrapper');

	return (
		<div class={ wrapperClasses }>
			<Tag className={ containerClasses }>{props.buttonText}</Tag>
		</div>
	);

}


ContentButton.propTypes = {
	url: PropTypes.string,
	size: PropTypes.string,
	className: PropTypes.string,
	shape: PropTypes.string,
	color: PropTypes.string,
	tag: PropTypes.string,
	onClick: PropTypes.func,
}

ContentButton.defaultProps = {
	url: '',
	size: 'default',
	className: '',
	shape: 'default',
	color: 'default',
	tag: 'default',
	onClick: null,
	buttonAlign: 'default',
}

export default ContentButton;
