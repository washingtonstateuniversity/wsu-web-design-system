import React, { Component } from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

import { 
	WsuIcon,
	WsuLink
} from '../../'

const ContentCardTitle = (props) => {

	if (empty(props.title)) {
		return null;
	}

	let Tag = props.titleTag;

	return (
		// TODO: heading level needs to be variable
		<Tag className="wsu-c-card__heading"><WsuLink href={props.link} className="wsu-c-card__heading-link">{props.title}</WsuLink></Tag>
	);

}

ContentCardTitle.defaultProps = {
	title: '',
	titleTag: 'h3',
}

export default ContentCardTitle;