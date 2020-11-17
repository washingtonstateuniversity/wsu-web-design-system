import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getMarginSpacingClasses} from '@wsuwebteam/build-tools/js/helpers/spacingUtilityClasses';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import {
	WsuIcon
} from '../index';

import './style.scss';

const ContentButton = ( props, ref ) => {

	let styleClass = ( 'default' === props.style  ) ? 'wsu-c-button' : 'wsu-c-button--' + props.style;

	if ( ! props.buttonText ) {
		return null;
	}

	let Tag = ('default' == props.tag ) ? 'a' : props.tag;

	let containerClasses = getUtilityClasses(
		[
			{ key:'color', prefix:'wsu-c-button--' },
			{ key:'size', prefix:'wsu-c-button--' },
			{ key:'shape', prefix:'wsu-c-button--' },
		],
		props,
		[ styleClass ]
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
		<div className={ wrapperClasses }>
			<Tag onClick={props.onClick} className={ containerClasses }>
				<WsuIcon name={props.iconBefore} />
				{props.buttonText}
				<WsuIcon name={props.iconAfter} />
			</Tag>
		</div>
	);

}


ContentButton.propTypes = {
	style: PropTypes.string,
	buttonText: PropTypes.string,
	buttonUrl: PropTypes.string,
	size: PropTypes.string,
	className: PropTypes.string,
	shape: PropTypes.string,
	color: PropTypes.string,
	tag: PropTypes.string,
	onClick: PropTypes.func,
	iconBefore: PropTypes.string,
	iconAfter: PropTypes.string,
	ariaLabel: PropTypes.string,
	ariaLabeledBy: PropTypes.string,
}

ContentButton.defaultProps = {
	style: 'default',
	buttonText: '',
	buttonUrl: '',
	size: 'default',
	className: '',
	shape: 'default',
	color: 'default',
	tag: 'default',
	onClick: null,
	buttonAlign: 'default',
	iconBefore: '',
	iconAfter: '',
	ariaLabel: '',
	ariaLabeledBy: '',
}

export default ContentButton;
