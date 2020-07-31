import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './site-header.scss';

const SiteHeader = (props) => {
	const classes = classnames(
		'wsu-s-header__wrapper', 
		{
			'wsu-s-header__wrapper--dark': props.isDark,
		}
	)

	return (
		<section class={classes}>
			<header class="wsu-s-header__container">
				<h1 class="wsu-s-header__title">Sports Management</h1>
				<h2 class="wsu-s-header__subtitle">College of Education</h2>
			</header>
		</section>
	)
}

SiteHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	isDark: PropTypes.bool
}

SiteHeader.defaultProps = {
	title: '',
	subtitle: '',
	isDark: false
}

export default SiteHeader;