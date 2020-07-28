import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getMarginSpacingClasses} from '@wsuwebteam/build-tools/js/helpers/spacingUtilityClasses';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import './style.scss';

const ContentButton = ( props ) => {

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


	return (
		<div class={ wrapperClasses }>
			<Tag className={ containerClasses }>{props.buttonText}</Tag>
		</div>
	);

}


ContentButton.propTypes = {
	buttonText: PropTypes.string,
	buttonUrl: PropTypes.string,
	buttonSize: PropTypes.string,
	className: PropTypes.string,
	shape: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.string,
	tag: PropTypes.string,
	onClick: PropTypes.func,
}

ContentButton.defaultProps = {
	buttonText: '',
	buttonUrl: '',
	buttonSize: 'default',
	className: '',
	shape: 'default',
	color: 'default',
	size: 'default',
	tag: 'default',
	onClick: null,
	buttonAlign: 'default',
}

export default ContentButton;
