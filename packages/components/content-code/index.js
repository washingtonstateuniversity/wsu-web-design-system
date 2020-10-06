import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUtilityClasses } from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import './style.scss';

class ContentCode extends Component {
	render() {

		let containerClasses = getUtilityClasses(
			[{}],
			this.props,
			['wsu-c-code']
		)

		return (
			<code className={containerClasses}>
				{this.props.children}
			</code>
		)
	}
}

ContentCode.propTypes = {

}

ContentCode.defaultProps = {

}

export default ContentCode;