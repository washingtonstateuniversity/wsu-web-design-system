import React, { Component } from 'react';

import { 
	WsuIcon,
	WsuLink
} from '../../';

import { empty } from '@wsuwebteam/build-tools/js/helpers';

class ContentCardFooter extends Component {
	render() {

		if (
			!empty(this.props.children[0].props.categories) ||
			!empty(this.props.children[0].props.tags) ||
			!empty(this.props.children[1].props.author) ||
			!empty(this.props.children[1].props.date)
		 ) {
			return (
				<div className="wsu-c-card__content-footer">
					{this.props.children}
				</div>
			)
		} else {
			return null;
		}
	}
}
class ContentCardFooterTaxonomies extends Component {
	render() {

		if (empty(this.props.categories) && empty(this.props.tags)) {
			return null;
		}

		return (
			<div className="wsu-c-card__taxonomy-container">
				{ !empty(this.props.categories) && <p className="wsu-c-card__categories">
					<span className="wsu-c-card__categories-label">More on: </span>
					{
						this.props.categories.map( (category, i) => {
							let isLast = ((this.props.categories.length - 1) == i) ? true : false;

							return <WsuLink url={category.url} isSecondary isList={true} isLast={isLast}>{category.name}</WsuLink>;
						})
					}
				</p> }

				{ !empty(this.props.tags) && <p className="wsu-c-card__tags">
					<span className="wsu-c-card__tags-label"><WsuIcon name='tag' /></span>
					{/* TODO: This currently displays all tags, this might be an issue if a post/item has a ton of tags. We need to add some sort of mechanism to cap tags at a certain point and display the "more" ellipsis WsuIcon instead */}
					{
						this.props.tags.map( (tag, i) => {
							let isLast = ((this.props.tags.length - 1) == i) ? true : false;

							return <WsuLink url={tag.url} isSecondary isList={true} isLast={isLast}>{tag.name}</WsuLink>;
						})
					}
				</p> }
			</div>
		)
	}
}
class ContentCardFooterByline extends Component {
	render() {
		if (empty(this.props.date) && empty(this.props.author)) {
			return null;
		}
		
		return (
			<div className="wsu-c-card__byline-container">
				{this.props.date && <p className="wsu-c-card__byline-meta">
					<WsuIcon name='calendar' /> Published on {this.props.date}
				</p>}
				{!empty(this.props.author) && <p className="wsu-c-card__author">
					By <WsuLink isSecondary rel="author" href={this.props.author.url}>{this.props.author.name}</WsuLink>
				</p>}
			</div>
		)
	}
}

export {
	ContentCardFooter, 
	ContentCardFooterTaxonomies, 
	ContentCardFooterByline
}; 