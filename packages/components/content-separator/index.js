import React from 'react';
import classnames from 'classnames';

import './style.scss';

const ContentSeparator = ( props ) => {

	let baseClass = ( 'default' != props.style ) ? 'wsu-c-separator--'+props.style : 'wsu-c-separator';

	const classes = classnames(
		baseClass, 
		{
			'wsu-c-separator--isHatched': props.isHatched,
			'wsu-c-separator--showMoreIndicator': props.showMoreIndicator,
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