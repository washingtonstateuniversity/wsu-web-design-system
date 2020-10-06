import React, { Component } from 'react';

class ContentTableThead extends Component {
	render() {
		return (
			<thead>
				{this.props.children}
			</thead>
		)
	}
}

export default ContentTableThead;