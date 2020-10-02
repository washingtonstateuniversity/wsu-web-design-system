import React, { Component } from 'react';

class ContentTableTfoot extends Component {
	render() {
		return (
			<tfoot>
				{this.props.children}
			</tfoot>
		)
	}
}

export default ContentTableTfoot;