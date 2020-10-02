import React, { Component } from 'react';

class ContentTableTh extends Component {
	render() {
		console.log(this.props);
		return (
			<th scope={this.props.scope}>
				{this.props.children}
			</th>
		)
	}
}

export default ContentTableTh;