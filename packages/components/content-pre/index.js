import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getUtilityClasses } from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

import './style.scss';

class ContentPre extends Component {
	render() {

		let containerClasses = getUtilityClasses(
			[{}],
			this.props,
			['wsu-c-pre']
		)

		return (
			<pre className={containerClasses}>
				{this.props.children}
			</pre>
		)
	}
}

ContentPre.propTypes = {

}

ContentPre.defaultProps = {

}

export default ContentPre;