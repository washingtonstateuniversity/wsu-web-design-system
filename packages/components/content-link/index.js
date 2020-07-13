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

		return (
			<a 
				href={this.props.href} 
				className={classes}
				target={this.props.target}
			>
				{this.props.children}
			</a>
		);
	}
}

ContentLink.propTypes = {
	href: PropTypes.string.isRequired,
	className: PropTypes.string,
	target: PropTypes.string,
	isSecondary: PropTypes.bool,
	isAnimated: PropTypes.bool,
	isHighlyAccessible: PropTypes.bool
}

ContentLink.defaultProps = {
	href: '#',
	classNames: '',
	target: '_self',
	isSecondary: false,
	isAnimated: false,
	isHighlyAccessible: false
}

export default ContentLink;

