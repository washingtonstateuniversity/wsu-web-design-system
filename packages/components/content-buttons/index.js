import React, { Component } from 'react';

import {getMarginSpacingClasses} from '@wsuwebteam/build-tools/js/helpers/spacingUtilityClasses';

import './style.scss';

const ContentButton = ( props ) => {

	let Tag = props.tag;
	let containerClasses = getContentButtonClasses( props );

	return (
		<>
			<Tag className={ containerClasses.join(' ') }>{props.buttonText}</Tag>
		</>
	);

}

ContentButton.defaultProps = {
    buttonText: '',
	buttonUrl: '',
	buttonSize: 'default',
	className: '',
	shape: 'default',
	color: 'default',
	size: 'default',
	tag: 'a',
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

export default ContentButton;
