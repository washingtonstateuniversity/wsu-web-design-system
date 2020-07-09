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
			{ props.showEnds && <div className="wsu-storybook-component__start"><span className="wsu-icon wsu-i-arrow-down"></span></div>}
			{props.children}
			{ props.showEnds && <div className="wsu-storybook-component__end"><span className="wsu-icon wsu-i-arrow-up"></span></div>}
		</div>
	);
}

ComponentWrapper.defaultProps = {
	layout:'full', // supported options full,content,centered
	className:false,
	width:'full',
	showEnds:false,
}

export default ComponentWrapper;
