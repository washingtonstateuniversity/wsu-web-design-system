import wsu_bt_vertical_nav from '../../../../wsu-build-tools/js/vertical-nav/wsu-bt-vertical-nav';

const vertical_nav = new wsu_bt_vertical_nav({
	nav_selector: '.wsu-s-nav-vertical__nav-link',
	nav_panel_control_selector: '.wsu-s-nav-vertical__menu-icon-link'
});
vertical_nav.init();

// Methods
function openMenu() {
	document.querySelector('.wsu-s-nav-vertical__wrapper').classList.add('wsu-s-nav-vertical__wrapper--open');
}

function closeMenu() {
	document.querySelector('.wsu-s-nav-vertical__wrapper').classList.remove('wsu-s-nav-vertical__wrapper--open');
}

function toggleMenuDrawer(e) {
	if (e.currentTarget.getAttribute('aria-expanded') == 'false') {
		closeMenu();
	} else {
		openMenu();

		document.querySelector('.wsu-s-nav-vertical__wrapper').addEventListener('transitionend', function (e) {
			console.log(e);

			// document.querySelector('.wsu-s-nav-vertical__menu-icon-link').style.marginLeft = "-61px";
		});
	}
}

// Event Listeners
document.querySelector('.wsu-s-nav-vertical__menu-icon-link').addEventListener('click', function (e) {
	e.preventDefault();
	toggleMenuDrawer(e);
});

document.querySelector('.wsu-s-nav-vertical__nav-container-close-link').addEventListener('click', function (e) {
	e.preventDefault();
	closeMenu();
});

