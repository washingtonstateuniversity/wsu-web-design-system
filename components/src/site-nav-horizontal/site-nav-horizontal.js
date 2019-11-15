document.querySelector('.wsu-s-nav-horizontal__wrapper').classList.remove('wsu-u-no-js');

// Priority Nav
import priorityNav from 'priority-nav';

priorityNav.init({
	mainNavWrapper: ".wsu-s-nav-horizontal__nav-container",
	breakPoint: 0,
	throttleDelay: 50,
	navDropdownClassName: "nav__dropdown", // class used for the dropdown - this is a class name, not a selector.
	navDropdownToggleClassName: "nav__dropdown-toggle", // class used for the dropdown toggle - this is a class name, not a selector.
	navDropdownLabel: "more", // Text that is used for the dropdown toggle.
	navDropdownBreakpointLabel: "menu", //button label for navDropdownToggle when the breakPoint is reached.
});

// Init Collapse Menus
function setAriaExpandedFalse(elements) {
	elements.forEach(element => {
		element.setAttribute('aria-expanded', 'false');
	});
}

const ariaExpandedElements = document.querySelectorAll('[aria-expanded="true"]');

setAriaExpandedFalse(ariaExpandedElements);

// On Click, Toggle Menus Open
const menuLinks = document.querySelectorAll('.wsu-s-nav-horizontal__nav-link');

menuLinks.forEach(link => {
	link.addEventListener("click", function (e) {
		e.preventDefault();

		const subMenu = e.target.nextElementSibling;

		if (subMenu != null) {
			if (subMenu.hasAttribute('aria-expanded') && subMenu.getAttribute('aria-expanded') == 'false') {
				e.target.nextElementSibling.setAttribute('aria-expanded', 'true');
			} else {
				e.target.nextElementSibling.setAttribute('aria-expanded', 'false');
			}
		}
	});
});
