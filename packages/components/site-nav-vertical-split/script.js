import VerticalSplitMenu from './assets/js/vertical-split-menu';

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