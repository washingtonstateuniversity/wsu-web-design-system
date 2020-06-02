/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/src/site-nav-horizontal/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/src/site-nav-horizontal/index.js":
/*!*****************************************************!*\
  !*** ./components/src/site-nav-horizontal/index.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_nav_horizontal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-nav-horizontal.js */ "./components/src/site-nav-horizontal/site-nav-horizontal.js");
/* harmony import */ var _site_nav_horizontal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-nav-horizontal.scss */ "./components/src/site-nav-horizontal/site-nav-horizontal.scss");
/* harmony import */ var _site_nav_horizontal_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_site_nav_horizontal_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _site_nav_horizontal_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-nav-horizontal.html */ "./components/src/site-nav-horizontal/site-nav-horizontal.html");
/* harmony import */ var _site_nav_horizontal_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_site_nav_horizontal_html__WEBPACK_IMPORTED_MODULE_2__);
// JS
 // SCSS

 // HTML



/***/ }),

/***/ "./components/src/site-nav-horizontal/site-nav-horizontal.html":
/*!*********************************************************************!*\
  !*** ./components/src/site-nav-horizontal/site-nav-horizontal.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/dist/site-nav-horizontal/site-nav-horizontal.html";

/***/ }),

/***/ "./components/src/site-nav-horizontal/site-nav-horizontal.js":
/*!*******************************************************************!*\
  !*** ./components/src/site-nav-horizontal/site-nav-horizontal.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wsuwebteam_build_tools_js_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wsuwebteam/build-tools/js/wsu-bt-wds */ "./node_modules/@wsuwebteam/build-tools/js/wsu-bt-wds.js");
/* harmony import */ var _wsuwebteam_build_tools_js_wsu_bt_priority_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wsuwebteam/build-tools/js/wsu-bt-priority-nav */ "./node_modules/@wsuwebteam/build-tools/js/wsu-bt-priority-nav.js");


var nav_horz_wrapper = document.querySelector('.wsu-s-nav-horizontal__wrapper');

if (typeof nav_horz_wrapper != "undefined" && nav_horz_wrapper != null) {
  /**
   *
   * Init JS
   *
   */
  nav_horz_wrapper.classList.remove('wsu-u-no-js');
  /**
   *
   * Init priority nav
   *
   */

  _wsuwebteam_build_tools_js_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].horizontal_nav = new _wsuwebteam_build_tools_js_wsu_bt_priority_nav__WEBPACK_IMPORTED_MODULE_1__["default"]({
    main_nav_selector: '.wsu-s-nav-horizontal__nav-list',
    priority_nav_list_item_class_name: 'wsu-s-nav-horizontal__nav-item--more',
    priority_nav_list_item_link_class_name: 'wsu-s-nav-horizontal__nav-link',
    priority_nav_list_item_list_class_name: 'wsu-s-nav-horizontal__nav-list--has-more-items',
    more_inner_html: '<div class="wsu-icon wsu-i-more"></div>'
  });
  _wsuwebteam_build_tools_js_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].horizontal_nav.init(); // emitter.on('wsu-s-nav-horizontal--opened', function (e) {
  // 	// e.currentTarget.nextElementSibling.classList.remove('fadeOutUp');
  // 	e.currentTarget.nextElementSibling.classList.add('animated', 'fadeInUp');
  // 	const sub_nav_items = e.currentTarget.nextElementSibling.children;
  // 	const sub_nav_items_count = sub_nav_items.length;
  // 	for (var i = 0; i < sub_nav_items_count; i++) {
  // 		(function (i) {
  // 			const duration = 30; // Duration between each item being animated
  // 			const curve = 0.25; // Increment intensity
  // 			// let increment = duration + (duration * (i * curve)); // Linear
  // 			let increment = duration + (duration * (i * (i * curve))); // Bezier
  // 			setTimeout(function () {
  // 				sub_nav_items[i].classList.add('animated', 'fadeInUp');
  // 			}, increment);
  // 		})(i);
  // 	};
  // 	// console.log(sub_nav_items_count);
  // 	// Array.from(sub_nav_items).forEach(element => {
  // 	// 	(function (element) {
  // 	// 		element.classList.add('animated', 'fadeInUp');
  // 	// 	});
  // 	// });
  // 	// Array.from(sub_nav_items).forEach(element => {
  // 	// 	element.classList.add('animated', 'fadeInUp');
  // 	// });
  // });
  // emitter.on('wsu-s-nav-horizontal--closed', function (e) {
  // 	// e.currentTarget.nextElementSibling.classList.remove('fadeInUp');
  // 	// e.currentTarget.nextElementSibling.classList.add('fadeOutDown');
  // });
}

/***/ }),

/***/ "./components/src/site-nav-horizontal/site-nav-horizontal.scss":
/*!*********************************************************************!*\
  !*** ./components/src/site-nav-horizontal/site-nav-horizontal.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/@wsuwebteam/build-tools/js/aria-expanded/wsu-bt-aria-expanded.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@wsuwebteam/build-tools/js/aria-expanded/wsu-bt-aria-expanded.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wsu_bt_aria_expanded; });
class wsu_bt_aria_expanded {
	constructor(params) {
		this.params = params;
		this.nav_items = null;
		this.show_logs = params.show_logs ? true : false;

		/**
		 * Assign nav_items_selectors to variable
		 */
		this.nav_items_selectors = params.nav_item_selectors;

		if (typeof this.nav_items_selectors === 'undefined') {
			console.error('Undefined nav_item_selectors. Please pass the selector you would like to be expandable.');
		}

		/**
		 * Assign use_animations to variable
		 */
		this.use_animations = params.use_animations;

		if (typeof this.use_animations === 'undefined') {
			this.use_animations = false;
		}
	}

	/**
	 * Init
	 *
	 */
	init() {
		this.set_init_state();
		window.addEventListener('click', this.check_for_close.bind(this, event));

		if (this.use_animations) {
			this.init_mutation_observers();
		}
	}

	/**
	 * Set initial state for aria-expanded items
	 *
	 * @param {element} elements
	 */
	set_init_state() {
		const nav_items = this.query_all_nav_items;
		const _this = this;

		nav_items.forEach(nav_item => {
			// Initial on page load state
			nav_item.setAttribute('aria-expanded', 'false');

			// Create event listeners for each nav item
			nav_item.addEventListener('click', function (event) {
				event.preventDefault();
				_this.toggle_aria_expanded_state(event.currentTarget);
			});
		});

		// If animations are enabled, add the default animated class
		if (_this.use_animations) {
			const nav_items_to_animate = this.query_all_nav_items;

			nav_items_to_animate.forEach(nav_item => {

				nav_item.nextElementSibling.classList.add('animated');

				const nav_item_children = Array.from(nav_item.nextElementSibling.children);

				nav_item_children.forEach(nav_item => {
					nav_item.classList.add('animated');
				});

			});
		}
	}

	/**
	 * Toggle the aria-expanded element state
	 *
	 * @param {element} element
	 */
	toggle_aria_expanded_state(element) {
		if (element.getAttribute('aria-expanded') === 'false') {
			element.setAttribute('aria-expanded', 'true');
		} else {
			element.setAttribute('aria-expanded', 'false');
		}
	}

	/**
	 * Set aria-expanded element state
	 *
	 * @param {element} element Element you want state to be updated on
	 * @param {boolean} state Set element state to true or false
	 */
	set_aria_expanded_state(element, state) {
		element.setAttribute('aria-expanded', state);
	}

	/**
	 * Place to init any Mutation Observers
	 *
	 * @function
	 */
	init_mutation_observers() {
		this.create_mutation(this.params.nav_item_selectors, this.check_element_view_state.bind(this));
	}

	/**
	 * Creates mutation observers to watch state and allows you to tell it what to do on modification
	 *
	 * @param {string} target_query_selector
	 * @param {method} on_modify_method
	 */
	create_mutation(target_query_selector, on_modify_method) {
		// Select the node that will be observed for mutations
		const targetNodes = document.querySelectorAll(target_query_selector);

		// Options for the observer (which mutations to observe)
		const config = { attributes: true, childList: false, subtree: false };

		// Global scope
		const _this = this;

		targetNodes.forEach(targetNode => {
			// Callback function to execute when mutations are observed
			const callback = function (mutationsList, observer) {
				// Use traditional 'for loops' for IE 11
				for (let mutation of mutationsList) {
					if (mutation.type === 'attributes') {
						if (_this.show_logs) {
							console.log('The ' + mutation.attributeName + ' attribute was modified.');
						}
						on_modify_method(mutation);
					}
				}
			};

			// Create an observer instance linked to the callback function
			const observer = new MutationObserver(callback);

			// Start observing the target node for configured mutations
			observer.observe(targetNode, config);
		});
	}

	/**
	 * Checks whether items are expanded true or false
	 *
	 * @param {object} mutation_record Returns what has been modified from the observer call back function
	 */
	check_element_view_state(mutation_record) {
		if (mutation_record.attributeName === 'aria-expanded') {
			const nav_item_container = mutation_record.target.nextElementSibling;
			const nav_items = Array.from(mutation_record.target.nextElementSibling.children);

			if (mutation_record.target.getAttribute('aria-expanded') == 'true') {
				// Animate in
				this.animate_item(nav_item_container);
				this.animate_items(nav_items);
			} else {
				// Animate out
				this.animate_item(nav_item_container, 'fadeOutDown', 'fadeInUp', 'out');
				this.animate_items(nav_items, 'fadeOutDown', 'fadeInUp');
			}
		}
	}


	/**
	 * Animate a single item in or out of your display
	 *
	 * @param {element} element_to_animate The element you want to be animated
	 * @param {string} add The animation to be added
	 * @param {string} remove The animation to be removed
	 * @param {string} direction The direction in which your animation is going, in (becoming visible) and out (becoming invisible)
	 * @param {number} time_out_duration The timeout that controls when your animation is finished when animating out
	 */
	animate_item(element_to_animate, add = 'fadeInUp', remove = 'fadeOutDown', direction = 'in', time_out_duration = 350) {
		// Animate element
		element_to_animate.classList.remove(remove);
		element_to_animate.classList.add(add);

		// // Check direction and set visibility state
		// if (direction == 'in') {
		// 	element_to_animate.style.visibility = 'visible';
		// } else {
		// 	setTimeout(function () {
		// 		element_to_animate.style.visibility = 'hidden';
		// 	}, time_out_duration);
		// }
	}

	/**
	 * Animate an array of elements onto the screen sequentially
	 *
	 * @param {Array} elements_to_animate The elements you want to be animated
	 * @param {string} add The animation to be added
	 * @param {string} remove The animation to be removed
	 */
	animate_items(elements_to_animate, add = 'fadeInUp', remove = 'fadeOutDown') {
		const sub_nav_items = elements_to_animate;
		const sub_nav_items_count = sub_nav_items.length;

		for (var i = 0; i < sub_nav_items_count; i++) {
			(function (i) {

				const duration = 30; // Duration between each item being animated
				const curve = 0.25; // Increment intensity

				// let increment = duration + (duration * (i * curve)); // Linear
				let increment = duration + (duration * (i * (i * curve))); // Bezier

				setTimeout(function () {
					sub_nav_items[i].classList.remove(remove);
					sub_nav_items[i].classList.add(add);
				}, increment);
			})(i);
		}
	}

	/**
	 * Checks if the nav items should be closed
	 *
	 * @function
	 */
	check_for_close() {
		var nav_wrapper_selector = document.querySelector('.wsu-s-nav-horizontal__wrapper');

		if (!nav_wrapper_selector.contains(event.target)) {
			const all_items = this.query_all_open_nav_items;

			all_items.forEach(item => {
				this.set_aria_expanded_state(item, false);
			});
		}
	}

	get query_all_open_nav_items() {
		return document.querySelectorAll('.wsu-s-nav-horizontal__nav-link[aria-expanded="true"]');
	}

	get query_all_nav_items() {
		return document.querySelectorAll('.wsu-s-nav-horizontal__nav-link[aria-expanded]');
	}
}


/***/ }),

/***/ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/MenubarItemLinks.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/MenubarItemLinks.js ***!
  \************************************************************************************************/
/*! exports provided: MenubarItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarItem", function() { return MenubarItem; });
/* harmony import */ var _PopupMenuLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupMenuLinks */ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/PopupMenuLinks.js");
/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/



var MenubarItem = function (domNode, menuObj) {

	this.menu = menuObj;
	this.domNode = domNode;
	this.popupMenu = false;

	this.hasFocus = false;
	this.hasHover = false;

	this.isMenubarItem = true;

	this.keyCode = Object.freeze({
		'TAB': 9,
		'RETURN': 13,
		'ESC': 27,
		'SPACE': 32,
		'PAGEUP': 33,
		'PAGEDOWN': 34,
		'END': 35,
		'HOME': 36,
		'LEFT': 37,
		'UP': 38,
		'RIGHT': 39,
		'DOWN': 40
	});
};

MenubarItem.prototype.init = function () {
	this.domNode.tabIndex = -1;

	this.domNode.addEventListener('keydown', this.handleKeydown.bind(this));
	this.domNode.addEventListener('focus', this.handleFocus.bind(this));
	this.domNode.addEventListener('blur', this.handleBlur.bind(this));

	// Initialize pop up menus

	var nextElement = this.domNode.nextElementSibling;

	if (nextElement && nextElement.tagName === 'UL') {
		this.popupMenu = new _PopupMenuLinks__WEBPACK_IMPORTED_MODULE_0__["PopupMenu"](nextElement, this);
		this.popupMenu.init();
	}

};

MenubarItem.prototype.handleKeydown = function (event) {
	var tgt = event.currentTarget,
		char = event.key,
		flag = false,
		clickEvent;

	function isPrintableCharacter(str) {
		return str.length === 1 && str.match(/\S/);
	}

	switch (event.keyCode) {
		case this.keyCode.SPACE:
		case this.keyCode.RETURN:
		case this.keyCode.DOWN:
			if (this.popupMenu) {
				this.popupMenu.open();
				this.popupMenu.setFocusToFirstItem();
				flag = true;
			}
			break;

		case this.keyCode.LEFT:
			this.menu.setFocusToPreviousItem(this);
			flag = true;
			break;

		case this.keyCode.RIGHT:
			this.menu.setFocusToNextItem(this);
			flag = true;
			break;

		case this.keyCode.UP:
			if (this.popupMenu) {
				this.popupMenu.open();
				this.popupMenu.setFocusToLastItem();
				flag = true;
			}
			break;

		case this.keyCode.HOME:
		case this.keyCode.PAGEUP:
			this.menu.setFocusToFirstItem();
			flag = true;
			break;

		case this.keyCode.END:
		case this.keyCode.PAGEDOWN:
			this.menu.setFocusToLastItem();
			flag = true;
			break;

		case this.keyCode.TAB:
			if (this.popupMenu != false) {
				this.popupMenu.close(true);
			}
			break;

		case this.keyCode.ESC:
			if (this.popupMenu != false) {
				this.popupMenu.close(true);
			}
			break;

		default:
			if (isPrintableCharacter(char)) {
				this.menu.setFocusByFirstCharacter(this, char);
				flag = true;
			}
			break;
	}

	if (flag) {
		event.stopPropagation();
		event.preventDefault();
	}
};

MenubarItem.prototype.setExpanded = function (value) {
	if (value) {
		this.domNode.setAttribute('aria-expanded', 'true');
	}
	else {
		this.domNode.setAttribute('aria-expanded', 'false');
	}
};

MenubarItem.prototype.handleFocus = function (event) {
	this.menu.hasFocus = true;
};

MenubarItem.prototype.handleBlur = function (event) {
	this.menu.hasFocus = false;
};

var MenubarItem;


/***/ }),

/***/ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/MenubarLinks.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/MenubarLinks.js ***!
  \********************************************************************************************/
