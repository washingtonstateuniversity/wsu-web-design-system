import React from 'react';
import { empty } from '@wsuwebteam/build-tools/js/helpers';

const Caption = ( props ) => {

	let prefix = ( props.prefix ) ? props.prefix : 'wsu-c-caption';

	let Tag = props.tag;


	if ( empty( props.children ) ) {
		return null;
	}

	return (
		<Tag className={ prefix }>
				{ props.children }
		</Tag>
	);

}


Caption.defaultProps = {
	tag: 'p',
	prefix:'',
}

export default Caption;