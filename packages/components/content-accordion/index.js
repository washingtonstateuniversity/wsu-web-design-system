import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class ContentAccordion extends Component {

	render() {

		return (
			<div className="wsu-c-accordion">
				<h2 className="wsu-c-accordion__title" tabIndex="0">{this.props.title}</h2>
				<div className="wsu-c-accordion__content">
					<div className="wsu-c-accordion__content-inner">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

ContentAccordion.defaultProps = {
	title: '',
}

export default ContentAccordion;