/*! exports provided: Menubar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menubar", function() { return Menubar; });
/* harmony import */ var _MenubarItemLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenubarItemLinks */ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/MenubarItemLinks.js");
/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/



var Menubar = function (domNode) {
	var elementChildren,
		msgPrefix = 'Menubar constructor argument menubarNode ';

	// Check whether menubarNode is a DOM element
	if (!domNode instanceof Element) {
		throw new TypeError(msgPrefix + 'is not a DOM Element.');
	}

	// Check whether menubarNode has descendant elements
	if (domNode.childElementCount === 0) {
		throw new Error(msgPrefix + 'has no element children.');
	}

	// Check whether menubarNode has A elements
	var e = domNode.firstElementChild;
	while (e) {
		var menubarItem = e.firstElementChild;
		if (e && menubarItem && menubarItem.tagName !== 'A') {
			throw new Error(msgPrefix + 'has child elements are not A elements.');
		}
		e = e.nextElementSibling;
	}

	this.isMenubar = true;

	this.domNode = domNode;

	this.menubarItems = []; // See Menubar init method
	this.firstChars = []; // See Menubar init method

	this.firstItem = null; // See Menubar init method
	this.lastItem = null; // See Menubar init method

	this.hasFocus = false; // See MenubarItem handleFocus, handleBlur
	this.hasHover = false; // See Menubar handleMouseover, handleMouseout
};

/*
*   @method Menubar.prototype.init
*
*   @desc
*       Adds ARIA role to the menubar node
*       Traverse menubar children for A elements to configure each A element as a ARIA menuitem
*       and populate menuitems array. Initialize firstItem and lastItem properties.
*/
Menubar.prototype.init = function () {
	var menubarItem, childElement, menuElement, textContent, numItems;


	// Traverse the element children of menubarNode: configure each with
	// menuitem role behavior and store reference in menuitems array.
	var elem = this.domNode.firstElementChild;

	while (elem) {
		var menuElement = elem.firstElementChild;

		if (elem && menuElement && menuElement.tagName === 'A') {
			menubarItem = new _MenubarItemLinks__WEBPACK_IMPORTED_MODULE_0__["MenubarItem"](menuElement, this);
			menubarItem.init();
			this.menubarItems.push(menubarItem);
			textContent = menuElement.textContent.trim();
			this.firstChars.push(textContent.substring(0, 1).toLowerCase());
		}

		elem = elem.nextElementSibling;
	}

	// Use populated menuitems array to initialize firstItem and lastItem.
	numItems = this.menubarItems.length;
	if (numItems > 0) {
		this.firstItem = this.menubarItems[0];
		this.lastItem = this.menubarItems[numItems - 1];
	}
	this.firstItem.domNode.tabIndex = 0;
};

/* FOCUS MANAGEMENT METHODS */

Menubar.prototype.setFocusToItem = function (newItem) {

	var flag = false;

	for (var i = 0; i < this.menubarItems.length; i++) {
		var mbi = this.menubarItems[i];

		if (mbi.domNode.tabIndex == 0) {
			flag = mbi.domNode.getAttribute('aria-expanded') === 'true';
		}

		mbi.domNode.tabIndex = -1;
		if (mbi.popupMenu) {
			mbi.popupMenu.close();
		}
	}

	newItem.domNode.focus();
	newItem.domNode.tabIndex = 0;

	if (flag && newItem.popupMenu) {
		newItem.popupMenu.open();
	}
};

Menubar.prototype.setFocusToFirstItem = function (flag) {
	this.setFocusToItem(this.firstItem);
};

Menubar.prototype.setFocusToLastItem = function (flag) {
	this.setFocusToItem(this.lastItem);
};

Menubar.prototype.setFocusToPreviousItem = function (currentItem) {
	var index;
	var newItem;

	if (currentItem === this.firstItem) {
		newItem = this.lastItem;
	}
	else {
		index = this.menubarItems.indexOf(currentItem);
		newItem = this.menubarItems[index - 1];
	}

	this.setFocusToItem(newItem);

};

Menubar.prototype.setFocusToNextItem = function (currentItem) {
	var index;
	var newItem;

	if (currentItem === this.lastItem) {
		newItem = this.firstItem;
	}
	else {
		index = this.menubarItems.indexOf(currentItem);
		newItem = this.menubarItems[index + 1];
	}

	this.setFocusToItem(newItem);

};

Menubar.prototype.setFocusByFirstCharacter = function (currentItem, char) {
	var start, index, char = char.toLowerCase();
	var flag = currentItem.domNode.getAttribute('aria-expanded') === 'true';

	// Get start index for search based on position of currentItem
	start = this.menubarItems.indexOf(currentItem) + 1;
	if (start === this.menubarItems.length) {
		start = 0;
	}

	// Check remaining slots in the menu
	index = this.getIndexFirstChars(start, char);

	// If not found in remaining slots, check from beginning
	if (index === -1) {
		index = this.getIndexFirstChars(0, char);
	}

	// If match was found...
	if (index > -1) {
		this.setFocusToItem(this.menubarItems[index]);
	}
};

Menubar.prototype.getIndexFirstChars = function (startIndex, char) {
	for (var i = startIndex; i < this.firstChars.length; i++) {
		if (char === this.firstChars[i]) {
			return i;
		}
	}
	return -1;
};

var Menubar;


/***/ }),

/***/ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/PopupMenuItemLinks.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/PopupMenuItemLinks.js ***!
  \**************************************************************************************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var _PopupMenuLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupMenuLinks */ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/PopupMenuLinks.js");
/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/



var MenuItem = function (domNode, menuObj) {

	this.domNode = domNode;
	this.menu = menuObj;
	this.popupMenu = false;
	this.isMenubarItem = false;

	this.keyCode = Object.freeze({
		'TAB': 9,
		'RETURN': 13,
		'ESC': 27,
		'SPACE': 32,
		'PAGEUP': 33,
		'PAGEDOWN': 34,
		'END': 35,
		'HOME': 36,
		'LEFT': 37,
		'UP': 38,
		'RIGHT': 39,
		'DOWN': 40
	});
};

MenuItem.prototype.init = function () {
	this.domNode.tabIndex = -1;

	this.domNode.addEventListener('keydown', this.handleKeydown.bind(this));
	this.domNode.addEventListener('focus', this.handleFocus.bind(this));
	this.domNode.addEventListener('blur', this.handleBlur.bind(this));

	// Initialize flyout menu

	var nextElement = this.domNode.nextElementSibling;

	if (nextElement && nextElement.tagName === 'UL') {
		this.popupMenu = new _PopupMenuLinks__WEBPACK_IMPORTED_MODULE_0__["PopupMenu"](nextElement, this);
		this.popupMenu.init();
	}

};

MenuItem.prototype.isExpanded = function () {
	return this.domNode.getAttribute('aria-expanded') === 'true';
};

/* EVENT HANDLERS */

MenuItem.prototype.handleKeydown = function (event) {
	var tgt = event.currentTarget,
		char = event.key,
		flag = false,
		clickEvent;

	function isPrintableCharacter(str) {
		return str.length === 1 && str.match(/\S/);
	}

	switch (event.keyCode) {
		case this.keyCode.SPACE:
		case this.keyCode.RETURN:
			if (this.popupMenu) {
				this.popupMenu.open();
				this.popupMenu.setFocusToFirstItem();
			}
			else {

				// Create simulated mouse event to mimic the behavior of ATs
				// and let the event handler handleClick do the housekeeping.
				try {
					clickEvent = new MouseEvent('click', {
						'view': window,
						'bubbles': true,
						'cancelable': true
					});
				}
				catch (err) {
					if (document.createEvent) {
						// DOM Level 3 for IE 9+
						clickEvent = document.createEvent('MouseEvents');
						clickEvent.initEvent('click', true, true);
					}
				}
				tgt.dispatchEvent(clickEvent);
			}

			flag = true;
			break;

		case this.keyCode.UP:
			this.menu.setFocusToPreviousItem(this);
			flag = true;
			break;

		case this.keyCode.DOWN:
			this.menu.setFocusToNextItem(this);
			flag = true;
			break;

		case this.keyCode.LEFT:
			this.menu.setFocusToController('previous', true);
			this.menu.close(true);
			flag = true;
			break;

		case this.keyCode.RIGHT:
			if (this.popupMenu) {
				this.popupMenu.open();
				this.popupMenu.setFocusToFirstItem();
			}
			else {
				this.menu.setFocusToController('next', true);
				this.menu.close(true);
			}
			flag = true;
			break;

		case this.keyCode.HOME:
		case this.keyCode.PAGEUP:
			this.menu.setFocusToFirstItem();
			flag = true;
			break;

		case this.keyCode.END:
		case this.keyCode.PAGEDOWN:
			this.menu.setFocusToLastItem();
			flag = true;
			break;

		case this.keyCode.ESC:
			this.menu.setFocusToController();
			this.menu.close(true);
			flag = true;
			break;

		case this.keyCode.TAB:
			this.menu.setFocusToController();
			break;

		default:
			if (isPrintableCharacter(char)) {
				this.menu.setFocusByFirstCharacter(this, char);
				flag = true;
			}
			break;
	}

	if (flag) {
		event.stopPropagation();
		event.preventDefault();
	}
};

MenuItem.prototype.setExpanded = function (value) {
	if (value) {
		this.domNode.setAttribute('aria-expanded', 'true');
	}
	else {
		this.domNode.setAttribute('aria-expanded', 'false');
	}
};

MenuItem.prototype.handleFocus = function (event) {
	this.menu.hasFocus = true;
};

MenuItem.prototype.handleBlur = function (event) {
	this.menu.hasFocus = false;
	setTimeout(this.menu.close.bind(this.menu, false), 300);
};

MenuItem.prototype.handleMouseover = function (event) {
	this.menu.hasHover = true;
	this.menu.open();
	if (this.popupMenu) {
		this.popupMenu.hasHover = true;
		this.popupMenu.open();
	}
};

MenuItem.prototype.handleMouseout = function (event) {
	if (this.popupMenu) {
		this.popupMenu.hasHover = false;
		this.popupMenu.close(true);
	}

	this.menu.hasHover = false;
	setTimeout(this.menu.close.bind(this.menu, false), 300);
};

var MenuItem;


/***/ }),

/***/ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/PopupMenuLinks.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/PopupMenuLinks.js ***!
  \**********************************************************************************************/
/*! exports provided: PopupMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenu", function() { return PopupMenu; });
/* harmony import */ var _PopupMenuItemLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupMenuItemLinks */ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/PopupMenuItemLinks.js");
/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/



var PopupMenu = function (domNode, controllerObj) {
	var elementChildren,
		msgPrefix = 'PopupMenu constructor argument domNode ';

	// Check whether domNode is a DOM element
	if (!domNode instanceof Element) {
		throw new TypeError(msgPrefix + 'is not a DOM Element.');
	}
	// Check whether domNode has child elements
	if (domNode.childElementCount === 0) {
		throw new Error(msgPrefix + 'has no element children.');
	}
	// Check whether domNode descendant elements have A elements
	var childElement = domNode.firstElementChild;
	while (childElement) {
		var menuitem = childElement.firstElementChild;
		if (menuitem && menuitem === 'A') {
			throw new Error(msgPrefix + 'has descendant elements that are not A elements.');
		}
		childElement = childElement.nextElementSibling;
	}

	this.isMenubar = false;

	this.domNode = domNode;
	this.controller = controllerObj;

	this.menuitems = []; // See PopupMenu init method
	this.firstChars = []; // See PopupMenu init method

	this.firstItem = null; // See PopupMenu init method
	this.lastItem = null; // See PopupMenu init method

	this.hasFocus = false; // See MenuItem handleFocus, handleBlur
	this.hasHover = false; // See PopupMenu handleMouseover, handleMouseout
};

/*
*   @method PopupMenu.prototype.init
*
*   @desc
*       Traverse domNode children to configure each menuitem and populate
*       menuitems array. Initialize firstItem and lastItem properties.
*/
PopupMenu.prototype.init = function () {
	var childElement, menuElement, menuItem, textContent, numItems, label;

	// Traverse the element children of domNode: configure each with
	// menuitem role behavior and store reference in menuitems array.
	childElement = this.domNode.firstElementChild;

	while (childElement) {
		menuElement = childElement.firstElementChild;

		if (menuElement && menuElement.tagName === 'A') {
			menuItem = new _PopupMenuItemLinks__WEBPACK_IMPORTED_MODULE_0__["MenuItem"](menuElement, this);
			menuItem.init();
			this.menuitems.push(menuItem);
			textContent = menuElement.textContent.trim();
			this.firstChars.push(textContent.substring(0, 1).toLowerCase());
		}
		childElement = childElement.nextElementSibling;
	}

	// Use populated menuitems array to initialize firstItem and lastItem.
	numItems = this.menuitems.length;
	if (numItems > 0) {
		this.firstItem = this.menuitems[0];
		this.lastItem = this.menuitems[numItems - 1];
	}
};

/* EVENT HANDLERS */

PopupMenu.prototype.handleMouseover = function (event) {
	this.hasHover = true;
};

PopupMenu.prototype.handleMouseout = function (event) {
	this.hasHover = false;
	setTimeout(this.close.bind(this, false), 1);
};

/* FOCUS MANAGEMENT METHODS */

PopupMenu.prototype.setFocusToController = function (command, flag) {

	if (typeof command !== 'string') {
		command = '';
	}

	function setFocusToMenubarItem(controller, close) {
		while (controller) {
			if (controller.isMenubarItem) {
				controller.domNode.focus();
				return controller;
			}
			else {
				if (close) {
					controller.menu.close(true);
				}
				controller.hasFocus = false;
			}
			controller = controller.menu.controller;
		}
		return false;
	}

	if (command === '') {
		if (this.controller && this.controller.domNode) {
			this.controller.domNode.focus();
		}
		return;
	}

	if (!this.controller.isMenubarItem) {
		this.controller.domNode.focus();
		this.close();

		if (command === 'next') {
			var menubarItem = setFocusToMenubarItem(this.controller, false);
			if (menubarItem) {
				menubarItem.menu.setFocusToNextItem(menubarItem, flag);
			}
		}
	}
	else {
		if (command === 'previous') {
			this.controller.menu.setFocusToPreviousItem(this.controller, flag);
		}
		else if (command === 'next') {
			this.controller.menu.setFocusToNextItem(this.controller, flag);
		}
	}

};

PopupMenu.prototype.setFocusToFirstItem = function () {
	this.firstItem.domNode.focus();
};

PopupMenu.prototype.setFocusToLastItem = function () {
	this.lastItem.domNode.focus();
};

PopupMenu.prototype.setFocusToPreviousItem = function (currentItem) {
	var index;

	if (currentItem === this.firstItem) {
		this.lastItem.domNode.focus();
	}
	else {
		index = this.menuitems.indexOf(currentItem);
		this.menuitems[index - 1].domNode.focus();
	}
};

PopupMenu.prototype.setFocusToNextItem = function (currentItem) {
	var index;

	if (currentItem === this.lastItem) {
		this.firstItem.domNode.focus();
	}
	else {
		index = this.menuitems.indexOf(currentItem);
		this.menuitems[index + 1].domNode.focus();
	}
};

PopupMenu.prototype.setFocusByFirstCharacter = function (currentItem, char) {
	var start, index, char = char.toLowerCase();

	// Get start index for search based on position of currentItem
	start = this.menuitems.indexOf(currentItem) + 1;
	if (start === this.menuitems.length) {
		start = 0;
	}

	// Check remaining slots in the menu
	index = this.getIndexFirstChars(start, char);

	// If not found in remaining slots, check from beginning
	if (index === -1) {
		index = this.getIndexFirstChars(0, char);
	}

	// If match was found...
	if (index > -1) {
		this.menuitems[index].domNode.focus();
	}
};

PopupMenu.prototype.getIndexFirstChars = function (startIndex, char) {
	for (var i = startIndex; i < this.firstChars.length; i++) {
		if (char === this.firstChars[i]) {
			return i;
		}
	}
	return -1;
};

