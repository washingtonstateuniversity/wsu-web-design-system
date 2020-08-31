// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import './style.scss';

import ContentCardPhoto from './component-parts/content-card-photo.js';
import ContentCardTitle from './component-parts/content-card-title.js';
import ContentCardDescription from './component-parts/content-card-description.js';
import ContentCardAddress from './component-parts/content-card-address.js';
import ContentCardPhoneNumber from './component-parts/content-card-phone.js';
import ContentCardEmail from './component-parts/content-card-email.js';
import ContentCardWebsite from './component-parts/content-card-website.js';
import { 
	ContentCardFooter,
	ContentCardFooterTaxonomies,
	ContentCardFooterByline
} from './component-parts/content-card-footer';

// Component Starts
class ContentCard extends Component {
	render() {

		return (
			<div className="wsu-c-card__wrapper">
				<div className="wsu-c-card__container">
					<div className="wsu-c-card__content">

						<ContentCardPhoto src={this.props.image.src} alt={this.props.image.alt} />

						<ContentCardTitle title={this.props.title} />

						<ContentCardDescription description={this.props.description} />

						<ContentCardAddress addressLine1={this.props.addressLine1} addressLine2={this.props.addressLine2} />

						<ContentCardPhoneNumber phoneNumber={this.props.phoneNumber} />

						<ContentCardEmail email={this.props.email} />

						<ContentCardWebsite website={this.props.website} />

						<ContentCardFooter>

							<ContentCardFooterTaxonomies categories={this.props.categories} tags={this.props.tags} />

							<ContentCardFooterByline author={this.props.author} date={this.props.date} />

						</ContentCardFooter>
						
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
	image: {}
}

export default ContentCard;

