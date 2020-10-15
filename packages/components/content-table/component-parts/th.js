import React, { Component } from 'react';

class ContentTableTh extends Component {
	render() {
		return (
			<th scope={this.props.scope}>
				{this.props.children}
			</th>
		)
	}
}

export default ContentTableTh;