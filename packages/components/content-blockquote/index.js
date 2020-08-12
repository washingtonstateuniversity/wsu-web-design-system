import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {getMarginSpacingClasses} from '@wsuwebteam/build-tools/js/helpers/spacingUtilityClasses';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import './style.scss';

const ContentBlockquote = ( props, ref ) => {

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'marginBefore', classSlug:'margin-before' },
			{ key:'marginAfter', classSlug:'margin-after' },
			{ key:'marginLeft', classSlug:'margin-left' },
			{ key:'marginRight', classSlug:'margin-right' },
			{ key:'align', prefix:'wsu-c-blockquote__align--' },
			{ key:'width', prefix:'wsu-c-blockquote__width--' },
			{ key:'textSize', prefix:'wsu-c-blockquote__text-size--' },
		],
		props,
		['wsu-c-blockquote']
	)
	
	return (
		<blockquote>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim suscipit neque. Quisque eget leo eros. 
			Fusce finibus, urna quis vulputate accumsan, urna erat finibus mi, vel euismod felis tellus ac odio. Nullam eu 
			enim in neque ullamcorper convallis quis eleifend ligula. Cras ex ex, placerat sit amet arcu sit amet, bibendum venenatis magna. 
		</blockquote>
	)

}

ContentBlockquote.propTypes = {
	align: PropTypes.string,
	textSize: PropTypes.string,
}

ContentBlockquote.defaultProps = {
	align: 'default',
	textSize: 'default',
	width: 'default',
}

export default ContentBlockquote;
