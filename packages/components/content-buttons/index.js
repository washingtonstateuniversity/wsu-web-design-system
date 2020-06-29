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
	style: 'default',
	color: 'default',
	size: 'default',
	tag: 'a',
}

const getContentButtonClasses = ( props ) => {

	let classes   = [];
	let styleClass = ( props.style && 'default' != props.style ) ? 'wsu-c-button--' + props.style : 'wsu-c-button';

	classes.push( styleClass );

	if ( props.color && 'default' != props.color ) {
		classes.push( 'wsu-c-button--' + props.color );
	}

	if ( props.size && 'default' != props.size ) {
		classes.push( 'wsu-c-button--' + props.size );
	}

	classes = classes.concat( getMarginSpacingClasses( props ) )

	classes.push( styleClass );

	return classes;

}

export default ContentButton;
