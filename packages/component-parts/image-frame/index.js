import React from 'react';
import {getUtilityClasses} from '@wsuwebteam/build-tools/js/helpers/utilityClasses';
import { empty } from '@wsuwebteam/build-tools/js/helpers';
import {
	WrapperLink 
} from '../index';

const ImageFrame = ( props ) => {

	let prefix = ( props.prefix ) ? props.prefix : 'wsu-c-image-frame';

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'imageShape', prefix:'wsu-c-image-frame--' },
			{ key:'isNotched', prefix:'wsu-c-image-frame--', isBool:true, value:'notched' },
		],
		props,
		prefix
	)

	if ( empty( props.imageSrc ) ) {
		return null;
	}

	return (
		<div className={ wrapperClasses }>
			<div className={ prefix + '__image-wrapper' }>
				<WrapperLink href={ props.link }>
				<img className={ prefix + '__image' } src={props.imageSrc } alt={props.imageAlt} data-object-fit="" />
				</WrapperLink>
			</div>
		</div>
	);

}


ImageFrame.defaultProps = {
	style:'default',
	imageSrc:'',
	imageAlt:'',
	imageSize:'default',
	imageShape:'default',
	link:'',
	prefix:'',
}

export default ImageFrame;