import wsu_bt_vertical_nav from '../../../../wsu-build-tools/js/vertical-nav/wsu-bt-vertical-nav';

const vertical_nav = new wsu_bt_vertical_nav({
	nav_selector: '.wsu-s-nav-vertical__nav-link',
	nav_panel_control_selector: '.wsu-s-nav-vertical__menu-icon-link'
});
vertical_nav.init();

document.querySelector('.wsu-s-nav-vertical__nav-container-close-link').addEventListener('click', function (e) {
	vertical_nav.close(e);
});

const navItems = document.querySelectorAll('.wsu-s-nav-vertical__nav-list > li');
const navItemsCount = navItems.length;

document.emitter.on('open', function (e) {
	for (var i = 0; i < navItemsCount; i++) {
		(function (i) {
			setTimeout(function () {
				navItems[i].style.opacity = 1;
				navItems[i].style.marginLeft = '0';
			}, 200 * i);
		})(i);
	};
});

