import React from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

import './style.scss';

const ContentMetaAuthor = ( props ) => {

	if ( '' == props.name ) {

		return null;

	} else if ( '' != props.link ) {

		return(
			<address className={ props.className }>
				By <a className={ props.className + '__link' } href={props.link} rel="author">
					<span className={ props.className + '__name' }>{props.name}</span>
				</a>
			</address>
		);

	} else {

		return (
			<address className={ props.className }>
				By <span className={ props.className + '__name'} >{props.name}</span>
			</address>
		);
	}


}


ContentMetaAuthor.defaultProps = {
	className: 'wsu-c-meta-author',
	name: '',
	link:'',
}

export default ContentMetaAuthor;