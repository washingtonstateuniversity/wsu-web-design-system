import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';

class ContentTable extends Component {
	render() {

		let containerClasses = getUtilityClasses(
			[
				{ key: 'captionTop', prefix:'wsu-c-table--', isBool: true, value: 'captionTop' },
				{ key: 'striped', prefix:'wsu-c-table--', isBool: true, value: 'striped' },
				{ key: 'borders', prefix: 'wsu-c-table--', isBool: true, value: 'borders' },
				{ key: 'spacing', prefix: 'wsu-c-table--' },
				{ key: 'alignment', prefix: 'wsu-c-table--' },
			],
			this.props,
			['wsu-c-table']
		)

		return (
			<table className={containerClasses}>
				{this.props.children}
			</table>
		)
	}
}

ContentTable.propTypes = {
	captionTop: PropTypes.bool,
	striped: PropTypes.bool,
	borders: PropTypes.bool,
	spacing: PropTypes.oneOf(['', 'spacingCompressed', 'spacingExpanded']),
	alignment: PropTypes.oneOf(['', 'alignLeft', 'alignCenter', 'alignRight'])
}

ContentTable.defaultProps = {
	captionTop: false,
	striped: false,
	borders: false,
	spacing: '',
	alignment: '',
}

export default ContentTable;