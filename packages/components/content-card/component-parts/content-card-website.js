import React, { Component } from 'react';
import empty from '../../../storybook-components/field-checker';

class ContentCardWebsite extends Component {
	render() {
		if (empty(this.props.website)) {
			return null;
		}
		
		return (
			<div className="wsu-c-card__website">
				<a href={this.props.website} className="wsu-c-card__website-link">Website</a>
			</div>
		)
	}
}

export default ContentCardWebsite;