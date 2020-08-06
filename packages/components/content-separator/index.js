import React from 'react';
import classnames from 'classnames';

import './style.scss';

const ContentSeparator = ( props ) => {

	const classes = classnames(
		'wsu-c-separator', 
		{
			'wsu-c-separator--isHatched': props.isHatched,
			'wsu-c-separator--showMoreIndicator': props.showMoreIndicator,
		}
	)

	return (
		<hr className={classes} />
	)
}

export default ContentSeparator;