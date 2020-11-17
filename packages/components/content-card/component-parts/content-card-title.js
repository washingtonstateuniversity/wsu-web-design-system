import React, { Component } from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

const ContentCardTitle = ( props ) => {

	if (empty(props.title)) {
		return null;
	}

	let Tag = props.titleTag;

	return (
		<Tag className="wsu-c-card__heading">
			{props.title}
		</Tag>
	);

}

ContentCardTitle.defaultProps = {
	title: '',
	titleTag: 'h3',
}

export default ContentCardTitle;