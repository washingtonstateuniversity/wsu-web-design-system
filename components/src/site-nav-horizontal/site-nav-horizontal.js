// TODO: import from NPM once final version is ready
import { Menubar } from '../../../../wsu-build-tools/js/wai-aria/MenubarLinks';
import priorityNav from '../../../../wsu-build-tools/js/wsu-bt-priorityNav';
import wsu_bt_aria_expanded from '../../../../wsu-build-tools/js/wsu_bt_aria_expanded';

// Remove no-js class if js is present
document.querySelector('.wsu-s-nav-horizontal__wrapper').classList.remove('wsu-u-no-js');

// Initiate collapsable aria-expanded items
var expanded_aria_items = new wsu_bt_aria_expanded({
	nav_item_selector: '.wsu-s-nav-horizontal__nav-link'
});
expanded_aria_items.init();

// Initiate Priority Nav
var horizontalNav = new priorityNav({
	mainNavSelector: '.wsu-s-nav-horizontal__nav-list',
	priorityNavListItemClassName: 'wsu-s-nav-horizontal__nav-item--more',
	priorityNavListItemLinkClassName: 'wsu-s-nav-horizontal__nav-link',
	priorityNavListItemListClassName: 'wsu-s-nav-horizontal__nav-list--has-children'
});
horizontalNav.init();

// Initiate keyboard controls for accessibility support
var menubar = new Menubar(document.getElementById('wsu-s-nav-horizontal'));
menubar.init();


