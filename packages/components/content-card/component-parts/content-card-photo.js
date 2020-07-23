// External Deps
import React, { Component } from 'react';

// Component Deps
import empty from '../../../storybook-components/field-checker';

// Component Starts
class ContentCardPhoto extends Component {
	render() {
		if (empty(this.props.src)) {
			return null;
		}

		return (
			<div className="wsu-c-card__photo-frame">
				<div className="wsu-c-card__photo-wrapper">
					<img className="wsu-c-card__photo" src={this.props.src} alt={this.props.alt} data-object-fit="" />
				</div>
			</div>
		);
	}
}

export default ContentCardPhoto;

