// External Deps
import React, { Component } from 'react';

// Component Deps
import { empty } from '@wsuwebteam/build-tools/js/helpers';

import { 
	WsuIcon,
	WsuLink
} from '../../'

// Component Starts
const ContentCardPhoto = ( props ) => {

	console.log( props );
		if ( empty( props.imageSrc)) {
			return (<strong>{props.imageSrc}</strong>);
		}

		return (
			<div className="wsu-c-card__photo-frame">
				<div className="wsu-c-card__photo-wrapper">
					<WsuLink href={props.link} className="wsu-c-card__photo-link"><img className="wsu-c-card__photo" src={props.imageSrc} alt={props.imageAlt} data-object-fit="" style={{objectPosition: (props.imgFocalPoint.x * 100) + '% ' + (props.imgFocalPoint.y * 100) + '%'}}/></WsuLink>
				</div>
			</div>
		);
}

export default ContentCardPhoto;

