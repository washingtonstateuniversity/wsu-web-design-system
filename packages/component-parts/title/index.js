import React from 'react';
import PropTypes from 'prop-types';

import { getUtilityClasses } from '@wsuwebteam/build-tools/js/helpers/utilityClasses';
import { empty } from '@wsuwebteam/build-tools/js/helpers';
import { WrapperLink } from '../index';

const Title = ( props ) => {

	if ( empty( props.children ) ) {
		return null;
	}

	let Tag = props.tag;

	let wrapperClasses = getUtilityClasses(
		[
			{ key:'titleSize', prefix:'wsu-c-title--' },
		],
		props,
		props.className
	)

	const ariaLabel = empty ( props.ariaLabel ) ? props.children : props.ariaLabel;

	return (
		<Tag className={ wrapperClasses } aria-label={ ariaLabel }>
			<WrapperLink href={ props.link }>
				{ props.children }
			</WrapperLink>
		</Tag>
	);

}

Title.propTypes = {
	tag: PropTypes.string,
	link: PropTypes.string,
	className: PropTypes.string,
	titleSize: PropTypes.string,
	ariaLabel: PropTypes.string
}

Title.defaultProps = {
	tag: 'h2',
	link: '',
	className: 'wsu-c-title',
	titleSize: 'default',
	ariaLabel: ''
}

export default Title;