import React from 'react';

import './style.scss';

const ContentMetaPublishDate = ( props ) => {

	if ( '' == props.date ) {

		return null;

	} else {

		return <time  className={props.className} pubdate={props.date}>{props.date}</time>

	}


}


ContentMetaPublishDate.defaultProps = {
	className: 'wsu-c-meta-publish-date',
	date: '',
}

export default ContentMetaPublishDate;