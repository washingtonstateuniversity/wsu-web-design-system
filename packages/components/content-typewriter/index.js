
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { TypewriterText, Title } from '../../component-parts';

import './style.scss';

const ContentTypewriter = ( props ) => {

	return (
		<Title className="wsu-c-typewriter">
			<span className="wsu-c-typewriter_before-text">{props.beforeText}</span>
			{/* <div className="wsu-c-typewriter_text">{props.text}</div> */}

			<TypewriterText 
				strings={[props.text]}
			/>
			<span className="wsu-c-typewriter_after-text">{props.afterText}</span>

			{/* Become a <TypewriterText strings={["Web Designer", "Civil Engineer", "#FutureCoug"]} isOutlined /> <span className="third-line">today!</span> */}
		</Title>
		
	)
}

ContentTypewriter.propTypes = {
	/**
	 * Text value that shows before the type written text.
	 */
	beforeText: PropTypes.string,
	/**
	 * Text value that is animated.
	 */
	text: PropTypes.string.isRequired,
	/** 
	 * Text value that shows after the type written text.
	 */
	afterText: PropTypes.string
}

ContentTypewriter.defaultProps = {
	beforeText: '', 
	text: '', 
	afterText: '', 
}

export default ContentTypewriter;