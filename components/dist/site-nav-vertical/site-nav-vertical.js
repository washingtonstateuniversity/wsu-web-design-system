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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/src/site-nav-vertical/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/src/site-nav-vertical/index.js":
/*!***************************************************!*\
  !*** ./components/src/site-nav-vertical/index.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_nav_vertical_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-nav-vertical.js */ "./components/src/site-nav-vertical/site-nav-vertical.js");
/* harmony import */ var _site_nav_vertical_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-nav-vertical.scss */ "./components/src/site-nav-vertical/site-nav-vertical.scss");
/* harmony import */ var _site_nav_vertical_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_site_nav_vertical_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _site_nav_vertical_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site-nav-vertical.html */ "./components/src/site-nav-vertical/site-nav-vertical.html");
/* harmony import */ var _site_nav_vertical_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_site_nav_vertical_html__WEBPACK_IMPORTED_MODULE_2__);
// JS
 // SCSS

 // HTML



/***/ }),

/***/ "./components/src/site-nav-vertical/site-nav-vertical.html":
/*!*****************************************************************!*\
  !*** ./components/src/site-nav-vertical/site-nav-vertical.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/dist/site-nav-vertical/site-nav-vertical.html";

/***/ }),

/***/ "./components/src/site-nav-vertical/site-nav-vertical.js":
/*!***************************************************************!*\
  !*** ./components/src/site-nav-vertical/site-nav-vertical.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wsuwebteam_build_tools_js_vertical_nav_wsu_bt_vertical_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wsuwebteam/build-tools/js/vertical-nav/wsu-bt-vertical-nav */ "./node_modules/@wsuwebteam/build-tools/js/vertical-nav/wsu-bt-vertical-nav.js");
/* harmony import */ var _wsuwebteam_build_tools_js_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wsuwebteam/build-tools/js/wsu-bt-wds */ "./node_modules/@wsuwebteam/build-tools/js/wsu-bt-wds.js");


var nav_vert_wrapper = document.querySelector('.wsu-s-nav-vertical__wrapper');

if (typeof nav_vert_wrapper != "undefined" && nav_vert_wrapper != null) {
  /**
   *
   * Init JS
   *
   */
  nav_vert_wrapper.classList.remove('wsu-u-no-js');
  /**
   *
   * Init vertical nav
   *
   */

  _wsuwebteam_build_tools_js_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_nav = new _wsuwebteam_build_tools_js_vertical_nav_wsu_bt_vertical_nav__WEBPACK_IMPORTED_MODULE_0__["default"]({
    nav_item_selector: '.wsu-s-nav-vertical__nav-link',
    nav_panel_control_selector: '.wsu-s-nav-vertical__menu-icon-link',
    nav_panel_selector: '.wsu-s-nav-vertical__wrapper',
    nav_list_container_selector: '.wsu-s-nav-vertical__nav-list',
    show_logs: true,
    start_collapsed_width: 1360
  });
  _wsuwebteam_build_tools_js_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_nav.init();
  /**
   *
   * Close Button
   *
   */

  var close_link = document.querySelector('.wsu-s-nav-vertical__nav-container-close-link');
  close_link.addEventListener('click', function (e) {
    e.preventDefault();
    _wsuwebteam_build_tools_js_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_1__["default"].vertical_nav.close_panel();
  });
}

/***/ }),

/***/ "./components/src/site-nav-vertical/site-nav-vertical.scss":
/*!*****************************************************************!*\
  !*** ./components/src/site-nav-vertical/site-nav-vertical.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/wsu-bt-keyboard-nav-accessibility.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/wsu-bt-keyboard-nav-accessibility.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wsu_bt_keyboard_nav_accessibility; });
/* harmony import */ var _keyboard_nav_accessibility_MenubarLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../keyboard-nav-accessibility/MenubarLinks */ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/MenubarLinks.js");


class wsu_bt_keyboard_nav_accessibility {
	constructor(params) {
		this.params = params;
	}

	init() {
		/**
		 *
		 * Loop through elements that we want to have keyboard support and make it so
		 *
		 */
		this.params['elements'].forEach(element => {
			this.initiateKeyboardNavigationSupport(element);
		});
	}

	initiateKeyboardNavigationSupport(element) {
		var menubar = new _keyboard_nav_accessibility_MenubarLinks__WEBPACK_IMPORTED_MODULE_0__["Menubar"](element);
		menubar.init();
	}
}


/***/ }),

/***/ "./node_modules/@wsuwebteam/build-tools/js/vertical-nav/wsu-bt-vertical-nav.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@wsuwebteam/build-tools/js/vertical-nav/wsu-bt-vertical-nav.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wsu_bt_vertical_nav; });
/* harmony import */ var _wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wsu-bt-wds */ "./node_modules/@wsuwebteam/build-tools/js/wsu-bt-wds.js");
/* harmony import */ var _keyboard_nav_accessibility_wsu_bt_keyboard_nav_accessibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keyboard-nav-accessibility/wsu-bt-keyboard-nav-accessibility */ "./node_modules/@wsuwebteam/build-tools/js/keyboard-nav-accessibility/wsu-bt-keyboard-nav-accessibility.js");



class wsu_bt_vertical_nav {
	constructor(params) {
		this.params = params;
		this.nav_item_selector = '';
		this.nav_panel_control_selector = '';
		this.nav_panel_selector = '';
		this.nav_list_container_selector = '';
		this.tree_mode = params.tree_mode ? true : false; // TODO needs to do something
		this.show_logs = params.show_logs ? true : false;
		this.start_collapsed_width = params.start_collapsed_width;

		/**
		 *
		 * Assign values to variables
		 *
		 */

		/* Navigation item selector */
		this.nav_item_selector = params.nav_item_selector;

		if (typeof this.nav_item_selector === 'undefined') {
			console.error('Undefined nav_item_selector. Please pass the selector you would like to be expandable.');
		}

		/* Navigation Panel Control */
		this.nav_panel_control_selector = params.nav_panel_control_selector;

		if (typeof this.nav_panel_control_selector === 'undefined') {
			console.error('Undefined nav_panel_control_selector. Please pass the selector you would like to be expandable.');
		}

		this.nav_panel_control = document.querySelector(this.nav_panel_control_selector);

		/* Navigation Panel */
		this.nav_panel_selector = params.nav_panel_selector;

		if (typeof this.nav_panel_selector === 'undefined') {
			console.error('Undefined nav_panel_selector. Please pass the selector you would like to be expandable.');
		}

		this.nav_panel = document.querySelector(this.nav_panel_selector);

		/* Navigation List Container Selector */
		this.nav_list_container_selector = params.nav_list_container_selector;

		if (typeof this.nav_list_container_selector === 'undefined') {
			console.error('Undefined nav_list_container_selector. Please pass the selector you would like to be expandable.');
		}
	}

	init() {
		/**
		 *
		 * Enable keyboard navigation accessibility
		 *
		 */
		const nav_item_selector_elements = document.querySelectorAll(this.nav_list_container_selector);
		var keyboard_nav = new _keyboard_nav_accessibility_wsu_bt_keyboard_nav_accessibility__WEBPACK_IMPORTED_MODULE_1__["default"]({
			elements: nav_item_selector_elements
		});
		keyboard_nav.init();

		/**
		 *
		 * Set nav items to expanded false
		 *
		 */
		document.querySelector(this.nav_panel_control_selector).setAttribute('aria-expanded', 'false');
		document.querySelectorAll(this.nav_item_selector).forEach(elem => { elem.setAttribute('aria-expanded', 'false'); });

		/**
		 *
		 * Create event listeners
		 *
		 */

		// Toggle Panels
		this.nav_panel_control.addEventListener('click', this.toggle_panel.bind(this));

		// Toggle Nav Items
		document.querySelectorAll('.wsu-s-nav-vertical__nav-item--has-children > .wsu-s-nav-vertical__nav-link').forEach(elem => { elem.addEventListener('click', this.toggle.bind(this)); }); // TODO: Abstract selector as parameter

		// On panel open
		_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].emitter.on('wsu-vertical-nav--open', this.panel_open.bind(this));

