import React, { Component } from 'react';

class ContentTableTbody extends Component {
	render() {
		return (
			<tbody>
				{this.props.children}
			</tbody>
		)
	}
}

export default ContentTableTbody;