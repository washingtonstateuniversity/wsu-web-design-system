// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUtilityClasses } from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import { getVerticalSpacingClasses, getMarginSpacingClasses } from '@wsuwebteam/build-tools/js/helpers/spacingUtilityClasses';
import { TypewriterText, Title } from '../../component-parts';

import './style.scss';

class EmContentHero extends Component {

	render() {
		let wrapperClasses = getUtilityClasses(
			[
				{ key: 'marginBefore', classSlug: 'margin-before' },
				{ key: 'marginAfter', classSlug: 'margin-after' },
				{ key: 'paddingBefore', classSlug: 'padding-before' },
				{ key: 'paddingAfter', classSlug: 'padding-after' },
			],
			this.props,
			'wsu-c-em-hero__wrapper'
		)

		return (
			<div className={ wrapperClasses }>
				<div className="wsu-c-em-hero__container" style={{ backgroundImage: `url(${this.props.backgroundImageUrl})` }}>
					<div className="wsu-c-em-hero__content">
						{this.props.title && <Title className="wsu-c-em-hero__title" ariaLabel={this.props.titleAriaLabel}>{this.props.title}</Title>}
						{this.props.description && <div className="wsu-c-em-hero__description">{this.props.description}</div>}
						{this.props.children}
					</div>
				</div>
			</div> 
		);
	}
}

EmContentHero.propTypes = {
	title: PropTypes.string,
	titleTag: PropTypes.string,
	titleAriaLabel: PropTypes.string,
	description: PropTypes.string,
	backgroundImageUrl: PropTypes.string
}

EmContentHero.defaultProps = {
	title: '',
	titleTag: 'div',
	titleAriaLabel: '',
	description: '', 
	backgroundImageUrl: 'https://s3.wp.wsu.edu/uploads/sites/2438/2020/08/Coug-Logo-on-Chinook-crop_8520.jpg',
}

export default EmContentHero;