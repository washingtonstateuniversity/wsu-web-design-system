// TODO: import from NPM once final version is ready
import priority_nav from '../../../../wsu-build-tools/js/wsu-bt-priority-nav';

const nav_horz_wrapper = document.querySelector('.wsu-s-nav-horizontal__wrapper');

if (typeof nav_horz_wrapper != "undefined" && nav_horz_wrapper != null) {

	/**
	 *
	 * Init JS
	 *
	 */
	nav_horz_wrapper.classList.remove('wsu-u-no-js');

	/**
	 *
	 * Init priority nav
	 *
	 */
	var horizontal_nav = new priority_nav({
		main_nav_selector: '.wsu-s-nav-horizontal__nav-list',
		priority_nav_list_item_class_name: 'wsu-s-nav-horizontal__nav-item--more',
		priority_nav_list_item_link_class_name: 'wsu-s-nav-horizontal__nav-link',
		priority_nav_list_item_list_class_name: 'wsu-s-nav-horizontal__nav-list--has-more-items',
		more_inner_html: 'More'
	});

	horizontal_nav.init();

}
