// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import {
	CardWrapper,
	CardPhoto,
	CardTitle,
	CardSubtitle,
	CardCaption,
	CardCopyWrapper
} from '../component-parts';

// Component Starts
const DefaultCard = ( props ) => { 

	return (
		<CardWrapper {...props}>

			<CardPhoto imgSrc={props.imgSrc} imgAlt={props.imgAlt} imgFocalPoint={props.imgFocalPoint} />

			<CardCopyWrapper {...props}>

				<CardTitle title={props.title} titleTag={props.titleTag} />

				<CardSubtitle subtitle={props.subtitle} />

				<CardCaption caption={props.caption} />

			</CardCopyWrapper>

		</CardWrapper>
	);
}

export default DefaultCard;
