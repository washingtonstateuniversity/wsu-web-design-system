// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Component Deps
import './content-link.scss';

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
	href: PropTypes.string.isRequired,
	className: PropTypes.string,
	target: PropTypes.string,
	isSecondary: PropTypes.bool,
	isAnimated: PropTypes.bool,
	isHighlyAccessible: PropTypes.bool,
	isList: PropTypes.bool,
	maxTagCount: PropTypes.number,
	rel: PropTypes.string
}

ContentLink.defaultProps = {
	href: '#',
	classNames: '',
	target: '_self',
	isSecondary: false,
	isAnimated: false,
	isHighlyAccessible: false,
	isList: false,
	isLast: true,
	maxTagCount: 5,
	rel: ''
}

export default ContentLink;

