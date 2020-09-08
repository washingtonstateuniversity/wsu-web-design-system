import React, { Component } from 'react';
import empty from '../../../storybook-components/field-checker';

class ContentCardPositionTitle extends Component {
	render() {

		if (empty(this.props.positionTitle)) {
			return null;
		}
		
		return (
			<div className="wsu-c-card__position-title">{this.props.positionTitle}</div>
		)
	}
}

export default ContentCardPositionTitle;