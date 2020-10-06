import React, { Component } from 'react';

class ContentTableTr extends Component {
	render() {
		return (
			<tr>
				{this.props.children}
			</tr>
		)
	}
}

export default ContentTableTr;