import React, { Component } from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';


const ContentCardCopyWrapper = ( props ) => {

	return (
		<div className="wsu-c-card__copy">
			{props.children}
		</div>
	);

}

export default ContentCardCopyWrapper;