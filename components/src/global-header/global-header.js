document.addEventListener("DOMContentLoaded", function () {

	/**
	 *
	 * More links
	 *
	 */
	const global_header_links_toggle = document.querySelector('.wsu-g-header__more-icon-link');

	global_header_links_toggle.addEventListener('click', function () {
		console.log('Links toggle -- Coming soon!');
	});

	/**
	 *
	 * Search toggle
	 *
	 */
	const global_header_search_toggle = document.querySelector('.wsu-g-header__search-icon-link');

	global_header_search_toggle.addEventListener('click', function () {
		console.log('Search toggle -- Coming soon!');
	});

	/**
	 *
	 * Vertical nav toggle
	 *
	 */
	const global_header_menu_toggle = document.querySelector('.wsu-g-header__menu-icon-link');

	global_header_menu_toggle.addEventListener('click', function () {
		window.vertical_nav.togglePanel();
	});

});
