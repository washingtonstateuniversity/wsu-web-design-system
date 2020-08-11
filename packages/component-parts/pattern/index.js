import React from 'react';
import PropTypes from 'prop-types';
import { getUtilityClasses } from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

// Component Deps
import './style.scss'

const Pattern = ( props ) => {

	let classes = getUtilityClasses(
		[
			{ key:'name', prefix:'wsu-c-pattern--' },
		],
		props,
		'wsu-c-pattern'
	)

	

	return (
		<div 
			className={classes}
			style={{
				top: props.top,
				left: props.left,
				width: props.width,
				height: props.height
			}}
		></div>
	);

}

Pattern.propTypes = {
	name: PropTypes.string,
	left: PropTypes.string,
	top: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
}

Pattern.defaultProps = {
	name: 'angled-lines',
	left: '0',
	top: '0',
	width: 'auto',
	height: 'auto',
}

export default Pattern;