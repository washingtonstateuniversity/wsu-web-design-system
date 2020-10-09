import React, { Component } from 'react';

class ContentTableCaption extends Component {
	render() {
		return (
			<caption>
				{this.props.children}
			</caption>
		)
	}
}

export default ContentTableCaption;