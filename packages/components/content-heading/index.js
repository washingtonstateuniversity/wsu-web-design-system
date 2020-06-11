// External Deps
import React, { Component } from 'react';

import './content-heading.scss';

class ContentHeading extends Component {
	
	render() {

		let Tag = this.props.tag;

		return (
			<Tag name={this.props.name} className="wsu-c-heading">
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
	}
}

export default ContentHeading;