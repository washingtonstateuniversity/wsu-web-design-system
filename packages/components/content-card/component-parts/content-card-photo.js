// External Deps
import React, { Component } from 'react';

// Component Deps
import { empty } from '@wsuwebteam/build-tools/js/helpers';

// Component Starts
const ContentCardPhoto = ( props ) => {

	if ( empty( props.imgSrc)) {
		return (<strong>{props.imgSrc}</strong>);
	}

	return (
		<div className="wsu-c-card__photo-frame">
			<div className="wsu-c-card__photo-wrapper">
				<div className="wsu-c-card__photo-link"><img className="wsu-c-card__photo" src={props.imgSrc} alt={props.imgAlt} data-object-fit="" style={{objectPosition: (props.imgFocalPoint.x * 100) + '% ' + (props.imgFocalPoint.y * 100) + '%'}}/></div>
			</div>
		</div>
	);

}

export default ContentCardPhoto;

