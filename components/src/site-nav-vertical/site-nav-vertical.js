import wsu_bt_vertical_nav from '../../../../wsu-build-tools/js/vertical-nav/wsu-bt-vertical-nav';

const vertical_nav = new wsu_bt_vertical_nav({
	nav_selector: '.wsu-s-nav-vertical__nav-link',
	nav_panel_control_selector: '.wsu-s-nav-vertical__menu-icon-link'
});
vertical_nav.init();
