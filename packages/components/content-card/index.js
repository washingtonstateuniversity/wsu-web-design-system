// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import './content-card.scss';
import ContentLink from '../content-link';
import Icon from '../content-icon';
import isFieldEmpty from '../../storybook-components/field-checker';

// Component Starts
class ContentCard extends Component {
	render() {

		function Container(props) {

			if ( props.fieldHasValues ) {
				return (
					<div className={props.className}>
						{props.children}
					</div>
				)
			}

			return null;
		}

		return (
			<div className="wsu-c-card__wrapper">
				<div className="wsu-c-card__container">
					<div className="wsu-c-card__content">

						<div className="wsu-c-card__photo-frame">
							<div className="wsu-c-card__photo-wrapper">
								<img className="wsu-c-card__photo" src="https://source.unsplash.com/collection/895539" alt="#" data-object-fit="" />
							</div>
						</div>
						
						<h3 className="wsu-c-card__heading">{this.props.title}</h3>
						<p className="wsu-c-card__description">{this.props.description}</p>

						<Container className="wsu-c-card__address" fieldHasValues={!isFieldEmpty(this.props.addressLine1) || !isFieldEmpty(this.props.addressLine2)}>
							{this.props.addressLine1 && <span className="wsu-c-card__address-line-1">{this.props.addressLine1}</span>}
							{this.props.addressLine2 && <span className="wsu-c-card__address-line-2">{this.props.addressLine2}</span>}
						</Container>

						<Container className="wsu-c-card__phone" fieldHasValues={!isFieldEmpty(this.props.phoneNumber)}>
							<a href={"tel:" + this.props.phoneNumber} className="wsu-c-card__phone-link">{this.props.phoneNumber}</a>
						</Container>

						<Container className="wsu-c-card__email" fieldHasValues={!isFieldEmpty(this.props.email)}>
							<a href={"mailto:" + this.props.email} className="wsu-c-card__email-link">{this.props.email}</a>
						</Container>

						<Container className="wsu-c-card__website" fieldHasValues={!isFieldEmpty(this.props.website)}>
							<a href={this.props.website} className="wsu-c-card__website-link">Website</a>
						</Container>
						
						<div className="wsu-c-card__content-footer">
							<div className="wsu-c-card__taxonomy-container">
								<p className="wsu-c-card__categories"><span className="wsu-c-card__categories-label">More on:</span> <ContentLink isSecondary>Sed Category</ContentLink>, <ContentLink isSecondary>Sed Category</ContentLink>, <ContentLink isSecondary>Sed Category</ContentLink></p>
								<p className="wsu-c-card__tags"><span className="wsu-c-card__tags-label"><Icon iconName='tag' /></span> <ContentLink isSecondary>Sed Tagegory</ContentLink>, <ContentLink isSecondary>Sed Tagegory</ContentLink>, <ContentLink isSecondary>Sed Tagegory</ContentLink> <a href="#" className="wsu-c-card__tags-more"><Icon iconName='more' /></a></p>
							</div>
							<div className="wsu-c-card__byline-container">
								<p className="wsu-c-card__byline-meta">
									<Icon iconName='calendar' /> Published on 7/15/20
								</p>
								<a className="wsu-c-card__author" rel="author" href="#">Jane Doe</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ContentCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	addressLine1: PropTypes.string,
	addressLine2: PropTypes.string,
	phoneNumber: PropTypes.string,
	email: PropTypes.string,
	website: PropTypes.string,
	tags: PropTypes.array,
	categories: PropTypes.array,
	date: PropTypes.string
}

ContentCard.defaultProps = {
	title: 'Pellentesque Habitant',
	description: 'Morbi tristique senectus et netus et malesuada.',
	addressLine1: '',
	addressLine2: '',
	phoneNumber: '',
	email: '',
	website: '',
	tags: [],
	categories: [],
	date: '',
	author: []

}

export default ContentCard;

