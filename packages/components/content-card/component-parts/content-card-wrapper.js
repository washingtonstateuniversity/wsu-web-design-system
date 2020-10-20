import React, { Component } from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

const ContentCardWrapper = ( props ) => { 

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'style', prefix: 'wsu-c-card--style-' },
			{ key:'className', prefix: '' },
		],
		props,
		['wsu-c-card']
	)

	
	return (
		<div className={wrapperClasses} >
			<div className="wsu-c-card__container">
				<div className="wsu-c-card__content">
					{props.children}					
				</div>
			</div>
		</div>
	)
}

export default ContentCardWrapper;