import wsu_wds from '@wsuwebteam/build-tools/js/wsu-bt-wds';

/**
 *
 * More links
 *
 */
const global_header_links_toggle = document.querySelector('.wsu-g-header__more-icon-link');

if (typeof global_header_links_toggle != "undefined" && global_header_links_toggle != null) {
	global_header_links_toggle.addEventListener('click', function () {
		console.log('Links toggle -- Coming soon!');
	});
}

/**
 *
 * Search toggle
 *
 */
const global_header_search_toggle = document.querySelector('.wsu-g-header__search-icon-link');

if (typeof global_header_search_toggle != "undefined" && global_header_search_toggle != null) {
	global_header_search_toggle.addEventListener('click', function () {
		console.log('Search toggle -- Coming soon!');
	});
}

/**
 *
 * Vertical nav toggle
 *
 */
const global_header_menu_toggle = document.querySelector('.wsu-g-header__menu-icon-link');

if (typeof global_header_menu_toggle != "undefined" && global_header_menu_toggle != null) {
	global_header_menu_toggle.addEventListener('click', function (e) {
		wsu_wds.vertical_nav.toggle_panel(e);
	});
}

/**
 *
 * Hide on scroll
 *
 */
document.addEventListener('scroll', function () {
	setTimeout(() => {
		if (document.body.scrollTop > 30) {
			document.body.classList.add('wsu-g-header--is-hidden');
		} else {
			document.body.classList.remove('wsu-g-header--is-hidden');
		}
	}, 100);
});
