import React from 'react';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';
import empty from '../../storybook-components/field-checker';

const EyebrowHeader = ( props ) => {

	if ( empty( props.children ) ) {
		return null;
	}

	return (
		<div className={props.className}>
			{props.children}
		</div>
	);

}


EyebrowHeader.defaultProps = {
	className:'wsu-c-eyebrow-header',
}

export default EyebrowHeader;