/* MENU DISPLAY METHODS */

PopupMenu.prototype.open = function () {

	this.controller.setExpanded(true);

};

PopupMenu.prototype.close = function (force) {

	var controllerHasHover = this.controller.hasHover;

	var hasFocus = this.hasFocus;

	for (var i = 0; i < this.menuitems.length; i++) {
		var mi = this.menuitems[i];
		if (mi.popupMenu) {
			hasFocus = hasFocus | mi.popupMenu.hasFocus;
		}
	}

	if (!this.controller.isMenubarItem) {
		controllerHasHover = false;
	}

	if (force || (!hasFocus && !this.hasHover && !controllerHasHover)) {
		this.controller.setExpanded(false);
	}
};

var PopupMenu;


/***/ }),

/***/ "./node_modules/@wsuwebteam/build-tools/js/wsu-bt-priority-nav.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wsuwebteam/build-tools/js/wsu-bt-priority-nav.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wsu_bt_priority_nav; });
/* harmony import */ var _aria_expanded_wsu_bt_aria_expanded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aria-expanded/wsu-bt-aria-expanded */ "./node_modules/@wsuwebteam/build-tools/js/aria-expanded/wsu-bt-aria-expanded.js");
/* harmony import */ var _keyboard_nav_accessibility_MenubarLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard-nav-accessibility/MenubarLinks */ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/MenubarLinks.js");



class wsu_bt_priority_nav {
	constructor(params) {
		this.breakpoints = [];
		this.main_nav_width = null;
		this.params = params;
		this.screenWidth = null;
		this.window = window;
	}

	// Methods
	init() {
		this.update_nav();
		window.addEventListener('resize', this.update_nav.bind(this)); // TODO: look into if we need to use something like debounce or at the very least set a timeout
	}

	update_nav() {
		// Check if all fonts are loaded
		// TODO: Fix for ie 11 & edge (needs testing)
		document.fonts.ready.then(() => {

			// If doesn't exist & Nav is greater than screen width, create nav
			if (this.get_priority_nav == null && this.get_frame_width <= this.get_main_nav_width) {
				this.create_priority_nav();
			}

			// If nav exists, just resize it
			if (this.get_priority_nav != null) {
				this.resize_nav();
			}

			this.initiateKeyboardNavigationSupport();
			this.initiateAriaExpanded();
		});
	}

	create_priority_nav() {
		// Create elements
		const priority_nav_list_item = document.createElement('li');
		const priority_nav_list_item_link = document.createElement('a');
		const priority_nav_unordered_list = document.createElement('ul');

		// Create list item wrapper <li>
		priority_nav_list_item.setAttribute('class', this.params['priority_nav_list_item_class_name']);
		priority_nav_list_item.setAttribute('role', 'none');

		// Create list item link <a>
		priority_nav_list_item_link.innerHTML = this.params['more_inner_html'];
		priority_nav_list_item_link.setAttribute('href', '#');
		priority_nav_list_item_link.setAttribute('class', this.params['priority_nav_list_item_link_class_name']);
		priority_nav_list_item_link.setAttribute('role', 'menuitem');
		priority_nav_list_item_link.setAttribute('tabindex', '-1');
		priority_nav_list_item_link.setAttribute('aria-expanded', 'true');
		priority_nav_list_item_link.setAttribute('aria-haspopup', 'true');

		// Create unordered list item container <ul>
		priority_nav_unordered_list.setAttribute('class', this.params['priority_nav_list_item_list_class_name']);
		priority_nav_unordered_list.setAttribute('role', 'menu');
		priority_nav_unordered_list.setAttribute('aria-abel', 'Replace Me w/ Link Name Submenu');

		// Append to dom
		priority_nav_list_item.appendChild(priority_nav_list_item_link);
		priority_nav_list_item.appendChild(priority_nav_unordered_list);
		document.querySelector(this.params['main_nav_selector']).appendChild(priority_nav_list_item);
	}

	resize_nav() {
		this.calculateWidths();

		// Move items to priority nav
		while (this.screenWidth <= this.main_nav_width && this.get_main_nav.children.length > 0) {
			const itemToMove = this.get_main_nav.children[this.get_main_nav.children.length - 2];
			this.moveToPriorityNav(itemToMove);
			this.calculateWidths();
		}

		// Move items to main nav
		while (this.screenWidth >= this.breakpoints[this.breakpoints.length - 1] && this.get_priority_nav_submenu.children.length > 0) {
			this.moveToMainNav(this.get_priority_nav_submenu.children[0]);
		}

		// Turn off priority nav if unnecessary
		if (this.breakpoints.length == 0) {
			this.destroyPriorityNav();
		}
	}

	calculateWidths() {
		this.main_nav_width = this.get_main_nav_width;
		this.screenWidth = this.get_frame_width;
	}

	moveToPriorityNav(itemToMove) {
		this.cleanItemBeforeMove(itemToMove);
		this.get_priority_nav_submenu.insertAdjacentElement('afterbegin', itemToMove);
		this.breakpoints.push(this.main_nav_width);
	}

	moveToMainNav(itemToMove) {
		this.cleanItemBeforeMove(itemToMove);
		this.get_main_nav.insertBefore(itemToMove, this.get_main_nav.lastElementChild);
		this.breakpoints.pop();
	}

	cleanItemBeforeMove(item_to_clean) {
		const class_list = item_to_clean.classList;
		const dirty_classes = [
			'animated',
			'fadeOutDown',
			'fadeInUp'
		];

		dirty_classes.forEach(dirty_class => {
			if (Array.from(class_list).includes(dirty_class)) {
				class_list.remove(dirty_class);
			}
		});
	}

	destroyPriorityNav() {
		this.get_priority_nav.remove();
	}

	// Initiate collapsable aria-expanded items
	initiateAriaExpanded() {
		var expanded_aria_items = new _aria_expanded_wsu_bt_aria_expanded__WEBPACK_IMPORTED_MODULE_0__["default"]({
			nav_item_selectors: '.' + this.params['priority_nav_list_item_link_class_name'],
			use_animations: true,
			show_logs: true
		});
		expanded_aria_items.init();
	}

	// Initiate keyboard controls for accessibility support
	initiateKeyboardNavigationSupport() {
		var menubar = new _keyboard_nav_accessibility_MenubarLinks__WEBPACK_IMPORTED_MODULE_1__["Menubar"](document.querySelector(this.params['main_nav_selector']));
		menubar.init();
	}

	// Getters
	get get_frame_width() {
		const windowInnerWidth = document.querySelector('.wsu-s-nav-horizontal__nav-container').offsetWidth;
		return windowInnerWidth;
	}

	get get_main_nav_width() {
		const mainNavInnerWidth = document.querySelector(this.params['main_nav_selector']).offsetWidth;
		return mainNavInnerWidth;
	}

	get get_main_nav() {
		const mainNav = document.querySelector(this.params['main_nav_selector']);
		return mainNav;
	}

	get get_priority_nav() {
		const priority_nav = document.querySelector('.' + this.params['priority_nav_list_item_class_name']);
		return priority_nav;
	}

	get get_priority_nav_submenu() {
		const priority_nav = document.querySelector('.' + this.params['priority_nav_list_item_list_class_name']);
		return priority_nav;
	}

	get getBreakpoints() {
		const breakpoints = this.breakpoints;
		return breakpoints;
	}
}


/***/ }),

