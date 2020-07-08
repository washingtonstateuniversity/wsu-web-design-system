import React, { Component } from 'react';

import './style.scss';

const ComponentWrapper = ( props ) => {

	let classes = ['wsu-storybook-component__wrapper--' + props.layout ];

	if ( props.className ) {

		classes.push( props.className );

	}

	classes.push( 'wsu-u-width--' + props.width );
	
	return (
		<div className={ classes.join(' ') }>
			{props.children}
		</div>
	);
}

ComponentWrapper.defaultProps = {
	layout:'full', // supported options full,content,centered
	className:false,
	width:'full',
}

export default ComponentWrapper;
