import React, { Component } from 'react';
import { getUtilityClasses } from '@wsuwebteam/build-tools/js/helpers';
import './style.scss';


const P = ( props ) => {

	let classes = getUtilityClasses(
		[
			{ key: 'width', prefix: 'wsu-c-', classSlug: 'paragraph' },
		],
		props,
		['wsu-c-paragraph']
	);

	return <p className={classes}>{props.children}</p>;

} 

export default P;