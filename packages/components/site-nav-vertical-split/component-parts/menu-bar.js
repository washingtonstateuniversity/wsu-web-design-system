import React from 'react';

const MenuBar = ( props ) => {

	return (
		<div className="wsu-s-nav-vertical-split__menu-bar-wrapper">
			<button className="wsu-s-nav-vertical-split__menu-bar wsu-s-nav-vertical--open" aria-label="Open Menu">
				<span class="wsu-s-nav-vertical-split__menu-bar__icon">
					<span class="wsu-s-nav-vertical-split__menu-bar__icon-bar"></span>
					<span class="wsu-s-nav-vertical-split__menu-bar__icon-bar"></span>
					<span class="wsu-s-nav-vertical-split__menu-bar__icon-bar"></span>
				</span>
				<span class="wsu-s-nav-vertical-split__menu-bar__label"></span>
				<span class="wsu-s-nav-vertical-split__menu-bar__overlay wsu-s-nav-vertical--open"></span>
			</button>
		</div>
	)

}

export default MenuBar;