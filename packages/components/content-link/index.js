// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Component Deps
import './style.scss';

// Component Starts
class ContentLink extends Component {
	render() {

		const classes = classnames(
			'wsu-c-link', 
			{
				'wsu-c-link--is-secondary': this.props.isSecondary,
				'wsu-c-link--motion': this.props.isAnimated,
				'wsu-c-link--a11y': this.props.isHighlyAccessible
			}
		)

		if ( this.props.isList && !this.props.isLast ) {
			return (
				<>
					<a 
						href={this.props.href} 
						className={classes}
						target={this.props.target}
						rel={this.props.rel}
					>
						{this.props.children}
					</a>
					{', '} 
				</>
			);	
		} else {
			return (
				<>
					<a 
						href={this.props.href} 
						className={classes}
						target={this.props.target}
						rel={this.props.rel}
					>
						{this.props.children}
					</a>
				</>
			);
		}
	}
}

ContentLink.propTypes = {
	/** Specifies the URL of the page the link goes to. */
	href: PropTypes.string.isRequired,
	/** Any custom class names to be passed to the link. */
	className: PropTypes.string,
	/** The target attribute specifies where to open the linked document. */
	target: PropTypes.string,
	/** For Limited use, in specific use cases. For example a list of clickable tags or categories. */
	isSecondary: PropTypes.bool,
	/** Changes the display to a more highly animated link version. */
	isAnimated: PropTypes.bool,
	/** Changes the display to a more highly accessible link version. */
	isHighlyAccessible: PropTypes.bool,
	/** If using in a list and would like a comma separated list of values. */
	isList: PropTypes.bool,
	// TODO: implement max tag count
	// maxTagCount: PropTypes.number,
	/** The required rel attribute specifies the relationship between the current document and the linked document/resource. */
	rel: PropTypes.string
}

ContentLink.defaultProps = {
	href: '',
	classNames: '',
	target: '_self',
	isSecondary: false,
	isAnimated: false,
	isHighlyAccessible: false,
	isList: false,
	isLast: true,
	// maxTagCount: 5,
	rel: ''
}

export default ContentLink;

