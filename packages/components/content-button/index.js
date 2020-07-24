import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getMarginSpacingClasses} from '@wsuwebteam/build-tools/js/helpers/spacingUtilityClasses';

import './style.scss';

const ContentButton = ( props, ref ) => {
	console.log(props);

	let Tag = ('default' == props.tag ) ? 'button' : props.tag;
	let containerClasses = getContentButtonClasses( props );
	let wrapperClasses = getMarginSpacingClasses( props );


	const {
		url,
		className,
		shape,
		color,
		size,
		tag,
		...additionalProps
	} = props;

	wrapperClasses.push('wsu-c-button__wrapper');

	return (
		<div className={ wrapperClasses.join(' ') }>
			<Tag 
				{ ...additionalProps }
				className={ containerClasses.join(' ') }
			>
				{props.children}
			</Tag>
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
	url: PropTypes.string,
	size: PropTypes.string,
	className: PropTypes.string,
	shape: PropTypes.string,
	color: PropTypes.string,
	tag: PropTypes.string,
}

ContentButton.defaultProps = {
	url: '',
	size: 'default',
	className: '',
	shape: 'default',
	color: 'default',
	tag: 'default',
}

export default ContentButton;
