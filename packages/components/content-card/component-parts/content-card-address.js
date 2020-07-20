import React, { Component } from 'react';
import empty from '../../../storybook-components/field-checker';


class ContentCardAddress extends Component {
	render() {

		if ( !empty(this.props.addressLine1) || !empty(this.props.addressLine2)) {
			return (
				<div class="wsu-c-card__address">
					{this.props.addressLine1 && <span class="wsu-c-card__address-line-1">{this.props.addressLine1}</span>}
					{this.props.addressLine2 && <span class="wsu-c-card__address-line-2">{this.props.addressLine2}</span>}
				</div>
			)
		}

		return null;
	}
}

export default ContentCardAddress;