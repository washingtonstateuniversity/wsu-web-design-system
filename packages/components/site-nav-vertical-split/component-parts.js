import React, { Component } from 'react';

const NavItem = ( props ) => {

	let navItem = getNavItemDefaults( props.navItem );
	let navItemClassArray = ['wsu-s-nav-vertical-split__menu-item-wrapper'];

	if ( navItem.isCurrent ) {
		navItemClassArray.push( 'wsu-s-nav-vertical-split__menu-item--current' );
	}

	if ( navItem.isCurrentParent ) {
		navItemClassArray.push( 'wsu-s-nav-vertical-split__menu-item--current-parent' );
	}


	if ( navItem.children.length ) {

		navItemClassArray.push( 'wsu-s-nav-vertical-split__menu-item--has-children' );

		let navItemClasses = navItemClassArray.join(' ');

		return (
			<li className={ navItemClasses } role="menuitem" aria-expanded="false" aria-haspopup="true">
				<span className="wsu-s-nav-vertical-split__menu-item">
					<a className="wsu-s-nav-vertical-split__menu-item-link" href={navItem.url}>{navItem.label}</a>
					<button className="wsu-s-nav-vertical-split__menu-toggle" aria-label="Open Submenu"></button>
				</span>
				<Menu menu={props.navItem} />
			</li>
		)

	} else {

		let navItemClasses = navItemClassArray.join(' ');

		return (
			<li  className={ navItemClasses }>
				<span className="wsu-s-nav-vertical-split__menu-item">
					<a className="wsu-s-nav-vertical-split__menu-item-link" href="#">
						{navItem.label}
					</a>
				</span>
			</li>
		)

	}

	

}

const Menu = ( props ) => {

	let menu = getNavItemDefaults( props.menu );

	if ( ! menu.children.length ) {

		return '';

	}

	return (
		<ul className="wsu-s-nav-vertical-split__menu" role="menu">
			{ menu.children.map( ( navItem, index ) => { return <NavItem key={index} navItem={navItem} /> } ) }
		</ul>
	)

}

const NavClose = ( props ) => {

	return (
	<div class="wsu-s-nav-vertical-split__close-wrapper">
		<button class="wsu-s-nav-vertical-split__close-button wsu-s-nav-vertical--close">Close</button>
	</div>
	)
}


const MenuBar = ( props ) => {

	return (
		<div className="wsu-s-nav-vertical-split__menu-bar-wrapper">
			<button className="wsu-s-nav-vertical-split__menu-bar wsu-s-nav-vertical--open" aria-label="Open Menu">
				<span class="wsu-s-nav-vertical-split__menu-bar-icon-container">
					<span class="wsu-s-nav-vertical-split__menu-icon-bar"></span>
					<span class="wsu-s-nav-vertical-split__menu-icon-bar"></span>
					<span class="wsu-s-nav-vertical-split__menu-icon-bar"></span>
				</span>
				<span class="wsu-s-nav-vertical-split__menu-bar-label"></span>
				<span class="wsu-s-nav-vertical-split__menu-bar-overlay wsu-s-nav-vertical--open"></span>
			</button>
		</div>
	)

}


const getNavItemDefaults = ( navItem ) => {

	navItem.label           = navItem.hasOwnProperty( 'label' ) ? navItem.label : '';
	navItem.classList       = navItem.hasOwnProperty( 'classList' ) ? navItem.classList : '';
	navItem.url             = navItem.hasOwnProperty( 'url' ) ? navItem.url : '#';
	navItem.children        = ( navItem.hasOwnProperty( 'children' ) && Array.isArray( navItem.children ) ) ? navItem.children : [];
	navItem.isCurrent       = ( navItem.hasOwnProperty( 'isCurrent' ) ) ? navItem.isCurrent : false;
	navItem.isCurrentParent = ( navItem.hasOwnProperty( 'isCurrentParent' ) ) ? navItem.isCurrentParent : false;

	return navItem;
}

export { Menu, NavItem, NavClose, MenuBar };