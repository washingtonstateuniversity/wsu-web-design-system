/* 
 * Controls the toggle state of the more menu in the global navigation 
 */
const toggleMoreMenu = () => {

	const moreMenu = document.querySelector('.wsu-g-header__nav-list');
	const moreBtnIcon = document.querySelector('.wsu-g-header__more-icon-link .wsu-icon');

	if (moreMenu.classList.contains('wsu-g-header__nav-list--open')) {
		moreMenu.classList.remove('wsu-g-header__nav-list--open');
		moreBtnIcon.classList.remove('wsu-i-x-close');
		moreBtnIcon.classList.add('wsu-i-more');
	} else {
		moreMenu.classList.add('wsu-g-header__nav-list--open');
		moreBtnIcon.classList.add('wsu-i-x-close');
		moreBtnIcon.classList.remove('wsu-i-more');
	}

}

export default toggleMoreMenu;