		// After panel open
		_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].emitter.on('wsu-vertical-nav--after-open', this.panel_after_open.bind(this));

		// On panel close
		_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].emitter.on('wsu-vertical-nav--close', this.panel_close.bind(this));

		// After panel close
		_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].emitter.on('wsu-vertical-nav--after-close', this.panel_after_close.bind(this));

		/**
		 *
		 * Set default state as open
		 *
		 */
		if ( this.nav_panel.classList.contains('wsu-s-nav-vertical__wrapper--start-open' ) ) {

			this.nav_panel.classList.remove('wsu-s-nav-vertical__wrapper--start-open');

			if ( this.start_collapsed_width < window.innerWidth ) {
			
				this.open_panel();

			} else {

				this.close_panel();

			}
		}
	}

	open_current_target(e) {
		e.preventDefault();
		e.currentTarget.setAttribute('aria-expanded', 'true');
	}

	open_target(e) {
		e.preventDefault();
		e.target.setAttribute('aria-expanded', 'true');
	}

	open_panel() {
		/* Set aria expanded attribute */
		this.nav_panel_control.setAttribute('aria-expanded', 'true');

		/* Add class to wrapper */
		this.nav_panel.classList.add('wsu-s-nav-vertical__wrapper--open');

		/**
		 *
		 * Event on open
		 * wsu-vertical-nav--open
		 *
		 */
		_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].emitter.emit('wsu-vertical-nav--open');
		if (this.show_logs) {
			console.log('Event emitted: wsu-vertical-nav--open');
		}

		/**
		 *
		 * Event after open completes
		 * wsu-vertical-nav--after-open
		 *
		 */
		const openAnimationTime = 300; // in ms the time it takes for the menu to finish opening

		setTimeout(() => {
			_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].emitter.emit('wsu-vertical-nav--after-open');

			if (this.show_logs) {
				console.log('Event emitted: wsu-vertical-nav--after-open');
			}
		}, openAnimationTime);

		/**
		 *
		 * Add body class
		 *
		 */
		document.body.classList.add('wsu-s-nav-vertical__nav--is-open');
	}

	close(e) {
		e.preventDefault();
		e.target.setAttribute('aria-expanded', 'false');
	}

	close_panel() {
		/* Set aria expanded attribute */
		this.nav_panel_control.setAttribute('aria-expanded', 'false');

		/* Remove open class */
		this.nav_panel.classList.remove('wsu-s-nav-vertical__wrapper--open');

		/* Emit close event */
		_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].emitter.emit('wsu-vertical-nav--close');

		if (this.show_logs) {
			console.log('Event emitted: wsu-vertical-nav--close');
		}

		/**
		 *
		 * Event after close completes
		 * wsu-vertical-nav--after-close
		 *
		 */
		const closeAnimationTime = 600; // in ms the time it takes for the menu to finish opening

		setTimeout(() => {
			_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].emitter.emit('wsu-vertical-nav--after-close');

			if (this.show_logs) {
				console.log('Event emitted: wsu-vertical-nav--after-close');
			}
		}, closeAnimationTime);

		/**
		 *
		 * Remove body class
		 *
		 */
		document.body.classList.remove('wsu-s-nav-vertical__nav--is-open');
	}

	toggle(e) {
		if (e.currentTarget.getAttribute('aria-expanded') == 'false') {
			this.open_current_target(e);
		} else if (e.target.getAttribute('aria-expanded') == 'false') {
			this.open_target(e);
		} else {
			this.close(e);
		}
	}

	toggle_panel(e) {
		e.preventDefault();

		if (this.nav_panel_control.getAttribute('aria-expanded') == 'true') {
			this.close_panel();
		} else {
			this.open_panel();
		}
	}

	panel_open() {
		const closeButton = document.querySelector('.wsu-s-nav-vertical__nav-container-close-link');

		closeButton.classList.remove('fadeOutUp');
		closeButton.classList.add('animated', 'fadeInDown', 'faster');

		/**
		 *
		 * Animate menu items in on vert nav open using emitters
		 *
		 */
		const navItems = document.querySelectorAll('.wsu-s-nav-vertical__nav-list-container > li');
		const navItemsCount = navItems.length;

		for (var i = 0; i < navItemsCount; i++) {
			(function (i) {
				// Duration between each item being animated
				const duration = 30;
				const curve = 0.25;

				let increment = duration + (duration * (i * (i * curve))); // Bezier

				setTimeout(function () {
					navItems[i].classList.remove('fadeOutLeft');
					navItems[i].classList.add('animated', 'fadeInLeft');
				}, increment);
			})(i);
		};

		/**
		 *
		 * Create event listener for allowing panel to be closed on click
		 *
		 */
		const _this = this;

		window.addEventListener('click', function (e) {
			if (e.target.className == "wsu-s-nav-vertical__wrapper wsu-s-nav-vertical__wrapper--open") {
				_this.close_panel();
			}
		});

		/**
		 *
		 * Display global header when panel is opened if it exists
		 *
		 */
		const wsu_global_header = document.querySelector('.wsu-g-header__wrapper');

		if (typeof wsu_global_header != "undefined" && wsu_global_header != null) {
			document.body.classList.remove('wsu-g-header--is-hidden');
		}

		/**
		 *
		 * Resize horizontal nav if it exists
		 *
		 */
		const wsu_horz_nav = document.querySelectorAll('.wsu-s-nav-horizontal__wrapper');

		if (wsu_horz_nav.length !== 0) {
			// Resize horizontal navigation
			_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].horizontal_nav.update_nav();

			if (this.show_logs) {
				console.log('.wsu-s-nav-horizontal__wrapper exists');
			}
		} else {
			if (this.show_logs) {
				console.log('.wsu-s-nav-horizontal__wrapper does not exist');
			}
		}
	}

	panel_after_open() {
		/**
		 *
		 * Resize horizontal nav if it exists
		 *
		 */
		const wsu_horz_nav = document.querySelectorAll('.wsu-s-nav-horizontal__wrapper');

		if (wsu_horz_nav.length !== 0) {
			// Resize horizontal navigation
			_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].horizontal_nav.update_nav();

			if (this.show_logs) {
				console.log('.wsu-s-nav-horizontal__wrapper exists');
			}
		} else {
			if (this.show_logs) {
				console.log('.wsu-s-nav-horizontal__wrapper does not exist');
			}
		}
	}

	panel_close() {
		const closeButton = document.querySelector('.wsu-s-nav-vertical__nav-container-close-link');

		closeButton.classList.remove('fadeInDown');
		closeButton.classList.add('fadeOutUp');

		/**
		 *
		 * Animate menu items in on vert nav open using emitters
		 *
		 */
		const navItems = document.querySelectorAll('.wsu-s-nav-vertical__nav-list-container > li');
		const navItemsCount = navItems.length;

		for (var i = 0; i < navItemsCount; i++) {

			(function (i) {
				// Duration between each item being animated
				const duration = 50;
				let increment = duration + (duration * (i * (i * .2)));

				setTimeout(function () {
					navItems[i].classList.remove('fadeInLeft');
					navItems[i].classList.add('fadeOutLeft');
				}, increment);
			})(i);
		};
	}

	panel_after_close() {
		/**
		 *
		 * Resize horizontal nav if it exists
		 *
		 */
		const wsu_horz_nav = document.querySelectorAll('.wsu-s-nav-horizontal__wrapper');

		if (wsu_horz_nav.length !== 0) {
			// Resize horizontal navigation
			_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].horizontal_nav.update_nav();

			if (this.show_logs) {
				console.log('.wsu-s-nav-horizontal__wrapper exists');
			}
		} else {
			if (this.show_logs) {
				console.log('.wsu-s-nav-horizontal__wrapper does not exist');
			}
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1uYXYtdmVydGljYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1uYXYtdmVydGljYWwvc2l0ZS1uYXYtdmVydGljYWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi12ZXJ0aWNhbC9zaXRlLW5hdi12ZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi12ZXJ0aWNhbC9zaXRlLW5hdi12ZXJ0aWNhbC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad3N1d2VidGVhbS9idWlsZC10b29scy9qcy9rZXlib2FyZC1uYXYtYWNjZXNzaWJpbGl0eS9NZW51YmFySXRlbUxpbmtzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad3N1d2VidGVhbS9idWlsZC10b29scy9qcy9rZXlib2FyZC1uYXYtYWNjZXNzaWJpbGl0eS9NZW51YmFyTGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L1BvcHVwTWVudUl0ZW1MaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMva2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvUG9wdXBNZW51TGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L3dzdS1idC1rZXlib2FyZC1uYXYtYWNjZXNzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMvdmVydGljYWwtbmF2L3dzdS1idC12ZXJ0aWNhbC1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL3dzdS1idC13ZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIl0sIm5hbWVzIjpbIm5hdl92ZXJ0X3dyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJ3c3VfYnRfd2RzIiwidmVydGljYWxfbmF2Iiwid3N1X2J0X3ZlcnRpY2FsX25hdiIsIm5hdl9pdGVtX3NlbGVjdG9yIiwibmF2X3BhbmVsX2NvbnRyb2xfc2VsZWN0b3IiLCJuYXZfcGFuZWxfc2VsZWN0b3IiLCJuYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3IiLCJzaG93X2xvZ3MiLCJzdGFydF9jb2xsYXBzZWRfd2lkdGgiLCJpbml0IiwiY2xvc2VfbGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZV9wYW5lbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztDQUdBOzs7Ozs7Ozs7Ozs7O0FDTkEsaUJBQWlCLHFCQUF1Qiw4RDs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLDhCQUF2QixDQUF6Qjs7QUFFQSxJQUFJLE9BQU9GLGdCQUFQLElBQTJCLFdBQTNCLElBQTBDQSxnQkFBZ0IsSUFBSSxJQUFsRSxFQUF3RTtBQUV2RTs7Ozs7QUFLQUEsa0JBQWdCLENBQUNHLFNBQWpCLENBQTJCQyxNQUEzQixDQUFrQyxhQUFsQztBQUVBOzs7Ozs7QUFLQUMsK0VBQVUsQ0FBQ0MsWUFBWCxHQUEwQixJQUFJQyxtR0FBSixDQUF3QjtBQUNqREMscUJBQWlCLEVBQUUsK0JBRDhCO0FBRWpEQyw4QkFBMEIsRUFBRSxxQ0FGcUI7QUFHakRDLHNCQUFrQixFQUFFLDhCQUg2QjtBQUlqREMsK0JBQTJCLEVBQUUsK0JBSm9CO0FBS2pEQyxhQUFTLEVBQUUsSUFMc0M7QUFNakRDLHlCQUFxQixFQUFFO0FBTjBCLEdBQXhCLENBQTFCO0FBU0FSLCtFQUFVLENBQUNDLFlBQVgsQ0FBd0JRLElBQXhCO0FBRUE7Ozs7OztBQUtBLE1BQU1DLFVBQVUsR0FBR2QsUUFBUSxDQUFDQyxhQUFULENBQXVCLCtDQUF2QixDQUFuQjtBQUVBYSxZQUFVLENBQUNDLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFVBQVVDLENBQVYsRUFBYTtBQUNqREEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FiLGlGQUFVLENBQUNDLFlBQVgsQ0FBd0JhLFdBQXhCO0FBQ0EsR0FIRDtBQUtBLEM7Ozs7Ozs7Ozs7O0FDMUNELHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHlEQUFTO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7OztBQ2xKUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCO0FBQ3hCLHNCQUFzQjs7QUFFdEIsdUJBQXVCO0FBQ3ZCLHNCQUFzQjs7QUFFdEIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsNkRBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsZ0JBQWdCLDhCQUE4QjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7OztBQ3hMUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHlEQUFTO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7OztBQ3BNUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0Q7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCLHNCQUFzQjs7QUFFdEIsdUJBQXVCO0FBQ3ZCLHNCQUFzQjs7QUFFdEIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsNERBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLGdCQUFnQiwyQkFBMkI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87Ozs7Ozs7Ozs7Ozs7QUM5T1A7QUFBQTtBQUFBO0FBQXFFOztBQUV0RDtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esb0JBQW9CLGdGQUFPO0FBQzNCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFvQztBQUM0RTs7QUFFakc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIscUdBQWlDO0FBQzFEO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSw2Q0FBNkMsRUFBRTs7QUFFcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEhBQTRILHdEQUF3RCxFQUFFLEVBQUU7O0FBRXhMO0FBQ0EsRUFBRSxtREFBTzs7QUFFVDtBQUNBLEVBQUUsbURBQU87O0FBRVQ7QUFDQSxFQUFFLG1EQUFPOztBQUVUO0FBQ0EsRUFBRSxtREFBTzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxtREFBTztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0EsR0FBRyxtREFBTzs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxtREFBTzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBLEdBQUcsbURBQU87O0FBRVY7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOERBQThEOztBQUU5RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsbURBQU87O0FBRVY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsbURBQU87O0FBRVY7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRyxtREFBTzs7QUFFVjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM1hBO0FBQUE7QUFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixvREFBSTs7QUFFUCxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDVHZCO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBOzs7Ozs7QUFNQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWMsRUFBRTtBQUNyRSxvREFBb0Qsb0JBQW9CLEVBQUU7QUFDMUU7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUM7QUFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9kaXN0L3NpdGUtbmF2LXZlcnRpY2FsL3NpdGUtbmF2LXZlcnRpY2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi12ZXJ0aWNhbC9pbmRleC5qc1wiKTtcbiIsIi8vIEpTXG5pbXBvcnQgJy4vc2l0ZS1uYXYtdmVydGljYWwuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vc2l0ZS1uYXYtdmVydGljYWwuc2Nzcyc7XG5cbi8vIEhUTUxcbmltcG9ydCAnLi9zaXRlLW5hdi12ZXJ0aWNhbC5odG1sJztcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNvbXBvbmVudHMvZGlzdC9zaXRlLW5hdi12ZXJ0aWNhbC9zaXRlLW5hdi12ZXJ0aWNhbC5odG1sXCI7IiwiaW1wb3J0IHdzdV9idF92ZXJ0aWNhbF9uYXYgZnJvbSAnQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMvdmVydGljYWwtbmF2L3dzdS1idC12ZXJ0aWNhbC1uYXYnO1xuaW1wb3J0IHdzdV9idF93ZHMgZnJvbSAnQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMvd3N1LWJ0LXdkcyc7XG5cbmNvbnN0IG5hdl92ZXJ0X3dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyJyk7XG5cbmlmICh0eXBlb2YgbmF2X3ZlcnRfd3JhcHBlciAhPSBcInVuZGVmaW5lZFwiICYmIG5hdl92ZXJ0X3dyYXBwZXIgIT0gbnVsbCkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBJbml0IEpTXG5cdCAqXG5cdCAqL1xuXHRuYXZfdmVydF93cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS11LW5vLWpzJyk7XG5cblx0LyoqXG5cdCAqXG5cdCAqIEluaXQgdmVydGljYWwgbmF2XG5cdCAqXG5cdCAqL1xuXHR3c3VfYnRfd2RzLnZlcnRpY2FsX25hdiA9IG5ldyB3c3VfYnRfdmVydGljYWxfbmF2KHtcblx0XHRuYXZfaXRlbV9zZWxlY3RvcjogJy53c3Utcy1uYXYtdmVydGljYWxfX25hdi1saW5rJyxcblx0XHRuYXZfcGFuZWxfY29udHJvbF9zZWxlY3RvcjogJy53c3Utcy1uYXYtdmVydGljYWxfX21lbnUtaWNvbi1saW5rJyxcblx0XHRuYXZfcGFuZWxfc2VsZWN0b3I6ICcud3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyJyxcblx0XHRuYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3I6ICcud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtbGlzdCcsXG5cdFx0c2hvd19sb2dzOiB0cnVlLFxuXHRcdHN0YXJ0X2NvbGxhcHNlZF93aWR0aDogMTM2MFxuXHR9KTtcblxuXHR3c3VfYnRfd2RzLnZlcnRpY2FsX25hdi5pbml0KCk7XG5cblx0LyoqXG5cdCAqXG5cdCAqIENsb3NlIEJ1dHRvblxuXHQgKlxuXHQgKi9cblx0Y29uc3QgY2xvc2VfbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3Utcy1uYXYtdmVydGljYWxfX25hdi1jb250YWluZXItY2xvc2UtbGluaycpO1xuXG5cdGNsb3NlX2xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR3c3VfYnRfd2RzLnZlcnRpY2FsX25hdi5jbG9zZV9wYW5lbCgpO1xuXHR9KTtcblxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcclxuKiAgIFRoaXMgY29udGVudCBpcyBsaWNlbnNlZCBhY2NvcmRpbmcgdG8gdGhlIFczQyBTb2Z0d2FyZSBMaWNlbnNlIGF0XHJcbiogICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcclxuKi9cclxuXHJcbmltcG9ydCB7IFBvcHVwTWVudSB9IGZyb20gJy4vUG9wdXBNZW51TGlua3MnO1xyXG5cclxudmFyIE1lbnViYXJJdGVtID0gZnVuY3Rpb24gKGRvbU5vZGUsIG1lbnVPYmopIHtcclxuXHJcblx0dGhpcy5tZW51ID0gbWVudU9iajtcclxuXHR0aGlzLmRvbU5vZGUgPSBkb21Ob2RlO1xyXG5cdHRoaXMucG9wdXBNZW51ID0gZmFsc2U7XHJcblxyXG5cdHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcclxuXHR0aGlzLmhhc0hvdmVyID0gZmFsc2U7XHJcblxyXG5cdHRoaXMuaXNNZW51YmFySXRlbSA9IHRydWU7XHJcblxyXG5cdHRoaXMua2V5Q29kZSA9IE9iamVjdC5mcmVlemUoe1xyXG5cdFx0J1RBQic6IDksXHJcblx0XHQnUkVUVVJOJzogMTMsXHJcblx0XHQnRVNDJzogMjcsXHJcblx0XHQnU1BBQ0UnOiAzMixcclxuXHRcdCdQQUdFVVAnOiAzMyxcclxuXHRcdCdQQUdFRE9XTic6IDM0LFxyXG5cdFx0J0VORCc6IDM1LFxyXG5cdFx0J0hPTUUnOiAzNixcclxuXHRcdCdMRUZUJzogMzcsXHJcblx0XHQnVVAnOiAzOCxcclxuXHRcdCdSSUdIVCc6IDM5LFxyXG5cdFx0J0RPV04nOiA0MFxyXG5cdH0pO1xyXG59O1xyXG5cclxuTWVudWJhckl0ZW0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5kb21Ob2RlLnRhYkluZGV4ID0gLTE7XHJcblxyXG5cdHRoaXMuZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duLmJpbmQodGhpcykpO1xyXG5cdHRoaXMuZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKSk7XHJcblx0dGhpcy5kb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKSk7XHJcblxyXG5cdC8vIEluaXRpYWxpemUgcG9wIHVwIG1lbnVzXHJcblxyXG5cdHZhciBuZXh0RWxlbWVudCA9IHRoaXMuZG9tTm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC50YWdOYW1lID09PSAnVUwnKSB7XHJcblx0XHR0aGlzLnBvcHVwTWVudSA9IG5ldyBQb3B1cE1lbnUobmV4dEVsZW1lbnQsIHRoaXMpO1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUuaW5pdCgpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5NZW51YmFySXRlbS5wcm90b3R5cGUuaGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHZhciB0Z3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxyXG5cdFx0Y2hhciA9IGV2ZW50LmtleSxcclxuXHRcdGZsYWcgPSBmYWxzZSxcclxuXHRcdGNsaWNrRXZlbnQ7XHJcblxyXG5cdGZ1bmN0aW9uIGlzUHJpbnRhYmxlQ2hhcmFjdGVyKHN0cikge1xyXG5cdFx0cmV0dXJuIHN0ci5sZW5ndGggPT09IDEgJiYgc3RyLm1hdGNoKC9cXFMvKTtcclxuXHR9XHJcblxyXG5cdHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuU1BBQ0U6XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5SRVRVUk46XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5ET1dOOlxyXG5cdFx0XHRpZiAodGhpcy5wb3B1cE1lbnUpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5vcGVuKCk7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSgpO1xyXG5cdFx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkxFRlQ6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvUHJldmlvdXNJdGVtKHRoaXMpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUklHSFQ6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvTmV4dEl0ZW0odGhpcyk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5VUDpcclxuXHRcdFx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUub3BlbigpO1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51LnNldEZvY3VzVG9MYXN0SXRlbSgpO1xyXG5cdFx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkhPTUU6XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5QQUdFVVA6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvRmlyc3RJdGVtKCk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5FTkQ6XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5QQUdFRE9XTjpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9MYXN0SXRlbSgpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuVEFCOlxyXG5cdFx0XHRpZiAodGhpcy5wb3B1cE1lbnUgIT0gZmFsc2UpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5jbG9zZSh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5FU0M6XHJcblx0XHRcdGlmICh0aGlzLnBvcHVwTWVudSAhPSBmYWxzZSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51LmNsb3NlKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGlmIChpc1ByaW50YWJsZUNoYXJhY3RlcihjaGFyKSkge1xyXG5cdFx0XHRcdHRoaXMubWVudS5zZXRGb2N1c0J5Rmlyc3RDaGFyYWN0ZXIodGhpcywgY2hhcik7XHJcblx0XHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHRpZiAoZmxhZykge1xyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnViYXJJdGVtLnByb3RvdHlwZS5zZXRFeHBhbmRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0dGhpcy5kb21Ob2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0dGhpcy5kb21Ob2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnViYXJJdGVtLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMubWVudS5oYXNGb2N1cyA9IHRydWU7XHJcbn07XHJcblxyXG5NZW51YmFySXRlbS5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMubWVudS5oYXNGb2N1cyA9IGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IHZhciBNZW51YmFySXRlbTtcclxuIiwiLypcclxuKiAgIFRoaXMgY29udGVudCBpcyBsaWNlbnNlZCBhY2NvcmRpbmcgdG8gdGhlIFczQyBTb2Z0d2FyZSBMaWNlbnNlIGF0XHJcbiogICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcclxuKi9cclxuXHJcbmltcG9ydCB7IE1lbnViYXJJdGVtIH0gZnJvbSAnLi9NZW51YmFySXRlbUxpbmtzJztcclxuXHJcbnZhciBNZW51YmFyID0gZnVuY3Rpb24gKGRvbU5vZGUpIHtcclxuXHR2YXIgZWxlbWVudENoaWxkcmVuLFxyXG5cdFx0bXNnUHJlZml4ID0gJ01lbnViYXIgY29uc3RydWN0b3IgYXJndW1lbnQgbWVudWJhck5vZGUgJztcclxuXHJcblx0Ly8gQ2hlY2sgd2hldGhlciBtZW51YmFyTm9kZSBpcyBhIERPTSBlbGVtZW50XHJcblx0aWYgKCFkb21Ob2RlIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihtc2dQcmVmaXggKyAnaXMgbm90IGEgRE9NIEVsZW1lbnQuJyk7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayB3aGV0aGVyIG1lbnViYXJOb2RlIGhhcyBkZXNjZW5kYW50IGVsZW1lbnRzXHJcblx0aWYgKGRvbU5vZGUuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihtc2dQcmVmaXggKyAnaGFzIG5vIGVsZW1lbnQgY2hpbGRyZW4uJyk7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayB3aGV0aGVyIG1lbnViYXJOb2RlIGhhcyBBIGVsZW1lbnRzXHJcblx0dmFyIGUgPSBkb21Ob2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdHdoaWxlIChlKSB7XHJcblx0XHR2YXIgbWVudWJhckl0ZW0gPSBlLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0aWYgKGUgJiYgbWVudWJhckl0ZW0gJiYgbWVudWJhckl0ZW0udGFnTmFtZSAhPT0gJ0EnKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihtc2dQcmVmaXggKyAnaGFzIGNoaWxkIGVsZW1lbnRzIGFyZSBub3QgQSBlbGVtZW50cy4nKTtcclxuXHRcdH1cclxuXHRcdGUgPSBlLm5leHRFbGVtZW50U2libGluZztcclxuXHR9XHJcblxyXG5cdHRoaXMuaXNNZW51YmFyID0gdHJ1ZTtcclxuXHJcblx0dGhpcy5kb21Ob2RlID0gZG9tTm9kZTtcclxuXHJcblx0dGhpcy5tZW51YmFySXRlbXMgPSBbXTsgLy8gU2VlIE1lbnViYXIgaW5pdCBtZXRob2RcclxuXHR0aGlzLmZpcnN0Q2hhcnMgPSBbXTsgLy8gU2VlIE1lbnViYXIgaW5pdCBtZXRob2RcclxuXHJcblx0dGhpcy5maXJzdEl0ZW0gPSBudWxsOyAvLyBTZWUgTWVudWJhciBpbml0IG1ldGhvZFxyXG5cdHRoaXMubGFzdEl0ZW0gPSBudWxsOyAvLyBTZWUgTWVudWJhciBpbml0IG1ldGhvZFxyXG5cclxuXHR0aGlzLmhhc0ZvY3VzID0gZmFsc2U7IC8vIFNlZSBNZW51YmFySXRlbSBoYW5kbGVGb2N1cywgaGFuZGxlQmx1clxyXG5cdHRoaXMuaGFzSG92ZXIgPSBmYWxzZTsgLy8gU2VlIE1lbnViYXIgaGFuZGxlTW91c2VvdmVyLCBoYW5kbGVNb3VzZW91dFxyXG59O1xyXG5cclxuLypcclxuKiAgIEBtZXRob2QgTWVudWJhci5wcm90b3R5cGUuaW5pdFxyXG4qXHJcbiogICBAZGVzY1xyXG4qICAgICAgIEFkZHMgQVJJQSByb2xlIHRvIHRoZSBtZW51YmFyIG5vZGVcclxuKiAgICAgICBUcmF2ZXJzZSBtZW51YmFyIGNoaWxkcmVuIGZvciBBIGVsZW1lbnRzIHRvIGNvbmZpZ3VyZSBlYWNoIEEgZWxlbWVudCBhcyBhIEFSSUEgbWVudWl0ZW1cclxuKiAgICAgICBhbmQgcG9wdWxhdGUgbWVudWl0ZW1zIGFycmF5LiBJbml0aWFsaXplIGZpcnN0SXRlbSBhbmQgbGFzdEl0ZW0gcHJvcGVydGllcy5cclxuKi9cclxuTWVudWJhci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgbWVudWJhckl0ZW0sIGNoaWxkRWxlbWVudCwgbWVudUVsZW1lbnQsIHRleHRDb250ZW50LCBudW1JdGVtcztcclxuXHJcblxyXG5cdC8vIFRyYXZlcnNlIHRoZSBlbGVtZW50IGNoaWxkcmVuIG9mIG1lbnViYXJOb2RlOiBjb25maWd1cmUgZWFjaCB3aXRoXHJcblx0Ly8gbWVudWl0ZW0gcm9sZSBiZWhhdmlvciBhbmQgc3RvcmUgcmVmZXJlbmNlIGluIG1lbnVpdGVtcyBhcnJheS5cclxuXHR2YXIgZWxlbSA9IHRoaXMuZG9tTm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcblx0d2hpbGUgKGVsZW0pIHtcclxuXHRcdHZhciBtZW51RWxlbWVudCA9IGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5cdFx0aWYgKGVsZW0gJiYgbWVudUVsZW1lbnQgJiYgbWVudUVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcblx0XHRcdG1lbnViYXJJdGVtID0gbmV3IE1lbnViYXJJdGVtKG1lbnVFbGVtZW50LCB0aGlzKTtcclxuXHRcdFx0bWVudWJhckl0ZW0uaW5pdCgpO1xyXG5cdFx0XHR0aGlzLm1lbnViYXJJdGVtcy5wdXNoKG1lbnViYXJJdGVtKTtcclxuXHRcdFx0dGV4dENvbnRlbnQgPSBtZW51RWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdHRoaXMuZmlyc3RDaGFycy5wdXNoKHRleHRDb250ZW50LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpKTtcclxuXHRcdH1cclxuXHJcblx0XHRlbGVtID0gZWxlbS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0fVxyXG5cclxuXHQvLyBVc2UgcG9wdWxhdGVkIG1lbnVpdGVtcyBhcnJheSB0byBpbml0aWFsaXplIGZpcnN0SXRlbSBhbmQgbGFzdEl0ZW0uXHJcblx0bnVtSXRlbXMgPSB0aGlzLm1lbnViYXJJdGVtcy5sZW5ndGg7XHJcblx0aWYgKG51bUl0ZW1zID4gMCkge1xyXG5cdFx0dGhpcy5maXJzdEl0ZW0gPSB0aGlzLm1lbnViYXJJdGVtc1swXTtcclxuXHRcdHRoaXMubGFzdEl0ZW0gPSB0aGlzLm1lbnViYXJJdGVtc1tudW1JdGVtcyAtIDFdO1xyXG5cdH1cclxuXHR0aGlzLmZpcnN0SXRlbS5kb21Ob2RlLnRhYkluZGV4ID0gMDtcclxufTtcclxuXHJcbi8qIEZPQ1VTIE1BTkFHRU1FTlQgTUVUSE9EUyAqL1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuc2V0Rm9jdXNUb0l0ZW0gPSBmdW5jdGlvbiAobmV3SXRlbSkge1xyXG5cclxuXHR2YXIgZmxhZyA9IGZhbHNlO1xyXG5cclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWVudWJhckl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgbWJpID0gdGhpcy5tZW51YmFySXRlbXNbaV07XHJcblxyXG5cdFx0aWYgKG1iaS5kb21Ob2RlLnRhYkluZGV4ID09IDApIHtcclxuXHRcdFx0ZmxhZyA9IG1iaS5kb21Ob2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XHJcblx0XHR9XHJcblxyXG5cdFx0bWJpLmRvbU5vZGUudGFiSW5kZXggPSAtMTtcclxuXHRcdGlmIChtYmkucG9wdXBNZW51KSB7XHJcblx0XHRcdG1iaS5wb3B1cE1lbnUuY2xvc2UoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5ld0l0ZW0uZG9tTm9kZS5mb2N1cygpO1xyXG5cdG5ld0l0ZW0uZG9tTm9kZS50YWJJbmRleCA9IDA7XHJcblxyXG5cdGlmIChmbGFnICYmIG5ld0l0ZW0ucG9wdXBNZW51KSB7XHJcblx0XHRuZXdJdGVtLnBvcHVwTWVudS5vcGVuKCk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSA9IGZ1bmN0aW9uIChmbGFnKSB7XHJcblx0dGhpcy5zZXRGb2N1c1RvSXRlbSh0aGlzLmZpcnN0SXRlbSk7XHJcbn07XHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5zZXRGb2N1c1RvTGFzdEl0ZW0gPSBmdW5jdGlvbiAoZmxhZykge1xyXG5cdHRoaXMuc2V0Rm9jdXNUb0l0ZW0odGhpcy5sYXN0SXRlbSk7XHJcbn07XHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5zZXRGb2N1c1RvUHJldmlvdXNJdGVtID0gZnVuY3Rpb24gKGN1cnJlbnRJdGVtKSB7XHJcblx0dmFyIGluZGV4O1xyXG5cdHZhciBuZXdJdGVtO1xyXG5cclxuXHRpZiAoY3VycmVudEl0ZW0gPT09IHRoaXMuZmlyc3RJdGVtKSB7XHJcblx0XHRuZXdJdGVtID0gdGhpcy5sYXN0SXRlbTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRpbmRleCA9IHRoaXMubWVudWJhckl0ZW1zLmluZGV4T2YoY3VycmVudEl0ZW0pO1xyXG5cdFx0bmV3SXRlbSA9IHRoaXMubWVudWJhckl0ZW1zW2luZGV4IC0gMV07XHJcblx0fVxyXG5cclxuXHR0aGlzLnNldEZvY3VzVG9JdGVtKG5ld0l0ZW0pO1xyXG5cclxufTtcclxuXHJcbk1lbnViYXIucHJvdG90eXBlLnNldEZvY3VzVG9OZXh0SXRlbSA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSkge1xyXG5cdHZhciBpbmRleDtcclxuXHR2YXIgbmV3SXRlbTtcclxuXHJcblx0aWYgKGN1cnJlbnRJdGVtID09PSB0aGlzLmxhc3RJdGVtKSB7XHJcblx0XHRuZXdJdGVtID0gdGhpcy5maXJzdEl0ZW07XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0aW5kZXggPSB0aGlzLm1lbnViYXJJdGVtcy5pbmRleE9mKGN1cnJlbnRJdGVtKTtcclxuXHRcdG5ld0l0ZW0gPSB0aGlzLm1lbnViYXJJdGVtc1tpbmRleCArIDFdO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zZXRGb2N1c1RvSXRlbShuZXdJdGVtKTtcclxuXHJcbn07XHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5zZXRGb2N1c0J5Rmlyc3RDaGFyYWN0ZXIgPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0sIGNoYXIpIHtcclxuXHR2YXIgc3RhcnQsIGluZGV4LCBjaGFyID0gY2hhci50b0xvd2VyQ2FzZSgpO1xyXG5cdHZhciBmbGFnID0gY3VycmVudEl0ZW0uZG9tTm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xyXG5cclxuXHQvLyBHZXQgc3RhcnQgaW5kZXggZm9yIHNlYXJjaCBiYXNlZCBvbiBwb3NpdGlvbiBvZiBjdXJyZW50SXRlbVxyXG5cdHN0YXJ0ID0gdGhpcy5tZW51YmFySXRlbXMuaW5kZXhPZihjdXJyZW50SXRlbSkgKyAxO1xyXG5cdGlmIChzdGFydCA9PT0gdGhpcy5tZW51YmFySXRlbXMubGVuZ3RoKSB7XHJcblx0XHRzdGFydCA9IDA7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayByZW1haW5pbmcgc2xvdHMgaW4gdGhlIG1lbnVcclxuXHRpbmRleCA9IHRoaXMuZ2V0SW5kZXhGaXJzdENoYXJzKHN0YXJ0LCBjaGFyKTtcclxuXHJcblx0Ly8gSWYgbm90IGZvdW5kIGluIHJlbWFpbmluZyBzbG90cywgY2hlY2sgZnJvbSBiZWdpbm5pbmdcclxuXHRpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRpbmRleCA9IHRoaXMuZ2V0SW5kZXhGaXJzdENoYXJzKDAsIGNoYXIpO1xyXG5cdH1cclxuXHJcblx0Ly8gSWYgbWF0Y2ggd2FzIGZvdW5kLi4uXHJcblx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdHRoaXMuc2V0Rm9jdXNUb0l0ZW0odGhpcy5tZW51YmFySXRlbXNbaW5kZXhdKTtcclxuXHR9XHJcbn07XHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5nZXRJbmRleEZpcnN0Q2hhcnMgPSBmdW5jdGlvbiAoc3RhcnRJbmRleCwgY2hhcikge1xyXG5cdGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpIDwgdGhpcy5maXJzdENoYXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoY2hhciA9PT0gdGhpcy5maXJzdENoYXJzW2ldKSB7XHJcblx0XHRcdHJldHVybiBpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gLTE7XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIE1lbnViYXI7XHJcbiIsIi8qXHJcbiogICBUaGlzIGNvbnRlbnQgaXMgbGljZW5zZWQgYWNjb3JkaW5nIHRvIHRoZSBXM0MgU29mdHdhcmUgTGljZW5zZSBhdFxyXG4qICAgaHR0cHM6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50XHJcbiovXHJcblxyXG5pbXBvcnQgeyBQb3B1cE1lbnUgfSBmcm9tICcuL1BvcHVwTWVudUxpbmtzJztcclxuXHJcbnZhciBNZW51SXRlbSA9IGZ1bmN0aW9uIChkb21Ob2RlLCBtZW51T2JqKSB7XHJcblxyXG5cdHRoaXMuZG9tTm9kZSA9IGRvbU5vZGU7XHJcblx0dGhpcy5tZW51ID0gbWVudU9iajtcclxuXHR0aGlzLnBvcHVwTWVudSA9IGZhbHNlO1xyXG5cdHRoaXMuaXNNZW51YmFySXRlbSA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmtleUNvZGUgPSBPYmplY3QuZnJlZXplKHtcclxuXHRcdCdUQUInOiA5LFxyXG5cdFx0J1JFVFVSTic6IDEzLFxyXG5cdFx0J0VTQyc6IDI3LFxyXG5cdFx0J1NQQUNFJzogMzIsXHJcblx0XHQnUEFHRVVQJzogMzMsXHJcblx0XHQnUEFHRURPV04nOiAzNCxcclxuXHRcdCdFTkQnOiAzNSxcclxuXHRcdCdIT01FJzogMzYsXHJcblx0XHQnTEVGVCc6IDM3LFxyXG5cdFx0J1VQJzogMzgsXHJcblx0XHQnUklHSFQnOiAzOSxcclxuXHRcdCdET1dOJzogNDBcclxuXHR9KTtcclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZG9tTm9kZS50YWJJbmRleCA9IC0xO1xyXG5cclxuXHR0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bi5iaW5kKHRoaXMpKTtcclxuXHR0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcykpO1xyXG5cdHRoaXMuZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcykpO1xyXG5cclxuXHQvLyBJbml0aWFsaXplIGZseW91dCBtZW51XHJcblxyXG5cdHZhciBuZXh0RWxlbWVudCA9IHRoaXMuZG9tTm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC50YWdOYW1lID09PSAnVUwnKSB7XHJcblx0XHR0aGlzLnBvcHVwTWVudSA9IG5ldyBQb3B1cE1lbnUobmV4dEVsZW1lbnQsIHRoaXMpO1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUuaW5pdCgpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuaXNFeHBhbmRlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5kb21Ob2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XHJcbn07XHJcblxyXG4vKiBFVkVOVCBIQU5ETEVSUyAqL1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR2YXIgdGd0ID0gZXZlbnQuY3VycmVudFRhcmdldCxcclxuXHRcdGNoYXIgPSBldmVudC5rZXksXHJcblx0XHRmbGFnID0gZmFsc2UsXHJcblx0XHRjbGlja0V2ZW50O1xyXG5cclxuXHRmdW5jdGlvbiBpc1ByaW50YWJsZUNoYXJhY3RlcihzdHIpIHtcclxuXHRcdHJldHVybiBzdHIubGVuZ3RoID09PSAxICYmIHN0ci5tYXRjaCgvXFxTLyk7XHJcblx0fVxyXG5cclxuXHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlNQQUNFOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUkVUVVJOOlxyXG5cdFx0XHRpZiAodGhpcy5wb3B1cE1lbnUpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5vcGVuKCk7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHQvLyBDcmVhdGUgc2ltdWxhdGVkIG1vdXNlIGV2ZW50IHRvIG1pbWljIHRoZSBiZWhhdmlvciBvZiBBVHNcclxuXHRcdFx0XHQvLyBhbmQgbGV0IHRoZSBldmVudCBoYW5kbGVyIGhhbmRsZUNsaWNrIGRvIHRoZSBob3VzZWtlZXBpbmcuXHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGNsaWNrRXZlbnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XHJcblx0XHRcdFx0XHRcdCd2aWV3Jzogd2luZG93LFxyXG5cdFx0XHRcdFx0XHQnYnViYmxlcyc6IHRydWUsXHJcblx0XHRcdFx0XHRcdCdjYW5jZWxhYmxlJzogdHJ1ZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xyXG5cdFx0XHRcdFx0XHQvLyBET00gTGV2ZWwgMyBmb3IgSUUgOStcclxuXHRcdFx0XHRcdFx0Y2xpY2tFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xyXG5cdFx0XHRcdFx0XHRjbGlja0V2ZW50LmluaXRFdmVudCgnY2xpY2snLCB0cnVlLCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGd0LmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5VUDpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9QcmV2aW91c0l0ZW0odGhpcyk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5ET1dOOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb05leHRJdGVtKHRoaXMpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuTEVGVDpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9Db250cm9sbGVyKCdwcmV2aW91cycsIHRydWUpO1xyXG5cdFx0XHR0aGlzLm1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5SSUdIVDpcclxuXHRcdFx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUub3BlbigpO1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51LnNldEZvY3VzVG9GaXJzdEl0ZW0oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0NvbnRyb2xsZXIoJ25leHQnLCB0cnVlKTtcclxuXHRcdFx0XHR0aGlzLm1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkhPTUU6XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5QQUdFVVA6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvRmlyc3RJdGVtKCk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5FTkQ6XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5QQUdFRE9XTjpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9MYXN0SXRlbSgpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRVNDOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0NvbnRyb2xsZXIoKTtcclxuXHRcdFx0dGhpcy5tZW51LmNsb3NlKHRydWUpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuVEFCOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0NvbnRyb2xsZXIoKTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0aWYgKGlzUHJpbnRhYmxlQ2hhcmFjdGVyKGNoYXIpKSB7XHJcblx0XHRcdFx0dGhpcy5tZW51LnNldEZvY3VzQnlGaXJzdENoYXJhY3Rlcih0aGlzLCBjaGFyKTtcclxuXHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdGlmIChmbGFnKSB7XHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLnNldEV4cGFuZGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHR0aGlzLmRvbU5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHR0aGlzLmRvbU5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5tZW51Lmhhc0ZvY3VzID0gdHJ1ZTtcclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5tZW51Lmhhc0ZvY3VzID0gZmFsc2U7XHJcblx0c2V0VGltZW91dCh0aGlzLm1lbnUuY2xvc2UuYmluZCh0aGlzLm1lbnUsIGZhbHNlKSwgMzAwKTtcclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5oYW5kbGVNb3VzZW92ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR0aGlzLm1lbnUuaGFzSG92ZXIgPSB0cnVlO1xyXG5cdHRoaXMubWVudS5vcGVuKCk7XHJcblx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHR0aGlzLnBvcHVwTWVudS5oYXNIb3ZlciA9IHRydWU7XHJcblx0XHR0aGlzLnBvcHVwTWVudS5vcGVuKCk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLmhhbmRsZU1vdXNlb3V0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHR0aGlzLnBvcHVwTWVudS5oYXNIb3ZlciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLm1lbnUuaGFzSG92ZXIgPSBmYWxzZTtcclxuXHRzZXRUaW1lb3V0KHRoaXMubWVudS5jbG9zZS5iaW5kKHRoaXMubWVudSwgZmFsc2UpLCAzMDApO1xyXG59O1xyXG5cclxuZXhwb3J0IHZhciBNZW51SXRlbTtcclxuIiwiLypcclxuKiAgIFRoaXMgY29udGVudCBpcyBsaWNlbnNlZCBhY2NvcmRpbmcgdG8gdGhlIFczQyBTb2Z0d2FyZSBMaWNlbnNlIGF0XHJcbiogICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcclxuKi9cclxuXHJcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnLi9Qb3B1cE1lbnVJdGVtTGlua3MnO1xyXG5cclxudmFyIFBvcHVwTWVudSA9IGZ1bmN0aW9uIChkb21Ob2RlLCBjb250cm9sbGVyT2JqKSB7XHJcblx0dmFyIGVsZW1lbnRDaGlsZHJlbixcclxuXHRcdG1zZ1ByZWZpeCA9ICdQb3B1cE1lbnUgY29uc3RydWN0b3IgYXJndW1lbnQgZG9tTm9kZSAnO1xyXG5cclxuXHQvLyBDaGVjayB3aGV0aGVyIGRvbU5vZGUgaXMgYSBET00gZWxlbWVudFxyXG5cdGlmICghZG9tTm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IobXNnUHJlZml4ICsgJ2lzIG5vdCBhIERPTSBFbGVtZW50LicpO1xyXG5cdH1cclxuXHQvLyBDaGVjayB3aGV0aGVyIGRvbU5vZGUgaGFzIGNoaWxkIGVsZW1lbnRzXHJcblx0aWYgKGRvbU5vZGUuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihtc2dQcmVmaXggKyAnaGFzIG5vIGVsZW1lbnQgY2hpbGRyZW4uJyk7XHJcblx0fVxyXG5cdC8vIENoZWNrIHdoZXRoZXIgZG9tTm9kZSBkZXNjZW5kYW50IGVsZW1lbnRzIGhhdmUgQSBlbGVtZW50c1xyXG5cdHZhciBjaGlsZEVsZW1lbnQgPSBkb21Ob2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdHdoaWxlIChjaGlsZEVsZW1lbnQpIHtcclxuXHRcdHZhciBtZW51aXRlbSA9IGNoaWxkRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHRcdGlmIChtZW51aXRlbSAmJiBtZW51aXRlbSA9PT0gJ0EnKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihtc2dQcmVmaXggKyAnaGFzIGRlc2NlbmRhbnQgZWxlbWVudHMgdGhhdCBhcmUgbm90IEEgZWxlbWVudHMuJyk7XHJcblx0XHR9XHJcblx0XHRjaGlsZEVsZW1lbnQgPSBjaGlsZEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdH1cclxuXHJcblx0dGhpcy5pc01lbnViYXIgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5kb21Ob2RlID0gZG9tTm9kZTtcclxuXHR0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyT2JqO1xyXG5cclxuXHR0aGlzLm1lbnVpdGVtcyA9IFtdOyAvLyBTZWUgUG9wdXBNZW51IGluaXQgbWV0aG9kXHJcblx0dGhpcy5maXJzdENoYXJzID0gW107IC8vIFNlZSBQb3B1cE1lbnUgaW5pdCBtZXRob2RcclxuXHJcblx0dGhpcy5maXJzdEl0ZW0gPSBudWxsOyAvLyBTZWUgUG9wdXBNZW51IGluaXQgbWV0aG9kXHJcblx0dGhpcy5sYXN0SXRlbSA9IG51bGw7IC8vIFNlZSBQb3B1cE1lbnUgaW5pdCBtZXRob2RcclxuXHJcblx0dGhpcy5oYXNGb2N1cyA9IGZhbHNlOyAvLyBTZWUgTWVudUl0ZW0gaGFuZGxlRm9jdXMsIGhhbmRsZUJsdXJcclxuXHR0aGlzLmhhc0hvdmVyID0gZmFsc2U7IC8vIFNlZSBQb3B1cE1lbnUgaGFuZGxlTW91c2VvdmVyLCBoYW5kbGVNb3VzZW91dFxyXG59O1xyXG5cclxuLypcclxuKiAgIEBtZXRob2QgUG9wdXBNZW51LnByb3RvdHlwZS5pbml0XHJcbipcclxuKiAgIEBkZXNjXHJcbiogICAgICAgVHJhdmVyc2UgZG9tTm9kZSBjaGlsZHJlbiB0byBjb25maWd1cmUgZWFjaCBtZW51aXRlbSBhbmQgcG9wdWxhdGVcclxuKiAgICAgICBtZW51aXRlbXMgYXJyYXkuIEluaXRpYWxpemUgZmlyc3RJdGVtIGFuZCBsYXN0SXRlbSBwcm9wZXJ0aWVzLlxyXG4qL1xyXG5Qb3B1cE1lbnUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dmFyIGNoaWxkRWxlbWVudCwgbWVudUVsZW1lbnQsIG1lbnVJdGVtLCB0ZXh0Q29udGVudCwgbnVtSXRlbXMsIGxhYmVsO1xyXG5cclxuXHQvLyBUcmF2ZXJzZSB0aGUgZWxlbWVudCBjaGlsZHJlbiBvZiBkb21Ob2RlOiBjb25maWd1cmUgZWFjaCB3aXRoXHJcblx0Ly8gbWVudWl0ZW0gcm9sZSBiZWhhdmlvciBhbmQgc3RvcmUgcmVmZXJlbmNlIGluIG1lbnVpdGVtcyBhcnJheS5cclxuXHRjaGlsZEVsZW1lbnQgPSB0aGlzLmRvbU5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5cdHdoaWxlIChjaGlsZEVsZW1lbnQpIHtcclxuXHRcdG1lbnVFbGVtZW50ID0gY2hpbGRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHRcdGlmIChtZW51RWxlbWVudCAmJiBtZW51RWxlbWVudC50YWdOYW1lID09PSAnQScpIHtcclxuXHRcdFx0bWVudUl0ZW0gPSBuZXcgTWVudUl0ZW0obWVudUVsZW1lbnQsIHRoaXMpO1xyXG5cdFx0XHRtZW51SXRlbS5pbml0KCk7XHJcblx0XHRcdHRoaXMubWVudWl0ZW1zLnB1c2gobWVudUl0ZW0pO1xyXG5cdFx0XHR0ZXh0Q29udGVudCA9IG1lbnVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcclxuXHRcdFx0dGhpcy5maXJzdENoYXJzLnB1c2godGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0fVxyXG5cdFx0Y2hpbGRFbGVtZW50ID0gY2hpbGRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuXHR9XHJcblxyXG5cdC8vIFVzZSBwb3B1bGF0ZWQgbWVudWl0ZW1zIGFycmF5IHRvIGluaXRpYWxpemUgZmlyc3RJdGVtIGFuZCBsYXN0SXRlbS5cclxuXHRudW1JdGVtcyA9IHRoaXMubWVudWl0ZW1zLmxlbmd0aDtcclxuXHRpZiAobnVtSXRlbXMgPiAwKSB7XHJcblx0XHR0aGlzLmZpcnN0SXRlbSA9IHRoaXMubWVudWl0ZW1zWzBdO1xyXG5cdFx0dGhpcy5sYXN0SXRlbSA9IHRoaXMubWVudWl0ZW1zW251bUl0ZW1zIC0gMV07XHJcblx0fVxyXG59O1xyXG5cclxuLyogRVZFTlQgSEFORExFUlMgKi9cclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuaGFuZGxlTW91c2VvdmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5oYXNIb3ZlciA9IHRydWU7XHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLmhhbmRsZU1vdXNlb3V0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5oYXNIb3ZlciA9IGZhbHNlO1xyXG5cdHNldFRpbWVvdXQodGhpcy5jbG9zZS5iaW5kKHRoaXMsIGZhbHNlKSwgMSk7XHJcbn07XHJcblxyXG4vKiBGT0NVUyBNQU5BR0VNRU5UIE1FVEhPRFMgKi9cclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuc2V0Rm9jdXNUb0NvbnRyb2xsZXIgPSBmdW5jdGlvbiAoY29tbWFuZCwgZmxhZykge1xyXG5cclxuXHRpZiAodHlwZW9mIGNvbW1hbmQgIT09ICdzdHJpbmcnKSB7XHJcblx0XHRjb21tYW5kID0gJyc7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXRGb2N1c1RvTWVudWJhckl0ZW0oY29udHJvbGxlciwgY2xvc2UpIHtcclxuXHRcdHdoaWxlIChjb250cm9sbGVyKSB7XHJcblx0XHRcdGlmIChjb250cm9sbGVyLmlzTWVudWJhckl0ZW0pIHtcclxuXHRcdFx0XHRjb250cm9sbGVyLmRvbU5vZGUuZm9jdXMoKTtcclxuXHRcdFx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpZiAoY2xvc2UpIHtcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXIubWVudS5jbG9zZSh0cnVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29udHJvbGxlci5oYXNGb2N1cyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnRyb2xsZXIgPSBjb250cm9sbGVyLm1lbnUuY29udHJvbGxlcjtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlmIChjb21tYW5kID09PSAnJykge1xyXG5cdFx0aWYgKHRoaXMuY29udHJvbGxlciAmJiB0aGlzLmNvbnRyb2xsZXIuZG9tTm9kZSkge1xyXG5cdFx0XHR0aGlzLmNvbnRyb2xsZXIuZG9tTm9kZS5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCF0aGlzLmNvbnRyb2xsZXIuaXNNZW51YmFySXRlbSkge1xyXG5cdFx0dGhpcy5jb250cm9sbGVyLmRvbU5vZGUuZm9jdXMoKTtcclxuXHRcdHRoaXMuY2xvc2UoKTtcclxuXHJcblx0XHRpZiAoY29tbWFuZCA9PT0gJ25leHQnKSB7XHJcblx0XHRcdHZhciBtZW51YmFySXRlbSA9IHNldEZvY3VzVG9NZW51YmFySXRlbSh0aGlzLmNvbnRyb2xsZXIsIGZhbHNlKTtcclxuXHRcdFx0aWYgKG1lbnViYXJJdGVtKSB7XHJcblx0XHRcdFx0bWVudWJhckl0ZW0ubWVudS5zZXRGb2N1c1RvTmV4dEl0ZW0obWVudWJhckl0ZW0sIGZsYWcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0aWYgKGNvbW1hbmQgPT09ICdwcmV2aW91cycpIHtcclxuXHRcdFx0dGhpcy5jb250cm9sbGVyLm1lbnUuc2V0Rm9jdXNUb1ByZXZpb3VzSXRlbSh0aGlzLmNvbnRyb2xsZXIsIGZsYWcpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoY29tbWFuZCA9PT0gJ25leHQnKSB7XHJcblx0XHRcdHRoaXMuY29udHJvbGxlci5tZW51LnNldEZvY3VzVG9OZXh0SXRlbSh0aGlzLmNvbnRyb2xsZXIsIGZsYWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLnNldEZvY3VzVG9GaXJzdEl0ZW0gPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5maXJzdEl0ZW0uZG9tTm9kZS5mb2N1cygpO1xyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5zZXRGb2N1c1RvTGFzdEl0ZW0gPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5sYXN0SXRlbS5kb21Ob2RlLmZvY3VzKCk7XHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLnNldEZvY3VzVG9QcmV2aW91c0l0ZW0gPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0pIHtcclxuXHR2YXIgaW5kZXg7XHJcblxyXG5cdGlmIChjdXJyZW50SXRlbSA9PT0gdGhpcy5maXJzdEl0ZW0pIHtcclxuXHRcdHRoaXMubGFzdEl0ZW0uZG9tTm9kZS5mb2N1cygpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGluZGV4ID0gdGhpcy5tZW51aXRlbXMuaW5kZXhPZihjdXJyZW50SXRlbSk7XHJcblx0XHR0aGlzLm1lbnVpdGVtc1tpbmRleCAtIDFdLmRvbU5vZGUuZm9jdXMoKTtcclxuXHR9XHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLnNldEZvY3VzVG9OZXh0SXRlbSA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSkge1xyXG5cdHZhciBpbmRleDtcclxuXHJcblx0aWYgKGN1cnJlbnRJdGVtID09PSB0aGlzLmxhc3RJdGVtKSB7XHJcblx0XHR0aGlzLmZpcnN0SXRlbS5kb21Ob2RlLmZvY3VzKCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0aW5kZXggPSB0aGlzLm1lbnVpdGVtcy5pbmRleE9mKGN1cnJlbnRJdGVtKTtcclxuXHRcdHRoaXMubWVudWl0ZW1zW2luZGV4ICsgMV0uZG9tTm9kZS5mb2N1cygpO1xyXG5cdH1cclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuc2V0Rm9jdXNCeUZpcnN0Q2hhcmFjdGVyID0gZnVuY3Rpb24gKGN1cnJlbnRJdGVtLCBjaGFyKSB7XHJcblx0dmFyIHN0YXJ0LCBpbmRleCwgY2hhciA9IGNoYXIudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0Ly8gR2V0IHN0YXJ0IGluZGV4IGZvciBzZWFyY2ggYmFzZWQgb24gcG9zaXRpb24gb2YgY3VycmVudEl0ZW1cclxuXHRzdGFydCA9IHRoaXMubWVudWl0ZW1zLmluZGV4T2YoY3VycmVudEl0ZW0pICsgMTtcclxuXHRpZiAoc3RhcnQgPT09IHRoaXMubWVudWl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0c3RhcnQgPSAwO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2hlY2sgcmVtYWluaW5nIHNsb3RzIGluIHRoZSBtZW51XHJcblx0aW5kZXggPSB0aGlzLmdldEluZGV4Rmlyc3RDaGFycyhzdGFydCwgY2hhcik7XHJcblxyXG5cdC8vIElmIG5vdCBmb3VuZCBpbiByZW1haW5pbmcgc2xvdHMsIGNoZWNrIGZyb20gYmVnaW5uaW5nXHJcblx0aWYgKGluZGV4ID09PSAtMSkge1xyXG5cdFx0aW5kZXggPSB0aGlzLmdldEluZGV4Rmlyc3RDaGFycygwLCBjaGFyKTtcclxuXHR9XHJcblxyXG5cdC8vIElmIG1hdGNoIHdhcyBmb3VuZC4uLlxyXG5cdGlmIChpbmRleCA+IC0xKSB7XHJcblx0XHR0aGlzLm1lbnVpdGVtc1tpbmRleF0uZG9tTm9kZS5mb2N1cygpO1xyXG5cdH1cclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuZ2V0SW5kZXhGaXJzdENoYXJzID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgsIGNoYXIpIHtcclxuXHRmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8IHRoaXMuZmlyc3RDaGFycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGNoYXIgPT09IHRoaXMuZmlyc3RDaGFyc1tpXSkge1xyXG5cdFx0XHRyZXR1cm4gaTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIC0xO1xyXG59O1xyXG5cclxuLyogTUVOVSBESVNQTEFZIE1FVEhPRFMgKi9cclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0dGhpcy5jb250cm9sbGVyLnNldEV4cGFuZGVkKHRydWUpO1xyXG5cclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZm9yY2UpIHtcclxuXHJcblx0dmFyIGNvbnRyb2xsZXJIYXNIb3ZlciA9IHRoaXMuY29udHJvbGxlci5oYXNIb3ZlcjtcclxuXHJcblx0dmFyIGhhc0ZvY3VzID0gdGhpcy5oYXNGb2N1cztcclxuXHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1lbnVpdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIG1pID0gdGhpcy5tZW51aXRlbXNbaV07XHJcblx0XHRpZiAobWkucG9wdXBNZW51KSB7XHJcblx0XHRcdGhhc0ZvY3VzID0gaGFzRm9jdXMgfCBtaS5wb3B1cE1lbnUuaGFzRm9jdXM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoIXRoaXMuY29udHJvbGxlci5pc01lbnViYXJJdGVtKSB7XHJcblx0XHRjb250cm9sbGVySGFzSG92ZXIgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlmIChmb3JjZSB8fCAoIWhhc0ZvY3VzICYmICF0aGlzLmhhc0hvdmVyICYmICFjb250cm9sbGVySGFzSG92ZXIpKSB7XHJcblx0XHR0aGlzLmNvbnRyb2xsZXIuc2V0RXhwYW5kZWQoZmFsc2UpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgUG9wdXBNZW51O1xyXG4iLCJpbXBvcnQgeyBNZW51YmFyIH0gZnJvbSAnLi4va2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvTWVudWJhckxpbmtzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd3N1X2J0X2tleWJvYXJkX25hdl9hY2Nlc3NpYmlsaXR5IHtcblx0Y29uc3RydWN0b3IocGFyYW1zKSB7XG5cdFx0dGhpcy5wYXJhbXMgPSBwYXJhbXM7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogTG9vcCB0aHJvdWdoIGVsZW1lbnRzIHRoYXQgd2Ugd2FudCB0byBoYXZlIGtleWJvYXJkIHN1cHBvcnQgYW5kIG1ha2UgaXQgc29cblx0XHQgKlxuXHRcdCAqL1xuXHRcdHRoaXMucGFyYW1zWydlbGVtZW50cyddLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHR0aGlzLmluaXRpYXRlS2V5Ym9hcmROYXZpZ2F0aW9uU3VwcG9ydChlbGVtZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdGluaXRpYXRlS2V5Ym9hcmROYXZpZ2F0aW9uU3VwcG9ydChlbGVtZW50KSB7XG5cdFx0dmFyIG1lbnViYXIgPSBuZXcgTWVudWJhcihlbGVtZW50KTtcblx0XHRtZW51YmFyLmluaXQoKTtcblx0fVxufVxuIiwiaW1wb3J0IHdzdV93ZHMgZnJvbSAnLi4vd3N1LWJ0LXdkcyc7XG5pbXBvcnQgd3N1X2J0X2tleWJvYXJkX25hdl9hY2Nlc3NpYmlsaXR5IGZyb20gJy4uL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L3dzdS1idC1rZXlib2FyZC1uYXYtYWNjZXNzaWJpbGl0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHdzdV9idF92ZXJ0aWNhbF9uYXYge1xuXHRjb25zdHJ1Y3RvcihwYXJhbXMpIHtcblx0XHR0aGlzLnBhcmFtcyA9IHBhcmFtcztcblx0XHR0aGlzLm5hdl9pdGVtX3NlbGVjdG9yID0gJyc7XG5cdFx0dGhpcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3RvciA9ICcnO1xuXHRcdHRoaXMubmF2X3BhbmVsX3NlbGVjdG9yID0gJyc7XG5cdFx0dGhpcy5uYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3IgPSAnJztcblx0XHR0aGlzLnRyZWVfbW9kZSA9IHBhcmFtcy50cmVlX21vZGUgPyB0cnVlIDogZmFsc2U7IC8vIFRPRE8gbmVlZHMgdG8gZG8gc29tZXRoaW5nXG5cdFx0dGhpcy5zaG93X2xvZ3MgPSBwYXJhbXMuc2hvd19sb2dzID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHRoaXMuc3RhcnRfY29sbGFwc2VkX3dpZHRoID0gcGFyYW1zLnN0YXJ0X2NvbGxhcHNlZF93aWR0aDtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQXNzaWduIHZhbHVlcyB0byB2YXJpYWJsZXNcblx0XHQgKlxuXHRcdCAqL1xuXG5cdFx0LyogTmF2aWdhdGlvbiBpdGVtIHNlbGVjdG9yICovXG5cdFx0dGhpcy5uYXZfaXRlbV9zZWxlY3RvciA9IHBhcmFtcy5uYXZfaXRlbV9zZWxlY3RvcjtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5uYXZfaXRlbV9zZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuZGVmaW5lZCBuYXZfaXRlbV9zZWxlY3Rvci4gUGxlYXNlIHBhc3MgdGhlIHNlbGVjdG9yIHlvdSB3b3VsZCBsaWtlIHRvIGJlIGV4cGFuZGFibGUuJyk7XG5cdFx0fVxuXG5cdFx0LyogTmF2aWdhdGlvbiBQYW5lbCBDb250cm9sICovXG5cdFx0dGhpcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3RvciA9IHBhcmFtcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3RvcjtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuZGVmaW5lZCBuYXZfcGFuZWxfY29udHJvbF9zZWxlY3Rvci4gUGxlYXNlIHBhc3MgdGhlIHNlbGVjdG9yIHlvdSB3b3VsZCBsaWtlIHRvIGJlIGV4cGFuZGFibGUuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5uYXZfcGFuZWxfY29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3Rvcik7XG5cblx0XHQvKiBOYXZpZ2F0aW9uIFBhbmVsICovXG5cdFx0dGhpcy5uYXZfcGFuZWxfc2VsZWN0b3IgPSBwYXJhbXMubmF2X3BhbmVsX3NlbGVjdG9yO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm5hdl9wYW5lbF9zZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuZGVmaW5lZCBuYXZfcGFuZWxfc2VsZWN0b3IuIFBsZWFzZSBwYXNzIHRoZSBzZWxlY3RvciB5b3Ugd291bGQgbGlrZSB0byBiZSBleHBhbmRhYmxlLicpO1xuXHRcdH1cblxuXHRcdHRoaXMubmF2X3BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm5hdl9wYW5lbF9zZWxlY3Rvcik7XG5cblx0XHQvKiBOYXZpZ2F0aW9uIExpc3QgQ29udGFpbmVyIFNlbGVjdG9yICovXG5cdFx0dGhpcy5uYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3IgPSBwYXJhbXMubmF2X2xpc3RfY29udGFpbmVyX3NlbGVjdG9yO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm5hdl9saXN0X2NvbnRhaW5lcl9zZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuZGVmaW5lZCBuYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3IuIFBsZWFzZSBwYXNzIHRoZSBzZWxlY3RvciB5b3Ugd291bGQgbGlrZSB0byBiZSBleHBhbmRhYmxlLicpO1xuXHRcdH1cblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBFbmFibGUga2V5Ym9hcmQgbmF2aWdhdGlvbiBhY2Nlc3NpYmlsaXR5XG5cdFx0ICpcblx0XHQgKi9cblx0XHRjb25zdCBuYXZfaXRlbV9zZWxlY3Rvcl9lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5uYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3IpO1xuXHRcdHZhciBrZXlib2FyZF9uYXYgPSBuZXcgd3N1X2J0X2tleWJvYXJkX25hdl9hY2Nlc3NpYmlsaXR5KHtcblx0XHRcdGVsZW1lbnRzOiBuYXZfaXRlbV9zZWxlY3Rvcl9lbGVtZW50c1xuXHRcdH0pO1xuXHRcdGtleWJvYXJkX25hdi5pbml0KCk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIFNldCBuYXYgaXRlbXMgdG8gZXhwYW5kZWQgZmFsc2Vcblx0XHQgKlxuXHRcdCAqL1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3Rvcikuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm5hdl9pdGVtX3NlbGVjdG9yKS5mb3JFYWNoKGVsZW0gPT4geyBlbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpOyB9KTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQ3JlYXRlIGV2ZW50IGxpc3RlbmVyc1xuXHRcdCAqXG5cdFx0ICovXG5cblx0XHQvLyBUb2dnbGUgUGFuZWxzXG5cdFx0dGhpcy5uYXZfcGFuZWxfY29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlX3BhbmVsLmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gVG9nZ2xlIE5hdiBJdGVtc1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53c3Utcy1uYXYtdmVydGljYWxfX25hdi1pdGVtLS1oYXMtY2hpbGRyZW4gPiAud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtbGluaycpLmZvckVhY2goZWxlbSA9PiB7IGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTsgfSk7IC8vIFRPRE86IEFic3RyYWN0IHNlbGVjdG9yIGFzIHBhcmFtZXRlclxuXG5cdFx0Ly8gT24gcGFuZWwgb3BlblxuXHRcdHdzdV93ZHMuZW1pdHRlci5vbignd3N1LXZlcnRpY2FsLW5hdi0tb3BlbicsIHRoaXMucGFuZWxfb3Blbi5iaW5kKHRoaXMpKTtcblxuXHRcdC8vIEFmdGVyIHBhbmVsIG9wZW5cblx0XHR3c3Vfd2RzLmVtaXR0ZXIub24oJ3dzdS12ZXJ0aWNhbC1uYXYtLWFmdGVyLW9wZW4nLCB0aGlzLnBhbmVsX2FmdGVyX29wZW4uYmluZCh0aGlzKSk7XG5cblx0XHQvLyBPbiBwYW5lbCBjbG9zZVxuXHRcdHdzdV93ZHMuZW1pdHRlci5vbignd3N1LXZlcnRpY2FsLW5hdi0tY2xvc2UnLCB0aGlzLnBhbmVsX2Nsb3NlLmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gQWZ0ZXIgcGFuZWwgY2xvc2Vcblx0XHR3c3Vfd2RzLmVtaXR0ZXIub24oJ3dzdS12ZXJ0aWNhbC1uYXYtLWFmdGVyLWNsb3NlJywgdGhpcy5wYW5lbF9hZnRlcl9jbG9zZS5iaW5kKHRoaXMpKTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogU2V0IGRlZmF1bHQgc3RhdGUgYXMgb3BlblxuXHRcdCAqXG5cdFx0ICovXG5cdFx0aWYgKCB0aGlzLm5hdl9wYW5lbC5jbGFzc0xpc3QuY29udGFpbnMoJ3dzdS1zLW5hdi12ZXJ0aWNhbF9fd3JhcHBlci0tc3RhcnQtb3BlbicgKSApIHtcblxuXHRcdFx0dGhpcy5uYXZfcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyLS1zdGFydC1vcGVuJyk7XG5cblx0XHRcdGlmICggdGhpcy5zdGFydF9jb2xsYXBzZWRfd2lkdGggPCB3aW5kb3cuaW5uZXJXaWR0aCApIHtcblx0XHRcdFxuXHRcdFx0XHR0aGlzLm9wZW5fcGFuZWwoKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHR0aGlzLmNsb3NlX3BhbmVsKCk7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvcGVuX2N1cnJlbnRfdGFyZ2V0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cdH1cblxuXHRvcGVuX3RhcmdldChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cdH1cblxuXHRvcGVuX3BhbmVsKCkge1xuXHRcdC8qIFNldCBhcmlhIGV4cGFuZGVkIGF0dHJpYnV0ZSAqL1xuXHRcdHRoaXMubmF2X3BhbmVsX2NvbnRyb2wuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcblxuXHRcdC8qIEFkZCBjbGFzcyB0byB3cmFwcGVyICovXG5cdFx0dGhpcy5uYXZfcGFuZWwuY2xhc3NMaXN0LmFkZCgnd3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyLS1vcGVuJyk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEV2ZW50IG9uIG9wZW5cblx0XHQgKiB3c3UtdmVydGljYWwtbmF2LS1vcGVuXG5cdFx0ICpcblx0XHQgKi9cblx0XHR3c3Vfd2RzLmVtaXR0ZXIuZW1pdCgnd3N1LXZlcnRpY2FsLW5hdi0tb3BlbicpO1xuXHRcdGlmICh0aGlzLnNob3dfbG9ncykge1xuXHRcdFx0Y29uc29sZS5sb2coJ0V2ZW50IGVtaXR0ZWQ6IHdzdS12ZXJ0aWNhbC1uYXYtLW9wZW4nKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEV2ZW50IGFmdGVyIG9wZW4gY29tcGxldGVzXG5cdFx0ICogd3N1LXZlcnRpY2FsLW5hdi0tYWZ0ZXItb3BlblxuXHRcdCAqXG5cdFx0ICovXG5cdFx0Y29uc3Qgb3BlbkFuaW1hdGlvblRpbWUgPSAzMDA7IC8vIGluIG1zIHRoZSB0aW1lIGl0IHRha2VzIGZvciB0aGUgbWVudSB0byBmaW5pc2ggb3BlbmluZ1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR3c3Vfd2RzLmVtaXR0ZXIuZW1pdCgnd3N1LXZlcnRpY2FsLW5hdi0tYWZ0ZXItb3BlbicpO1xuXG5cdFx0XHRpZiAodGhpcy5zaG93X2xvZ3MpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0V2ZW50IGVtaXR0ZWQ6IHdzdS12ZXJ0aWNhbC1uYXYtLWFmdGVyLW9wZW4nKTtcblx0XHRcdH1cblx0XHR9LCBvcGVuQW5pbWF0aW9uVGltZSk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEFkZCBib2R5IGNsYXNzXG5cdFx0ICpcblx0XHQgKi9cblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LS1pcy1vcGVuJyk7XG5cdH1cblxuXHRjbG9zZShlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHR9XG5cblx0Y2xvc2VfcGFuZWwoKSB7XG5cdFx0LyogU2V0IGFyaWEgZXhwYW5kZWQgYXR0cmlidXRlICovXG5cdFx0dGhpcy5uYXZfcGFuZWxfY29udHJvbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblxuXHRcdC8qIFJlbW92ZSBvcGVuIGNsYXNzICovXG5cdFx0dGhpcy5uYXZfcGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyLS1vcGVuJyk7XG5cblx0XHQvKiBFbWl0IGNsb3NlIGV2ZW50ICovXG5cdFx0d3N1X3dkcy5lbWl0dGVyLmVtaXQoJ3dzdS12ZXJ0aWNhbC1uYXYtLWNsb3NlJyk7XG5cblx0XHRpZiAodGhpcy5zaG93X2xvZ3MpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFdmVudCBlbWl0dGVkOiB3c3UtdmVydGljYWwtbmF2LS1jbG9zZScpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogRXZlbnQgYWZ0ZXIgY2xvc2UgY29tcGxldGVzXG5cdFx0ICogd3N1LXZlcnRpY2FsLW5hdi0tYWZ0ZXItY2xvc2Vcblx0XHQgKlxuXHRcdCAqL1xuXHRcdGNvbnN0IGNsb3NlQW5pbWF0aW9uVGltZSA9IDYwMDsgLy8gaW4gbXMgdGhlIHRpbWUgaXQgdGFrZXMgZm9yIHRoZSBtZW51IHRvIGZpbmlzaCBvcGVuaW5nXG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHdzdV93ZHMuZW1pdHRlci5lbWl0KCd3c3UtdmVydGljYWwtbmF2LS1hZnRlci1jbG9zZScpO1xuXG5cdFx0XHRpZiAodGhpcy5zaG93X2xvZ3MpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0V2ZW50IGVtaXR0ZWQ6IHdzdS12ZXJ0aWNhbC1uYXYtLWFmdGVyLWNsb3NlJyk7XG5cdFx0XHR9XG5cdFx0fSwgY2xvc2VBbmltYXRpb25UaW1lKTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogUmVtb3ZlIGJvZHkgY2xhc3Ncblx0XHQgKlxuXHRcdCAqL1xuXHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtLWlzLW9wZW4nKTtcblx0fVxuXG5cdHRvZ2dsZShlKSB7XG5cdFx0aWYgKGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAnZmFsc2UnKSB7XG5cdFx0XHR0aGlzLm9wZW5fY3VycmVudF90YXJnZXQoZSk7XG5cdFx0fSBlbHNlIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAnZmFsc2UnKSB7XG5cdFx0XHR0aGlzLm9wZW5fdGFyZ2V0KGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlKGUpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZV9wYW5lbChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKHRoaXMubmF2X3BhbmVsX2NvbnRyb2wuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ3RydWUnKSB7XG5cdFx0XHR0aGlzLmNsb3NlX3BhbmVsKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3Blbl9wYW5lbCgpO1xuXHRcdH1cblx0fVxuXG5cdHBhbmVsX29wZW4oKSB7XG5cdFx0Y29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtY29udGFpbmVyLWNsb3NlLWxpbmsnKTtcblxuXHRcdGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVPdXRVcCcpO1xuXHRcdGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJywgJ2ZhZGVJbkRvd24nLCAnZmFzdGVyJyk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEFuaW1hdGUgbWVudSBpdGVtcyBpbiBvbiB2ZXJ0IG5hdiBvcGVuIHVzaW5nIGVtaXR0ZXJzXG5cdFx0ICpcblx0XHQgKi9cblx0XHRjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53c3Utcy1uYXYtdmVydGljYWxfX25hdi1saXN0LWNvbnRhaW5lciA+IGxpJyk7XG5cdFx0Y29uc3QgbmF2SXRlbXNDb3VudCA9IG5hdkl0ZW1zLmxlbmd0aDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbmF2SXRlbXNDb3VudDsgaSsrKSB7XG5cdFx0XHQoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0Ly8gRHVyYXRpb24gYmV0d2VlbiBlYWNoIGl0ZW0gYmVpbmcgYW5pbWF0ZWRcblx0XHRcdFx0Y29uc3QgZHVyYXRpb24gPSAzMDtcblx0XHRcdFx0Y29uc3QgY3VydmUgPSAwLjI1O1xuXG5cdFx0XHRcdGxldCBpbmNyZW1lbnQgPSBkdXJhdGlvbiArIChkdXJhdGlvbiAqIChpICogKGkgKiBjdXJ2ZSkpKTsgLy8gQmV6aWVyXG5cblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0bmF2SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnZmFkZU91dExlZnQnKTtcblx0XHRcdFx0XHRuYXZJdGVtc1tpXS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcsICdmYWRlSW5MZWZ0Jyk7XG5cdFx0XHRcdH0sIGluY3JlbWVudCk7XG5cdFx0XHR9KShpKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBDcmVhdGUgZXZlbnQgbGlzdGVuZXIgZm9yIGFsbG93aW5nIHBhbmVsIHRvIGJlIGNsb3NlZCBvbiBjbGlja1xuXHRcdCAqXG5cdFx0ICovXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT0gXCJ3c3Utcy1uYXYtdmVydGljYWxfX3dyYXBwZXIgd3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyLS1vcGVuXCIpIHtcblx0XHRcdFx0X3RoaXMuY2xvc2VfcGFuZWwoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogRGlzcGxheSBnbG9iYWwgaGVhZGVyIHdoZW4gcGFuZWwgaXMgb3BlbmVkIGlmIGl0IGV4aXN0c1xuXHRcdCAqXG5cdFx0ICovXG5cdFx0Y29uc3Qgd3N1X2dsb2JhbF9oZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LWctaGVhZGVyX193cmFwcGVyJyk7XG5cblx0XHRpZiAodHlwZW9mIHdzdV9nbG9iYWxfaGVhZGVyICE9IFwidW5kZWZpbmVkXCIgJiYgd3N1X2dsb2JhbF9oZWFkZXIgIT0gbnVsbCkge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtZy1oZWFkZXItLWlzLWhpZGRlbicpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogUmVzaXplIGhvcml6b250YWwgbmF2IGlmIGl0IGV4aXN0c1xuXHRcdCAqXG5cdFx0ICovXG5cdFx0Y29uc3Qgd3N1X2hvcnpfbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndzdS1zLW5hdi1ob3Jpem9udGFsX193cmFwcGVyJyk7XG5cblx0XHRpZiAod3N1X2hvcnpfbmF2Lmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0Ly8gUmVzaXplIGhvcml6b250YWwgbmF2aWdhdGlvblxuXHRcdFx0d3N1X3dkcy5ob3Jpem9udGFsX25hdi51cGRhdGVfbmF2KCk7XG5cblx0XHRcdGlmICh0aGlzLnNob3dfbG9ncykge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLndzdS1zLW5hdi1ob3Jpem9udGFsX193cmFwcGVyIGV4aXN0cycpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5zaG93X2xvZ3MpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy53c3Utcy1uYXYtaG9yaXpvbnRhbF9fd3JhcHBlciBkb2VzIG5vdCBleGlzdCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHBhbmVsX2FmdGVyX29wZW4oKSB7XG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBSZXNpemUgaG9yaXpvbnRhbCBuYXYgaWYgaXQgZXhpc3RzXG5cdFx0ICpcblx0XHQgKi9cblx0XHRjb25zdCB3c3VfaG9yel9uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3N1LXMtbmF2LWhvcml6b250YWxfX3dyYXBwZXInKTtcblxuXHRcdGlmICh3c3VfaG9yel9uYXYubGVuZ3RoICE9PSAwKSB7XG5cdFx0XHQvLyBSZXNpemUgaG9yaXpvbnRhbCBuYXZpZ2F0aW9uXG5cdFx0XHR3c3Vfd2RzLmhvcml6b250YWxfbmF2LnVwZGF0ZV9uYXYoKTtcblxuXHRcdFx0aWYgKHRoaXMuc2hvd19sb2dzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCcud3N1LXMtbmF2LWhvcml6b250YWxfX3dyYXBwZXIgZXhpc3RzJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0aGlzLnNob3dfbG9ncykge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLndzdS1zLW5hdi1ob3Jpem9udGFsX193cmFwcGVyIGRvZXMgbm90IGV4aXN0Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cGFuZWxfY2xvc2UoKSB7XG5cdFx0Y29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtY29udGFpbmVyLWNsb3NlLWxpbmsnKTtcblxuXHRcdGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVJbkRvd24nKTtcblx0XHRjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYWRlT3V0VXAnKTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQW5pbWF0ZSBtZW51IGl0ZW1zIGluIG9uIHZlcnQgbmF2IG9wZW4gdXNpbmcgZW1pdHRlcnNcblx0XHQgKlxuXHRcdCAqL1xuXHRcdGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LWxpc3QtY29udGFpbmVyID4gbGknKTtcblx0XHRjb25zdCBuYXZJdGVtc0NvdW50ID0gbmF2SXRlbXMubGVuZ3RoO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuYXZJdGVtc0NvdW50OyBpKyspIHtcblxuXHRcdFx0KGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdC8vIER1cmF0aW9uIGJldHdlZW4gZWFjaCBpdGVtIGJlaW5nIGFuaW1hdGVkXG5cdFx0XHRcdGNvbnN0IGR1cmF0aW9uID0gNTA7XG5cdFx0XHRcdGxldCBpbmNyZW1lbnQgPSBkdXJhdGlvbiArIChkdXJhdGlvbiAqIChpICogKGkgKiAuMikpKTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRuYXZJdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlSW5MZWZ0Jyk7XG5cdFx0XHRcdFx0bmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnZmFkZU91dExlZnQnKTtcblx0XHRcdFx0fSwgaW5jcmVtZW50KTtcblx0XHRcdH0pKGkpO1xuXHRcdH07XG5cdH1cblxuXHRwYW5lbF9hZnRlcl9jbG9zZSgpIHtcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIFJlc2l6ZSBob3Jpem9udGFsIG5hdiBpZiBpdCBleGlzdHNcblx0XHQgKlxuXHRcdCAqL1xuXHRcdGNvbnN0IHdzdV9ob3J6X25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53c3Utcy1uYXYtaG9yaXpvbnRhbF9fd3JhcHBlcicpO1xuXG5cdFx0aWYgKHdzdV9ob3J6X25hdi5sZW5ndGggIT09IDApIHtcblx0XHRcdC8vIFJlc2l6ZSBob3Jpem9udGFsIG5hdmlnYXRpb25cblx0XHRcdHdzdV93ZHMuaG9yaXpvbnRhbF9uYXYudXBkYXRlX25hdigpO1xuXG5cdFx0XHRpZiAodGhpcy5zaG93X2xvZ3MpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy53c3Utcy1uYXYtaG9yaXpvbnRhbF9fd3JhcHBlciBleGlzdHMnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuc2hvd19sb2dzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCcud3N1LXMtbmF2LWhvcml6b250YWxfX3dyYXBwZXIgZG9lcyBub3QgZXhpc3QnKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBtaXR0IGZyb20gJ21pdHQnO1xuXG5pZiAodHlwZW9mIHdzdV93ZHMgPT0gJ3VuZGVmaW5lZCcpIHtcblx0d2luZG93Wyd3c3Vfd2RzJ10gPSB7fTtcblx0d3N1X3dkcyA9IHdpbmRvdy53c3Vfd2RzO1xufVxuXG53c3Vfd2RzLmVtaXR0ZXIgPSBtaXR0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdzdV93ZHM7XG4iLCIvLyAgICAgIFxuLy8gQW4gZXZlbnQgaGFuZGxlciBjYW4gdGFrZSBhbiBvcHRpb25hbCBldmVudCBhcmd1bWVudFxuLy8gYW5kIHNob3VsZCBub3QgcmV0dXJuIGEgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbi8vIEFuIGFycmF5IG9mIGFsbCBjdXJyZW50bHkgcmVnaXN0ZXJlZCBldmVudCBoYW5kbGVycyBmb3IgYSB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBIG1hcCBvZiBldmVudCB0eXBlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIoZXZ0KTsgfSk7XG5cdFx0XHQoYWxsWycqJ10gfHwgW10pLnNsaWNlKCkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIodHlwZSwgZXZ0KTsgfSk7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaXR0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5lcy5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=