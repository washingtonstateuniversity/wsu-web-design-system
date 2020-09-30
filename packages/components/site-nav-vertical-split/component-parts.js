import React, { Component } from 'react';

const SiteNavVerticalSplitNavItem = ( props ) => {

	let navItem = getNavItemDefaults( props.navItem );
	let navItemClassArray = ['wsu-s-nav-vertical-split__menu-item-wrapper'];

	if ( navItem.isCurrent ) {
		navItemClassArray.push( 'wsu-s-nav-vertical-split__menu-item--current' );
	}

	if ( navItem.isCurrentParent ) {
		navItemClassArray.push( 'wsu-s-nav-vertical-split__menu-item--current-parent' );
	}

	let navItemClasses = navItemClassArray.join(' ');

	if ( navItem.children.length ) {

		return (
			<li className={ navItemClasses } role="menuitem" aria-expanded="false" aria-haspopup="true">
				<span className="wsu-s-nav-vertical-split__menu-item">
					<a className="wsu-s-nav-vertical-split__menu-item-link" href="#">{navItem.label}</a>
					<button className="wsu-s-nav-vertical-split__menu-toggle"></button>
				</span>
				<SiteNavVerticalSplitMenu menu={props.navItem} />
			</li>
		)

	} else {

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

const SiteNavVerticalSplitMenu = ( props ) => {

	let menu = getNavItemDefaults( props.menu );

	if ( ! menu.children.length ) {

		return '';

	}

	return (
		<ul className="wsu-s-nav-vertical-split__menu" role="menu">
			{ menu.children.map( ( navItem, index ) => { return <SiteNavVerticalSplitNavItem key={index} navItem={navItem} /> } ) }
		</ul>
	)

}


const getNavItemDefaults = ( navItem ) => {

	navItem.label           = navItem.hasOwnProperty( 'label' ) ? navItem.label : '';
	navItem.classList       = navItem.hasOwnProperty( 'classList' ) ? navItem.classList : '';
	navItem.children        = ( navItem.hasOwnProperty( 'children' ) && Array.isArray( navItem.children ) ) ? navItem.children : [];
	navItem.isCurrent       = ( navItem.hasOwnProperty( 'isCurrent' ) ) ? navItem.isCurrent : false;
	navItem.isCurrentParent = ( navItem.hasOwnProperty( 'isCurrentParent' ) ) ? navItem.isCurrentParent : false;

	return navItem;
}

export { SiteNavVerticalSplitMenu, SiteNavVerticalSplitNavItem };