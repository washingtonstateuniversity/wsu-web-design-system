import React, { Component } from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

class ContentCardSubtitle extends Component {
	render() {

		if (empty(this.props.subtitle)) {
			return null;
		}
		
		return (
			<div className="wsu-c-card__subtitle">{this.props.subtitle}</div>
		)
	}
}

export default ContentCardSubtitle;