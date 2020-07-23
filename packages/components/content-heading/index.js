// External Deps
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Component Deps
import './style.scss';

class ContentHeading extends Component {


	getClasses() {

		let classes = ['wsu-c-heading'];

		if ( this.props.style && 'default' !== this.props.style ) {
			classes.push( 'wsu-c-heading--' + this.props.style );
		}

		if ( this.props.width && 'full' != this.props.width ) {
			classes.push( 'wsu-c-heading--' + this.props.width );
		}

		return classes;

	}
	
	render() {

		let Tag     = this.props.tag;
		
		let classes = this.getClasses();

		return (
			<Tag name={this.props.name} className={classes.join(' ')}>
				{(() => {
					if ( this.props.link ) {
						return (
							<a href={this.props.link}>
								{this.props.children}
							</a>
						)
					} else {
						return this.props.children 
					}
				})()}
			</Tag>
		);
	}
}

ContentHeading.propTypes = {
	tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
	name: PropTypes.string,
	link: PropTypes.string,
	style: PropTypes.string,
	width: PropTypes.string
}

ContentHeading.defaultProps = {
	tag: 'h1',
	name: '',
	link: '#',
	style: 'default',
	width: 'full',
}

export default ContentHeading;