// External Deps
import React, { Component } from 'react';

import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import './style.scss';

class ContentHeading extends Component {

	
	render() {

		let Tag     = this.props.tag;
		
		let classes = getUtilityClasses(
			[
				{ key:'style', prefix:'wsu-c-heading--' },
				{ key:'width', prefix:'wsu-c-heading--' },
				{ key:'marginBefore', classSlug:'margin-before' },
				{ key:'marginAfter', classSlug:'margin-after' },
				{ key:'marginLeft', classSlug:'margin-left' },
				{ key:'marginRight', classSlug:'margin-right' },
				{ key:'textAlign', classSlug:'textalign' },
			],
			this.props,
			['wsu-c-heading']
		)

		return (
			<Tag name={this.props.name} className={classes} >
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
		width: 'default',
	}
}

export default ContentHeading;