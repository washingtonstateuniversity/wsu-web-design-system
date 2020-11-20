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
	CardAddress,
	CardPhoneNumber,
	CardEmail,
	CardWebsite,
	CardCopyWrapper,
} from '../component-parts';

// Component Starts
const PersonCard = ( props ) => { 

	return (
		<CardWrapper {...props}>

			<CardPhoto imgSrc={props.imgSrc} imgAlt={props.imgAlt} imgFocalPoint={props.imgFocalPoint} />

			<CardCopyWrapper {...props}>

				<CardTitle title={props.title} />

				<CardSubtitle subtitle={props.subtitle} />

				<CardCaption caption={props.caption} />

				<CardAddress addressLine1={props.addressLine1} addressLine2={props.addressLine2} />

				<CardPhoneNumber phoneNumber={props.phoneNumber} />

				<CardEmail email={props.email} />

				<CardWebsite website={props.website} />
			
			</CardCopyWrapper>

		</CardWrapper>
	)
}

export default PersonCard;
