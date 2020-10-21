import React, { Component } from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

const ContentCardCaption = (props) => { 


	if (empty(props.caption)) {
		return null;
	}
	
	return (
		<p className="wsu-c-card__caption">{props.caption}</p>
	)
}

ContentCardCaption.defaultProps = {
	caption: '',
}

export default ContentCardCaption;