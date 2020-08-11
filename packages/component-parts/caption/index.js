import React from 'react';
import empty from '../../storybook-components/field-checker';

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