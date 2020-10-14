import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUtilityClasses } from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import './style.scss';

class ContentImage extends Component {
	render() {

		let containerClasses = getUtilityClasses(
			[
				{ key: 'alignment', prefix: 'wsu-c-image--' },
			],
			this.props,
			['wsu-c-image']
		)

		return (
			<img src={this.props.src} alt={this.props.alt} className={containerClasses} />
		)
	}
}

ContentImage.propTypes = {
	/** Specifies the path to the image. */
	src: PropTypes.string,
	/** Specifies an alternate text for an image. */
	alt: PropTypes.string,
	/** Specifies how the image aligns within its frame (left, center, right). */
	alignment: PropTypes.oneOf(['left', 'center', 'right']),
}

ContentImage.defaultProps = {
	src: 'https://s3.wp.wsu.edu/uploads/sites/2438/2020/08/Coug-Logo-on-Chinook-crop_8520.jpg',
	alt: 'Photo of the Chinook building on the WSU Pullman Campus in Pullman, Washington.',
	alignment: ''
}

export default ContentImage;