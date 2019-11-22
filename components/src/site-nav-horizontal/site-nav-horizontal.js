// TODO: import from NPM once final version is ready
import priorityNav from '../../../../wsu-build-tools/js/wsu-bt-priorityNav';
import { Menubar } from '../../../../wsu-build-tools/js/wai-aria/MenubarLinks';

// Remove no-js class if js is present
document.querySelector('.wsu-s-nav-horizontal__wrapper').classList.remove('wsu-u-no-js');

// Set collapsible nav items to hidden
var collapsibleItems = document.querySelectorAll('.wsu-s-nav-horizontal__nav-link[aria-expanded="true"]');
collapsibleItems.forEach(element => {
	element.setAttribute('aria-expanded', 'false');
});

// Initiate Priority Nav
var horizontalNav = new priorityNav({
	mainNavSelector: '.wsu-s-nav-horizontal__nav-list',
	priorityNavListItemClassName: 'wsu-s-nav-horizontal__nav-item--more',
	priorityNavListItemLinkClassName: 'wsu-s-nav-horizontal__nav-link',
	priorityNavListItemListClassName: 'wsu-s-nav-horizontal__nav-list--has-children'
});
horizontalNav.init();

// Initiate keyboard controls for accessibility support
var menubar = new Menubar(document.getElementById('wsu-s-nav-horizontal'));
menubar.init();

collapsibleItems.forEach(element => {
	element.addEventListener('click', function (e) {
		e.preventDefault

		if (this.getAttribute('aria-expanded') == 'true') {
			this.setAttribute('aria-expanded', 'false');
		} else {
			this.setAttribute('aria-expanded', 'true');
		}
	})
})
