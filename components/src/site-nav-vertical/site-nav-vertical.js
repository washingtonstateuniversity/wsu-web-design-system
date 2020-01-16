import wsu_bt_vertical_nav from '../../../../wsu-build-tools/js/vertical-nav/wsu-bt-vertical-nav';

const nav_vert_wrapper = document.querySelector('.wsu-s-nav-vertical__wrapper');

if (typeof nav_vert_wrapper != "undefined" && nav_vert_wrapper != null) {

	/**
	 *
	 * Init JS
	 *
	 */
	nav_vert_wrapper.classList.remove('wsu-u-no-js');

	/**
	 *
	 * Init vertical nav
	 *
	 */
	const vertical_nav = new wsu_bt_vertical_nav({
		nav_item_selector: '.wsu-s-nav-vertical__nav-link',
		nav_panel_control_selector: '.wsu-s-nav-vertical__menu-icon-link',
		nav_panel_selector: '.wsu-s-nav-vertical__wrapper',
		nav_list_container_selector: '.wsu-s-nav-vertical__nav-list-container',
	});

	vertical_nav.init();

	/**
	 *
	 * Close Button
	 *
	 */
	const close_link = document.querySelector('.wsu-s-nav-vertical__nav-container-close-link');

	close_link.addEventListener('click', function () {
		vertical_nav.closePanel();
	});

}
