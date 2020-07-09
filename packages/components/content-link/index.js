// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import './content-link.scss';

// Component Starts
class ContentLink extends Component {
	render() {
		return (
			<a 
				href={this.props.href} 
				className={'wsu-c-link ' + this.props.classNames}
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
	target: PropTypes.string
}

ContentLink.defaultProps = {
	href: '#',
	classNames: '',
	target: '_self'
}

export default ContentLink;

