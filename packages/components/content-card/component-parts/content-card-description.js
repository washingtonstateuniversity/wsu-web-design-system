import React, { Component } from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

class ContentCardDescription extends Component { 
	render() {

		if (empty(this.props.description)) {
			return null;
		}
		
		return (
			<p className="wsu-c-card__description">{this.props.description}</p>
		)
	}
}

export default ContentCardDescription;