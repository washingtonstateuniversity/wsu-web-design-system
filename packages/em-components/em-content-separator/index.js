import React from 'react';
import classnames from 'classnames';

import './style.scss';

const ContentSeparator = ( props ) => {

	let baseClass = ( 'default' != props.style ) ? 'wsu-c-em-separator--'+props.style : 'wsu-c-em-separator';

	const classes = classnames(
		baseClass, 
		{
			'wsu-c-em-separator--isHatched': props.isHatched,
			'wsu-c-em-separator--showMoreIndicator': props.showMoreIndicator,
		}
	)

	return (
		<hr className={classes} />
	)
}

ContentSeparator.defaultProps = {
	style: 'default',
}

export default ContentSeparator;