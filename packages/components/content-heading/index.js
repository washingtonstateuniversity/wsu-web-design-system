// External Deps
import React, { Component } from 'react';

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

	static defaultProps = {
		tag: 'h1',
		name: false,
		link: false,
		style: 'default',
		width: 'full',
	}
}

export default ContentHeading;