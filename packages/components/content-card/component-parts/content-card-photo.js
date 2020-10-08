// External Deps
import React, { Component } from 'react';

// Component Deps
import { empty } from '@wsuwebteam/build-tools/js/helpers';

// Component Starts
class ContentCardPhoto extends Component {
	render() {
		if (empty(this.props.src)) {
			return null;
		}

		return (
			<div className="wsu-c-card__photo-frame">
				<div className="wsu-c-card__photo-wrapper">
					<img className="wsu-c-card__photo" src={this.props.src} alt={this.props.alt} data-object-fit="" style={{objectPosition: (this.props.imgFocalPoint.x * 100) + '% ' + (this.props.imgFocalPoint.y * 100) + '%'}}/>
				</div>
			</div>
		);
	}
}

export default ContentCardPhoto;

