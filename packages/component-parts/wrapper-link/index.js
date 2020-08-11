import React from 'react';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';
import empty from '../../storybook-components/field-checker';

const WrapperLink = ( props ) => {

	console.log( props );

	if ( ! props.href ) {

		if ( props.hideEmpty ) {
			return null;
		} else {
			return props.children;
		}
	}

	let prefix = ( props.prefix ) ? props.prefix : 'wsu-c-wrapper-link';

	return (
		<a href={props.href} className={prefix}>
			{props.children}
		</a>
	);

}


WrapperLink.defaultProps = {
	href:'',
	prefix:'',
	hideEmpty:false,
}

export default WrapperLink;
