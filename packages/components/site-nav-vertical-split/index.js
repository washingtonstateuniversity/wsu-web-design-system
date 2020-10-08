import React, { Component } from 'react';
import wsu_bt_vertical_nav from '@wsuwebteam/build-tools/js/vertical-nav/wsu-bt-vertical-nav';
import wsu_bt_wds from '@wsuwebteam/build-tools/js/wsu-bt-wds';
import { SiteVerticalSplitMenu, SiteNavVerticalSplitNavItem } from './component-parts';
import VerticalSplitMenu from './vertical-split-menu';

import './style.scss';

class SiteNavVerticalSplit extends Component {

	componentDidMount() {

		let wsuVerticalSplitMenu = new VerticalSplitMenu();

	}

	render() {

		return (
			<div className="wsu-s-nav-vertical-split__wrapper">
				<div className="wsu-s-nav-vertical-split__overlay  wsu-s-nav-vertical--close"></div>
				<div className="wsu-s-nav-vertical-split__menu-bar-wrapper">
					<button className="wsu-s-nav-vertical-split__menu-bar wsu-s-nav-vertical--open" aria-label="Open Menu">
						<span class="wsu-s-nav-vertical-split__menu-bar-icon-container">
							<span class="wsu-s-nav-vertical-split__menu-icon-bar"></span>
							<span class="wsu-s-nav-vertical-split__menu-icon-bar"></span>
							<span class="wsu-s-nav-vertical-split__menu-icon-bar"></span>
						</span>
						<span class="wsu-s-nav-vertical-split__menu-bar-label"></span>
					</button>
				</div>
				<nav className="wsu-s-nav-vertical-split">
					<div class="wsu-s-nav-vertical-split__close-wrapper">
						<button class="wsu-s-nav-vertical-split__close-button wsu-s-nav-vertical--close">Close</button>
					</div>
					<ul className="wsu-s-nav-vertical-split__menu" role="menubar">
						{ this.props.menu.children.map( ( navItem, index ) => { return <SiteNavVerticalSplitNavItem key={index} navItem={navItem} /> } ) }
					</ul>
					<div class="wsu-s-nav-vertical-split__close-footer-wrapper">
						<button class="wsu-s-nav-vertical-split__close-button wsu-s-nav-vertical--close">Close</button>
					</div>
				</nav>
			</div>
		)

	}

}



export default SiteNavVerticalSplit;