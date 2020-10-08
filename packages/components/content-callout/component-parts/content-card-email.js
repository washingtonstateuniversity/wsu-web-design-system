import React, { Component } from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

class ContentCardEmail extends Component {
	render() {
		if (empty(this.props.email)) {
			return null; 
		}
		
		return (
			<div className="wsu-c-card__email">
				<a href={"mailto:" + this.props.email} className="wsu-c-card__email-link">{this.props.email}</a>
			</div>
		)
	}
}

export default ContentCardEmail;