// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import './style.scss';

import {
	CardPhoto,
	CardTitle,
	CardSubtitle,
	CardPositionTitle,
	CardDescription,
	CardAddress,
	CardPhoneNumber,
	CardEmail,
	CardWebsite,
	CardFooter,
	CardFooterTaxonomies,
	CardFooterByline
} from './component-parts';

// Component Starts
class ContentCard extends Component {
	render() {

		return (
			<div className="wsu-c-card__wrapper">
				<div className="wsu-c-card__container">
					<div className="wsu-c-card__content">

						<CardPhoto src={this.props.image.src} alt={this.props.image.alt} imgFocalPoint={this.props.imgFocalPoint} />

						<CardTitle title={this.props.title} />

						<CardSubtitle subtitle={this.props.subtitle} />

						<CardPositionTitle positionTitle={this.props.positionTitle} />

						<CardDescription description={this.props.description} />

						<CardAddress addressLine1={this.props.addressLine1} addressLine2={this.props.addressLine2} />

						<CardPhoneNumber phoneNumber={this.props.phoneNumber} />

						<CardEmail email={this.props.email} />

						<CardWebsite website={this.props.website} />

						<CardFooter>

							<CardFooterTaxonomies categories={this.props.categories} tags={this.props.tags} />

							<CardFooterByline author={this.props.author} date={this.props.date} />

						</CardFooter>
						
					</div>
				</div>
			</div>
		);
	}
}

ContentCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	addressLine1: PropTypes.string,
	addressLine2: PropTypes.string,
	phoneNumber: PropTypes.string,
	email: PropTypes.string,
	website: PropTypes.string,
	tags: PropTypes.shape({
		name: PropTypes.string,
		url: PropTypes.string
	}),
	categories: PropTypes.shape({
		name: PropTypes.string,
		url: PropTypes.string
	}),
	date: PropTypes.string,
	author: PropTypes.shape({
		name: PropTypes.string,
		url: PropTypes.string
	}),
	image: PropTypes.shape({
		url: PropTypes.string,
		alt: PropTypes.string
	}),
	subtitle: PropTypes.string,
	positionTitle: PropTypes.string,
	imgFocalPoint: PropTypes.shape({
		x: PropTypes.number,
		y: PropTypes.number
	})
}

ContentCard.defaultProps = {
	title: '',
	description: '',
	addressLine1: '',
	addressLine2: '',
	phoneNumber: '',
	email: '',
	website: '',
	tags: [],
	categories: [],
	date: '',
	author: {},
	image: {},
	subtitle: '',
	positionTitle: '',
	imgFocalPoint: {
		x: 0.5,
		y: 0.5
	}
}

export default ContentCard;

