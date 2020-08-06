import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

ComponentWrapper.propTypes = {
	layout: PropTypes.oneOf(['full', 'content', 'centered']),
	className: PropTypes.string,
	width: PropTypes.string,
	showEnds: PropTypes.bool,
}

ComponentWrapper.defaultProps = {
	layout: 'full',
	className: '',
	width: 'full',
	showEnds: false,
}

export default ComponentWrapper;
