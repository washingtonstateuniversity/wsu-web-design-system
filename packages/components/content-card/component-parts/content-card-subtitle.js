import React, { Component } from 'react';
import empty from '../../../storybook-components/field-checker';

class ContentCardSubtitle extends Component {
	render() {

		if (empty(this.props.subtitle)) {
			return null;
		}
		
		return (
			<div class="wsu-c-card__subtitle">{this.props.subtitle}</div>
		)
	}
}

export default ContentCardSubtitle;