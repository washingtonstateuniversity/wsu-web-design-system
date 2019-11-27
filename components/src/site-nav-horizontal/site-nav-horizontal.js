// TODO: import from NPM once final version is ready
import { Menubar } from '../../../../wsu-build-tools/js/wai-aria/MenubarLinks';
import priority_nav from '../../../../wsu-build-tools/js/wsu-bt-priority-nav';
import wsu_bt_aria_expanded from '../../../../wsu-build-tools/js/wsu-bt-aria-expanded';

// Remove no-js class if js is present
document.querySelector('.wsu-s-nav-horizontal__wrapper').classList.remove('wsu-u-no-js');

// Initiate collapsable aria-expanded items
var expanded_aria_items = new wsu_bt_aria_expanded({
	nav_item_selector: '.wsu-s-nav-horizontal__nav-link'
});
expanded_aria_items.init();

// Initiate Priority Nav
var horizontal_nav = new priority_nav({
	main_nav_selector: '.wsu-s-nav-horizontal__nav-list',
	priority_nav_list_item_class_name: 'wsu-s-nav-horizontal__nav-item--more',
	priority_nav_list_item_link_class_name: 'wsu-s-nav-horizontal__nav-link',
	priority_nav_list_item_list_class_name: 'wsu-s-nav-horizontal__nav-list--has-children'
});
horizontal_nav.init();

// Initiate keyboard controls for accessibility support
var menubar = new Menubar(document.getElementById('wsu-s-nav-horizontal'));
menubar.init();


