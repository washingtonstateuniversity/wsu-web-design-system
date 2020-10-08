import React, { Component } from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

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