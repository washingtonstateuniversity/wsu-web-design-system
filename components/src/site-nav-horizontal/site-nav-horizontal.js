// TODO: import from NPM once final version is ready
import { Menubar } from '../../../../wsu-build-tools/js/wai-aria/MenubarLinks';
import priority_nav from '../../../../wsu-build-tools/js/wsu-bt-priority-nav';

// Remove no-js class if js is present
document.querySelector('.wsu-s-nav-horizontal__wrapper').classList.remove('wsu-u-no-js');

// Initiate Priority Nav
var horizontal_nav = new priority_nav({
	main_nav_selector: '.wsu-s-nav-horizontal__nav-list',
	priority_nav_list_item_class_name: 'wsu-s-nav-horizontal__nav-item--more',
	priority_nav_list_item_link_class_name: 'wsu-s-nav-horizontal__nav-link',
	priority_nav_list_item_list_class_name: 'wsu-s-nav-horizontal__nav-list--has-children',
	more_inner_html: '<svg class="wsu-s-nav-horizontal__more-button" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="107.33px" height="22px" viewBox="0 0 107.33 22" xml:space="preserve"><defs></defs><circle cx="96.33" cy="11" r="11"/><circle cx="53.67" cy="11" r="11"/><circle cx="11" cy="11" r="11"/></svg>'
});
horizontal_nav.init();

// Initiate keyboard controls for accessibility support
var menubar = new Menubar(document.getElementById('wsu-s-nav-horizontal'));
menubar.init();


