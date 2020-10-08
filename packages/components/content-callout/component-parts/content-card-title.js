import React, { Component } from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

class ContentCardTitle extends Component {
	render() {

		if (empty(this.props.title)) {
			return null;
		}

		return (
			// TODO: heading level needs to be variable
			<h3 className="wsu-c-card__heading">{this.props.title}</h3>
		);

		return null;
	}
}

export default ContentCardTitle;