import React from 'react';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';
import empty from '../../storybook-components/field-checker';

const EyebrowHeader = ( props ) => {

	if ( empty( props.children ) ) {
		return null;
	}

	let prefix = ( props.prefix ) ? props.prefix : 'wsu-c-eyebrow-header';

	return (
		<div className={prefix}>
			{props.children}
		</div>
	);

}


EyebrowHeader.defaultProps = {
	prefix:'',
}

export default EyebrowHeader;