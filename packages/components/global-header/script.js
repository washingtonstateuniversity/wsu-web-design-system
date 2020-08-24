import wsu_wds from '@wsuwebteam/build-tools/js/wsu-bt-wds';
import toggleMoreMenu from './component-parts/global-header-more-menu';

/* 
 * Sets the event listener on the global header
 */
const globalHeaderWrapper = document.querySelector('.wsu-g-header__wrapper');

if (typeof globalHeaderWrapper != "undefined" && globalHeaderWrapper != null) {

	/**
	 *
	 * Init JS
	 *
	 */
	globalHeaderWrapper.classList.remove('wsu-u-no-js');

	// Attach toggle to window
	wsu_wds.toggleMoreMenu = toggleMoreMenu;

}
