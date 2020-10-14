import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

const ContentSeparator = ( props ) => {

	let baseClass = ( 'default' != props.style ) ? 'wsu-c-em-separator--'+props.style : 'wsu-c-em-separator';

	const classes = classnames(
		baseClass, 
		{
			'wsu-c-em-separator--isHatched': props.isHatched,
			'wsu-c-em-separator--showMoreIndicator': props.showMoreIndicator,
		},
		props.className
	)

	return (
		<hr className={classes} />
	)
}

ContentSeparator.propTypes = {
	style: PropTypes.string,
	isHatched: PropTypes.bool,
	showMoreIndicator: PropTypes.bool,
}

ContentSeparator.defaultProps = {
	style: 'default',
	isHatched: 'true',
	showMoreIndicator: 'false',
}

export default ContentSeparator;