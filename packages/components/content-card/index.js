// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import './content-card.scss';
import ContentLink from '../content-link';

// Component Starts
class ContentCard extends Component {
	render() {
		return (
			<div className="wsu-c-card__wrapper">
				<div className="wsu-c-card__container">
					<div className="wsu-c-card__content">
						<div className="wsu-c-card__photo-frame">
							<img className="wsu-c-card__photo" src="https://source.unsplash.com/collection/895539" alt="#" data-object-fit="" />
						</div>
						<h3 className="wsu-c-card__heading">{this.props.title}</h3>
						<p className="wsu-c-card__description">{this.props.description}</p>
						<div className="wsu-c-card__address">
							<span className="wsu-c-card__address-line-1">{this.props.addressLine1}</span>
							<span className="wsu-c-card__city-state-zip">{this.props.addressLine2}</span>
						</div>
						<div className="wsu-c-card__phone">
							<a href={"tel:" + this.props.phoneNumber} className="wsu-c-card__phone-link">{this.props.phoneNumber}</a>
						</div>
						<div className="wsu-c-card__email">
							<a href={"mailto:" + this.props.email} className="wsu-c-card__email-link">{this.props.email}</a>
						</div>
						<div className="wsu-c-card__website">
							<a href={this.props.website} className="wsu-c-card__website-link">Website</a>
						</div>
						<footer className="wsu-c-card__content-footer">
							<p className="wsu-c-card__categories"><span className="wsu-c-card__categories-label">More on:</span> <ContentLink>Sed Category</ContentLink>, <ContentLink>Sed Category</ContentLink>, <ContentLink>Sed Category</ContentLink></p>

						</footer>
					</div>
				</div>
			</div>
		);
	}
}

ContentCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	addressLine1: PropTypes.string.isRequired,
	addressLine2: PropTypes.string.isRequired,
	phoneNumber: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	website: PropTypes.string.isRequired,
	tags: PropTypes.object,
	categories: PropTypes.object,
	date: PropTypes.string
}

ContentCard.defaultProps = {
	title: 'Pellentesque Habitant',
	description: 'Morbi tristique senectus et netus et malesuada.',
	addressLine1: '12345 Etiam rutrum lectus',
	addressLine2: 'Pullman, WA 99163',
	phoneNumber: '123-456-7890',
	email: 'info@wsu.edu',
	website: 'https://wsu.edu/',
	tags: {},
	categories: {},
	date: '',
	author: {}

}

export default ContentCard;

