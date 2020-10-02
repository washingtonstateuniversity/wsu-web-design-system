import React, { Component } from 'react';

class ContentTableTd extends Component {
	render() {
		return (
			<td>
				{this.props.children}
			</td>
		)
	}
}

export default ContentTableTd;