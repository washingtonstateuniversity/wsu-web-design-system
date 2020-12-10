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
	/** Controls the overall aesthetic of the button */
	style: PropTypes.string,
	/** Text that displays on the button */
	buttonText: PropTypes.string,
	/** Destination for when the button is clicked */
	buttonUrl: PropTypes.string,
	/** Overall size of the button */
	size: PropTypes.string,
	/** Accepts any additional class names */
	className: PropTypes.string,
	/** Defines the shape of the button */
	shape: PropTypes.oneOf(['default', 'round']),
	/** Defines the color of the button */
	color: PropTypes.oneOf(['default', 'white']),
	/** Defines the html tag element for the button, defaults to anchor */
	tag: PropTypes.string,
	/** Accepts onClick function */
	onClick: PropTypes.func,
	/** Icon to be put before buttonText */
	iconBefore: PropTypes.string,
	/** Icon to be put after buttonText */
	iconAfter: PropTypes.string,
	/** Supports [ariaLabel](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) attribute */
	ariaLabel: PropTypes.string,
	/** Supports [ariaLabeledBy](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) attribute */
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
