import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class ContentTable extends Component {
	render() {

		const classes = classnames(
			'wsu-c-table', 
			{
				'wsu-c-table--caption-top': this.props.captionTop,
				'wsu-c-table--striped': this.props.striped,
				'wsu-c-table--spacingIsCompressed': this.props.spacingIsCompressed,
				'wsu-c-table--spacingIsExpanded': this.props.spacingIsExpanded,
			}
		)

		return (
			<table className={classes}>
				{this.props.children}
			</table>
		)
	}
}

ContentTable.propTypes = {
	captionTop: PropTypes.bool,
	striped: PropTypes.bool,
	spacingIsCompressed: PropTypes.bool,
	spacingIsExpanded: PropTypes.bool,
}

ContentTable.defaultProps = {
	captionTop: false,
	striped: false,
	spacingIsCompressed: false,
	spacingIsExpanded: false,
}

export default ContentTable;