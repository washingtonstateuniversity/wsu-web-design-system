// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import './style.scss';

const getContainerClasses = ( baseClass, classes  ) => {

	if ( Array.isArray( classes ) ) {

		classes.push( baseClass );

		return classes.join(' ');

	} else {

		return baseClass + ' ' + classes;

	}

}

const GlobalContainer = ( props ) => {


	return (
		<div className={ props.wrapperClass }>
			{props.children}
		</div>
	);

}

GlobalContainer.propTypes = {
	wrapperClass:PropTypes.string,
}

GlobalContainer.defaultProps = {
	wrapperClass:'wsu-g-container',
}

const SiteContainer = ( props ) => {


	return (
		<div className={ props.wrapperClass }>
			{props.children}
		</div>
	);

}

SiteContainer.propTypes = {
	wrapperClass:PropTypes.string,
}

SiteContainer.defaultProps = {
	wrapperClass:'wsu-s-container',
}



const ContentContainer = ( props ) => {

	let ContentClasses = getUtilityClasses(
		[
			{ key:'isContent', prefix:'wsu-c-content', isBool:true, value:'' },
		],
		props,
		['wsu-c-container']
	) 

	return (
		<div className={ ContentClasses}>
			{props.children}
		</div>
	);

}

ContentContainer.propTypes = {
	isContent:PropTypes.bool,
}

ContentContainer.defaultProps = {
	isContent:true,
}


export { 
	GlobalContainer,
	SiteContainer,
	ContentContainer
};