import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
	Repeater,
	getUtilityClasses,
	getMarginSpacingClasses
} from '@wsuwebteam/build-tools/js/helpers';

import {
	WsuIcon
} from '../index';

import './style.scss';

const ContentTiles = ( props, ref ) => {

	let wrapperClasses = getUtilityClasses(
		[
			{ key: 'tileLayout', prefix: 'wsu-c-', classSlug: 'tiles' },
		],
		props,
		['wsu-c-tiles']
	);

	let tileContentClasses = getUtilityClasses(
		[
			{ key: 'overlayColor', prefix: 'wsu-c-tile__', classSlug: 'content' },
		],
		props,
		['wsu-c-tile__content']
	);

	return (
		<div className={ wrapperClasses }>
			<Repeater numTimes={8}>
				<a 
					className="wsu-c-tile"
					href="#"
					style={{
						backgroundImage: "url('https://source.unsplash.com/collection/9042806')",
						backgroundPositionX: '50%',
						backgroundPositionY: '50%',
					}}
				>
					<div className={ tileContentClasses }>
						<div className="wsu-c-tile__heading">Santa Claus <WsuIcon name="link" /></div>
						<div className="wsu-c-tile__caption">North Pole</div>
						{/* Add full caption on hover */}
					</div>
				</a>
			</Repeater>
		</div>
	);

}


ContentTiles.propTypes = {
	/** Controls the overall aesthetic of the button */
	style: PropTypes.string,
	/** Text that displays on the button */
	buttonText: PropTypes.string,
	/** Destination for when the button is clicked */
	buttonUrl: PropTypes.string,
	/** Overall size of the button */
	size: PropTypes.string,
	/** Accepts any additional class names */
	className: PropTypes.string,
	/** Defines the shape of the button */
	shape: PropTypes.oneOf(['default', 'round']),
	/** Defines the color of the button */
	color: PropTypes.oneOf(['default', 'white']),
	/** Defines the html tag element for the button, defaults to anchor */
	tag: PropTypes.string,
	/** Accepts onClick function */
	onClick: PropTypes.func,
	/** Icon to be put before buttonText */
	iconBefore: PropTypes.string,
	/** Icon to be put after buttonText */
	iconAfter: PropTypes.string,
	/** Supports [ariaLabel](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) attribute */
	ariaLabel: PropTypes.string,
	/** Supports [ariaLabeledBy](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) attribute */
	ariaLabeledBy: PropTypes.string,
}

ContentTiles.defaultProps = {
	style: 'default',
	buttonText: '',
	buttonUrl: '',
	size: 'default',
	className: '',
	shape: 'default',
	color: 'default',
	tag: 'default',
	onClick: null,
	buttonAlign: 'default',
	iconBefore: '',
	iconAfter: '',
	ariaLabel: '',
	ariaLabeledBy: '',
}

export default ContentTiles;
