import wsu_bt_aria_expanded from '@wsu/build-tools/js/wsu-bt-aria-expanded';

// Remove no-js class if js is present
document.querySelector('.wsu-g-header__wrapper').classList.remove('wsu-u-no-js');

// Search toggle
var expanded_aria_items = new wsu_bt_aria_expanded({
	nav_item_selector: '.wsu-g-header__search-icon-link'
});
expanded_aria_items.init();

document.querySelector('.wsu-g-header__search-icon-link').addEventListener('click', function () {
	// document.querySelector('.wsu-g-header_search-input').focus();
})
