import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getMarginSpacingClasses} from '@wsuwebteam/build-tools/js/helpers/spacingUtilityClasses';

import './style.scss';

const ContentButton = ( props ) => {

	let Tag = ('default' == props.tag ) ? 'button' : props.tag;
	let containerClasses = getContentButtonClasses( props );
	let wrapperClasses = getMarginSpacingClasses( props );

	wrapperClasses.push('wsu-c-button__wrapper');



	return (
		<div class={ wrapperClasses.join(' ') }>
			<Tag className={ containerClasses.join(' ') }>{props.buttonText}</Tag>
		</div>
	);

}

const getContentButtonClasses = ( props ) => {

	let classes   = ['wsu-c-button'];

	if ( props.color && 'default' != props.color ) {
		classes.push( 'wsu-c-button--' + props.color );
	}

	if ( props.size && 'default' != props.size ) {
		classes.push( 'wsu-c-button--' + props.size );
	}

	if ( props.shape && 'default' != props.shape ) {
		classes.push( 'wsu-c-button--' + props.shape );
	} 

	classes = classes.concat( getMarginSpacingClasses( props ) )

	return classes;

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
	onClick: PropTypes.func
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
	onClick: null
}

export default ContentButton;
