import React, { Component } from 'react';
import { 
	Menu, 
	NavItem,
	NavClose,
} from './component-parts';

import { 
	MenuBar
} from './component-parts/'; 

import VerticalSplitMenu from './assets/js/vertical-split-menu';

import './style.scss';

class SiteNavVerticalSplit extends Component {

	componentDidMount() {

		let wsuVerticalSplitMenu = new VerticalSplitMenu(
			{
				navWrapperSelector: '.wsu-s-nav-vertical-split__wrapper',
				navSelector: '.wsu-s-nav-vertical-split',
				menuItemsSelector: '.wsu-s-nav-vertical-split__menu-item',
				menuItemsToggleSelector: '.wsu-s-nav-vertical-split__menu-toggle',
				menuItemsLinkSelector: '.wsu-s-nav-vertical-split__menu-item-link',
				menuStartClosedSelector: '.wsu-s-nav-vertical-split--closed',
				menuItemsOpenClass: 'wsu-s-nav-vertical-split__menu--open',
				navCloseClass: 'wsu-s-nav-vertical--close',
				navOpenClass: 'wsu-s-nav-vertical--open',
				navToggleClass: 'wsu-s-nav-vertical--toggle',
				navClosedClass: 'wsu-s-nav-vertical--closed',
				navOpenedClass: 'wsu-s-nav-vertical--opened', 
			}
		);

		wsuVerticalSplitMenu.initNav();

	}

	render() {

		return (
			<div className="wsu-s-nav-vertical-split__wrapper">
				<div className="wsu-s-nav-vertical-split__overlay  wsu-s-nav-vertical--close"></div>
				<MenuBar />
				<nav className="wsu-s-nav-vertical-split">
					<NavClose />
					<ul className="wsu-s-nav-vertical-split__menu" role="menubar">
						{ this.props.menu.children.map( ( navItem, index ) => { return <NavItem key={index} navItem={navItem} /> } ) }
					</ul>
					<NavClose />
				</nav>
			</div>
		)

	}

}



export default SiteNavVerticalSplit;