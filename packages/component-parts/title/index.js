import React from 'react';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';
import empty from '../../storybook-components/field-checker';
import {
	WrapperLink 
} from '../index';

const Title = ( props ) => {

	if ( empty( props.children ) ) {
		return null;
	}

	let prefix = ( props.prefix ) ? props.prefix : 'wsu-c-title';

	let Tag = props.tag;

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'titleSize', prefix:'wsu-c-title--' },
		],
		props,
		prefix
	)

	return (
		<Tag className={ wrapperClasses } >
			<WrapperLink href={ props.link }>
				{ props.children }
			</WrapperLink>
		</Tag>
	);

}


Title.defaultProps = {
	tag: 'h2',
	link:'',
	prefix:'',
	titleSize:'default'
}

export default Title;