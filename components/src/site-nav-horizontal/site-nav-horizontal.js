// TODO: import from NPM once final version is ready

import priority_nav from '../../../../wsu-build-tools/js/wsu-bt-priority-nav';

// Remove no-js class if js is present
document.querySelector('.wsu-s-nav-horizontal__wrapper').classList.remove('wsu-u-no-js');

// Initiate Priority Nav
var horizontal_nav = new priority_nav({
	main_nav_selector: '.wsu-s-nav-horizontal__nav-list',
	priority_nav_list_item_class_name: 'wsu-s-nav-horizontal__nav-item--more',
	priority_nav_list_item_link_class_name: 'wsu-s-nav-horizontal__nav-link',
	priority_nav_list_item_list_class_name: 'wsu-s-nav-horizontal__nav-list--has-more-items',
	more_inner_html: 'More'
});
horizontal_nav.init();