/***/ "./node_modules/@wsuwebteam/build-tools/js/wsu-bt-wds.js":
/*!***************************************************************!*\
  !*** ./node_modules/@wsuwebteam/build-tools/js/wsu-bt-wds.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");


if (typeof wsu_wds == 'undefined') {
	window['wsu_wds'] = {};
	wsu_wds = window.wsu_wds;
}

wsu_wds.emitter = Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();

/* harmony default export */ __webpack_exports__["default"] = (wsu_wds);


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1uYXYtaG9yaXpvbnRhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi1ob3Jpem9udGFsL3NpdGUtbmF2LWhvcml6b250YWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi1ob3Jpem9udGFsL3NpdGUtbmF2LWhvcml6b250YWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1uYXYtaG9yaXpvbnRhbC9zaXRlLW5hdi1ob3Jpem9udGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL2FyaWEtZXhwYW5kZWQvd3N1LWJ0LWFyaWEtZXhwYW5kZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L01lbnViYXJJdGVtTGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L01lbnViYXJMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMva2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvUG9wdXBNZW51SXRlbUxpbmtzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad3N1d2VidGVhbS9idWlsZC10b29scy9qcy9rZXlib2FyZC1uYXYtYWNjZXNzaWJpbGl0eS9Qb3B1cE1lbnVMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMvd3N1LWJ0LXByaW9yaXR5LW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMvd3N1LWJ0LXdkcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbWl0dC9kaXN0L21pdHQuZXMuanMiXSwibmFtZXMiOlsibmF2X2hvcnpfd3JhcHBlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsIndzdV93ZHMiLCJob3Jpem9udGFsX25hdiIsInByaW9yaXR5X25hdiIsIm1haW5fbmF2X3NlbGVjdG9yIiwicHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9jbGFzc19uYW1lIiwicHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rX2NsYXNzX25hbWUiLCJwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpc3RfY2xhc3NfbmFtZSIsIm1vcmVfaW5uZXJfaHRtbCIsImluaXQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FB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RUE7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7OztBQ3hMUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHlEQUFTO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7OztBQ3BNUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0Q7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCLHNCQUFzQjs7QUFFdEIsdUJBQXVCO0FBQ3ZCLHNCQUFzQjs7QUFFdEIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsNERBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGdCQUFnQiwyQkFBMkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87Ozs7Ozs7Ozs7Ozs7QUM5T1A7QUFBQTtBQUFBO0FBQUE7QUFBd0U7QUFDSjs7QUFFckQ7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0MsMkVBQW9CO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsZ0ZBQU87QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzS0E7QUFBQTtBQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLG9EQUFJOztBQUVQLHNFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNUdkI7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7Ozs7OztBQU1BO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYyxFQUFFO0FBQ3JFLG9EQUFvRCxvQkFBb0IsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQztBQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL2Rpc3Qvc2l0ZS1uYXYtaG9yaXpvbnRhbC9zaXRlLW5hdi1ob3Jpem9udGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi1ob3Jpem9udGFsL2luZGV4LmpzXCIpO1xuIiwiLy8gSlNcbmltcG9ydCAnLi9zaXRlLW5hdi1ob3Jpem9udGFsLmpzJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL3NpdGUtbmF2LWhvcml6b250YWwuc2Nzcyc7XG5cbi8vIEhUTUxcbmltcG9ydCAnLi9zaXRlLW5hdi1ob3Jpem9udGFsLmh0bWwnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY29tcG9uZW50cy9kaXN0L3NpdGUtbmF2LWhvcml6b250YWwvc2l0ZS1uYXYtaG9yaXpvbnRhbC5odG1sXCI7IiwiaW1wb3J0IHdzdV93ZHMgZnJvbSAnQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMvd3N1LWJ0LXdkcyc7XG5pbXBvcnQgcHJpb3JpdHlfbmF2IGZyb20gJ0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL3dzdS1idC1wcmlvcml0eS1uYXYnO1xuXG5jb25zdCBuYXZfaG9yel93cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1zLW5hdi1ob3Jpem9udGFsX193cmFwcGVyJyk7XG5cbmlmICh0eXBlb2YgbmF2X2hvcnpfd3JhcHBlciAhPSBcInVuZGVmaW5lZFwiICYmIG5hdl9ob3J6X3dyYXBwZXIgIT0gbnVsbCkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBJbml0IEpTXG5cdCAqXG5cdCAqL1xuXHRuYXZfaG9yel93cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS11LW5vLWpzJyk7XG5cblx0LyoqXG5cdCAqXG5cdCAqIEluaXQgcHJpb3JpdHkgbmF2XG5cdCAqXG5cdCAqL1xuXHR3c3Vfd2RzLmhvcml6b250YWxfbmF2ID0gbmV3IHByaW9yaXR5X25hdih7XG5cdFx0bWFpbl9uYXZfc2VsZWN0b3I6ICcud3N1LXMtbmF2LWhvcml6b250YWxfX25hdi1saXN0Jyxcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2NsYXNzX25hbWU6ICd3c3Utcy1uYXYtaG9yaXpvbnRhbF9fbmF2LWl0ZW0tLW1vcmUnLFxuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGlua19jbGFzc19uYW1lOiAnd3N1LXMtbmF2LWhvcml6b250YWxfX25hdi1saW5rJyxcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpc3RfY2xhc3NfbmFtZTogJ3dzdS1zLW5hdi1ob3Jpem9udGFsX19uYXYtbGlzdC0taGFzLW1vcmUtaXRlbXMnLFxuXHRcdG1vcmVfaW5uZXJfaHRtbDogJzxkaXYgY2xhc3M9XCJ3c3UtaWNvbiB3c3UtaS1tb3JlXCI+PC9kaXY+J1xuXHR9KTtcblxuXHR3c3Vfd2RzLmhvcml6b250YWxfbmF2LmluaXQoKTtcblxuXHQvLyBlbWl0dGVyLm9uKCd3c3Utcy1uYXYtaG9yaXpvbnRhbC0tb3BlbmVkJywgZnVuY3Rpb24gKGUpIHtcblx0Ly8gXHQvLyBlLmN1cnJlbnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVPdXRVcCcpO1xuXHQvLyBcdGUuY3VycmVudFRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnLCAnZmFkZUluVXAnKTtcblxuXHQvLyBcdGNvbnN0IHN1Yl9uYXZfaXRlbXMgPSBlLmN1cnJlbnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuO1xuXHQvLyBcdGNvbnN0IHN1Yl9uYXZfaXRlbXNfY291bnQgPSBzdWJfbmF2X2l0ZW1zLmxlbmd0aDtcblxuXHQvLyBcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ViX25hdl9pdGVtc19jb3VudDsgaSsrKSB7XG5cdC8vIFx0XHQoZnVuY3Rpb24gKGkpIHtcblxuXHQvLyBcdFx0XHRjb25zdCBkdXJhdGlvbiA9IDMwOyAvLyBEdXJhdGlvbiBiZXR3ZWVuIGVhY2ggaXRlbSBiZWluZyBhbmltYXRlZFxuXHQvLyBcdFx0XHRjb25zdCBjdXJ2ZSA9IDAuMjU7IC8vIEluY3JlbWVudCBpbnRlbnNpdHlcblxuXHQvLyBcdFx0XHQvLyBsZXQgaW5jcmVtZW50ID0gZHVyYXRpb24gKyAoZHVyYXRpb24gKiAoaSAqIGN1cnZlKSk7IC8vIExpbmVhclxuXHQvLyBcdFx0XHRsZXQgaW5jcmVtZW50ID0gZHVyYXRpb24gKyAoZHVyYXRpb24gKiAoaSAqIChpICogY3VydmUpKSk7IC8vIEJlemllclxuXG5cdC8vIFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHQvLyBcdFx0XHRcdHN1Yl9uYXZfaXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnLCAnZmFkZUluVXAnKTtcblx0Ly8gXHRcdFx0fSwgaW5jcmVtZW50KTtcblx0Ly8gXHRcdH0pKGkpO1xuXHQvLyBcdH07XG5cblx0Ly8gXHQvLyBjb25zb2xlLmxvZyhzdWJfbmF2X2l0ZW1zX2NvdW50KTtcblxuXHQvLyBcdC8vIEFycmF5LmZyb20oc3ViX25hdl9pdGVtcykuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0Ly8gXHQvLyBcdChmdW5jdGlvbiAoZWxlbWVudCkge1xuXHQvLyBcdC8vIFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJywgJ2ZhZGVJblVwJyk7XG5cdC8vIFx0Ly8gXHR9KTtcblx0Ly8gXHQvLyB9KTtcblxuXHQvLyBcdC8vIEFycmF5LmZyb20oc3ViX25hdl9pdGVtcykuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0Ly8gXHQvLyBcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnLCAnZmFkZUluVXAnKTtcblx0Ly8gXHQvLyB9KTtcblxuXHQvLyB9KTtcblxuXHQvLyBlbWl0dGVyLm9uKCd3c3Utcy1uYXYtaG9yaXpvbnRhbC0tY2xvc2VkJywgZnVuY3Rpb24gKGUpIHtcblx0Ly8gXHQvLyBlLmN1cnJlbnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVJblVwJyk7XG5cdC8vIFx0Ly8gZS5jdXJyZW50VGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdmYWRlT3V0RG93bicpO1xuXHQvLyB9KTtcblxufVxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHdzdV9idF9hcmlhX2V4cGFuZGVkIHtcblx0Y29uc3RydWN0b3IocGFyYW1zKSB7XG5cdFx0dGhpcy5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0dGhpcy5uYXZfaXRlbXMgPSBudWxsO1xuXHRcdHRoaXMuc2hvd19sb2dzID0gcGFyYW1zLnNob3dfbG9ncyA/IHRydWUgOiBmYWxzZTtcblxuXHRcdC8qKlxuXHRcdCAqIEFzc2lnbiBuYXZfaXRlbXNfc2VsZWN0b3JzIHRvIHZhcmlhYmxlXG5cdFx0ICovXG5cdFx0dGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzID0gcGFyYW1zLm5hdl9pdGVtX3NlbGVjdG9ycztcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc29sZS5lcnJvcignVW5kZWZpbmVkIG5hdl9pdGVtX3NlbGVjdG9ycy4gUGxlYXNlIHBhc3MgdGhlIHNlbGVjdG9yIHlvdSB3b3VsZCBsaWtlIHRvIGJlIGV4cGFuZGFibGUuJyk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQXNzaWduIHVzZV9hbmltYXRpb25zIHRvIHZhcmlhYmxlXG5cdFx0ICovXG5cdFx0dGhpcy51c2VfYW5pbWF0aW9ucyA9IHBhcmFtcy51c2VfYW5pbWF0aW9ucztcblxuXHRcdGlmICh0eXBlb2YgdGhpcy51c2VfYW5pbWF0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMudXNlX2FuaW1hdGlvbnMgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogSW5pdFxuXHQgKlxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHR0aGlzLnNldF9pbml0X3N0YXRlKCk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGVja19mb3JfY2xvc2UuYmluZCh0aGlzLCBldmVudCkpO1xuXG5cdFx0aWYgKHRoaXMudXNlX2FuaW1hdGlvbnMpIHtcblx0XHRcdHRoaXMuaW5pdF9tdXRhdGlvbl9vYnNlcnZlcnMoKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2V0IGluaXRpYWwgc3RhdGUgZm9yIGFyaWEtZXhwYW5kZWQgaXRlbXNcblx0ICpcblx0ICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50c1xuXHQgKi9cblx0c2V0X2luaXRfc3RhdGUoKSB7XG5cdFx0Y29uc3QgbmF2X2l0ZW1zID0gdGhpcy5xdWVyeV9hbGxfbmF2X2l0ZW1zO1xuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblxuXHRcdG5hdl9pdGVtcy5mb3JFYWNoKG5hdl9pdGVtID0+IHtcblx0XHRcdC8vIEluaXRpYWwgb24gcGFnZSBsb2FkIHN0YXRlXG5cdFx0XHRuYXZfaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuXHRcdFx0Ly8gQ3JlYXRlIGV2ZW50IGxpc3RlbmVycyBmb3IgZWFjaCBuYXYgaXRlbVxuXHRcdFx0bmF2X2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0X3RoaXMudG9nZ2xlX2FyaWFfZXhwYW5kZWRfc3RhdGUoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdC8vIElmIGFuaW1hdGlvbnMgYXJlIGVuYWJsZWQsIGFkZCB0aGUgZGVmYXVsdCBhbmltYXRlZCBjbGFzc1xuXHRcdGlmIChfdGhpcy51c2VfYW5pbWF0aW9ucykge1xuXHRcdFx0Y29uc3QgbmF2X2l0ZW1zX3RvX2FuaW1hdGUgPSB0aGlzLnF1ZXJ5X2FsbF9uYXZfaXRlbXM7XG5cblx0XHRcdG5hdl9pdGVtc190b19hbmltYXRlLmZvckVhY2gobmF2X2l0ZW0gPT4ge1xuXG5cdFx0XHRcdG5hdl9pdGVtLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcpO1xuXG5cdFx0XHRcdGNvbnN0IG5hdl9pdGVtX2NoaWxkcmVuID0gQXJyYXkuZnJvbShuYXZfaXRlbS5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW4pO1xuXG5cdFx0XHRcdG5hdl9pdGVtX2NoaWxkcmVuLmZvckVhY2gobmF2X2l0ZW0gPT4ge1xuXHRcdFx0XHRcdG5hdl9pdGVtLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlIHRoZSBhcmlhLWV4cGFuZGVkIGVsZW1lbnQgc3RhdGVcblx0ICpcblx0ICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50XG5cdCAqL1xuXHR0b2dnbGVfYXJpYV9leHBhbmRlZF9zdGF0ZShlbGVtZW50KSB7XG5cdFx0aWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpIHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2V0IGFyaWEtZXhwYW5kZWQgZWxlbWVudCBzdGF0ZVxuXHQgKlxuXHQgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB5b3Ugd2FudCBzdGF0ZSB0byBiZSB1cGRhdGVkIG9uXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gc3RhdGUgU2V0IGVsZW1lbnQgc3RhdGUgdG8gdHJ1ZSBvciBmYWxzZVxuXHQgKi9cblx0c2V0X2FyaWFfZXhwYW5kZWRfc3RhdGUoZWxlbWVudCwgc3RhdGUpIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIHN0YXRlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBQbGFjZSB0byBpbml0IGFueSBNdXRhdGlvbiBPYnNlcnZlcnNcblx0ICpcblx0ICogQGZ1bmN0aW9uXG5cdCAqL1xuXHRpbml0X211dGF0aW9uX29ic2VydmVycygpIHtcblx0XHR0aGlzLmNyZWF0ZV9tdXRhdGlvbih0aGlzLnBhcmFtcy5uYXZfaXRlbV9zZWxlY3RvcnMsIHRoaXMuY2hlY2tfZWxlbWVudF92aWV3X3N0YXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgbXV0YXRpb24gb2JzZXJ2ZXJzIHRvIHdhdGNoIHN0YXRlIGFuZCBhbGxvd3MgeW91IHRvIHRlbGwgaXQgd2hhdCB0byBkbyBvbiBtb2RpZmljYXRpb25cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldF9xdWVyeV9zZWxlY3RvclxuXHQgKiBAcGFyYW0ge21ldGhvZH0gb25fbW9kaWZ5X21ldGhvZFxuXHQgKi9cblx0Y3JlYXRlX211dGF0aW9uKHRhcmdldF9xdWVyeV9zZWxlY3Rvciwgb25fbW9kaWZ5X21ldGhvZCkge1xuXHRcdC8vIFNlbGVjdCB0aGUgbm9kZSB0aGF0IHdpbGwgYmUgb2JzZXJ2ZWQgZm9yIG11dGF0aW9uc1xuXHRcdGNvbnN0IHRhcmdldE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXRfcXVlcnlfc2VsZWN0b3IpO1xuXG5cdFx0Ly8gT3B0aW9ucyBmb3IgdGhlIG9ic2VydmVyICh3aGljaCBtdXRhdGlvbnMgdG8gb2JzZXJ2ZSlcblx0XHRjb25zdCBjb25maWcgPSB7IGF0dHJpYnV0ZXM6IHRydWUsIGNoaWxkTGlzdDogZmFsc2UsIHN1YnRyZWU6IGZhbHNlIH07XG5cblx0XHQvLyBHbG9iYWwgc2NvcGVcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cblx0XHR0YXJnZXROb2Rlcy5mb3JFYWNoKHRhcmdldE5vZGUgPT4ge1xuXHRcdFx0Ly8gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIG11dGF0aW9ucyBhcmUgb2JzZXJ2ZWRcblx0XHRcdGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24gKG11dGF0aW9uc0xpc3QsIG9ic2VydmVyKSB7XG5cdFx0XHRcdC8vIFVzZSB0cmFkaXRpb25hbCAnZm9yIGxvb3BzJyBmb3IgSUUgMTFcblx0XHRcdFx0Zm9yIChsZXQgbXV0YXRpb24gb2YgbXV0YXRpb25zTGlzdCkge1xuXHRcdFx0XHRcdGlmIChtdXRhdGlvbi50eXBlID09PSAnYXR0cmlidXRlcycpIHtcblx0XHRcdFx0XHRcdGlmIChfdGhpcy5zaG93X2xvZ3MpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ1RoZSAnICsgbXV0YXRpb24uYXR0cmlidXRlTmFtZSArICcgYXR0cmlidXRlIHdhcyBtb2RpZmllZC4nKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG9uX21vZGlmeV9tZXRob2QobXV0YXRpb24pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gQ3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlIGxpbmtlZCB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cblx0XHRcdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuXG5cdFx0XHQvLyBTdGFydCBvYnNlcnZpbmcgdGhlIHRhcmdldCBub2RlIGZvciBjb25maWd1cmVkIG11dGF0aW9uc1xuXHRcdFx0b2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXROb2RlLCBjb25maWcpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIGl0ZW1zIGFyZSBleHBhbmRlZCB0cnVlIG9yIGZhbHNlXG5cdCAqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBtdXRhdGlvbl9yZWNvcmQgUmV0dXJucyB3aGF0IGhhcyBiZWVuIG1vZGlmaWVkIGZyb20gdGhlIG9ic2VydmVyIGNhbGwgYmFjayBmdW5jdGlvblxuXHQgKi9cblx0Y2hlY2tfZWxlbWVudF92aWV3X3N0YXRlKG11dGF0aW9uX3JlY29yZCkge1xuXHRcdGlmIChtdXRhdGlvbl9yZWNvcmQuYXR0cmlidXRlTmFtZSA9PT0gJ2FyaWEtZXhwYW5kZWQnKSB7XG5cdFx0XHRjb25zdCBuYXZfaXRlbV9jb250YWluZXIgPSBtdXRhdGlvbl9yZWNvcmQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcblx0XHRcdGNvbnN0IG5hdl9pdGVtcyA9IEFycmF5LmZyb20obXV0YXRpb25fcmVjb3JkLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2hpbGRyZW4pO1xuXG5cdFx0XHRpZiAobXV0YXRpb25fcmVjb3JkLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAndHJ1ZScpIHtcblx0XHRcdFx0Ly8gQW5pbWF0ZSBpblxuXHRcdFx0XHR0aGlzLmFuaW1hdGVfaXRlbShuYXZfaXRlbV9jb250YWluZXIpO1xuXHRcdFx0XHR0aGlzLmFuaW1hdGVfaXRlbXMobmF2X2l0ZW1zKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEFuaW1hdGUgb3V0XG5cdFx0XHRcdHRoaXMuYW5pbWF0ZV9pdGVtKG5hdl9pdGVtX2NvbnRhaW5lciwgJ2ZhZGVPdXREb3duJywgJ2ZhZGVJblVwJywgJ291dCcpO1xuXHRcdFx0XHR0aGlzLmFuaW1hdGVfaXRlbXMobmF2X2l0ZW1zLCAnZmFkZU91dERvd24nLCAnZmFkZUluVXAnKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBBbmltYXRlIGEgc2luZ2xlIGl0ZW0gaW4gb3Igb3V0IG9mIHlvdXIgZGlzcGxheVxuXHQgKlxuXHQgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnRfdG9fYW5pbWF0ZSBUaGUgZWxlbWVudCB5b3Ugd2FudCB0byBiZSBhbmltYXRlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkIFRoZSBhbmltYXRpb24gdG8gYmUgYWRkZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJlbW92ZSBUaGUgYW5pbWF0aW9uIHRvIGJlIHJlbW92ZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGRpcmVjdGlvbiBUaGUgZGlyZWN0aW9uIGluIHdoaWNoIHlvdXIgYW5pbWF0aW9uIGlzIGdvaW5nLCBpbiAoYmVjb21pbmcgdmlzaWJsZSkgYW5kIG91dCAoYmVjb21pbmcgaW52aXNpYmxlKVxuXHQgKiBAcGFyYW0ge251bWJlcn0gdGltZV9vdXRfZHVyYXRpb24gVGhlIHRpbWVvdXQgdGhhdCBjb250cm9scyB3aGVuIHlvdXIgYW5pbWF0aW9uIGlzIGZpbmlzaGVkIHdoZW4gYW5pbWF0aW5nIG91dFxuXHQgKi9cblx0YW5pbWF0ZV9pdGVtKGVsZW1lbnRfdG9fYW5pbWF0ZSwgYWRkID0gJ2ZhZGVJblVwJywgcmVtb3ZlID0gJ2ZhZGVPdXREb3duJywgZGlyZWN0aW9uID0gJ2luJywgdGltZV9vdXRfZHVyYXRpb24gPSAzNTApIHtcblx0XHQvLyBBbmltYXRlIGVsZW1lbnRcblx0XHRlbGVtZW50X3RvX2FuaW1hdGUuY2xhc3NMaXN0LnJlbW92ZShyZW1vdmUpO1xuXHRcdGVsZW1lbnRfdG9fYW5pbWF0ZS5jbGFzc0xpc3QuYWRkKGFkZCk7XG5cblx0XHQvLyAvLyBDaGVjayBkaXJlY3Rpb24gYW5kIHNldCB2aXNpYmlsaXR5IHN0YXRlXG5cdFx0Ly8gaWYgKGRpcmVjdGlvbiA9PSAnaW4nKSB7XG5cdFx0Ly8gXHRlbGVtZW50X3RvX2FuaW1hdGUuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblx0XHQvLyB9IGVsc2Uge1xuXHRcdC8vIFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gXHRcdGVsZW1lbnRfdG9fYW5pbWF0ZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0Ly8gXHR9LCB0aW1lX291dF9kdXJhdGlvbik7XG5cdFx0Ly8gfVxuXHR9XG5cblx0LyoqXG5cdCAqIEFuaW1hdGUgYW4gYXJyYXkgb2YgZWxlbWVudHMgb250byB0aGUgc2NyZWVuIHNlcXVlbnRpYWxseVxuXHQgKlxuXHQgKiBAcGFyYW0ge0FycmF5fSBlbGVtZW50c190b19hbmltYXRlIFRoZSBlbGVtZW50cyB5b3Ugd2FudCB0byBiZSBhbmltYXRlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkIFRoZSBhbmltYXRpb24gdG8gYmUgYWRkZWRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHJlbW92ZSBUaGUgYW5pbWF0aW9uIHRvIGJlIHJlbW92ZWRcblx0ICovXG5cdGFuaW1hdGVfaXRlbXMoZWxlbWVudHNfdG9fYW5pbWF0ZSwgYWRkID0gJ2ZhZGVJblVwJywgcmVtb3ZlID0gJ2ZhZGVPdXREb3duJykge1xuXHRcdGNvbnN0IHN1Yl9uYXZfaXRlbXMgPSBlbGVtZW50c190b19hbmltYXRlO1xuXHRcdGNvbnN0IHN1Yl9uYXZfaXRlbXNfY291bnQgPSBzdWJfbmF2X2l0ZW1zLmxlbmd0aDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ViX25hdl9pdGVtc19jb3VudDsgaSsrKSB7XG5cdFx0XHQoZnVuY3Rpb24gKGkpIHtcblxuXHRcdFx0XHRjb25zdCBkdXJhdGlvbiA9IDMwOyAvLyBEdXJhdGlvbiBiZXR3ZWVuIGVhY2ggaXRlbSBiZWluZyBhbmltYXRlZFxuXHRcdFx0XHRjb25zdCBjdXJ2ZSA9IDAuMjU7IC8vIEluY3JlbWVudCBpbnRlbnNpdHlcblxuXHRcdFx0XHQvLyBsZXQgaW5jcmVtZW50ID0gZHVyYXRpb24gKyAoZHVyYXRpb24gKiAoaSAqIGN1cnZlKSk7IC8vIExpbmVhclxuXHRcdFx0XHRsZXQgaW5jcmVtZW50ID0gZHVyYXRpb24gKyAoZHVyYXRpb24gKiAoaSAqIChpICogY3VydmUpKSk7IC8vIEJlemllclxuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHN1Yl9uYXZfaXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZShyZW1vdmUpO1xuXHRcdFx0XHRcdHN1Yl9uYXZfaXRlbXNbaV0uY2xhc3NMaXN0LmFkZChhZGQpO1xuXHRcdFx0XHR9LCBpbmNyZW1lbnQpO1xuXHRcdFx0fSkoaSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGUgbmF2IGl0ZW1zIHNob3VsZCBiZSBjbG9zZWRcblx0ICpcblx0ICogQGZ1bmN0aW9uXG5cdCAqL1xuXHRjaGVja19mb3JfY2xvc2UoKSB7XG5cdFx0dmFyIG5hdl93cmFwcGVyX3NlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1zLW5hdi1ob3Jpem9udGFsX193cmFwcGVyJyk7XG5cblx0XHRpZiAoIW5hdl93cmFwcGVyX3NlbGVjdG9yLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcblx0XHRcdGNvbnN0IGFsbF9pdGVtcyA9IHRoaXMucXVlcnlfYWxsX29wZW5fbmF2X2l0ZW1zO1xuXG5cdFx0XHRhbGxfaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRcdFx0dGhpcy5zZXRfYXJpYV9leHBhbmRlZF9zdGF0ZShpdGVtLCBmYWxzZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRnZXQgcXVlcnlfYWxsX29wZW5fbmF2X2l0ZW1zKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3N1LXMtbmF2LWhvcml6b250YWxfX25hdi1saW5rW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdJyk7XG5cdH1cblxuXHRnZXQgcXVlcnlfYWxsX25hdl9pdGVtcygpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndzdS1zLW5hdi1ob3Jpem9udGFsX19uYXYtbGlua1thcmlhLWV4cGFuZGVkXScpO1xuXHR9XG59XG4iLCIvKlxyXG4qICAgVGhpcyBjb250ZW50IGlzIGxpY2Vuc2VkIGFjY29yZGluZyB0byB0aGUgVzNDIFNvZnR3YXJlIExpY2Vuc2UgYXRcclxuKiAgIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxyXG4qL1xyXG5cclxuaW1wb3J0IHsgUG9wdXBNZW51IH0gZnJvbSAnLi9Qb3B1cE1lbnVMaW5rcyc7XHJcblxyXG52YXIgTWVudWJhckl0ZW0gPSBmdW5jdGlvbiAoZG9tTm9kZSwgbWVudU9iaikge1xyXG5cclxuXHR0aGlzLm1lbnUgPSBtZW51T2JqO1xyXG5cdHRoaXMuZG9tTm9kZSA9IGRvbU5vZGU7XHJcblx0dGhpcy5wb3B1cE1lbnUgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5oYXNGb2N1cyA9IGZhbHNlO1xyXG5cdHRoaXMuaGFzSG92ZXIgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5pc01lbnViYXJJdGVtID0gdHJ1ZTtcclxuXHJcblx0dGhpcy5rZXlDb2RlID0gT2JqZWN0LmZyZWV6ZSh7XHJcblx0XHQnVEFCJzogOSxcclxuXHRcdCdSRVRVUk4nOiAxMyxcclxuXHRcdCdFU0MnOiAyNyxcclxuXHRcdCdTUEFDRSc6IDMyLFxyXG5cdFx0J1BBR0VVUCc6IDMzLFxyXG5cdFx0J1BBR0VET1dOJzogMzQsXHJcblx0XHQnRU5EJzogMzUsXHJcblx0XHQnSE9NRSc6IDM2LFxyXG5cdFx0J0xFRlQnOiAzNyxcclxuXHRcdCdVUCc6IDM4LFxyXG5cdFx0J1JJR0hUJzogMzksXHJcblx0XHQnRE9XTic6IDQwXHJcblx0fSk7XHJcbn07XHJcblxyXG5NZW51YmFySXRlbS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmRvbU5vZGUudGFiSW5kZXggPSAtMTtcclxuXHJcblx0dGhpcy5kb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24uYmluZCh0aGlzKSk7XHJcblx0dGhpcy5kb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpKTtcclxuXHR0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpKTtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZSBwb3AgdXAgbWVudXNcclxuXHJcblx0dmFyIG5leHRFbGVtZW50ID0gdGhpcy5kb21Ob2RlLm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0aWYgKG5leHRFbGVtZW50ICYmIG5leHRFbGVtZW50LnRhZ05hbWUgPT09ICdVTCcpIHtcclxuXHRcdHRoaXMucG9wdXBNZW51ID0gbmV3IFBvcHVwTWVudShuZXh0RWxlbWVudCwgdGhpcyk7XHJcblx0XHR0aGlzLnBvcHVwTWVudS5pbml0KCk7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbk1lbnViYXJJdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dmFyIHRndCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXHJcblx0XHRjaGFyID0gZXZlbnQua2V5LFxyXG5cdFx0ZmxhZyA9IGZhbHNlLFxyXG5cdFx0Y2xpY2tFdmVudDtcclxuXHJcblx0ZnVuY3Rpb24gaXNQcmludGFibGVDaGFyYWN0ZXIoc3RyKSB7XHJcblx0XHRyZXR1cm4gc3RyLmxlbmd0aCA9PT0gMSAmJiBzdHIubWF0Y2goL1xcUy8pO1xyXG5cdH1cclxuXHJcblx0c3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5TUEFDRTpcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlJFVFVSTjpcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkRPV046XHJcblx0XHRcdGlmICh0aGlzLnBvcHVwTWVudSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51Lm9wZW4oKTtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5zZXRGb2N1c1RvRmlyc3RJdGVtKCk7XHJcblx0XHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuTEVGVDpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9QcmV2aW91c0l0ZW0odGhpcyk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5SSUdIVDpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9OZXh0SXRlbSh0aGlzKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlVQOlxyXG5cdFx0XHRpZiAodGhpcy5wb3B1cE1lbnUpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5vcGVuKCk7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUuc2V0Rm9jdXNUb0xhc3RJdGVtKCk7XHJcblx0XHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuSE9NRTpcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlBBR0VVUDpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9GaXJzdEl0ZW0oKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkVORDpcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlBBR0VET1dOOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0xhc3RJdGVtKCk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5UQUI6XHJcblx0XHRcdGlmICh0aGlzLnBvcHVwTWVudSAhPSBmYWxzZSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51LmNsb3NlKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkVTQzpcclxuXHRcdFx0aWYgKHRoaXMucG9wdXBNZW51ICE9IGZhbHNlKSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0aWYgKGlzUHJpbnRhYmxlQ2hhcmFjdGVyKGNoYXIpKSB7XHJcblx0XHRcdFx0dGhpcy5tZW51LnNldEZvY3VzQnlGaXJzdENoYXJhY3Rlcih0aGlzLCBjaGFyKTtcclxuXHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdGlmIChmbGFnKSB7XHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudWJhckl0ZW0ucHJvdG90eXBlLnNldEV4cGFuZGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHR0aGlzLmRvbU5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHR0aGlzLmRvbU5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudWJhckl0ZW0ucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5tZW51Lmhhc0ZvY3VzID0gdHJ1ZTtcclxufTtcclxuXHJcbk1lbnViYXJJdGVtLnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5tZW51Lmhhc0ZvY3VzID0gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIE1lbnViYXJJdGVtO1xyXG4iLCIvKlxyXG4qICAgVGhpcyBjb250ZW50IGlzIGxpY2Vuc2VkIGFjY29yZGluZyB0byB0aGUgVzNDIFNvZnR3YXJlIExpY2Vuc2UgYXRcclxuKiAgIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxyXG4qL1xyXG5cclxuaW1wb3J0IHsgTWVudWJhckl0ZW0gfSBmcm9tICcuL01lbnViYXJJdGVtTGlua3MnO1xyXG5cclxudmFyIE1lbnViYXIgPSBmdW5jdGlvbiAoZG9tTm9kZSkge1xyXG5cdHZhciBlbGVtZW50Q2hpbGRyZW4sXHJcblx0XHRtc2dQcmVmaXggPSAnTWVudWJhciBjb25zdHJ1Y3RvciBhcmd1bWVudCBtZW51YmFyTm9kZSAnO1xyXG5cclxuXHQvLyBDaGVjayB3aGV0aGVyIG1lbnViYXJOb2RlIGlzIGEgRE9NIGVsZW1lbnRcclxuXHRpZiAoIWRvbU5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKG1zZ1ByZWZpeCArICdpcyBub3QgYSBET00gRWxlbWVudC4nKTtcclxuXHR9XHJcblxyXG5cdC8vIENoZWNrIHdoZXRoZXIgbWVudWJhck5vZGUgaGFzIGRlc2NlbmRhbnQgZWxlbWVudHNcclxuXHRpZiAoZG9tTm9kZS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKG1zZ1ByZWZpeCArICdoYXMgbm8gZWxlbWVudCBjaGlsZHJlbi4nKTtcclxuXHR9XHJcblxyXG5cdC8vIENoZWNrIHdoZXRoZXIgbWVudWJhck5vZGUgaGFzIEEgZWxlbWVudHNcclxuXHR2YXIgZSA9IGRvbU5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblx0d2hpbGUgKGUpIHtcclxuXHRcdHZhciBtZW51YmFySXRlbSA9IGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblx0XHRpZiAoZSAmJiBtZW51YmFySXRlbSAmJiBtZW51YmFySXRlbS50YWdOYW1lICE9PSAnQScpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKG1zZ1ByZWZpeCArICdoYXMgY2hpbGQgZWxlbWVudHMgYXJlIG5vdCBBIGVsZW1lbnRzLicpO1xyXG5cdFx0fVxyXG5cdFx0ZSA9IGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdH1cclxuXHJcblx0dGhpcy5pc01lbnViYXIgPSB0cnVlO1xyXG5cclxuXHR0aGlzLmRvbU5vZGUgPSBkb21Ob2RlO1xyXG5cclxuXHR0aGlzLm1lbnViYXJJdGVtcyA9IFtdOyAvLyBTZWUgTWVudWJhciBpbml0IG1ldGhvZFxyXG5cdHRoaXMuZmlyc3RDaGFycyA9IFtdOyAvLyBTZWUgTWVudWJhciBpbml0IG1ldGhvZFxyXG5cclxuXHR0aGlzLmZpcnN0SXRlbSA9IG51bGw7IC8vIFNlZSBNZW51YmFyIGluaXQgbWV0aG9kXHJcblx0dGhpcy5sYXN0SXRlbSA9IG51bGw7IC8vIFNlZSBNZW51YmFyIGluaXQgbWV0aG9kXHJcblxyXG5cdHRoaXMuaGFzRm9jdXMgPSBmYWxzZTsgLy8gU2VlIE1lbnViYXJJdGVtIGhhbmRsZUZvY3VzLCBoYW5kbGVCbHVyXHJcblx0dGhpcy5oYXNIb3ZlciA9IGZhbHNlOyAvLyBTZWUgTWVudWJhciBoYW5kbGVNb3VzZW92ZXIsIGhhbmRsZU1vdXNlb3V0XHJcbn07XHJcblxyXG4vKlxyXG4qICAgQG1ldGhvZCBNZW51YmFyLnByb3RvdHlwZS5pbml0XHJcbipcclxuKiAgIEBkZXNjXHJcbiogICAgICAgQWRkcyBBUklBIHJvbGUgdG8gdGhlIG1lbnViYXIgbm9kZVxyXG4qICAgICAgIFRyYXZlcnNlIG1lbnViYXIgY2hpbGRyZW4gZm9yIEEgZWxlbWVudHMgdG8gY29uZmlndXJlIGVhY2ggQSBlbGVtZW50IGFzIGEgQVJJQSBtZW51aXRlbVxyXG4qICAgICAgIGFuZCBwb3B1bGF0ZSBtZW51aXRlbXMgYXJyYXkuIEluaXRpYWxpemUgZmlyc3RJdGVtIGFuZCBsYXN0SXRlbSBwcm9wZXJ0aWVzLlxyXG4qL1xyXG5NZW51YmFyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHZhciBtZW51YmFySXRlbSwgY2hpbGRFbGVtZW50LCBtZW51RWxlbWVudCwgdGV4dENvbnRlbnQsIG51bUl0ZW1zO1xyXG5cclxuXHJcblx0Ly8gVHJhdmVyc2UgdGhlIGVsZW1lbnQgY2hpbGRyZW4gb2YgbWVudWJhck5vZGU6IGNvbmZpZ3VyZSBlYWNoIHdpdGhcclxuXHQvLyBtZW51aXRlbSByb2xlIGJlaGF2aW9yIGFuZCBzdG9yZSByZWZlcmVuY2UgaW4gbWVudWl0ZW1zIGFycmF5LlxyXG5cdHZhciBlbGVtID0gdGhpcy5kb21Ob2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHR3aGlsZSAoZWxlbSkge1xyXG5cdFx0dmFyIG1lbnVFbGVtZW50ID0gZWxlbS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcblx0XHRpZiAoZWxlbSAmJiBtZW51RWxlbWVudCAmJiBtZW51RWxlbWVudC50YWdOYW1lID09PSAnQScpIHtcclxuXHRcdFx0bWVudWJhckl0ZW0gPSBuZXcgTWVudWJhckl0ZW0obWVudUVsZW1lbnQsIHRoaXMpO1xyXG5cdFx0XHRtZW51YmFySXRlbS5pbml0KCk7XHJcblx0XHRcdHRoaXMubWVudWJhckl0ZW1zLnB1c2gobWVudWJhckl0ZW0pO1xyXG5cdFx0XHR0ZXh0Q29udGVudCA9IG1lbnVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcclxuXHRcdFx0dGhpcy5maXJzdENoYXJzLnB1c2godGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGVsZW0gPSBlbGVtLm5leHRFbGVtZW50U2libGluZztcclxuXHR9XHJcblxyXG5cdC8vIFVzZSBwb3B1bGF0ZWQgbWVudWl0ZW1zIGFycmF5IHRvIGluaXRpYWxpemUgZmlyc3RJdGVtIGFuZCBsYXN0SXRlbS5cclxuXHRudW1JdGVtcyA9IHRoaXMubWVudWJhckl0ZW1zLmxlbmd0aDtcclxuXHRpZiAobnVtSXRlbXMgPiAwKSB7XHJcblx0XHR0aGlzLmZpcnN0SXRlbSA9IHRoaXMubWVudWJhckl0ZW1zWzBdO1xyXG5cdFx0dGhpcy5sYXN0SXRlbSA9IHRoaXMubWVudWJhckl0ZW1zW251bUl0ZW1zIC0gMV07XHJcblx0fVxyXG5cdHRoaXMuZmlyc3RJdGVtLmRvbU5vZGUudGFiSW5kZXggPSAwO1xyXG59O1xyXG5cclxuLyogRk9DVVMgTUFOQUdFTUVOVCBNRVRIT0RTICovXHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5zZXRGb2N1c1RvSXRlbSA9IGZ1bmN0aW9uIChuZXdJdGVtKSB7XHJcblxyXG5cdHZhciBmbGFnID0gZmFsc2U7XHJcblxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tZW51YmFySXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBtYmkgPSB0aGlzLm1lbnViYXJJdGVtc1tpXTtcclxuXHJcblx0XHRpZiAobWJpLmRvbU5vZGUudGFiSW5kZXggPT0gMCkge1xyXG5cdFx0XHRmbGFnID0gbWJpLmRvbU5vZGUuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJztcclxuXHRcdH1cclxuXHJcblx0XHRtYmkuZG9tTm9kZS50YWJJbmRleCA9IC0xO1xyXG5cdFx0aWYgKG1iaS5wb3B1cE1lbnUpIHtcclxuXHRcdFx0bWJpLnBvcHVwTWVudS5jbG9zZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0bmV3SXRlbS5kb21Ob2RlLmZvY3VzKCk7XHJcblx0bmV3SXRlbS5kb21Ob2RlLnRhYkluZGV4ID0gMDtcclxuXHJcblx0aWYgKGZsYWcgJiYgbmV3SXRlbS5wb3B1cE1lbnUpIHtcclxuXHRcdG5ld0l0ZW0ucG9wdXBNZW51Lm9wZW4oKTtcclxuXHR9XHJcbn07XHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5zZXRGb2N1c1RvRmlyc3RJdGVtID0gZnVuY3Rpb24gKGZsYWcpIHtcclxuXHR0aGlzLnNldEZvY3VzVG9JdGVtKHRoaXMuZmlyc3RJdGVtKTtcclxufTtcclxuXHJcbk1lbnViYXIucHJvdG90eXBlLnNldEZvY3VzVG9MYXN0SXRlbSA9IGZ1bmN0aW9uIChmbGFnKSB7XHJcblx0dGhpcy5zZXRGb2N1c1RvSXRlbSh0aGlzLmxhc3RJdGVtKTtcclxufTtcclxuXHJcbk1lbnViYXIucHJvdG90eXBlLnNldEZvY3VzVG9QcmV2aW91c0l0ZW0gPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0pIHtcclxuXHR2YXIgaW5kZXg7XHJcblx0dmFyIG5ld0l0ZW07XHJcblxyXG5cdGlmIChjdXJyZW50SXRlbSA9PT0gdGhpcy5maXJzdEl0ZW0pIHtcclxuXHRcdG5ld0l0ZW0gPSB0aGlzLmxhc3RJdGVtO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGluZGV4ID0gdGhpcy5tZW51YmFySXRlbXMuaW5kZXhPZihjdXJyZW50SXRlbSk7XHJcblx0XHRuZXdJdGVtID0gdGhpcy5tZW51YmFySXRlbXNbaW5kZXggLSAxXTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc2V0Rm9jdXNUb0l0ZW0obmV3SXRlbSk7XHJcblxyXG59O1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuc2V0Rm9jdXNUb05leHRJdGVtID0gZnVuY3Rpb24gKGN1cnJlbnRJdGVtKSB7XHJcblx0dmFyIGluZGV4O1xyXG5cdHZhciBuZXdJdGVtO1xyXG5cclxuXHRpZiAoY3VycmVudEl0ZW0gPT09IHRoaXMubGFzdEl0ZW0pIHtcclxuXHRcdG5ld0l0ZW0gPSB0aGlzLmZpcnN0SXRlbTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRpbmRleCA9IHRoaXMubWVudWJhckl0ZW1zLmluZGV4T2YoY3VycmVudEl0ZW0pO1xyXG5cdFx0bmV3SXRlbSA9IHRoaXMubWVudWJhckl0ZW1zW2luZGV4ICsgMV07XHJcblx0fVxyXG5cclxuXHR0aGlzLnNldEZvY3VzVG9JdGVtKG5ld0l0ZW0pO1xyXG5cclxufTtcclxuXHJcbk1lbnViYXIucHJvdG90eXBlLnNldEZvY3VzQnlGaXJzdENoYXJhY3RlciA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSwgY2hhcikge1xyXG5cdHZhciBzdGFydCwgaW5kZXgsIGNoYXIgPSBjaGFyLnRvTG93ZXJDYXNlKCk7XHJcblx0dmFyIGZsYWcgPSBjdXJyZW50SXRlbS5kb21Ob2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XHJcblxyXG5cdC8vIEdldCBzdGFydCBpbmRleCBmb3Igc2VhcmNoIGJhc2VkIG9uIHBvc2l0aW9uIG9mIGN1cnJlbnRJdGVtXHJcblx0c3RhcnQgPSB0aGlzLm1lbnViYXJJdGVtcy5pbmRleE9mKGN1cnJlbnRJdGVtKSArIDE7XHJcblx0aWYgKHN0YXJ0ID09PSB0aGlzLm1lbnViYXJJdGVtcy5sZW5ndGgpIHtcclxuXHRcdHN0YXJ0ID0gMDtcclxuXHR9XHJcblxyXG5cdC8vIENoZWNrIHJlbWFpbmluZyBzbG90cyBpbiB0aGUgbWVudVxyXG5cdGluZGV4ID0gdGhpcy5nZXRJbmRleEZpcnN0Q2hhcnMoc3RhcnQsIGNoYXIpO1xyXG5cclxuXHQvLyBJZiBub3QgZm91bmQgaW4gcmVtYWluaW5nIHNsb3RzLCBjaGVjayBmcm9tIGJlZ2lubmluZ1xyXG5cdGlmIChpbmRleCA9PT0gLTEpIHtcclxuXHRcdGluZGV4ID0gdGhpcy5nZXRJbmRleEZpcnN0Q2hhcnMoMCwgY2hhcik7XHJcblx0fVxyXG5cclxuXHQvLyBJZiBtYXRjaCB3YXMgZm91bmQuLi5cclxuXHRpZiAoaW5kZXggPiAtMSkge1xyXG5cdFx0dGhpcy5zZXRGb2N1c1RvSXRlbSh0aGlzLm1lbnViYXJJdGVtc1tpbmRleF0pO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnViYXIucHJvdG90eXBlLmdldEluZGV4Rmlyc3RDaGFycyA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBjaGFyKSB7XHJcblx0Zm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPCB0aGlzLmZpcnN0Q2hhcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChjaGFyID09PSB0aGlzLmZpcnN0Q2hhcnNbaV0pIHtcclxuXHRcdFx0cmV0dXJuIGk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAtMTtcclxufTtcclxuXHJcbmV4cG9ydCB2YXIgTWVudWJhcjtcclxuIiwiLypcclxuKiAgIFRoaXMgY29udGVudCBpcyBsaWNlbnNlZCBhY2NvcmRpbmcgdG8gdGhlIFczQyBTb2Z0d2FyZSBMaWNlbnNlIGF0XHJcbiogICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcclxuKi9cclxuXHJcbmltcG9ydCB7IFBvcHVwTWVudSB9IGZyb20gJy4vUG9wdXBNZW51TGlua3MnO1xyXG5cclxudmFyIE1lbnVJdGVtID0gZnVuY3Rpb24gKGRvbU5vZGUsIG1lbnVPYmopIHtcclxuXHJcblx0dGhpcy5kb21Ob2RlID0gZG9tTm9kZTtcclxuXHR0aGlzLm1lbnUgPSBtZW51T2JqO1xyXG5cdHRoaXMucG9wdXBNZW51ID0gZmFsc2U7XHJcblx0dGhpcy5pc01lbnViYXJJdGVtID0gZmFsc2U7XHJcblxyXG5cdHRoaXMua2V5Q29kZSA9IE9iamVjdC5mcmVlemUoe1xyXG5cdFx0J1RBQic6IDksXHJcblx0XHQnUkVUVVJOJzogMTMsXHJcblx0XHQnRVNDJzogMjcsXHJcblx0XHQnU1BBQ0UnOiAzMixcclxuXHRcdCdQQUdFVVAnOiAzMyxcclxuXHRcdCdQQUdFRE9XTic6IDM0LFxyXG5cdFx0J0VORCc6IDM1LFxyXG5cdFx0J0hPTUUnOiAzNixcclxuXHRcdCdMRUZUJzogMzcsXHJcblx0XHQnVVAnOiAzOCxcclxuXHRcdCdSSUdIVCc6IDM5LFxyXG5cdFx0J0RPV04nOiA0MFxyXG5cdH0pO1xyXG59O1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5kb21Ob2RlLnRhYkluZGV4ID0gLTE7XHJcblxyXG5cdHRoaXMuZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duLmJpbmQodGhpcykpO1xyXG5cdHRoaXMuZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKSk7XHJcblx0dGhpcy5kb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKSk7XHJcblxyXG5cdC8vIEluaXRpYWxpemUgZmx5b3V0IG1lbnVcclxuXHJcblx0dmFyIG5leHRFbGVtZW50ID0gdGhpcy5kb21Ob2RlLm5leHRFbGVtZW50U2libGluZztcclxuXHJcblx0aWYgKG5leHRFbGVtZW50ICYmIG5leHRFbGVtZW50LnRhZ05hbWUgPT09ICdVTCcpIHtcclxuXHRcdHRoaXMucG9wdXBNZW51ID0gbmV3IFBvcHVwTWVudShuZXh0RWxlbWVudCwgdGhpcyk7XHJcblx0XHR0aGlzLnBvcHVwTWVudS5pbml0KCk7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5pc0V4cGFuZGVkID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLmRvbU5vZGUuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJztcclxufTtcclxuXHJcbi8qIEVWRU5UIEhBTkRMRVJTICovXHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuaGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHZhciB0Z3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxyXG5cdFx0Y2hhciA9IGV2ZW50LmtleSxcclxuXHRcdGZsYWcgPSBmYWxzZSxcclxuXHRcdGNsaWNrRXZlbnQ7XHJcblxyXG5cdGZ1bmN0aW9uIGlzUHJpbnRhYmxlQ2hhcmFjdGVyKHN0cikge1xyXG5cdFx0cmV0dXJuIHN0ci5sZW5ndGggPT09IDEgJiYgc3RyLm1hdGNoKC9cXFMvKTtcclxuXHR9XHJcblxyXG5cdHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuU1BBQ0U6XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5SRVRVUk46XHJcblx0XHRcdGlmICh0aGlzLnBvcHVwTWVudSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51Lm9wZW4oKTtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5zZXRGb2N1c1RvRmlyc3RJdGVtKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblxyXG5cdFx0XHRcdC8vIENyZWF0ZSBzaW11bGF0ZWQgbW91c2UgZXZlbnQgdG8gbWltaWMgdGhlIGJlaGF2aW9yIG9mIEFUc1xyXG5cdFx0XHRcdC8vIGFuZCBsZXQgdGhlIGV2ZW50IGhhbmRsZXIgaGFuZGxlQ2xpY2sgZG8gdGhlIGhvdXNla2VlcGluZy5cclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0Y2xpY2tFdmVudCA9IG5ldyBNb3VzZUV2ZW50KCdjbGljaycsIHtcclxuXHRcdFx0XHRcdFx0J3ZpZXcnOiB3aW5kb3csXHJcblx0XHRcdFx0XHRcdCdidWJibGVzJzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0J2NhbmNlbGFibGUnOiB0cnVlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2F0Y2ggKGVycikge1xyXG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LmNyZWF0ZUV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdC8vIERPTSBMZXZlbCAzIGZvciBJRSA5K1xyXG5cdFx0XHRcdFx0XHRjbGlja0V2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XHJcblx0XHRcdFx0XHRcdGNsaWNrRXZlbnQuaW5pdEV2ZW50KCdjbGljaycsIHRydWUsIHRydWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0Z3QuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlVQOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb1ByZXZpb3VzSXRlbSh0aGlzKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkRPV046XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvTmV4dEl0ZW0odGhpcyk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5MRUZUOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0NvbnRyb2xsZXIoJ3ByZXZpb3VzJywgdHJ1ZSk7XHJcblx0XHRcdHRoaXMubWVudS5jbG9zZSh0cnVlKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlJJR0hUOlxyXG5cdFx0XHRpZiAodGhpcy5wb3B1cE1lbnUpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5vcGVuKCk7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvQ29udHJvbGxlcignbmV4dCcsIHRydWUpO1xyXG5cdFx0XHRcdHRoaXMubWVudS5jbG9zZSh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuSE9NRTpcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlBBR0VVUDpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9GaXJzdEl0ZW0oKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkVORDpcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlBBR0VET1dOOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0xhc3RJdGVtKCk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5FU0M6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvQ29udHJvbGxlcigpO1xyXG5cdFx0XHR0aGlzLm1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5UQUI6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvQ29udHJvbGxlcigpO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRpZiAoaXNQcmludGFibGVDaGFyYWN0ZXIoY2hhcikpIHtcclxuXHRcdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNCeUZpcnN0Q2hhcmFjdGVyKHRoaXMsIGNoYXIpO1xyXG5cdFx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0aWYgKGZsYWcpIHtcclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcbn07XHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuc2V0RXhwYW5kZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdHRoaXMuZG9tTm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHRoaXMuZG9tTm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuXHR9XHJcbn07XHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR0aGlzLm1lbnUuaGFzRm9jdXMgPSB0cnVlO1xyXG59O1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR0aGlzLm1lbnUuaGFzRm9jdXMgPSBmYWxzZTtcclxuXHRzZXRUaW1lb3V0KHRoaXMubWVudS5jbG9zZS5iaW5kKHRoaXMubWVudSwgZmFsc2UpLCAzMDApO1xyXG59O1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLmhhbmRsZU1vdXNlb3ZlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMubWVudS5oYXNIb3ZlciA9IHRydWU7XHJcblx0dGhpcy5tZW51Lm9wZW4oKTtcclxuXHRpZiAodGhpcy5wb3B1cE1lbnUpIHtcclxuXHRcdHRoaXMucG9wdXBNZW51Lmhhc0hvdmVyID0gdHJ1ZTtcclxuXHRcdHRoaXMucG9wdXBNZW51Lm9wZW4oKTtcclxuXHR9XHJcbn07XHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuaGFuZGxlTW91c2VvdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRpZiAodGhpcy5wb3B1cE1lbnUpIHtcclxuXHRcdHRoaXMucG9wdXBNZW51Lmhhc0hvdmVyID0gZmFsc2U7XHJcblx0XHR0aGlzLnBvcHVwTWVudS5jbG9zZSh0cnVlKTtcclxuXHR9XHJcblxyXG5cdHRoaXMubWVudS5oYXNIb3ZlciA9IGZhbHNlO1xyXG5cdHNldFRpbWVvdXQodGhpcy5tZW51LmNsb3NlLmJpbmQodGhpcy5tZW51LCBmYWxzZSksIDMwMCk7XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIE1lbnVJdGVtO1xyXG4iLCIvKlxyXG4qICAgVGhpcyBjb250ZW50IGlzIGxpY2Vuc2VkIGFjY29yZGluZyB0byB0aGUgVzNDIFNvZnR3YXJlIExpY2Vuc2UgYXRcclxuKiAgIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxyXG4qL1xyXG5cclxuaW1wb3J0IHsgTWVudUl0ZW0gfSBmcm9tICcuL1BvcHVwTWVudUl0ZW1MaW5rcyc7XHJcblxyXG52YXIgUG9wdXBNZW51ID0gZnVuY3Rpb24gKGRvbU5vZGUsIGNvbnRyb2xsZXJPYmopIHtcclxuXHR2YXIgZWxlbWVudENoaWxkcmVuLFxyXG5cdFx0bXNnUHJlZml4ID0gJ1BvcHVwTWVudSBjb25zdHJ1Y3RvciBhcmd1bWVudCBkb21Ob2RlICc7XHJcblxyXG5cdC8vIENoZWNrIHdoZXRoZXIgZG9tTm9kZSBpcyBhIERPTSBlbGVtZW50XHJcblx0aWYgKCFkb21Ob2RlIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihtc2dQcmVmaXggKyAnaXMgbm90IGEgRE9NIEVsZW1lbnQuJyk7XHJcblx0fVxyXG5cdC8vIENoZWNrIHdoZXRoZXIgZG9tTm9kZSBoYXMgY2hpbGQgZWxlbWVudHNcclxuXHRpZiAoZG9tTm9kZS5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKG1zZ1ByZWZpeCArICdoYXMgbm8gZWxlbWVudCBjaGlsZHJlbi4nKTtcclxuXHR9XHJcblx0Ly8gQ2hlY2sgd2hldGhlciBkb21Ob2RlIGRlc2NlbmRhbnQgZWxlbWVudHMgaGF2ZSBBIGVsZW1lbnRzXHJcblx0dmFyIGNoaWxkRWxlbWVudCA9IGRvbU5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblx0d2hpbGUgKGNoaWxkRWxlbWVudCkge1xyXG5cdFx0dmFyIG1lbnVpdGVtID0gY2hpbGRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0aWYgKG1lbnVpdGVtICYmIG1lbnVpdGVtID09PSAnQScpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKG1zZ1ByZWZpeCArICdoYXMgZGVzY2VuZGFudCBlbGVtZW50cyB0aGF0IGFyZSBub3QgQSBlbGVtZW50cy4nKTtcclxuXHRcdH1cclxuXHRcdGNoaWxkRWxlbWVudCA9IGNoaWxkRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0fVxyXG5cclxuXHR0aGlzLmlzTWVudWJhciA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmRvbU5vZGUgPSBkb21Ob2RlO1xyXG5cdHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXJPYmo7XHJcblxyXG5cdHRoaXMubWVudWl0ZW1zID0gW107IC8vIFNlZSBQb3B1cE1lbnUgaW5pdCBtZXRob2RcclxuXHR0aGlzLmZpcnN0Q2hhcnMgPSBbXTsgLy8gU2VlIFBvcHVwTWVudSBpbml0IG1ldGhvZFxyXG5cclxuXHR0aGlzLmZpcnN0SXRlbSA9IG51bGw7IC8vIFNlZSBQb3B1cE1lbnUgaW5pdCBtZXRob2RcclxuXHR0aGlzLmxhc3RJdGVtID0gbnVsbDsgLy8gU2VlIFBvcHVwTWVudSBpbml0IG1ldGhvZFxyXG5cclxuXHR0aGlzLmhhc0ZvY3VzID0gZmFsc2U7IC8vIFNlZSBNZW51SXRlbSBoYW5kbGVGb2N1cywgaGFuZGxlQmx1clxyXG5cdHRoaXMuaGFzSG92ZXIgPSBmYWxzZTsgLy8gU2VlIFBvcHVwTWVudSBoYW5kbGVNb3VzZW92ZXIsIGhhbmRsZU1vdXNlb3V0XHJcbn07XHJcblxyXG4vKlxyXG4qICAgQG1ldGhvZCBQb3B1cE1lbnUucHJvdG90eXBlLmluaXRcclxuKlxyXG4qICAgQGRlc2NcclxuKiAgICAgICBUcmF2ZXJzZSBkb21Ob2RlIGNoaWxkcmVuIHRvIGNvbmZpZ3VyZSBlYWNoIG1lbnVpdGVtIGFuZCBwb3B1bGF0ZVxyXG4qICAgICAgIG1lbnVpdGVtcyBhcnJheS4gSW5pdGlhbGl6ZSBmaXJzdEl0ZW0gYW5kIGxhc3RJdGVtIHByb3BlcnRpZXMuXHJcbiovXHJcblBvcHVwTWVudS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgY2hpbGRFbGVtZW50LCBtZW51RWxlbWVudCwgbWVudUl0ZW0sIHRleHRDb250ZW50LCBudW1JdGVtcywgbGFiZWw7XHJcblxyXG5cdC8vIFRyYXZlcnNlIHRoZSBlbGVtZW50IGNoaWxkcmVuIG9mIGRvbU5vZGU6IGNvbmZpZ3VyZSBlYWNoIHdpdGhcclxuXHQvLyBtZW51aXRlbSByb2xlIGJlaGF2aW9yIGFuZCBzdG9yZSByZWZlcmVuY2UgaW4gbWVudWl0ZW1zIGFycmF5LlxyXG5cdGNoaWxkRWxlbWVudCA9IHRoaXMuZG9tTm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcblx0d2hpbGUgKGNoaWxkRWxlbWVudCkge1xyXG5cdFx0bWVudUVsZW1lbnQgPSBjaGlsZEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5cdFx0aWYgKG1lbnVFbGVtZW50ICYmIG1lbnVFbGVtZW50LnRhZ05hbWUgPT09ICdBJykge1xyXG5cdFx0XHRtZW51SXRlbSA9IG5ldyBNZW51SXRlbShtZW51RWxlbWVudCwgdGhpcyk7XHJcblx0XHRcdG1lbnVJdGVtLmluaXQoKTtcclxuXHRcdFx0dGhpcy5tZW51aXRlbXMucHVzaChtZW51SXRlbSk7XHJcblx0XHRcdHRleHRDb250ZW50ID0gbWVudUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHR0aGlzLmZpcnN0Q2hhcnMucHVzaCh0ZXh0Q29udGVudC5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSk7XHJcblx0XHR9XHJcblx0XHRjaGlsZEVsZW1lbnQgPSBjaGlsZEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdH1cclxuXHJcblx0Ly8gVXNlIHBvcHVsYXRlZCBtZW51aXRlbXMgYXJyYXkgdG8gaW5pdGlhbGl6ZSBmaXJzdEl0ZW0gYW5kIGxhc3RJdGVtLlxyXG5cdG51bUl0ZW1zID0gdGhpcy5tZW51aXRlbXMubGVuZ3RoO1xyXG5cdGlmIChudW1JdGVtcyA+IDApIHtcclxuXHRcdHRoaXMuZmlyc3RJdGVtID0gdGhpcy5tZW51aXRlbXNbMF07XHJcblx0XHR0aGlzLmxhc3RJdGVtID0gdGhpcy5tZW51aXRlbXNbbnVtSXRlbXMgLSAxXTtcclxuXHR9XHJcbn07XHJcblxyXG4vKiBFVkVOVCBIQU5ETEVSUyAqL1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5oYW5kbGVNb3VzZW92ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR0aGlzLmhhc0hvdmVyID0gdHJ1ZTtcclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuaGFuZGxlTW91c2VvdXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR0aGlzLmhhc0hvdmVyID0gZmFsc2U7XHJcblx0c2V0VGltZW91dCh0aGlzLmNsb3NlLmJpbmQodGhpcywgZmFsc2UpLCAxKTtcclxufTtcclxuXHJcbi8qIEZPQ1VTIE1BTkFHRU1FTlQgTUVUSE9EUyAqL1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5zZXRGb2N1c1RvQ29udHJvbGxlciA9IGZ1bmN0aW9uIChjb21tYW5kLCBmbGFnKSB7XHJcblxyXG5cdGlmICh0eXBlb2YgY29tbWFuZCAhPT0gJ3N0cmluZycpIHtcclxuXHRcdGNvbW1hbmQgPSAnJztcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHNldEZvY3VzVG9NZW51YmFySXRlbShjb250cm9sbGVyLCBjbG9zZSkge1xyXG5cdFx0d2hpbGUgKGNvbnRyb2xsZXIpIHtcclxuXHRcdFx0aWYgKGNvbnRyb2xsZXIuaXNNZW51YmFySXRlbSkge1xyXG5cdFx0XHRcdGNvbnRyb2xsZXIuZG9tTm9kZS5mb2N1cygpO1xyXG5cdFx0XHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlmIChjbG9zZSkge1xyXG5cdFx0XHRcdFx0Y29udHJvbGxlci5tZW51LmNsb3NlKHRydWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb250cm9sbGVyLmhhc0ZvY3VzID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29udHJvbGxlciA9IGNvbnRyb2xsZXIubWVudS5jb250cm9sbGVyO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aWYgKGNvbW1hbmQgPT09ICcnKSB7XHJcblx0XHRpZiAodGhpcy5jb250cm9sbGVyICYmIHRoaXMuY29udHJvbGxlci5kb21Ob2RlKSB7XHJcblx0XHRcdHRoaXMuY29udHJvbGxlci5kb21Ob2RlLmZvY3VzKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIXRoaXMuY29udHJvbGxlci5pc01lbnViYXJJdGVtKSB7XHJcblx0XHR0aGlzLmNvbnRyb2xsZXIuZG9tTm9kZS5mb2N1cygpO1xyXG5cdFx0dGhpcy5jbG9zZSgpO1xyXG5cclxuXHRcdGlmIChjb21tYW5kID09PSAnbmV4dCcpIHtcclxuXHRcdFx0dmFyIG1lbnViYXJJdGVtID0gc2V0Rm9jdXNUb01lbnViYXJJdGVtKHRoaXMuY29udHJvbGxlciwgZmFsc2UpO1xyXG5cdFx0XHRpZiAobWVudWJhckl0ZW0pIHtcclxuXHRcdFx0XHRtZW51YmFySXRlbS5tZW51LnNldEZvY3VzVG9OZXh0SXRlbShtZW51YmFySXRlbSwgZmxhZyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRpZiAoY29tbWFuZCA9PT0gJ3ByZXZpb3VzJykge1xyXG5cdFx0XHR0aGlzLmNvbnRyb2xsZXIubWVudS5zZXRGb2N1c1RvUHJldmlvdXNJdGVtKHRoaXMuY29udHJvbGxlciwgZmxhZyk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChjb21tYW5kID09PSAnbmV4dCcpIHtcclxuXHRcdFx0dGhpcy5jb250cm9sbGVyLm1lbnUuc2V0Rm9jdXNUb05leHRJdGVtKHRoaXMuY29udHJvbGxlciwgZmxhZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmZpcnN0SXRlbS5kb21Ob2RlLmZvY3VzKCk7XHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLnNldEZvY3VzVG9MYXN0SXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmxhc3RJdGVtLmRvbU5vZGUuZm9jdXMoKTtcclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuc2V0Rm9jdXNUb1ByZXZpb3VzSXRlbSA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSkge1xyXG5cdHZhciBpbmRleDtcclxuXHJcblx0aWYgKGN1cnJlbnRJdGVtID09PSB0aGlzLmZpcnN0SXRlbSkge1xyXG5cdFx0dGhpcy5sYXN0SXRlbS5kb21Ob2RlLmZvY3VzKCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0aW5kZXggPSB0aGlzLm1lbnVpdGVtcy5pbmRleE9mKGN1cnJlbnRJdGVtKTtcclxuXHRcdHRoaXMubWVudWl0ZW1zW2luZGV4IC0gMV0uZG9tTm9kZS5mb2N1cygpO1xyXG5cdH1cclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuc2V0Rm9jdXNUb05leHRJdGVtID0gZnVuY3Rpb24gKGN1cnJlbnRJdGVtKSB7XHJcblx0dmFyIGluZGV4O1xyXG5cclxuXHRpZiAoY3VycmVudEl0ZW0gPT09IHRoaXMubGFzdEl0ZW0pIHtcclxuXHRcdHRoaXMuZmlyc3RJdGVtLmRvbU5vZGUuZm9jdXMoKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRpbmRleCA9IHRoaXMubWVudWl0ZW1zLmluZGV4T2YoY3VycmVudEl0ZW0pO1xyXG5cdFx0dGhpcy5tZW51aXRlbXNbaW5kZXggKyAxXS5kb21Ob2RlLmZvY3VzKCk7XHJcblx0fVxyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5zZXRGb2N1c0J5Rmlyc3RDaGFyYWN0ZXIgPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0sIGNoYXIpIHtcclxuXHR2YXIgc3RhcnQsIGluZGV4LCBjaGFyID0gY2hhci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuXHQvLyBHZXQgc3RhcnQgaW5kZXggZm9yIHNlYXJjaCBiYXNlZCBvbiBwb3NpdGlvbiBvZiBjdXJyZW50SXRlbVxyXG5cdHN0YXJ0ID0gdGhpcy5tZW51aXRlbXMuaW5kZXhPZihjdXJyZW50SXRlbSkgKyAxO1xyXG5cdGlmIChzdGFydCA9PT0gdGhpcy5tZW51aXRlbXMubGVuZ3RoKSB7XHJcblx0XHRzdGFydCA9IDA7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayByZW1haW5pbmcgc2xvdHMgaW4gdGhlIG1lbnVcclxuXHRpbmRleCA9IHRoaXMuZ2V0SW5kZXhGaXJzdENoYXJzKHN0YXJ0LCBjaGFyKTtcclxuXHJcblx0Ly8gSWYgbm90IGZvdW5kIGluIHJlbWFpbmluZyBzbG90cywgY2hlY2sgZnJvbSBiZWdpbm5pbmdcclxuXHRpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRpbmRleCA9IHRoaXMuZ2V0SW5kZXhGaXJzdENoYXJzKDAsIGNoYXIpO1xyXG5cdH1cclxuXHJcblx0Ly8gSWYgbWF0Y2ggd2FzIGZvdW5kLi4uXHJcblx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdHRoaXMubWVudWl0ZW1zW2luZGV4XS5kb21Ob2RlLmZvY3VzKCk7XHJcblx0fVxyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5nZXRJbmRleEZpcnN0Q2hhcnMgPSBmdW5jdGlvbiAoc3RhcnRJbmRleCwgY2hhcikge1xyXG5cdGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpIDwgdGhpcy5maXJzdENoYXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoY2hhciA9PT0gdGhpcy5maXJzdENoYXJzW2ldKSB7XHJcblx0XHRcdHJldHVybiBpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gLTE7XHJcbn07XHJcblxyXG4vKiBNRU5VIERJU1BMQVkgTUVUSE9EUyAqL1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHR0aGlzLmNvbnRyb2xsZXIuc2V0RXhwYW5kZWQodHJ1ZSk7XHJcblxyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChmb3JjZSkge1xyXG5cclxuXHR2YXIgY29udHJvbGxlckhhc0hvdmVyID0gdGhpcy5jb250cm9sbGVyLmhhc0hvdmVyO1xyXG5cclxuXHR2YXIgaGFzRm9jdXMgPSB0aGlzLmhhc0ZvY3VzO1xyXG5cclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWVudWl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgbWkgPSB0aGlzLm1lbnVpdGVtc1tpXTtcclxuXHRcdGlmIChtaS5wb3B1cE1lbnUpIHtcclxuXHRcdFx0aGFzRm9jdXMgPSBoYXNGb2N1cyB8IG1pLnBvcHVwTWVudS5oYXNGb2N1cztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmICghdGhpcy5jb250cm9sbGVyLmlzTWVudWJhckl0ZW0pIHtcclxuXHRcdGNvbnRyb2xsZXJIYXNIb3ZlciA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0aWYgKGZvcmNlIHx8ICghaGFzRm9jdXMgJiYgIXRoaXMuaGFzSG92ZXIgJiYgIWNvbnRyb2xsZXJIYXNIb3ZlcikpIHtcclxuXHRcdHRoaXMuY29udHJvbGxlci5zZXRFeHBhbmRlZChmYWxzZSk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IHZhciBQb3B1cE1lbnU7XHJcbiIsImltcG9ydCB3c3VfYnRfYXJpYV9leHBhbmRlZCBmcm9tICcuL2FyaWEtZXhwYW5kZWQvd3N1LWJ0LWFyaWEtZXhwYW5kZWQnO1xuaW1wb3J0IHsgTWVudWJhciB9IGZyb20gJy4va2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvTWVudWJhckxpbmtzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd3N1X2J0X3ByaW9yaXR5X25hdiB7XG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xuXHRcdHRoaXMuYnJlYWtwb2ludHMgPSBbXTtcblx0XHR0aGlzLm1haW5fbmF2X3dpZHRoID0gbnVsbDtcblx0XHR0aGlzLnBhcmFtcyA9IHBhcmFtcztcblx0XHR0aGlzLnNjcmVlbldpZHRoID0gbnVsbDtcblx0XHR0aGlzLndpbmRvdyA9IHdpbmRvdztcblx0fVxuXG5cdC8vIE1ldGhvZHNcblx0aW5pdCgpIHtcblx0XHR0aGlzLnVwZGF0ZV9uYXYoKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVfbmF2LmJpbmQodGhpcykpOyAvLyBUT0RPOiBsb29rIGludG8gaWYgd2UgbmVlZCB0byB1c2Ugc29tZXRoaW5nIGxpa2UgZGVib3VuY2Ugb3IgYXQgdGhlIHZlcnkgbGVhc3Qgc2V0IGEgdGltZW91dFxuXHR9XG5cblx0dXBkYXRlX25hdigpIHtcblx0XHQvLyBDaGVjayBpZiBhbGwgZm9udHMgYXJlIGxvYWRlZFxuXHRcdC8vIFRPRE86IEZpeCBmb3IgaWUgMTEgJiBlZGdlIChuZWVkcyB0ZXN0aW5nKVxuXHRcdGRvY3VtZW50LmZvbnRzLnJlYWR5LnRoZW4oKCkgPT4ge1xuXG5cdFx0XHQvLyBJZiBkb2Vzbid0IGV4aXN0ICYgTmF2IGlzIGdyZWF0ZXIgdGhhbiBzY3JlZW4gd2lkdGgsIGNyZWF0ZSBuYXZcblx0XHRcdGlmICh0aGlzLmdldF9wcmlvcml0eV9uYXYgPT0gbnVsbCAmJiB0aGlzLmdldF9mcmFtZV93aWR0aCA8PSB0aGlzLmdldF9tYWluX25hdl93aWR0aCkge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZV9wcmlvcml0eV9uYXYoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgbmF2IGV4aXN0cywganVzdCByZXNpemUgaXRcblx0XHRcdGlmICh0aGlzLmdldF9wcmlvcml0eV9uYXYgIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnJlc2l6ZV9uYXYoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5pbml0aWF0ZUtleWJvYXJkTmF2aWdhdGlvblN1cHBvcnQoKTtcblx0XHRcdHRoaXMuaW5pdGlhdGVBcmlhRXhwYW5kZWQoKTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZV9wcmlvcml0eV9uYXYoKSB7XG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzXG5cdFx0Y29uc3QgcHJpb3JpdHlfbmF2X2xpc3RfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0Y29uc3QgcHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdGNvbnN0IHByaW9yaXR5X25hdl91bm9yZGVyZWRfbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cblx0XHQvLyBDcmVhdGUgbGlzdCBpdGVtIHdyYXBwZXIgPGxpPlxuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMucGFyYW1zWydwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2NsYXNzX25hbWUnXSk7XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbm9uZScpO1xuXG5cdFx0Ly8gQ3JlYXRlIGxpc3QgaXRlbSBsaW5rIDxhPlxuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5pbm5lckhUTUwgPSB0aGlzLnBhcmFtc1snbW9yZV9pbm5lcl9odG1sJ107XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLnBhcmFtc1sncHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rX2NsYXNzX25hbWUnXSk7XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rLnNldEF0dHJpYnV0ZSgncm9sZScsICdtZW51aXRlbScpO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rLnNldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcsICd0cnVlJyk7XG5cblx0XHQvLyBDcmVhdGUgdW5vcmRlcmVkIGxpc3QgaXRlbSBjb250YWluZXIgPHVsPlxuXHRcdHByaW9yaXR5X25hdl91bm9yZGVyZWRfbGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5wYXJhbXNbJ3ByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGlzdF9jbGFzc19uYW1lJ10pO1xuXHRcdHByaW9yaXR5X25hdl91bm9yZGVyZWRfbGlzdC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbWVudScpO1xuXHRcdHByaW9yaXR5X25hdl91bm9yZGVyZWRfbGlzdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWJlbCcsICdSZXBsYWNlIE1lIHcvIExpbmsgTmFtZSBTdWJtZW51Jyk7XG5cblx0XHQvLyBBcHBlbmQgdG8gZG9tXG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpbmspO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHlfbmF2X3Vub3JkZXJlZF9saXN0KTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucGFyYW1zWydtYWluX25hdl9zZWxlY3RvciddKS5hcHBlbmRDaGlsZChwcmlvcml0eV9uYXZfbGlzdF9pdGVtKTtcblx0fVxuXG5cdHJlc2l6ZV9uYXYoKSB7XG5cdFx0dGhpcy5jYWxjdWxhdGVXaWR0aHMoKTtcblxuXHRcdC8vIE1vdmUgaXRlbXMgdG8gcHJpb3JpdHkgbmF2XG5cdFx0d2hpbGUgKHRoaXMuc2NyZWVuV2lkdGggPD0gdGhpcy5tYWluX25hdl93aWR0aCAmJiB0aGlzLmdldF9tYWluX25hdi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHRjb25zdCBpdGVtVG9Nb3ZlID0gdGhpcy5nZXRfbWFpbl9uYXYuY2hpbGRyZW5bdGhpcy5nZXRfbWFpbl9uYXYuY2hpbGRyZW4ubGVuZ3RoIC0gMl07XG5cdFx0XHR0aGlzLm1vdmVUb1ByaW9yaXR5TmF2KGl0ZW1Ub01vdmUpO1xuXHRcdFx0dGhpcy5jYWxjdWxhdGVXaWR0aHMoKTtcblx0XHR9XG5cblx0XHQvLyBNb3ZlIGl0ZW1zIHRvIG1haW4gbmF2XG5cdFx0d2hpbGUgKHRoaXMuc2NyZWVuV2lkdGggPj0gdGhpcy5icmVha3BvaW50c1t0aGlzLmJyZWFrcG9pbnRzLmxlbmd0aCAtIDFdICYmIHRoaXMuZ2V0X3ByaW9yaXR5X25hdl9zdWJtZW51LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMubW92ZVRvTWFpbk5hdih0aGlzLmdldF9wcmlvcml0eV9uYXZfc3VibWVudS5jaGlsZHJlblswXSk7XG5cdFx0fVxuXG5cdFx0Ly8gVHVybiBvZmYgcHJpb3JpdHkgbmF2IGlmIHVubmVjZXNzYXJ5XG5cdFx0aWYgKHRoaXMuYnJlYWtwb2ludHMubGVuZ3RoID09IDApIHtcblx0XHRcdHRoaXMuZGVzdHJveVByaW9yaXR5TmF2KCk7XG5cdFx0fVxuXHR9XG5cblx0Y2FsY3VsYXRlV2lkdGhzKCkge1xuXHRcdHRoaXMubWFpbl9uYXZfd2lkdGggPSB0aGlzLmdldF9tYWluX25hdl93aWR0aDtcblx0XHR0aGlzLnNjcmVlbldpZHRoID0gdGhpcy5nZXRfZnJhbWVfd2lkdGg7XG5cdH1cblxuXHRtb3ZlVG9Qcmlvcml0eU5hdihpdGVtVG9Nb3ZlKSB7XG5cdFx0dGhpcy5jbGVhbkl0ZW1CZWZvcmVNb3ZlKGl0ZW1Ub01vdmUpO1xuXHRcdHRoaXMuZ2V0X3ByaW9yaXR5X25hdl9zdWJtZW51Lmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJiZWdpbicsIGl0ZW1Ub01vdmUpO1xuXHRcdHRoaXMuYnJlYWtwb2ludHMucHVzaCh0aGlzLm1haW5fbmF2X3dpZHRoKTtcblx0fVxuXG5cdG1vdmVUb01haW5OYXYoaXRlbVRvTW92ZSkge1xuXHRcdHRoaXMuY2xlYW5JdGVtQmVmb3JlTW92ZShpdGVtVG9Nb3ZlKTtcblx0XHR0aGlzLmdldF9tYWluX25hdi5pbnNlcnRCZWZvcmUoaXRlbVRvTW92ZSwgdGhpcy5nZXRfbWFpbl9uYXYubGFzdEVsZW1lbnRDaGlsZCk7XG5cdFx0dGhpcy5icmVha3BvaW50cy5wb3AoKTtcblx0fVxuXG5cdGNsZWFuSXRlbUJlZm9yZU1vdmUoaXRlbV90b19jbGVhbikge1xuXHRcdGNvbnN0IGNsYXNzX2xpc3QgPSBpdGVtX3RvX2NsZWFuLmNsYXNzTGlzdDtcblx0XHRjb25zdCBkaXJ0eV9jbGFzc2VzID0gW1xuXHRcdFx0J2FuaW1hdGVkJyxcblx0XHRcdCdmYWRlT3V0RG93bicsXG5cdFx0XHQnZmFkZUluVXAnXG5cdFx0XTtcblxuXHRcdGRpcnR5X2NsYXNzZXMuZm9yRWFjaChkaXJ0eV9jbGFzcyA9PiB7XG5cdFx0XHRpZiAoQXJyYXkuZnJvbShjbGFzc19saXN0KS5pbmNsdWRlcyhkaXJ0eV9jbGFzcykpIHtcblx0XHRcdFx0Y2xhc3NfbGlzdC5yZW1vdmUoZGlydHlfY2xhc3MpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZGVzdHJveVByaW9yaXR5TmF2KCkge1xuXHRcdHRoaXMuZ2V0X3ByaW9yaXR5X25hdi5yZW1vdmUoKTtcblx0fVxuXG5cdC8vIEluaXRpYXRlIGNvbGxhcHNhYmxlIGFyaWEtZXhwYW5kZWQgaXRlbXNcblx0aW5pdGlhdGVBcmlhRXhwYW5kZWQoKSB7XG5cdFx0dmFyIGV4cGFuZGVkX2FyaWFfaXRlbXMgPSBuZXcgd3N1X2J0X2FyaWFfZXhwYW5kZWQoe1xuXHRcdFx0bmF2X2l0ZW1fc2VsZWN0b3JzOiAnLicgKyB0aGlzLnBhcmFtc1sncHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rX2NsYXNzX25hbWUnXSxcblx0XHRcdHVzZV9hbmltYXRpb25zOiB0cnVlLFxuXHRcdFx0c2hvd19sb2dzOiB0cnVlXG5cdFx0fSk7XG5cdFx0ZXhwYW5kZWRfYXJpYV9pdGVtcy5pbml0KCk7XG5cdH1cblxuXHQvLyBJbml0aWF0ZSBrZXlib2FyZCBjb250cm9scyBmb3IgYWNjZXNzaWJpbGl0eSBzdXBwb3J0XG5cdGluaXRpYXRlS2V5Ym9hcmROYXZpZ2F0aW9uU3VwcG9ydCgpIHtcblx0XHR2YXIgbWVudWJhciA9IG5ldyBNZW51YmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wYXJhbXNbJ21haW5fbmF2X3NlbGVjdG9yJ10pKTtcblx0XHRtZW51YmFyLmluaXQoKTtcblx0fVxuXG5cdC8vIEdldHRlcnNcblx0Z2V0IGdldF9mcmFtZV93aWR0aCgpIHtcblx0XHRjb25zdCB3aW5kb3dJbm5lcldpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1zLW5hdi1ob3Jpem9udGFsX19uYXYtY29udGFpbmVyJykub2Zmc2V0V2lkdGg7XG5cdFx0cmV0dXJuIHdpbmRvd0lubmVyV2lkdGg7XG5cdH1cblxuXHRnZXQgZ2V0X21haW5fbmF2X3dpZHRoKCkge1xuXHRcdGNvbnN0IG1haW5OYXZJbm5lcldpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnBhcmFtc1snbWFpbl9uYXZfc2VsZWN0b3InXSkub2Zmc2V0V2lkdGg7XG5cdFx0cmV0dXJuIG1haW5OYXZJbm5lcldpZHRoO1xuXHR9XG5cblx0Z2V0IGdldF9tYWluX25hdigpIHtcblx0XHRjb25zdCBtYWluTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnBhcmFtc1snbWFpbl9uYXZfc2VsZWN0b3InXSk7XG5cdFx0cmV0dXJuIG1haW5OYXY7XG5cdH1cblxuXHRnZXQgZ2V0X3ByaW9yaXR5X25hdigpIHtcblx0XHRjb25zdCBwcmlvcml0eV9uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMucGFyYW1zWydwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2NsYXNzX25hbWUnXSk7XG5cdFx0cmV0dXJuIHByaW9yaXR5X25hdjtcblx0fVxuXG5cdGdldCBnZXRfcHJpb3JpdHlfbmF2X3N1Ym1lbnUoKSB7XG5cdFx0Y29uc3QgcHJpb3JpdHlfbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLnBhcmFtc1sncHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saXN0X2NsYXNzX25hbWUnXSk7XG5cdFx0cmV0dXJuIHByaW9yaXR5X25hdjtcblx0fVxuXG5cdGdldCBnZXRCcmVha3BvaW50cygpIHtcblx0XHRjb25zdCBicmVha3BvaW50cyA9IHRoaXMuYnJlYWtwb2ludHM7XG5cdFx0cmV0dXJuIGJyZWFrcG9pbnRzO1xuXHR9XG59XG4iLCJpbXBvcnQgbWl0dCBmcm9tICdtaXR0JztcblxuaWYgKHR5cGVvZiB3c3Vfd2RzID09ICd1bmRlZmluZWQnKSB7XG5cdHdpbmRvd1snd3N1X3dkcyddID0ge307XG5cdHdzdV93ZHMgPSB3aW5kb3cud3N1X3dkcztcbn1cblxud3N1X3dkcy5lbWl0dGVyID0gbWl0dCgpO1xuXG5leHBvcnQgZGVmYXVsdCB3c3Vfd2RzO1xuIiwiLy8gICAgICBcbi8vIEFuIGV2ZW50IGhhbmRsZXIgY2FuIHRha2UgYW4gb3B0aW9uYWwgZXZlbnQgYXJndW1lbnRcbi8vIGFuZCBzaG91bGQgbm90IHJldHVybiBhIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQSBtYXAgb2YgZXZlbnQgdHlwZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG5cbi8qKiBNaXR0OiBUaW55ICh+MjAwYikgZnVuY3Rpb25hbCBldmVudCBlbWl0dGVyIC8gcHVic3ViLlxuICogIEBuYW1lIG1pdHRcbiAqICBAcmV0dXJucyB7TWl0dH1cbiAqL1xuZnVuY3Rpb24gbWl0dChhbGwgICAgICAgICAgICAgICAgICkge1xuXHRhbGwgPSBhbGwgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IsIG9yIGBcIipcImAgZm9yIGFsbCBldmVudHNcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBGdW5jdGlvbiB0byBjYWxsIGluIHJlc3BvbnNlIHRvIGdpdmVuIGV2ZW50XG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvbjogZnVuY3Rpb24gb24odHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIHVucmVnaXN0ZXIgYGhhbmRsZXJgIGZyb20sIG9yIGBcIipcImBcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIHRvIHJlbW92ZVxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b2ZmOiBmdW5jdGlvbiBvZmYodHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdGlmIChhbGxbdHlwZV0pIHtcblx0XHRcdFx0YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEludm9rZSBhbGwgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqIElmIHByZXNlbnQsIGBcIipcImAgaGFuZGxlcnMgYXJlIGludm9rZWQgYWZ0ZXIgdHlwZS1tYXRjaGVkIGhhbmRsZXJzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgIFRoZSBldmVudCB0eXBlIHRvIGludm9rZVxuXHRcdCAqIEBwYXJhbSB7QW55fSBbZXZ0XSAgQW55IHZhbHVlIChvYmplY3QgaXMgcmVjb21tZW5kZWQgYW5kIHBvd2VyZnVsKSwgcGFzc2VkIHRvIGVhY2ggaGFuZGxlclxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0ZW1pdDogZnVuY3Rpb24gZW1pdCh0eXBlICAgICAgICAsIGV2dCAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5zbGljZSgpLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKHR5cGUsIGV2dCk7IH0pO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWl0dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuZXMuanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9