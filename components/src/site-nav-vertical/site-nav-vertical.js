import wsu_bt_vertical_nav from '../../../../wsu-build-tools/js/vertical-nav/wsu-bt-vertical-nav';

/**
 *
 * Init vertical nav
 *
 */
const vertical_nav = new wsu_bt_vertical_nav({
	nav_selector: '.wsu-s-nav-vertical__nav-link',
	nav_panel_control_selector: '.wsu-s-nav-vertical__menu-icon-link',
	nav_list_container_selector: '.wsu-s-nav-vertical__nav-list-container'
});
vertical_nav.init();

/**
 *
 * Animate menu items in on vert nav open using emitters
 *
 */
const navItems = document.querySelectorAll('.wsu-s-nav-vertical__nav-list-container > li');
const navItemsCount = navItems.length;

document.emitter.on('wsu-vertical-nav--after-open', function (e) {
	for (var i = 0; i < navItemsCount; i++) {
		(function (i) {
			const duration = 250;
			let increment = duration + (duration * i);

			setTimeout(function () {
				navItems[i].style.opacity = 1;
				navItems[i].style.marginLeft = '0';
			}, increment);
		})(i);
	};
});
