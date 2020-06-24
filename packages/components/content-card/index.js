// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
// import './content-icons.scss';

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
							<span className="wsu-c-card__address-line-1">1{this.props.addressLine1}</span>
							<span className="wsu-c-card__city-state-zip">{this.props.addressLine2}</span>
						</div>
						<div className="wsu-c-card__phone">
							<a href="tel:123-456-7890" className="wsu-c-card__phone-link">{this.props.phoneNumber}</a>
						</div>
						<div className="wsu-c-card__email">
							<a href="mailto:info@wsu.edu" className="wsu-c-card__email-link">{this.props.email}</a>
						</div>
						<div className="wsu-c-card__website">
							<a href={this.props.website} className="wsu-c-card__website-link">Website</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContentCard;

