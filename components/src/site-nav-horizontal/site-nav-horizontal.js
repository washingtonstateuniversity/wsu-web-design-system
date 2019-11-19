import priorityNav from '../../../../wsu-build-tools/js/wsu-bt-priorityNav';
import { Menubar } from '../../../../wsu-build-tools/js/wai-aria/MenubarLinks';
// TODO: import from NPM once final version is ready

// Remove no-js class if js is present
document.querySelector('.wsu-s-nav-horizontal__wrapper').classList.remove('wsu-u-no-js');

// Set collapsible nav items to hidden
var collapsibleItems = document.querySelectorAll('.wsu-s-nav-horizontal__nav-link[aria-expanded="true"]');
collapsibleItems.forEach(element => {
	element.setAttribute('aria-expanded', 'false');
});

// Initiate keyboard controls for accessibility support
var menubar = new Menubar(document.getElementById('wsu-s-nav-horizontal'));
menubar.init();

// Initiate Priority Nav
var horizontalNav = new priorityNav('.wsu-s-nav-horizontal__nav-list');
horizontalNav.init();
