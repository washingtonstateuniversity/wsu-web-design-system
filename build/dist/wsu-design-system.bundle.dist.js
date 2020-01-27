<<<<<<< HEAD
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./build/src/wsu-design-system.build.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../wsu-build-tools/js/aria-expanded/wsu-bt-aria-expanded.js":
/*!*******************************************************************!*\
  !*** ../wsu-build-tools/js/aria-expanded/wsu-bt-aria-expanded.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wsu_bt_aria_expanded; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var wsu_bt_aria_expanded =
/*#__PURE__*/
function () {
  function wsu_bt_aria_expanded(params) {
    _classCallCheck(this, wsu_bt_aria_expanded);

    this.params = params;
    this.nav_items = null;
    /**
     *
     * Assign nav_items_selectors to variable
     *
     */

    this.nav_items_selectors = params.nav_item_selectors;

    if (typeof this.nav_items_selectors === 'undefined') {
      console.error('Undefined nav_item_selectors. Please pass the selector you would like to be expandable.');
    }
    /**
     *
     * Loop through selectors and append aria target
     *
     */


    if (Array.isArray(this.nav_items_selectors)) {
      this.nav_items_selectors.forEach(function (elem, i, arr) {
        arr[i] = elem + '[aria-expanded="true"]';
      }, this.nav_items_selectors);
    } else {
      this.nav_items_selectors = this.nav_items_selectors + '[aria-expanded="true"]';
    }
  }

  _createClass(wsu_bt_aria_expanded, [{
    key: "init",
    value: function init() {
      this.update_items();
      window.addEventListener('resize', this.update_items.bind(this)); // TODO: look into if we need to use something like debounce or at the very least set a timeout
    }
  }, {
    key: "update_items",
    value: function update_items() {
      var _this = this;

      if (Array.isArray(this.nav_items_selectors)) {
        this.nav_items_selectors.forEach(function (elem) {
          // Query nav items
          _this.nav_items = document.querySelectorAll(elem); // Set collapsible nav items to hidden

          _this.nav_items.forEach(function (nav_item) {
            nav_item.setAttribute('aria-expanded', 'false');
          }); // Set collapsible nav items to toggle on click


          _this.nav_items.forEach(function (nav_item) {
            nav_item.addEventListener('click', function (e) {
              e.preventDefault;

              if (this.getAttribute('aria-expanded') == 'false') {
                this.setAttribute('aria-expanded', 'true');
              } else {
                this.setAttribute('aria-expanded', 'false');
              }
            });
          });
        });
      } else {
        // Query nav items
        this.nav_items = document.querySelectorAll(this.nav_items_selectors); // Set collapsible nav items to hidden

        this.nav_items.forEach(function (nav_item) {
          nav_item.setAttribute('aria-expanded', 'false');
        }); // Set collapsible nav items to toggle on click

        this.nav_items.forEach(function (nav_item) {
          nav_item.addEventListener('click', function (e) {
            e.preventDefault;

            if (this.getAttribute('aria-expanded') == 'false') {
              this.setAttribute('aria-expanded', 'true');
            } else {
              this.setAttribute('aria-expanded', 'false');
            }
          });
        });
      }
    }
  }]);

  return wsu_bt_aria_expanded;
}();



/***/ }),

/***/ "../wsu-build-tools/js/keyboard-nav-accessibility/MenubarItemLinks.js":
/*!****************************************************************************!*\
  !*** ../wsu-build-tools/js/keyboard-nav-accessibility/MenubarItemLinks.js ***!
  \****************************************************************************/
/*! exports provided: MenubarItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenubarItem", function() { return MenubarItem; });
/* harmony import */ var _PopupMenuLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupMenuLinks */ "../wsu-build-tools/js/keyboard-nav-accessibility/PopupMenuLinks.js");
/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/


var MenubarItem = function MenubarItem(domNode, menuObj) {
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
  this.domNode.addEventListener('blur', this.handleBlur.bind(this)); // Initialize pop up menus

  var nextElement = this.domNode.nextElementSibling;

  if (nextElement && nextElement.tagName === 'UL') {
    this.popupMenu = new _PopupMenuLinks__WEBPACK_IMPORTED_MODULE_0__["PopupMenu"](nextElement, this);
    this.popupMenu.init();
  }
};

MenubarItem.prototype.handleKeydown = function (event) {
  var tgt = event.currentTarget,
      _char = event.key,
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
      if (isPrintableCharacter(_char)) {
        this.menu.setFocusByFirstCharacter(this, _char);
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
  } else {
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

/***/ "../wsu-build-tools/js/keyboard-nav-accessibility/MenubarLinks.js":
/*!************************************************************************!*\
  !*** ../wsu-build-tools/js/keyboard-nav-accessibility/MenubarLinks.js ***!
  \************************************************************************/
/*! exports provided: Menubar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menubar", function() { return Menubar; });
/* harmony import */ var _MenubarItemLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenubarItemLinks */ "../wsu-build-tools/js/keyboard-nav-accessibility/MenubarItemLinks.js");
/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/


var Menubar = function Menubar(domNode) {
  var elementChildren,
      msgPrefix = 'Menubar constructor argument menubarNode '; // Check whether menubarNode is a DOM element

  if (!domNode instanceof Element) {
    throw new TypeError(msgPrefix + 'is not a DOM Element.');
  } // Check whether menubarNode has descendant elements


  if (domNode.childElementCount === 0) {
    throw new Error(msgPrefix + 'has no element children.');
  } // Check whether menubarNode has A elements


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
  var menubarItem, childElement, menuElement, textContent, numItems; // Traverse the element children of menubarNode: configure each with
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
  } // Use populated menuitems array to initialize firstItem and lastItem.


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
  } else {
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
  } else {
    index = this.menubarItems.indexOf(currentItem);
    newItem = this.menubarItems[index + 1];
  }

  this.setFocusToItem(newItem);
};

Menubar.prototype.setFocusByFirstCharacter = function (currentItem, _char) {
  var start,
      index,
      _char = _char.toLowerCase();

  var flag = currentItem.domNode.getAttribute('aria-expanded') === 'true'; // Get start index for search based on position of currentItem

  start = this.menubarItems.indexOf(currentItem) + 1;

  if (start === this.menubarItems.length) {
    start = 0;
  } // Check remaining slots in the menu


  index = this.getIndexFirstChars(start, _char); // If not found in remaining slots, check from beginning

  if (index === -1) {
    index = this.getIndexFirstChars(0, _char);
  } // If match was found...


  if (index > -1) {
    this.setFocusToItem(this.menubarItems[index]);
  }
};

Menubar.prototype.getIndexFirstChars = function (startIndex, _char2) {
  for (var i = startIndex; i < this.firstChars.length; i++) {
    if (_char2 === this.firstChars[i]) {
      return i;
    }
  }

  return -1;
};

var Menubar;

/***/ }),

/***/ "../wsu-build-tools/js/keyboard-nav-accessibility/PopupMenuItemLinks.js":
/*!******************************************************************************!*\
  !*** ../wsu-build-tools/js/keyboard-nav-accessibility/PopupMenuItemLinks.js ***!
  \******************************************************************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var _PopupMenuLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupMenuLinks */ "../wsu-build-tools/js/keyboard-nav-accessibility/PopupMenuLinks.js");
/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/


var MenuItem = function MenuItem(domNode, menuObj) {
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
  this.domNode.addEventListener('blur', this.handleBlur.bind(this)); // Initialize flyout menu

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
      _char = event.key,
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
      } else {
        // Create simulated mouse event to mimic the behavior of ATs
        // and let the event handler handleClick do the housekeeping.
        try {
          clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
          });
        } catch (err) {
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
      } else {
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
      if (isPrintableCharacter(_char)) {
        this.menu.setFocusByFirstCharacter(this, _char);
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
  } else {
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

/***/ "../wsu-build-tools/js/keyboard-nav-accessibility/PopupMenuLinks.js":
/*!**************************************************************************!*\
  !*** ../wsu-build-tools/js/keyboard-nav-accessibility/PopupMenuLinks.js ***!
  \**************************************************************************/
/*! exports provided: PopupMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenu", function() { return PopupMenu; });
/* harmony import */ var _PopupMenuItemLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopupMenuItemLinks */ "../wsu-build-tools/js/keyboard-nav-accessibility/PopupMenuItemLinks.js");
/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*/


var PopupMenu = function PopupMenu(domNode, controllerObj) {
  var elementChildren,
      msgPrefix = 'PopupMenu constructor argument domNode '; // Check whether domNode is a DOM element

  if (!domNode instanceof Element) {
    throw new TypeError(msgPrefix + 'is not a DOM Element.');
  } // Check whether domNode has child elements


  if (domNode.childElementCount === 0) {
    throw new Error(msgPrefix + 'has no element children.');
  } // Check whether domNode descendant elements have A elements


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
  var childElement, menuElement, menuItem, textContent, numItems, label; // Traverse the element children of domNode: configure each with
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
  } // Use populated menuitems array to initialize firstItem and lastItem.


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
      } else {
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
  } else {
    if (command === 'previous') {
      this.controller.menu.setFocusToPreviousItem(this.controller, flag);
    } else if (command === 'next') {
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
  } else {
    index = this.menuitems.indexOf(currentItem);
    this.menuitems[index - 1].domNode.focus();
  }
};

PopupMenu.prototype.setFocusToNextItem = function (currentItem) {
  var index;

  if (currentItem === this.lastItem) {
    this.firstItem.domNode.focus();
  } else {
    index = this.menuitems.indexOf(currentItem);
    this.menuitems[index + 1].domNode.focus();
  }
};

PopupMenu.prototype.setFocusByFirstCharacter = function (currentItem, _char) {
  var start,
      index,
      _char = _char.toLowerCase(); // Get start index for search based on position of currentItem


  start = this.menuitems.indexOf(currentItem) + 1;

  if (start === this.menuitems.length) {
    start = 0;
  } // Check remaining slots in the menu


  index = this.getIndexFirstChars(start, _char); // If not found in remaining slots, check from beginning

  if (index === -1) {
    index = this.getIndexFirstChars(0, _char);
  } // If match was found...


  if (index > -1) {
    this.menuitems[index].domNode.focus();
  }
};

PopupMenu.prototype.getIndexFirstChars = function (startIndex, _char2) {
  for (var i = startIndex; i < this.firstChars.length; i++) {
    if (_char2 === this.firstChars[i]) {
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

  if (force || !hasFocus && !this.hasHover && !controllerHasHover) {
    this.controller.setExpanded(false);
  }
};

var PopupMenu;

/***/ }),

/***/ "../wsu-build-tools/js/keyboard-nav-accessibility/wsu-bt-keyboard-nav-accessibility.js":
/*!*********************************************************************************************!*\
  !*** ../wsu-build-tools/js/keyboard-nav-accessibility/wsu-bt-keyboard-nav-accessibility.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wsu_bt_keyboard_nav_accessibility; });
/* harmony import */ var _keyboard_nav_accessibility_MenubarLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../keyboard-nav-accessibility/MenubarLinks */ "../wsu-build-tools/js/keyboard-nav-accessibility/MenubarLinks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var wsu_bt_keyboard_nav_accessibility =
/*#__PURE__*/
function () {
  function wsu_bt_keyboard_nav_accessibility(params) {
    _classCallCheck(this, wsu_bt_keyboard_nav_accessibility);

    this.params = params;
  }

  _createClass(wsu_bt_keyboard_nav_accessibility, [{
    key: "init",
    value: function init() {
      var _this = this;

      /**
       *
       * Loop through elements that we want to have keyboard support and make it so
       *
       */
      this.params['elements'].forEach(function (element) {
        _this.initiateKeyboardNavigationSupport(element);
      });
    }
  }, {
    key: "initiateKeyboardNavigationSupport",
    value: function initiateKeyboardNavigationSupport(element) {
      var menubar = new _keyboard_nav_accessibility_MenubarLinks__WEBPACK_IMPORTED_MODULE_0__["Menubar"](element);
      menubar.init();
    }
  }]);

  return wsu_bt_keyboard_nav_accessibility;
}();



/***/ }),

/***/ "../wsu-build-tools/js/vertical-nav/wsu-bt-vertical-nav.js":
/*!*****************************************************************!*\
  !*** ../wsu-build-tools/js/vertical-nav/wsu-bt-vertical-nav.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wsu_bt_vertical_nav; });
/* harmony import */ var _keyboard_nav_accessibility_wsu_bt_keyboard_nav_accessibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../keyboard-nav-accessibility/wsu-bt-keyboard-nav-accessibility */ "../wsu-build-tools/js/keyboard-nav-accessibility/wsu-bt-keyboard-nav-accessibility.js");
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mitt */ "../wsu-build-tools/node_modules/mitt/dist/mitt.es.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var wsu_bt_vertical_nav =
/*#__PURE__*/
function () {
  function wsu_bt_vertical_nav(params) {
    _classCallCheck(this, wsu_bt_vertical_nav);

    this.params = params;
    this.nav_item_selector = '';
    this.nav_panel_control_selector = '';
    this.nav_panel_selector = '';
    this.nav_list_container_selector = '';
    this.tree_mode = false; // @TODO: needs to do something

    document.emitter = Object(mitt__WEBPACK_IMPORTED_MODULE_1__["default"])();
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

  _createClass(wsu_bt_vertical_nav, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      /**
       *
       * Enable keyboard navigation accessibility
       *
       */
      var nav_item_selector_elements = document.querySelectorAll(this.nav_list_container_selector);
      var keyboard_nav = new _keyboard_nav_accessibility_wsu_bt_keyboard_nav_accessibility__WEBPACK_IMPORTED_MODULE_0__["default"]({
        elements: nav_item_selector_elements
      });
      keyboard_nav.init();
      /**
       *
       * Set nav items to expanded false
       *
       */

      document.querySelector(this.nav_panel_control_selector).setAttribute('aria-expanded', 'false');
      document.querySelectorAll(this.nav_item_selector).forEach(function (elem) {
        elem.setAttribute('aria-expanded', 'false');
      });
      /**
       *
       * Create event listeners
       *
       */

      /* Toggle Panels */

      this.nav_panel_control.addEventListener('click', this.togglePanel.bind(this));
      /* Toggle Nav Items */

      document.querySelectorAll('.wsu-s-nav-vertical__nav-item--has-children > .wsu-s-nav-vertical__nav-link').forEach(function (elem) {
        elem.addEventListener('click', _this2.toggle.bind(_this2));
      }); // @TODO: Abstract selector as parameter

      /* On panel open events */

      document.emitter.on('wsu-vertical-nav--after-open', this.panelOpened.bind(this));
    }
  }, {
    key: "openCurrentTarget",
    value: function openCurrentTarget(e) {
      e.preventDefault;
      e.currentTarget.setAttribute('aria-expanded', 'true');
    }
  }, {
    key: "openTarget",
    value: function openTarget(e) {
      e.preventDefault;
      e.target.setAttribute('aria-expanded', 'true');
    }
  }, {
    key: "openPanel",
    value: function openPanel() {
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

      document.emitter.emit('wsu-vertical-nav--open');
      /**
       *
       * Event after open completes
       * wsu-vertical-nav--after-open
       *
       */

      var openAnimationTime = 600; // in ms the time it takes for the menu to finish opening

      setTimeout(function () {
        document.emitter.emit('wsu-vertical-nav--after-open');
      }, openAnimationTime);
    }
  }, {
    key: "close",
    value: function close(e) {
      e.preventDefault;
      e.target.setAttribute('aria-expanded', 'false');
    }
  }, {
    key: "closePanel",
    value: function closePanel() {
      /* Set aria expanded attribute */
      this.nav_panel_control.setAttribute('aria-expanded', 'false');
      /* Remove open class */

      this.nav_panel.classList.remove('wsu-s-nav-vertical__wrapper--open');
      /* Emit close event */

      document.emitter.emit('wsu-vertical-nav--close');
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      if (e.currentTarget.getAttribute('aria-expanded') == 'false') {
        this.openCurrentTarget(e);
      } else if (e.target.getAttribute('aria-expanded') == 'false') {
        this.openTarget(e);
      } else {
        this.close(e);
      }
    }
  }, {
    key: "togglePanel",
    value: function togglePanel() {
      if (this.nav_panel_control.getAttribute('aria-expanded') == 'true') {
        this.closePanel();
      } else {
        this.openPanel();
      }
    }
  }, {
    key: "panelOpened",
    value: function panelOpened() {
      var closeButton = document.querySelector('.wsu-s-nav-vertical__nav-container-close-link');
      closeButton.style.opacity = 1;
      closeButton.style.marginTop = 0;
      /**
       *
       * Animate menu items in on vert nav open using emitters
       *
       */

      var navItems = document.querySelectorAll('.wsu-s-nav-vertical__nav-list-container > li');
      var navItemsCount = navItems.length;

      for (var i = 0; i < navItemsCount; i++) {
        (function (i) {
          var duration = 250;
          var increment = duration + duration * i;
          setTimeout(function () {
            navItems[i].style.opacity = 1;
            navItems[i].style.marginLeft = '0';
          }, increment);
        })(i);
      }

      ;
      /**
       *
       * Create event listener for allowing panel to be closed on click
       *
       */

      var _this = this;

      window.addEventListener('click', function (e) {
        if (e.target.className == "wsu-s-nav-vertical__wrapper wsu-s-nav-vertical__wrapper--open") {
          _this.closePanel();
        }
      });
    }
  }]);

  return wsu_bt_vertical_nav;
}();



/***/ }),

/***/ "../wsu-build-tools/js/wsu-bt-priority-nav.js":
/*!****************************************************!*\
  !*** ../wsu-build-tools/js/wsu-bt-priority-nav.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wsu_bt_priority_nav; });
/* harmony import */ var _aria_expanded_wsu_bt_aria_expanded__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aria-expanded/wsu-bt-aria-expanded */ "../wsu-build-tools/js/aria-expanded/wsu-bt-aria-expanded.js");
/* harmony import */ var _keyboard_nav_accessibility_MenubarLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboard-nav-accessibility/MenubarLinks */ "../wsu-build-tools/js/keyboard-nav-accessibility/MenubarLinks.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var wsu_bt_priority_nav =
/*#__PURE__*/
function () {
  function wsu_bt_priority_nav(params) {
    _classCallCheck(this, wsu_bt_priority_nav);

    this.breakpoints = [];
    this.document = document;
    this.main_nav_width = null;
    this.params = params;
    this.screenWidth = null;
    this.window = window;
  } // Methods


  _createClass(wsu_bt_priority_nav, [{
    key: "init",
    value: function init() {
      this.update_nav();
      window.addEventListener('resize', this.update_nav.bind(this)); // TODO: look into if we need to use something like debounce or at the very least set a timeout
    }
  }, {
    key: "update_nav",
    value: function update_nav() {
      var _this = this;

      // Check if all fonts are loaded
      // TODO: Fix for ie 11 & edge (needs testing)
      this.document.fonts.ready.then(function () {
        // If doesn't exist & Nav is greater than screen width, create nav
        if (_this.get_priority_nav == null && _this.get_screen_width <= _this.get_main_nav_width) {
          _this.create_priority_nav();
        } // If nav exists, just resize it


        if (_this.get_priority_nav != null) {
          _this.resize_nav();
        }

        _this.initiateKeyboardNavigationSupport();

        _this.initiateAriaExpanded();
      });
    }
  }, {
    key: "create_priority_nav",
    value: function create_priority_nav() {
      // Create elements
      var priority_nav_list_item = document.createElement('li');
      var priority_nav_list_item_link = document.createElement('a');
      var priority_nav_unordered_list = document.createElement('ul'); // Create list item wrapper <li>

      priority_nav_list_item.setAttribute('class', this.params['priority_nav_list_item_class_name']);
      priority_nav_list_item.setAttribute('role', 'none'); // Create list item link <a>

      priority_nav_list_item_link.innerHTML = this.params['more_inner_html'];
      priority_nav_list_item_link.setAttribute('href', '#');
      priority_nav_list_item_link.setAttribute('class', this.params['priority_nav_list_item_link_class_name']);
      priority_nav_list_item_link.setAttribute('id', 'more');
      priority_nav_list_item_link.setAttribute('role', 'menuitem');
      priority_nav_list_item_link.setAttribute('tabindex', '-1');
      priority_nav_list_item_link.setAttribute('aria-expanded', 'true');
      priority_nav_list_item_link.setAttribute('aria-haspopup', 'true'); // Create unordered list item container <ul>

      priority_nav_unordered_list.setAttribute('class', this.params['priority_nav_list_item_list_class_name']);
      priority_nav_unordered_list.setAttribute('role', 'menu');
      priority_nav_unordered_list.setAttribute('aria-abel', 'Replace Me w/ Link Name Submenu'); // Append to dom

      priority_nav_list_item.appendChild(priority_nav_list_item_link);
      priority_nav_list_item.appendChild(priority_nav_unordered_list);
      document.querySelector(this.params['main_nav_selector']).appendChild(priority_nav_list_item);
    }
  }, {
    key: "resize_nav",
    value: function resize_nav() {
      this.calculateWidths(); // Move items to priority nav

      while (this.screenWidth <= this.main_nav_width && this.get_main_nav.children.length > 0) {
        var itemToMove = this.get_main_nav.children[this.get_main_nav.children.length - 2];
        this.moveToPriorityNav(itemToMove);
        this.calculateWidths();
      } // Move items to main nav


      while (this.screenWidth >= this.breakpoints[this.breakpoints.length - 1] && this.get_priority_nav_submenu.children.length > 0) {
        this.moveToMainNav(this.get_priority_nav_submenu.children[0]);
      } // Turn off priority nav if unnecessary


      if (this.breakpoints.length == 0) {
        this.destroyPriorityNav();
      }
    }
  }, {
    key: "calculateWidths",
    value: function calculateWidths() {
      this.main_nav_width = this.get_main_nav_width;
      this.screenWidth = this.get_screen_width;
    }
  }, {
    key: "moveToPriorityNav",
    value: function moveToPriorityNav(itemToMove) {
      this.get_priority_nav_submenu.insertAdjacentElement('afterbegin', itemToMove);
      this.breakpoints.push(this.main_nav_width);
    }
  }, {
    key: "moveToMainNav",
    value: function moveToMainNav(itemToMove) {
      this.get_main_nav.insertBefore(itemToMove, this.get_main_nav.lastElementChild);
      this.breakpoints.pop();
    }
  }, {
    key: "destroyPriorityNav",
    value: function destroyPriorityNav() {
      this.get_priority_nav.remove();
    } // Initiate collapsable aria-expanded items

  }, {
    key: "initiateAriaExpanded",
    value: function initiateAriaExpanded() {
      var expanded_aria_items = new _aria_expanded_wsu_bt_aria_expanded__WEBPACK_IMPORTED_MODULE_0__["default"]({
        nav_item_selectors: '.' + this.params['priority_nav_list_item_link_class_name']
      });
      expanded_aria_items.init();
    } // Initiate keyboard controls for accessibility support

  }, {
    key: "initiateKeyboardNavigationSupport",
    value: function initiateKeyboardNavigationSupport() {
      var menubar = new _keyboard_nav_accessibility_MenubarLinks__WEBPACK_IMPORTED_MODULE_1__["Menubar"](document.querySelector(this.params['main_nav_selector']));
      menubar.init();
    } // Getters

  }, {
    key: "get_screen_width",
    get: function get() {
      var windowInnerWidth = this.window.innerWidth;
      return windowInnerWidth;
    }
  }, {
    key: "get_main_nav_width",
    get: function get() {
      var mainNavInnerWidth = this.document.querySelector(this.params['main_nav_selector']).offsetWidth;
      return mainNavInnerWidth;
    }
  }, {
    key: "get_main_nav",
    get: function get() {
      var mainNav = document.querySelector(this.params['main_nav_selector']);
      return mainNav;
    }
  }, {
    key: "get_priority_nav",
    get: function get() {
      var priority_nav = this.document.querySelector('.' + this.params['priority_nav_list_item_class_name']);
      return priority_nav;
    }
  }, {
    key: "get_priority_nav_submenu",
    get: function get() {
      var priority_nav = this.document.querySelector('.' + this.params['priority_nav_list_item_list_class_name']);
      return priority_nav;
    }
  }, {
    key: "getBreakpoints",
    get: function get() {
      var breakpoints = this.breakpoints;
      return breakpoints;
    }
  }]);

  return wsu_bt_priority_nav;
}();



/***/ }),

/***/ "../wsu-build-tools/node_modules/mitt/dist/mitt.es.js":
/*!************************************************************!*\
  !*** ../wsu-build-tools/node_modules/mitt/dist/mitt.es.js ***!
  \************************************************************/
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


/***/ }),

/***/ "./build/src/wsu-design-system.build.js":
/*!**********************************************!*\
  !*** ./build/src/wsu-design-system.build.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_src_global_footer_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/src/global-footer/build */ "./components/src/global-footer/build.js");
/* harmony import */ var _components_src_global_header_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/src/global-header/build */ "./components/src/global-header/build.js");
/* harmony import */ var _components_src_site_footer_build__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/src/site-footer/build */ "./components/src/site-footer/build.js");
/* harmony import */ var _components_src_site_footer_condensed_build__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/src/site-footer-condensed/build */ "./components/src/site-footer-condensed/build.js");
/* harmony import */ var _components_src_site_nav_horizontal_build__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/src/site-nav-horizontal/build */ "./components/src/site-nav-horizontal/build.js");
/* harmony import */ var _components_src_site_nav_vertical_build__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/src/site-nav-vertical/build */ "./components/src/site-nav-vertical/build.js");
/* harmony import */ var _components_src_site_header_build__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/src/site-header/build */ "./components/src/site-header/build.js");
/* harmony import */ var _components_src_content_heading_build__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/src/content-heading/build */ "./components/src/content-heading/build.js");
/* harmony import */ var _components_src_content_list_build__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/src/content-list/build */ "./components/src/content-list/build.js");
/**
 *
 * Design system build all components
 *
 */

/* Global components */


/* Site components */






/* Content components */




/***/ }),

/***/ "./components/src/content-heading/build.js":
/*!*************************************************!*\
  !*** ./components/src/content-heading/build.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_heading_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-heading.js */ "./components/src/content-heading/content-heading.js");
/* harmony import */ var _content_heading_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_heading_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_heading_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-heading.scss */ "./components/src/content-heading/content-heading.scss");
/* harmony import */ var _content_heading_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_heading_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/content-heading/content-heading.js":
/*!***********************************************************!*\
  !*** ./components/src/content-heading/content-heading.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/src/content-heading/content-heading.scss":
/*!*************************************************************!*\
  !*** ./components/src/content-heading/content-heading.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/content-list/build.js":
/*!**********************************************!*\
  !*** ./components/src/content-list/build.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-list.js */ "./components/src/content-list/content-list.js");
/* harmony import */ var _content_list_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_list_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_list_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-list.scss */ "./components/src/content-list/content-list.scss");
/* harmony import */ var _content_list_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_list_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/content-list/content-list.js":
/*!*****************************************************!*\
  !*** ./components/src/content-list/content-list.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/src/content-list/content-list.scss":
/*!*******************************************************!*\
  !*** ./components/src/content-list/content-list.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/global-footer/build.js":
/*!***********************************************!*\
  !*** ./components/src/global-footer/build.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-footer.js */ "./components/src/global-footer/global-footer.js");
/* harmony import */ var _global_footer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_footer_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-footer.scss */ "./components/src/global-footer/global-footer.scss");
/* harmony import */ var _global_footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_footer_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/global-footer/global-footer.js":
/*!*******************************************************!*\
  !*** ./components/src/global-footer/global-footer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/src/global-footer/global-footer.scss":
/*!*********************************************************!*\
  !*** ./components/src/global-footer/global-footer.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/global-header/build.js":
/*!***********************************************!*\
  !*** ./components/src/global-header/build.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-header.js */ "./components/src/global-header/global-header.js");
/* harmony import */ var _global_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_header_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-header.scss */ "./components/src/global-header/global-header.scss");
/* harmony import */ var _global_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_header_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/global-header/global-header.js":
/*!*******************************************************!*\
  !*** ./components/src/global-header/global-header.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  /**
   *
   * More links
   *
   */
  var global_header_links_toggle = document.querySelector('.wsu-g-header__more-icon-link');
  global_header_links_toggle.addEventListener('click', function () {
    console.log('Links toggle -- Coming soon!');
  });
  /**
   *
   * Search toggle
   *
   */

  var global_header_search_toggle = document.querySelector('.wsu-g-header__search-icon-link');
  global_header_search_toggle.addEventListener('click', function () {
    console.log('Search toggle -- Coming soon!');
  });
  /**
   *
   * Vertical nav toggle
   *
   */

  var global_header_menu_toggle = document.querySelector('.wsu-g-header__menu-icon-link');
  global_header_menu_toggle.addEventListener('click', function () {
    window.vertical_nav.togglePanel();
  });
});

/***/ }),

/***/ "./components/src/global-header/global-header.scss":
/*!*********************************************************!*\
  !*** ./components/src/global-header/global-header.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/site-footer-condensed/build.js":
/*!*******************************************************!*\
  !*** ./components/src/site-footer-condensed/build.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_footer_condensed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-footer-condensed.js */ "./components/src/site-footer-condensed/site-footer-condensed.js");
/* harmony import */ var _site_footer_condensed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_site_footer_condensed_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _site_footer_condensed_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-footer-condensed.scss */ "./components/src/site-footer-condensed/site-footer-condensed.scss");
/* harmony import */ var _site_footer_condensed_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_site_footer_condensed_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/site-footer-condensed/site-footer-condensed.js":
/*!***********************************************************************!*\
  !*** ./components/src/site-footer-condensed/site-footer-condensed.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/src/site-footer-condensed/site-footer-condensed.scss":
/*!*************************************************************************!*\
  !*** ./components/src/site-footer-condensed/site-footer-condensed.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/site-footer/build.js":
/*!*********************************************!*\
  !*** ./components/src/site-footer/build.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-footer.js */ "./components/src/site-footer/site-footer.js");
/* harmony import */ var _site_footer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_site_footer_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _site_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-footer.scss */ "./components/src/site-footer/site-footer.scss");
/* harmony import */ var _site_footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_site_footer_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/site-footer/site-footer.js":
/*!***************************************************!*\
  !*** ./components/src/site-footer/site-footer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/src/site-footer/site-footer.scss":
/*!*****************************************************!*\
  !*** ./components/src/site-footer/site-footer.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/site-header/build.js":
/*!*********************************************!*\
  !*** ./components/src/site-header/build.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-header.js */ "./components/src/site-header/site-header.js");
/* harmony import */ var _site_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_site_header_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _site_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-header.scss */ "./components/src/site-header/site-header.scss");
/* harmony import */ var _site_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_site_header_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/site-header/site-header.js":
/*!***************************************************!*\
  !*** ./components/src/site-header/site-header.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/src/site-header/site-header.scss":
/*!*****************************************************!*\
  !*** ./components/src/site-header/site-header.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/site-nav-horizontal/build.js":
/*!*****************************************************!*\
  !*** ./components/src/site-nav-horizontal/build.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_nav_horizontal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-nav-horizontal.js */ "./components/src/site-nav-horizontal/site-nav-horizontal.js");
/* harmony import */ var _site_nav_horizontal_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-nav-horizontal.scss */ "./components/src/site-nav-horizontal/site-nav-horizontal.scss");
/* harmony import */ var _site_nav_horizontal_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_site_nav_horizontal_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/site-nav-horizontal/site-nav-horizontal.js":
/*!*******************************************************************!*\
  !*** ./components/src/site-nav-horizontal/site-nav-horizontal.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wsu_build_tools_js_wsu_bt_priority_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../wsu-build-tools/js/wsu-bt-priority-nav */ "../wsu-build-tools/js/wsu-bt-priority-nav.js");
// TODO: import from NPM once final version is ready

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

  var horizontal_nav = new _wsu_build_tools_js_wsu_bt_priority_nav__WEBPACK_IMPORTED_MODULE_0__["default"]({
    main_nav_selector: '.wsu-s-nav-horizontal__nav-list',
    priority_nav_list_item_class_name: 'wsu-s-nav-horizontal__nav-item--more',
    priority_nav_list_item_link_class_name: 'wsu-s-nav-horizontal__nav-link',
    priority_nav_list_item_list_class_name: 'wsu-s-nav-horizontal__nav-list--has-more-items',
    more_inner_html: 'More'
  });
  horizontal_nav.init();
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

/***/ "./components/src/site-nav-vertical/build.js":
/*!***************************************************!*\
  !*** ./components/src/site-nav-vertical/build.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _site_nav_vertical_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-nav-vertical.js */ "./components/src/site-nav-vertical/site-nav-vertical.js");
/* harmony import */ var _site_nav_vertical_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-nav-vertical.scss */ "./components/src/site-nav-vertical/site-nav-vertical.scss");
/* harmony import */ var _site_nav_vertical_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_site_nav_vertical_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/site-nav-vertical/site-nav-vertical.js":
/*!***************************************************************!*\
  !*** ./components/src/site-nav-vertical/site-nav-vertical.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wsu_build_tools_js_vertical_nav_wsu_bt_vertical_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../wsu-build-tools/js/vertical-nav/wsu-bt-vertical-nav */ "../wsu-build-tools/js/vertical-nav/wsu-bt-vertical-nav.js");

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

  window.vertical_nav = new _wsu_build_tools_js_vertical_nav_wsu_bt_vertical_nav__WEBPACK_IMPORTED_MODULE_0__["default"]({
    nav_item_selector: '.wsu-s-nav-vertical__nav-link',
    nav_panel_control_selector: '.wsu-s-nav-vertical__menu-icon-link',
    nav_panel_selector: '.wsu-s-nav-vertical__wrapper',
    nav_list_container_selector: '.wsu-s-nav-vertical__nav-list-container'
  });
  window.vertical_nav.init();
  /**
   *
   * Close Button
   *
   */

  var close_link = document.querySelector('.wsu-s-nav-vertical__nav-container-close-link');
  close_link.addEventListener('click', function () {
    window.vertical_nav.closePanel();
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3dzdS1idWlsZC10b29scy9qcy9hcmlhLWV4cGFuZGVkL3dzdS1idC1hcmlhLWV4cGFuZGVkLmpzIiwid2VicGFjazovLy8uLi93c3UtYnVpbGQtdG9vbHMvanMva2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvTWVudWJhckl0ZW1MaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi4vd3N1LWJ1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L01lbnViYXJMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi4vd3N1LWJ1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L1BvcHVwTWVudUl0ZW1MaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi4vd3N1LWJ1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L1BvcHVwTWVudUxpbmtzLmpzIiwid2VicGFjazovLy8uLi93c3UtYnVpbGQtdG9vbHMvanMva2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvd3N1LWJ0LWtleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5LmpzIiwid2VicGFjazovLy8uLi93c3UtYnVpbGQtdG9vbHMvanMvdmVydGljYWwtbmF2L3dzdS1idC12ZXJ0aWNhbC1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4uL3dzdS1idWlsZC10b29scy9qcy93c3UtYnQtcHJpb3JpdHktbmF2LmpzIiwid2VicGFjazovLy8uLi93c3UtYnVpbGQtdG9vbHMvbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwid2VicGFjazovLy8uL2J1aWxkL3NyYy93c3UtZGVzaWduLXN5c3RlbS5idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWhlYWRpbmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvY29udGVudC1oZWFkaW5nL2NvbnRlbnQtaGVhZGluZy5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtbGlzdC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWxpc3QvY29udGVudC1saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvZ2xvYmFsLWZvb3Rlci9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9nbG9iYWwtaGVhZGVyL2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2dsb2JhbC1oZWFkZXIvZ2xvYmFsLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9nbG9iYWwtaGVhZGVyL2dsb2JhbC1oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLWZvb3Rlci1jb25kZW5zZWQvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1mb290ZXItY29uZGVuc2VkL3NpdGUtZm9vdGVyLWNvbmRlbnNlZC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtZm9vdGVyL2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtZm9vdGVyL3NpdGUtZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1oZWFkZXIvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1oZWFkZXIvc2l0ZS1oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi1ob3Jpem9udGFsL2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtbmF2LWhvcml6b250YWwvc2l0ZS1uYXYtaG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi1ob3Jpem9udGFsL3NpdGUtbmF2LWhvcml6b250YWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi12ZXJ0aWNhbC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi12ZXJ0aWNhbC9zaXRlLW5hdi12ZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi12ZXJ0aWNhbC9zaXRlLW5hdi12ZXJ0aWNhbC5zY3NzIl0sIm5hbWVzIjpbIndzdV9idF9hcmlhX2V4cGFuZGVkIiwicGFyYW1zIiwibmF2X2l0ZW1zIiwibmF2X2l0ZW1zX3NlbGVjdG9ycyIsIm5hdl9pdGVtX3NlbGVjdG9ycyIsImNvbnNvbGUiLCJlcnJvciIsIkFycmF5IiwiaXNBcnJheSIsImZvckVhY2giLCJlbGVtIiwiaSIsImFyciIsInVwZGF0ZV9pdGVtcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2X2l0ZW0iLCJzZXRBdHRyaWJ1dGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRBdHRyaWJ1dGUiLCJNZW51YmFySXRlbSIsImRvbU5vZGUiLCJtZW51T2JqIiwibWVudSIsInBvcHVwTWVudSIsImhhc0ZvY3VzIiwiaGFzSG92ZXIiLCJpc01lbnViYXJJdGVtIiwia2V5Q29kZSIsIk9iamVjdCIsImZyZWV6ZSIsInByb3RvdHlwZSIsImluaXQiLCJ0YWJJbmRleCIsImhhbmRsZUtleWRvd24iLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJuZXh0RWxlbWVudCIsIm5leHRFbGVtZW50U2libGluZyIsInRhZ05hbWUiLCJQb3B1cE1lbnUiLCJldmVudCIsInRndCIsImN1cnJlbnRUYXJnZXQiLCJjaGFyIiwia2V5IiwiZmxhZyIsImNsaWNrRXZlbnQiLCJpc1ByaW50YWJsZUNoYXJhY3RlciIsInN0ciIsImxlbmd0aCIsIm1hdGNoIiwiU1BBQ0UiLCJSRVRVUk4iLCJET1dOIiwib3BlbiIsInNldEZvY3VzVG9GaXJzdEl0ZW0iLCJMRUZUIiwic2V0Rm9jdXNUb1ByZXZpb3VzSXRlbSIsIlJJR0hUIiwic2V0Rm9jdXNUb05leHRJdGVtIiwiVVAiLCJzZXRGb2N1c1RvTGFzdEl0ZW0iLCJIT01FIiwiUEFHRVVQIiwiRU5EIiwiUEFHRURPV04iLCJUQUIiLCJjbG9zZSIsIkVTQyIsInNldEZvY3VzQnlGaXJzdENoYXJhY3RlciIsInN0b3BQcm9wYWdhdGlvbiIsInNldEV4cGFuZGVkIiwidmFsdWUiLCJNZW51YmFyIiwiZWxlbWVudENoaWxkcmVuIiwibXNnUHJlZml4IiwiRWxlbWVudCIsIlR5cGVFcnJvciIsImNoaWxkRWxlbWVudENvdW50IiwiRXJyb3IiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIm1lbnViYXJJdGVtIiwiaXNNZW51YmFyIiwibWVudWJhckl0ZW1zIiwiZmlyc3RDaGFycyIsImZpcnN0SXRlbSIsImxhc3RJdGVtIiwiY2hpbGRFbGVtZW50IiwibWVudUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIm51bUl0ZW1zIiwicHVzaCIsInRyaW0iLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInNldEZvY3VzVG9JdGVtIiwibmV3SXRlbSIsIm1iaSIsImZvY3VzIiwiY3VycmVudEl0ZW0iLCJpbmRleCIsImluZGV4T2YiLCJzdGFydCIsImdldEluZGV4Rmlyc3RDaGFycyIsInN0YXJ0SW5kZXgiLCJNZW51SXRlbSIsImlzRXhwYW5kZWQiLCJNb3VzZUV2ZW50IiwiZXJyIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50Iiwic2V0Rm9jdXNUb0NvbnRyb2xsZXIiLCJzZXRUaW1lb3V0IiwiaGFuZGxlTW91c2VvdmVyIiwiaGFuZGxlTW91c2VvdXQiLCJjb250cm9sbGVyT2JqIiwibWVudWl0ZW0iLCJjb250cm9sbGVyIiwibWVudWl0ZW1zIiwibWVudUl0ZW0iLCJsYWJlbCIsImNvbW1hbmQiLCJzZXRGb2N1c1RvTWVudWJhckl0ZW0iLCJmb3JjZSIsImNvbnRyb2xsZXJIYXNIb3ZlciIsIm1pIiwid3N1X2J0X2tleWJvYXJkX25hdl9hY2Nlc3NpYmlsaXR5IiwiZWxlbWVudCIsImluaXRpYXRlS2V5Ym9hcmROYXZpZ2F0aW9uU3VwcG9ydCIsIm1lbnViYXIiLCJ3c3VfYnRfdmVydGljYWxfbmF2IiwibmF2X2l0ZW1fc2VsZWN0b3IiLCJuYXZfcGFuZWxfY29udHJvbF9zZWxlY3RvciIsIm5hdl9wYW5lbF9zZWxlY3RvciIsIm5hdl9saXN0X2NvbnRhaW5lcl9zZWxlY3RvciIsInRyZWVfbW9kZSIsImVtaXR0ZXIiLCJtaXR0IiwibmF2X3BhbmVsX2NvbnRyb2wiLCJxdWVyeVNlbGVjdG9yIiwibmF2X3BhbmVsIiwibmF2X2l0ZW1fc2VsZWN0b3JfZWxlbWVudHMiLCJrZXlib2FyZF9uYXYiLCJlbGVtZW50cyIsInRvZ2dsZVBhbmVsIiwidG9nZ2xlIiwib24iLCJwYW5lbE9wZW5lZCIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsImVtaXQiLCJvcGVuQW5pbWF0aW9uVGltZSIsInJlbW92ZSIsIm9wZW5DdXJyZW50VGFyZ2V0Iiwib3BlblRhcmdldCIsImNsb3NlUGFuZWwiLCJvcGVuUGFuZWwiLCJjbG9zZUJ1dHRvbiIsInN0eWxlIiwib3BhY2l0eSIsIm1hcmdpblRvcCIsIm5hdkl0ZW1zIiwibmF2SXRlbXNDb3VudCIsImR1cmF0aW9uIiwiaW5jcmVtZW50IiwibWFyZ2luTGVmdCIsIl90aGlzIiwiY2xhc3NOYW1lIiwid3N1X2J0X3ByaW9yaXR5X25hdiIsImJyZWFrcG9pbnRzIiwibWFpbl9uYXZfd2lkdGgiLCJzY3JlZW5XaWR0aCIsInVwZGF0ZV9uYXYiLCJmb250cyIsInJlYWR5IiwidGhlbiIsImdldF9wcmlvcml0eV9uYXYiLCJnZXRfc2NyZWVuX3dpZHRoIiwiZ2V0X21haW5fbmF2X3dpZHRoIiwiY3JlYXRlX3ByaW9yaXR5X25hdiIsInJlc2l6ZV9uYXYiLCJpbml0aWF0ZUFyaWFFeHBhbmRlZCIsInByaW9yaXR5X25hdl9saXN0X2l0ZW0iLCJjcmVhdGVFbGVtZW50IiwicHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rIiwicHJpb3JpdHlfbmF2X3Vub3JkZXJlZF9saXN0IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJjYWxjdWxhdGVXaWR0aHMiLCJnZXRfbWFpbl9uYXYiLCJjaGlsZHJlbiIsIml0ZW1Ub01vdmUiLCJtb3ZlVG9Qcmlvcml0eU5hdiIsImdldF9wcmlvcml0eV9uYXZfc3VibWVudSIsIm1vdmVUb01haW5OYXYiLCJkZXN0cm95UHJpb3JpdHlOYXYiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJsYXN0RWxlbWVudENoaWxkIiwicG9wIiwiZXhwYW5kZWRfYXJpYV9pdGVtcyIsIndpbmRvd0lubmVyV2lkdGgiLCJpbm5lcldpZHRoIiwibWFpbk5hdklubmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsIm1haW5OYXYiLCJwcmlvcml0eV9uYXYiLCJnbG9iYWxfaGVhZGVyX2xpbmtzX3RvZ2dsZSIsImxvZyIsImdsb2JhbF9oZWFkZXJfc2VhcmNoX3RvZ2dsZSIsImdsb2JhbF9oZWFkZXJfbWVudV90b2dnbGUiLCJ2ZXJ0aWNhbF9uYXYiLCJuYXZfaG9yel93cmFwcGVyIiwiaG9yaXpvbnRhbF9uYXYiLCJtYWluX25hdl9zZWxlY3RvciIsInByaW9yaXR5X25hdl9saXN0X2l0ZW1fY2xhc3NfbmFtZSIsInByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGlua19jbGFzc19uYW1lIiwicHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saXN0X2NsYXNzX25hbWUiLCJtb3JlX2lubmVyX2h0bWwiLCJuYXZfdmVydF93cmFwcGVyIiwiY2xvc2VfbGluayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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UUFBUSxDQUFDZ0ksYUFBVCxDQUF1QiwrQ0FBdkIsQ0FBbkI7QUFFQWtGLFlBQVUsQ0FBQ3BOLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQVk7QUFDaERELFVBQU0sQ0FBQzRNLFlBQVAsQ0FBb0J4RCxVQUFwQjtBQUNBLEdBRkQ7QUFJQSxDOzs7Ozs7Ozs7OztBQ3RDRCx1QyIsImZpbGUiOiJ3c3UtZGVzaWduLXN5c3RlbS5idW5kbGUuZGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYnVpbGQvc3JjL3dzdS1kZXNpZ24tc3lzdGVtLmJ1aWxkLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd3N1X2J0X2FyaWFfZXhwYW5kZWQge1xuXHRjb25zdHJ1Y3RvcihwYXJhbXMpIHtcblx0XHR0aGlzLnBhcmFtcyA9IHBhcmFtcztcblx0XHR0aGlzLm5hdl9pdGVtcyA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEFzc2lnbiBuYXZfaXRlbXNfc2VsZWN0b3JzIHRvIHZhcmlhYmxlXG5cdFx0ICpcblx0XHQgKi9cblx0XHR0aGlzLm5hdl9pdGVtc19zZWxlY3RvcnMgPSBwYXJhbXMubmF2X2l0ZW1fc2VsZWN0b3JzO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm5hdl9pdGVtc19zZWxlY3RvcnMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdVbmRlZmluZWQgbmF2X2l0ZW1fc2VsZWN0b3JzLiBQbGVhc2UgcGFzcyB0aGUgc2VsZWN0b3IgeW91IHdvdWxkIGxpa2UgdG8gYmUgZXhwYW5kYWJsZS4nKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIExvb3AgdGhyb3VnaCBzZWxlY3RvcnMgYW5kIGFwcGVuZCBhcmlhIHRhcmdldFxuXHRcdCAqXG5cdFx0ICovXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzKSkge1xuXHRcdFx0dGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGVsZW0sIGksIGFycikge1xuXG5cdFx0XHRcdGFycltpXSA9IGVsZW0gKyAnW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdJztcblxuXHRcdFx0fSwgdGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzID0gdGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzICsgJ1thcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSc7XG5cdFx0fVxuXHR9XG5cblx0aW5pdCgpIHtcblx0XHR0aGlzLnVwZGF0ZV9pdGVtcygpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnVwZGF0ZV9pdGVtcy5iaW5kKHRoaXMpKTsgLy8gVE9ETzogbG9vayBpbnRvIGlmIHdlIG5lZWQgdG8gdXNlIHNvbWV0aGluZyBsaWtlIGRlYm91bmNlIG9yIGF0IHRoZSB2ZXJ5IGxlYXN0IHNldCBhIHRpbWVvdXRcblx0fVxuXG5cdHVwZGF0ZV9pdGVtcygpIHtcblx0XHRpZiAoQXJyYXkuaXNBcnJheSh0aGlzLm5hdl9pdGVtc19zZWxlY3RvcnMpKSB7XG5cdFx0XHR0aGlzLm5hdl9pdGVtc19zZWxlY3RvcnMuZm9yRWFjaChlbGVtID0+IHtcblx0XHRcdFx0Ly8gUXVlcnkgbmF2IGl0ZW1zXG5cdFx0XHRcdHRoaXMubmF2X2l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtKTtcblxuXHRcdFx0XHQvLyBTZXQgY29sbGFwc2libGUgbmF2IGl0ZW1zIHRvIGhpZGRlblxuXHRcdFx0XHR0aGlzLm5hdl9pdGVtcy5mb3JFYWNoKG5hdl9pdGVtID0+IHtcblx0XHRcdFx0XHRuYXZfaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gU2V0IGNvbGxhcHNpYmxlIG5hdiBpdGVtcyB0byB0b2dnbGUgb24gY2xpY2tcblx0XHRcdFx0dGhpcy5uYXZfaXRlbXMuZm9yRWFjaChuYXZfaXRlbSA9PiB7XG5cdFx0XHRcdFx0bmF2X2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdDtcblxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ2ZhbHNlJykge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBRdWVyeSBuYXYgaXRlbXNcblx0XHRcdHRoaXMubmF2X2l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm5hdl9pdGVtc19zZWxlY3RvcnMpO1xuXG5cdFx0XHQvLyBTZXQgY29sbGFwc2libGUgbmF2IGl0ZW1zIHRvIGhpZGRlblxuXHRcdFx0dGhpcy5uYXZfaXRlbXMuZm9yRWFjaChuYXZfaXRlbSA9PiB7XG5cdFx0XHRcdG5hdl9pdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFNldCBjb2xsYXBzaWJsZSBuYXYgaXRlbXMgdG8gdG9nZ2xlIG9uIGNsaWNrXG5cdFx0XHR0aGlzLm5hdl9pdGVtcy5mb3JFYWNoKG5hdl9pdGVtID0+IHtcblx0XHRcdFx0bmF2X2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQ7XG5cblx0XHRcdFx0XHRpZiAodGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAnZmFsc2UnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxufVxuIiwiLypcclxuKiAgIFRoaXMgY29udGVudCBpcyBsaWNlbnNlZCBhY2NvcmRpbmcgdG8gdGhlIFczQyBTb2Z0d2FyZSBMaWNlbnNlIGF0XHJcbiogICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcclxuKi9cclxuXHJcbmltcG9ydCB7IFBvcHVwTWVudSB9IGZyb20gJy4vUG9wdXBNZW51TGlua3MnO1xyXG5cclxudmFyIE1lbnViYXJJdGVtID0gZnVuY3Rpb24gKGRvbU5vZGUsIG1lbnVPYmopIHtcclxuXHJcblx0dGhpcy5tZW51ID0gbWVudU9iajtcclxuXHR0aGlzLmRvbU5vZGUgPSBkb21Ob2RlO1xyXG5cdHRoaXMucG9wdXBNZW51ID0gZmFsc2U7XHJcblxyXG5cdHRoaXMuaGFzRm9jdXMgPSBmYWxzZTtcclxuXHR0aGlzLmhhc0hvdmVyID0gZmFsc2U7XHJcblxyXG5cdHRoaXMuaXNNZW51YmFySXRlbSA9IHRydWU7XHJcblxyXG5cdHRoaXMua2V5Q29kZSA9IE9iamVjdC5mcmVlemUoe1xyXG5cdFx0J1RBQic6IDksXHJcblx0XHQnUkVUVVJOJzogMTMsXHJcblx0XHQnRVNDJzogMjcsXHJcblx0XHQnU1BBQ0UnOiAzMixcclxuXHRcdCdQQUdFVVAnOiAzMyxcclxuXHRcdCdQQUdFRE9XTic6IDM0LFxyXG5cdFx0J0VORCc6IDM1LFxyXG5cdFx0J0hPTUUnOiAzNixcclxuXHRcdCdMRUZUJzogMzcsXHJcblx0XHQnVVAnOiAzOCxcclxuXHRcdCdSSUdIVCc6IDM5LFxyXG5cdFx0J0RPV04nOiA0MFxyXG5cdH0pO1xyXG59O1xyXG5cclxuTWVudWJhckl0ZW0ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5kb21Ob2RlLnRhYkluZGV4ID0gLTE7XHJcblxyXG5cdHRoaXMuZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlkb3duLmJpbmQodGhpcykpO1xyXG5cdHRoaXMuZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKSk7XHJcblx0dGhpcy5kb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmhhbmRsZUJsdXIuYmluZCh0aGlzKSk7XHJcblxyXG5cdC8vIEluaXRpYWxpemUgcG9wIHVwIG1lbnVzXHJcblxyXG5cdHZhciBuZXh0RWxlbWVudCA9IHRoaXMuZG9tTm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC50YWdOYW1lID09PSAnVUwnKSB7XHJcblx0XHR0aGlzLnBvcHVwTWVudSA9IG5ldyBQb3B1cE1lbnUobmV4dEVsZW1lbnQsIHRoaXMpO1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUuaW5pdCgpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5NZW51YmFySXRlbS5wcm90b3R5cGUuaGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHZhciB0Z3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxyXG5cdFx0Y2hhciA9IGV2ZW50LmtleSxcclxuXHRcdGZsYWcgPSBmYWxzZSxcclxuXHRcdGNsaWNrRXZlbnQ7XHJcblxyXG5cdGZ1bmN0aW9uIGlzUHJpbnRhYmxlQ2hhcmFjdGVyKHN0cikge1xyXG5cdFx0cmV0dXJuIHN0ci5sZW5ndGggPT09IDEgJiYgc3RyLm1hdGNoKC9cXFMvKTtcclxuXHR9XHJcblxyXG5cdHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuU1BBQ0U6XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5SRVRVUk46XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5ET1dOOlxyXG5cdFx0XHRpZiAodGhpcy5wb3B1cE1lbnUpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5vcGVuKCk7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSgpO1xyXG5cdFx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkxFRlQ6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvUHJldmlvdXNJdGVtKHRoaXMpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUklHSFQ6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvTmV4dEl0ZW0odGhpcyk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5VUDpcclxuXHRcdFx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUub3BlbigpO1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51LnNldEZvY3VzVG9MYXN0SXRlbSgpO1xyXG5cdFx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkhPTUU6XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5QQUdFVVA6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvRmlyc3RJdGVtKCk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5FTkQ6XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5QQUdFRE9XTjpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9MYXN0SXRlbSgpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuVEFCOlxyXG5cdFx0XHRpZiAodGhpcy5wb3B1cE1lbnUgIT0gZmFsc2UpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5jbG9zZSh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5FU0M6XHJcblx0XHRcdGlmICh0aGlzLnBvcHVwTWVudSAhPSBmYWxzZSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51LmNsb3NlKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGlmIChpc1ByaW50YWJsZUNoYXJhY3RlcihjaGFyKSkge1xyXG5cdFx0XHRcdHRoaXMubWVudS5zZXRGb2N1c0J5Rmlyc3RDaGFyYWN0ZXIodGhpcywgY2hhcik7XHJcblx0XHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHRpZiAoZmxhZykge1xyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnViYXJJdGVtLnByb3RvdHlwZS5zZXRFeHBhbmRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0dGhpcy5kb21Ob2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0dGhpcy5kb21Ob2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnViYXJJdGVtLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMubWVudS5oYXNGb2N1cyA9IHRydWU7XHJcbn07XHJcblxyXG5NZW51YmFySXRlbS5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMubWVudS5oYXNGb2N1cyA9IGZhbHNlO1xyXG59O1xyXG5cclxuZXhwb3J0IHZhciBNZW51YmFySXRlbTtcclxuIiwiLypcclxuKiAgIFRoaXMgY29udGVudCBpcyBsaWNlbnNlZCBhY2NvcmRpbmcgdG8gdGhlIFczQyBTb2Z0d2FyZSBMaWNlbnNlIGF0XHJcbiogICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcclxuKi9cclxuXHJcbmltcG9ydCB7IE1lbnViYXJJdGVtIH0gZnJvbSAnLi9NZW51YmFySXRlbUxpbmtzJztcclxuXHJcbnZhciBNZW51YmFyID0gZnVuY3Rpb24gKGRvbU5vZGUpIHtcclxuXHR2YXIgZWxlbWVudENoaWxkcmVuLFxyXG5cdFx0bXNnUHJlZml4ID0gJ01lbnViYXIgY29uc3RydWN0b3IgYXJndW1lbnQgbWVudWJhck5vZGUgJztcclxuXHJcblx0Ly8gQ2hlY2sgd2hldGhlciBtZW51YmFyTm9kZSBpcyBhIERPTSBlbGVtZW50XHJcblx0aWYgKCFkb21Ob2RlIGluc3RhbmNlb2YgRWxlbWVudCkge1xyXG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihtc2dQcmVmaXggKyAnaXMgbm90IGEgRE9NIEVsZW1lbnQuJyk7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayB3aGV0aGVyIG1lbnViYXJOb2RlIGhhcyBkZXNjZW5kYW50IGVsZW1lbnRzXHJcblx0aWYgKGRvbU5vZGUuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihtc2dQcmVmaXggKyAnaGFzIG5vIGVsZW1lbnQgY2hpbGRyZW4uJyk7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayB3aGV0aGVyIG1lbnViYXJOb2RlIGhhcyBBIGVsZW1lbnRzXHJcblx0dmFyIGUgPSBkb21Ob2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdHdoaWxlIChlKSB7XHJcblx0XHR2YXIgbWVudWJhckl0ZW0gPSBlLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0aWYgKGUgJiYgbWVudWJhckl0ZW0gJiYgbWVudWJhckl0ZW0udGFnTmFtZSAhPT0gJ0EnKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihtc2dQcmVmaXggKyAnaGFzIGNoaWxkIGVsZW1lbnRzIGFyZSBub3QgQSBlbGVtZW50cy4nKTtcclxuXHRcdH1cclxuXHRcdGUgPSBlLm5leHRFbGVtZW50U2libGluZztcclxuXHR9XHJcblxyXG5cdHRoaXMuaXNNZW51YmFyID0gdHJ1ZTtcclxuXHJcblx0dGhpcy5kb21Ob2RlID0gZG9tTm9kZTtcclxuXHJcblx0dGhpcy5tZW51YmFySXRlbXMgPSBbXTsgLy8gU2VlIE1lbnViYXIgaW5pdCBtZXRob2RcclxuXHR0aGlzLmZpcnN0Q2hhcnMgPSBbXTsgLy8gU2VlIE1lbnViYXIgaW5pdCBtZXRob2RcclxuXHJcblx0dGhpcy5maXJzdEl0ZW0gPSBudWxsOyAvLyBTZWUgTWVudWJhciBpbml0IG1ldGhvZFxyXG5cdHRoaXMubGFzdEl0ZW0gPSBudWxsOyAvLyBTZWUgTWVudWJhciBpbml0IG1ldGhvZFxyXG5cclxuXHR0aGlzLmhhc0ZvY3VzID0gZmFsc2U7IC8vIFNlZSBNZW51YmFySXRlbSBoYW5kbGVGb2N1cywgaGFuZGxlQmx1clxyXG5cdHRoaXMuaGFzSG92ZXIgPSBmYWxzZTsgLy8gU2VlIE1lbnViYXIgaGFuZGxlTW91c2VvdmVyLCBoYW5kbGVNb3VzZW91dFxyXG59O1xyXG5cclxuLypcclxuKiAgIEBtZXRob2QgTWVudWJhci5wcm90b3R5cGUuaW5pdFxyXG4qXHJcbiogICBAZGVzY1xyXG4qICAgICAgIEFkZHMgQVJJQSByb2xlIHRvIHRoZSBtZW51YmFyIG5vZGVcclxuKiAgICAgICBUcmF2ZXJzZSBtZW51YmFyIGNoaWxkcmVuIGZvciBBIGVsZW1lbnRzIHRvIGNvbmZpZ3VyZSBlYWNoIEEgZWxlbWVudCBhcyBhIEFSSUEgbWVudWl0ZW1cclxuKiAgICAgICBhbmQgcG9wdWxhdGUgbWVudWl0ZW1zIGFycmF5LiBJbml0aWFsaXplIGZpcnN0SXRlbSBhbmQgbGFzdEl0ZW0gcHJvcGVydGllcy5cclxuKi9cclxuTWVudWJhci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgbWVudWJhckl0ZW0sIGNoaWxkRWxlbWVudCwgbWVudUVsZW1lbnQsIHRleHRDb250ZW50LCBudW1JdGVtcztcclxuXHJcblxyXG5cdC8vIFRyYXZlcnNlIHRoZSBlbGVtZW50IGNoaWxkcmVuIG9mIG1lbnViYXJOb2RlOiBjb25maWd1cmUgZWFjaCB3aXRoXHJcblx0Ly8gbWVudWl0ZW0gcm9sZSBiZWhhdmlvciBhbmQgc3RvcmUgcmVmZXJlbmNlIGluIG1lbnVpdGVtcyBhcnJheS5cclxuXHR2YXIgZWxlbSA9IHRoaXMuZG9tTm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcblx0d2hpbGUgKGVsZW0pIHtcclxuXHRcdHZhciBtZW51RWxlbWVudCA9IGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5cdFx0aWYgKGVsZW0gJiYgbWVudUVsZW1lbnQgJiYgbWVudUVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcblx0XHRcdG1lbnViYXJJdGVtID0gbmV3IE1lbnViYXJJdGVtKG1lbnVFbGVtZW50LCB0aGlzKTtcclxuXHRcdFx0bWVudWJhckl0ZW0uaW5pdCgpO1xyXG5cdFx0XHR0aGlzLm1lbnViYXJJdGVtcy5wdXNoKG1lbnViYXJJdGVtKTtcclxuXHRcdFx0dGV4dENvbnRlbnQgPSBtZW51RWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdHRoaXMuZmlyc3RDaGFycy5wdXNoKHRleHRDb250ZW50LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpKTtcclxuXHRcdH1cclxuXHJcblx0XHRlbGVtID0gZWxlbS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0fVxyXG5cclxuXHQvLyBVc2UgcG9wdWxhdGVkIG1lbnVpdGVtcyBhcnJheSB0byBpbml0aWFsaXplIGZpcnN0SXRlbSBhbmQgbGFzdEl0ZW0uXHJcblx0bnVtSXRlbXMgPSB0aGlzLm1lbnViYXJJdGVtcy5sZW5ndGg7XHJcblx0aWYgKG51bUl0ZW1zID4gMCkge1xyXG5cdFx0dGhpcy5maXJzdEl0ZW0gPSB0aGlzLm1lbnViYXJJdGVtc1swXTtcclxuXHRcdHRoaXMubGFzdEl0ZW0gPSB0aGlzLm1lbnViYXJJdGVtc1tudW1JdGVtcyAtIDFdO1xyXG5cdH1cclxuXHR0aGlzLmZpcnN0SXRlbS5kb21Ob2RlLnRhYkluZGV4ID0gMDtcclxufTtcclxuXHJcbi8qIEZPQ1VTIE1BTkFHRU1FTlQgTUVUSE9EUyAqL1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuc2V0Rm9jdXNUb0l0ZW0gPSBmdW5jdGlvbiAobmV3SXRlbSkge1xyXG5cclxuXHR2YXIgZmxhZyA9IGZhbHNlO1xyXG5cclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWVudWJhckl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgbWJpID0gdGhpcy5tZW51YmFySXRlbXNbaV07XHJcblxyXG5cdFx0aWYgKG1iaS5kb21Ob2RlLnRhYkluZGV4ID09IDApIHtcclxuXHRcdFx0ZmxhZyA9IG1iaS5kb21Ob2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XHJcblx0XHR9XHJcblxyXG5cdFx0bWJpLmRvbU5vZGUudGFiSW5kZXggPSAtMTtcclxuXHRcdGlmIChtYmkucG9wdXBNZW51KSB7XHJcblx0XHRcdG1iaS5wb3B1cE1lbnUuY2xvc2UoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdG5ld0l0ZW0uZG9tTm9kZS5mb2N1cygpO1xyXG5cdG5ld0l0ZW0uZG9tTm9kZS50YWJJbmRleCA9IDA7XHJcblxyXG5cdGlmIChmbGFnICYmIG5ld0l0ZW0ucG9wdXBNZW51KSB7XHJcblx0XHRuZXdJdGVtLnBvcHVwTWVudS5vcGVuKCk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSA9IGZ1bmN0aW9uIChmbGFnKSB7XHJcblx0dGhpcy5zZXRGb2N1c1RvSXRlbSh0aGlzLmZpcnN0SXRlbSk7XHJcbn07XHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5zZXRGb2N1c1RvTGFzdEl0ZW0gPSBmdW5jdGlvbiAoZmxhZykge1xyXG5cdHRoaXMuc2V0Rm9jdXNUb0l0ZW0odGhpcy5sYXN0SXRlbSk7XHJcbn07XHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5zZXRGb2N1c1RvUHJldmlvdXNJdGVtID0gZnVuY3Rpb24gKGN1cnJlbnRJdGVtKSB7XHJcblx0dmFyIGluZGV4O1xyXG5cdHZhciBuZXdJdGVtO1xyXG5cclxuXHRpZiAoY3VycmVudEl0ZW0gPT09IHRoaXMuZmlyc3RJdGVtKSB7XHJcblx0XHRuZXdJdGVtID0gdGhpcy5sYXN0SXRlbTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRpbmRleCA9IHRoaXMubWVudWJhckl0ZW1zLmluZGV4T2YoY3VycmVudEl0ZW0pO1xyXG5cdFx0bmV3SXRlbSA9IHRoaXMubWVudWJhckl0ZW1zW2luZGV4IC0gMV07XHJcblx0fVxyXG5cclxuXHR0aGlzLnNldEZvY3VzVG9JdGVtKG5ld0l0ZW0pO1xyXG5cclxufTtcclxuXHJcbk1lbnViYXIucHJvdG90eXBlLnNldEZvY3VzVG9OZXh0SXRlbSA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSkge1xyXG5cdHZhciBpbmRleDtcclxuXHR2YXIgbmV3SXRlbTtcclxuXHJcblx0aWYgKGN1cnJlbnRJdGVtID09PSB0aGlzLmxhc3RJdGVtKSB7XHJcblx0XHRuZXdJdGVtID0gdGhpcy5maXJzdEl0ZW07XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0aW5kZXggPSB0aGlzLm1lbnViYXJJdGVtcy5pbmRleE9mKGN1cnJlbnRJdGVtKTtcclxuXHRcdG5ld0l0ZW0gPSB0aGlzLm1lbnViYXJJdGVtc1tpbmRleCArIDFdO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zZXRGb2N1c1RvSXRlbShuZXdJdGVtKTtcclxuXHJcbn07XHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5zZXRGb2N1c0J5Rmlyc3RDaGFyYWN0ZXIgPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0sIGNoYXIpIHtcclxuXHR2YXIgc3RhcnQsIGluZGV4LCBjaGFyID0gY2hhci50b0xvd2VyQ2FzZSgpO1xyXG5cdHZhciBmbGFnID0gY3VycmVudEl0ZW0uZG9tTm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xyXG5cclxuXHQvLyBHZXQgc3RhcnQgaW5kZXggZm9yIHNlYXJjaCBiYXNlZCBvbiBwb3NpdGlvbiBvZiBjdXJyZW50SXRlbVxyXG5cdHN0YXJ0ID0gdGhpcy5tZW51YmFySXRlbXMuaW5kZXhPZihjdXJyZW50SXRlbSkgKyAxO1xyXG5cdGlmIChzdGFydCA9PT0gdGhpcy5tZW51YmFySXRlbXMubGVuZ3RoKSB7XHJcblx0XHRzdGFydCA9IDA7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayByZW1haW5pbmcgc2xvdHMgaW4gdGhlIG1lbnVcclxuXHRpbmRleCA9IHRoaXMuZ2V0SW5kZXhGaXJzdENoYXJzKHN0YXJ0LCBjaGFyKTtcclxuXHJcblx0Ly8gSWYgbm90IGZvdW5kIGluIHJlbWFpbmluZyBzbG90cywgY2hlY2sgZnJvbSBiZWdpbm5pbmdcclxuXHRpZiAoaW5kZXggPT09IC0xKSB7XHJcblx0XHRpbmRleCA9IHRoaXMuZ2V0SW5kZXhGaXJzdENoYXJzKDAsIGNoYXIpO1xyXG5cdH1cclxuXHJcblx0Ly8gSWYgbWF0Y2ggd2FzIGZvdW5kLi4uXHJcblx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdHRoaXMuc2V0Rm9jdXNUb0l0ZW0odGhpcy5tZW51YmFySXRlbXNbaW5kZXhdKTtcclxuXHR9XHJcbn07XHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5nZXRJbmRleEZpcnN0Q2hhcnMgPSBmdW5jdGlvbiAoc3RhcnRJbmRleCwgY2hhcikge1xyXG5cdGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpIDwgdGhpcy5maXJzdENoYXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRpZiAoY2hhciA9PT0gdGhpcy5maXJzdENoYXJzW2ldKSB7XHJcblx0XHRcdHJldHVybiBpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gLTE7XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIE1lbnViYXI7XHJcbiIsIi8qXHJcbiogICBUaGlzIGNvbnRlbnQgaXMgbGljZW5zZWQgYWNjb3JkaW5nIHRvIHRoZSBXM0MgU29mdHdhcmUgTGljZW5zZSBhdFxyXG4qICAgaHR0cHM6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50XHJcbiovXHJcblxyXG5pbXBvcnQgeyBQb3B1cE1lbnUgfSBmcm9tICcuL1BvcHVwTWVudUxpbmtzJztcclxuXHJcbnZhciBNZW51SXRlbSA9IGZ1bmN0aW9uIChkb21Ob2RlLCBtZW51T2JqKSB7XHJcblxyXG5cdHRoaXMuZG9tTm9kZSA9IGRvbU5vZGU7XHJcblx0dGhpcy5tZW51ID0gbWVudU9iajtcclxuXHR0aGlzLnBvcHVwTWVudSA9IGZhbHNlO1xyXG5cdHRoaXMuaXNNZW51YmFySXRlbSA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmtleUNvZGUgPSBPYmplY3QuZnJlZXplKHtcclxuXHRcdCdUQUInOiA5LFxyXG5cdFx0J1JFVFVSTic6IDEzLFxyXG5cdFx0J0VTQyc6IDI3LFxyXG5cdFx0J1NQQUNFJzogMzIsXHJcblx0XHQnUEFHRVVQJzogMzMsXHJcblx0XHQnUEFHRURPV04nOiAzNCxcclxuXHRcdCdFTkQnOiAzNSxcclxuXHRcdCdIT01FJzogMzYsXHJcblx0XHQnTEVGVCc6IDM3LFxyXG5cdFx0J1VQJzogMzgsXHJcblx0XHQnUklHSFQnOiAzOSxcclxuXHRcdCdET1dOJzogNDBcclxuXHR9KTtcclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZG9tTm9kZS50YWJJbmRleCA9IC0xO1xyXG5cclxuXHR0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bi5iaW5kKHRoaXMpKTtcclxuXHR0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcykpO1xyXG5cdHRoaXMuZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcykpO1xyXG5cclxuXHQvLyBJbml0aWFsaXplIGZseW91dCBtZW51XHJcblxyXG5cdHZhciBuZXh0RWxlbWVudCA9IHRoaXMuZG9tTm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblxyXG5cdGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC50YWdOYW1lID09PSAnVUwnKSB7XHJcblx0XHR0aGlzLnBvcHVwTWVudSA9IG5ldyBQb3B1cE1lbnUobmV4dEVsZW1lbnQsIHRoaXMpO1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUuaW5pdCgpO1xyXG5cdH1cclxuXHJcbn07XHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuaXNFeHBhbmRlZCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5kb21Ob2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XHJcbn07XHJcblxyXG4vKiBFVkVOVCBIQU5ETEVSUyAqL1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR2YXIgdGd0ID0gZXZlbnQuY3VycmVudFRhcmdldCxcclxuXHRcdGNoYXIgPSBldmVudC5rZXksXHJcblx0XHRmbGFnID0gZmFsc2UsXHJcblx0XHRjbGlja0V2ZW50O1xyXG5cclxuXHRmdW5jdGlvbiBpc1ByaW50YWJsZUNoYXJhY3RlcihzdHIpIHtcclxuXHRcdHJldHVybiBzdHIubGVuZ3RoID09PSAxICYmIHN0ci5tYXRjaCgvXFxTLyk7XHJcblx0fVxyXG5cclxuXHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlNQQUNFOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUkVUVVJOOlxyXG5cdFx0XHRpZiAodGhpcy5wb3B1cE1lbnUpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5vcGVuKCk7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cclxuXHRcdFx0XHQvLyBDcmVhdGUgc2ltdWxhdGVkIG1vdXNlIGV2ZW50IHRvIG1pbWljIHRoZSBiZWhhdmlvciBvZiBBVHNcclxuXHRcdFx0XHQvLyBhbmQgbGV0IHRoZSBldmVudCBoYW5kbGVyIGhhbmRsZUNsaWNrIGRvIHRoZSBob3VzZWtlZXBpbmcuXHJcblx0XHRcdFx0dHJ5IHtcclxuXHRcdFx0XHRcdGNsaWNrRXZlbnQgPSBuZXcgTW91c2VFdmVudCgnY2xpY2snLCB7XHJcblx0XHRcdFx0XHRcdCd2aWV3Jzogd2luZG93LFxyXG5cdFx0XHRcdFx0XHQnYnViYmxlcyc6IHRydWUsXHJcblx0XHRcdFx0XHRcdCdjYW5jZWxhYmxlJzogdHJ1ZVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhdGNoIChlcnIpIHtcclxuXHRcdFx0XHRcdGlmIChkb2N1bWVudC5jcmVhdGVFdmVudCkge1xyXG5cdFx0XHRcdFx0XHQvLyBET00gTGV2ZWwgMyBmb3IgSUUgOStcclxuXHRcdFx0XHRcdFx0Y2xpY2tFdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xyXG5cdFx0XHRcdFx0XHRjbGlja0V2ZW50LmluaXRFdmVudCgnY2xpY2snLCB0cnVlLCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGd0LmRpc3BhdGNoRXZlbnQoY2xpY2tFdmVudCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5VUDpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9QcmV2aW91c0l0ZW0odGhpcyk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5ET1dOOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb05leHRJdGVtKHRoaXMpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuTEVGVDpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9Db250cm9sbGVyKCdwcmV2aW91cycsIHRydWUpO1xyXG5cdFx0XHR0aGlzLm1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5SSUdIVDpcclxuXHRcdFx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUub3BlbigpO1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51LnNldEZvY3VzVG9GaXJzdEl0ZW0oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0NvbnRyb2xsZXIoJ25leHQnLCB0cnVlKTtcclxuXHRcdFx0XHR0aGlzLm1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkhPTUU6XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5QQUdFVVA6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvRmlyc3RJdGVtKCk7XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5FTkQ6XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5QQUdFRE9XTjpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9MYXN0SXRlbSgpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRVNDOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0NvbnRyb2xsZXIoKTtcclxuXHRcdFx0dGhpcy5tZW51LmNsb3NlKHRydWUpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuVEFCOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0NvbnRyb2xsZXIoKTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0aWYgKGlzUHJpbnRhYmxlQ2hhcmFjdGVyKGNoYXIpKSB7XHJcblx0XHRcdFx0dGhpcy5tZW51LnNldEZvY3VzQnlGaXJzdENoYXJhY3Rlcih0aGlzLCBjaGFyKTtcclxuXHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHR9XHJcblxyXG5cdGlmIChmbGFnKSB7XHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLnNldEV4cGFuZGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcblx0aWYgKHZhbHVlKSB7XHJcblx0XHR0aGlzLmRvbU5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHR0aGlzLmRvbU5vZGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5tZW51Lmhhc0ZvY3VzID0gdHJ1ZTtcclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5tZW51Lmhhc0ZvY3VzID0gZmFsc2U7XHJcblx0c2V0VGltZW91dCh0aGlzLm1lbnUuY2xvc2UuYmluZCh0aGlzLm1lbnUsIGZhbHNlKSwgMzAwKTtcclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5oYW5kbGVNb3VzZW92ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR0aGlzLm1lbnUuaGFzSG92ZXIgPSB0cnVlO1xyXG5cdHRoaXMubWVudS5vcGVuKCk7XHJcblx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHR0aGlzLnBvcHVwTWVudS5oYXNIb3ZlciA9IHRydWU7XHJcblx0XHR0aGlzLnBvcHVwTWVudS5vcGVuKCk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLmhhbmRsZU1vdXNlb3V0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHR0aGlzLnBvcHVwTWVudS5oYXNIb3ZlciA9IGZhbHNlO1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0fVxyXG5cclxuXHR0aGlzLm1lbnUuaGFzSG92ZXIgPSBmYWxzZTtcclxuXHRzZXRUaW1lb3V0KHRoaXMubWVudS5jbG9zZS5iaW5kKHRoaXMubWVudSwgZmFsc2UpLCAzMDApO1xyXG59O1xyXG5cclxuZXhwb3J0IHZhciBNZW51SXRlbTtcclxuIiwiLypcclxuKiAgIFRoaXMgY29udGVudCBpcyBsaWNlbnNlZCBhY2NvcmRpbmcgdG8gdGhlIFczQyBTb2Z0d2FyZSBMaWNlbnNlIGF0XHJcbiogICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcclxuKi9cclxuXHJcbmltcG9ydCB7IE1lbnVJdGVtIH0gZnJvbSAnLi9Qb3B1cE1lbnVJdGVtTGlua3MnO1xyXG5cclxudmFyIFBvcHVwTWVudSA9IGZ1bmN0aW9uIChkb21Ob2RlLCBjb250cm9sbGVyT2JqKSB7XHJcblx0dmFyIGVsZW1lbnRDaGlsZHJlbixcclxuXHRcdG1zZ1ByZWZpeCA9ICdQb3B1cE1lbnUgY29uc3RydWN0b3IgYXJndW1lbnQgZG9tTm9kZSAnO1xyXG5cclxuXHQvLyBDaGVjayB3aGV0aGVyIGRvbU5vZGUgaXMgYSBET00gZWxlbWVudFxyXG5cdGlmICghZG9tTm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IobXNnUHJlZml4ICsgJ2lzIG5vdCBhIERPTSBFbGVtZW50LicpO1xyXG5cdH1cclxuXHQvLyBDaGVjayB3aGV0aGVyIGRvbU5vZGUgaGFzIGNoaWxkIGVsZW1lbnRzXHJcblx0aWYgKGRvbU5vZGUuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihtc2dQcmVmaXggKyAnaGFzIG5vIGVsZW1lbnQgY2hpbGRyZW4uJyk7XHJcblx0fVxyXG5cdC8vIENoZWNrIHdoZXRoZXIgZG9tTm9kZSBkZXNjZW5kYW50IGVsZW1lbnRzIGhhdmUgQSBlbGVtZW50c1xyXG5cdHZhciBjaGlsZEVsZW1lbnQgPSBkb21Ob2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdHdoaWxlIChjaGlsZEVsZW1lbnQpIHtcclxuXHRcdHZhciBtZW51aXRlbSA9IGNoaWxkRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHRcdGlmIChtZW51aXRlbSAmJiBtZW51aXRlbSA9PT0gJ0EnKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihtc2dQcmVmaXggKyAnaGFzIGRlc2NlbmRhbnQgZWxlbWVudHMgdGhhdCBhcmUgbm90IEEgZWxlbWVudHMuJyk7XHJcblx0XHR9XHJcblx0XHRjaGlsZEVsZW1lbnQgPSBjaGlsZEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdH1cclxuXHJcblx0dGhpcy5pc01lbnViYXIgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5kb21Ob2RlID0gZG9tTm9kZTtcclxuXHR0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyT2JqO1xyXG5cclxuXHR0aGlzLm1lbnVpdGVtcyA9IFtdOyAvLyBTZWUgUG9wdXBNZW51IGluaXQgbWV0aG9kXHJcblx0dGhpcy5maXJzdENoYXJzID0gW107IC8vIFNlZSBQb3B1cE1lbnUgaW5pdCBtZXRob2RcclxuXHJcblx0dGhpcy5maXJzdEl0ZW0gPSBudWxsOyAvLyBTZWUgUG9wdXBNZW51IGluaXQgbWV0aG9kXHJcblx0dGhpcy5sYXN0SXRlbSA9IG51bGw7IC8vIFNlZSBQb3B1cE1lbnUgaW5pdCBtZXRob2RcclxuXHJcblx0dGhpcy5oYXNGb2N1cyA9IGZhbHNlOyAvLyBTZWUgTWVudUl0ZW0gaGFuZGxlRm9jdXMsIGhhbmRsZUJsdXJcclxuXHR0aGlzLmhhc0hvdmVyID0gZmFsc2U7IC8vIFNlZSBQb3B1cE1lbnUgaGFuZGxlTW91c2VvdmVyLCBoYW5kbGVNb3VzZW91dFxyXG59O1xyXG5cclxuLypcclxuKiAgIEBtZXRob2QgUG9wdXBNZW51LnByb3RvdHlwZS5pbml0XHJcbipcclxuKiAgIEBkZXNjXHJcbiogICAgICAgVHJhdmVyc2UgZG9tTm9kZSBjaGlsZHJlbiB0byBjb25maWd1cmUgZWFjaCBtZW51aXRlbSBhbmQgcG9wdWxhdGVcclxuKiAgICAgICBtZW51aXRlbXMgYXJyYXkuIEluaXRpYWxpemUgZmlyc3RJdGVtIGFuZCBsYXN0SXRlbSBwcm9wZXJ0aWVzLlxyXG4qL1xyXG5Qb3B1cE1lbnUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dmFyIGNoaWxkRWxlbWVudCwgbWVudUVsZW1lbnQsIG1lbnVJdGVtLCB0ZXh0Q29udGVudCwgbnVtSXRlbXMsIGxhYmVsO1xyXG5cclxuXHQvLyBUcmF2ZXJzZSB0aGUgZWxlbWVudCBjaGlsZHJlbiBvZiBkb21Ob2RlOiBjb25maWd1cmUgZWFjaCB3aXRoXHJcblx0Ly8gbWVudWl0ZW0gcm9sZSBiZWhhdmlvciBhbmQgc3RvcmUgcmVmZXJlbmNlIGluIG1lbnVpdGVtcyBhcnJheS5cclxuXHRjaGlsZEVsZW1lbnQgPSB0aGlzLmRvbU5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5cdHdoaWxlIChjaGlsZEVsZW1lbnQpIHtcclxuXHRcdG1lbnVFbGVtZW50ID0gY2hpbGRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHRcdGlmIChtZW51RWxlbWVudCAmJiBtZW51RWxlbWVudC50YWdOYW1lID09PSAnQScpIHtcclxuXHRcdFx0bWVudUl0ZW0gPSBuZXcgTWVudUl0ZW0obWVudUVsZW1lbnQsIHRoaXMpO1xyXG5cdFx0XHRtZW51SXRlbS5pbml0KCk7XHJcblx0XHRcdHRoaXMubWVudWl0ZW1zLnB1c2gobWVudUl0ZW0pO1xyXG5cdFx0XHR0ZXh0Q29udGVudCA9IG1lbnVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKTtcclxuXHRcdFx0dGhpcy5maXJzdENoYXJzLnB1c2godGV4dENvbnRlbnQuc3Vic3RyaW5nKDAsIDEpLnRvTG93ZXJDYXNlKCkpO1xyXG5cdFx0fVxyXG5cdFx0Y2hpbGRFbGVtZW50ID0gY2hpbGRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuXHR9XHJcblxyXG5cdC8vIFVzZSBwb3B1bGF0ZWQgbWVudWl0ZW1zIGFycmF5IHRvIGluaXRpYWxpemUgZmlyc3RJdGVtIGFuZCBsYXN0SXRlbS5cclxuXHRudW1JdGVtcyA9IHRoaXMubWVudWl0ZW1zLmxlbmd0aDtcclxuXHRpZiAobnVtSXRlbXMgPiAwKSB7XHJcblx0XHR0aGlzLmZpcnN0SXRlbSA9IHRoaXMubWVudWl0ZW1zWzBdO1xyXG5cdFx0dGhpcy5sYXN0SXRlbSA9IHRoaXMubWVudWl0ZW1zW251bUl0ZW1zIC0gMV07XHJcblx0fVxyXG59O1xyXG5cclxuLyogRVZFTlQgSEFORExFUlMgKi9cclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuaGFuZGxlTW91c2VvdmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5oYXNIb3ZlciA9IHRydWU7XHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLmhhbmRsZU1vdXNlb3V0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5oYXNIb3ZlciA9IGZhbHNlO1xyXG5cdHNldFRpbWVvdXQodGhpcy5jbG9zZS5iaW5kKHRoaXMsIGZhbHNlKSwgMSk7XHJcbn07XHJcblxyXG4vKiBGT0NVUyBNQU5BR0VNRU5UIE1FVEhPRFMgKi9cclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuc2V0Rm9jdXNUb0NvbnRyb2xsZXIgPSBmdW5jdGlvbiAoY29tbWFuZCwgZmxhZykge1xyXG5cclxuXHRpZiAodHlwZW9mIGNvbW1hbmQgIT09ICdzdHJpbmcnKSB7XHJcblx0XHRjb21tYW5kID0gJyc7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXRGb2N1c1RvTWVudWJhckl0ZW0oY29udHJvbGxlciwgY2xvc2UpIHtcclxuXHRcdHdoaWxlIChjb250cm9sbGVyKSB7XHJcblx0XHRcdGlmIChjb250cm9sbGVyLmlzTWVudWJhckl0ZW0pIHtcclxuXHRcdFx0XHRjb250cm9sbGVyLmRvbU5vZGUuZm9jdXMoKTtcclxuXHRcdFx0XHRyZXR1cm4gY29udHJvbGxlcjtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRpZiAoY2xvc2UpIHtcclxuXHRcdFx0XHRcdGNvbnRyb2xsZXIubWVudS5jbG9zZSh0cnVlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29udHJvbGxlci5oYXNGb2N1cyA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnRyb2xsZXIgPSBjb250cm9sbGVyLm1lbnUuY29udHJvbGxlcjtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlmIChjb21tYW5kID09PSAnJykge1xyXG5cdFx0aWYgKHRoaXMuY29udHJvbGxlciAmJiB0aGlzLmNvbnRyb2xsZXIuZG9tTm9kZSkge1xyXG5cdFx0XHR0aGlzLmNvbnRyb2xsZXIuZG9tTm9kZS5mb2N1cygpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0aWYgKCF0aGlzLmNvbnRyb2xsZXIuaXNNZW51YmFySXRlbSkge1xyXG5cdFx0dGhpcy5jb250cm9sbGVyLmRvbU5vZGUuZm9jdXMoKTtcclxuXHRcdHRoaXMuY2xvc2UoKTtcclxuXHJcblx0XHRpZiAoY29tbWFuZCA9PT0gJ25leHQnKSB7XHJcblx0XHRcdHZhciBtZW51YmFySXRlbSA9IHNldEZvY3VzVG9NZW51YmFySXRlbSh0aGlzLmNvbnRyb2xsZXIsIGZhbHNlKTtcclxuXHRcdFx0aWYgKG1lbnViYXJJdGVtKSB7XHJcblx0XHRcdFx0bWVudWJhckl0ZW0ubWVudS5zZXRGb2N1c1RvTmV4dEl0ZW0obWVudWJhckl0ZW0sIGZsYWcpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0aWYgKGNvbW1hbmQgPT09ICdwcmV2aW91cycpIHtcclxuXHRcdFx0dGhpcy5jb250cm9sbGVyLm1lbnUuc2V0Rm9jdXNUb1ByZXZpb3VzSXRlbSh0aGlzLmNvbnRyb2xsZXIsIGZsYWcpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoY29tbWFuZCA9PT0gJ25leHQnKSB7XHJcblx0XHRcdHRoaXMuY29udHJvbGxlci5tZW51LnNldEZvY3VzVG9OZXh0SXRlbSh0aGlzLmNvbnRyb2xsZXIsIGZsYWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLnNldEZvY3VzVG9GaXJzdEl0ZW0gPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5maXJzdEl0ZW0uZG9tTm9kZS5mb2N1cygpO1xyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5zZXRGb2N1c1RvTGFzdEl0ZW0gPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5sYXN0SXRlbS5kb21Ob2RlLmZvY3VzKCk7XHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLnNldEZvY3VzVG9QcmV2aW91c0l0ZW0gPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0pIHtcclxuXHR2YXIgaW5kZXg7XHJcblxyXG5cdGlmIChjdXJyZW50SXRlbSA9PT0gdGhpcy5maXJzdEl0ZW0pIHtcclxuXHRcdHRoaXMubGFzdEl0ZW0uZG9tTm9kZS5mb2N1cygpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGluZGV4ID0gdGhpcy5tZW51aXRlbXMuaW5kZXhPZihjdXJyZW50SXRlbSk7XHJcblx0XHR0aGlzLm1lbnVpdGVtc1tpbmRleCAtIDFdLmRvbU5vZGUuZm9jdXMoKTtcclxuXHR9XHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLnNldEZvY3VzVG9OZXh0SXRlbSA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSkge1xyXG5cdHZhciBpbmRleDtcclxuXHJcblx0aWYgKGN1cnJlbnRJdGVtID09PSB0aGlzLmxhc3RJdGVtKSB7XHJcblx0XHR0aGlzLmZpcnN0SXRlbS5kb21Ob2RlLmZvY3VzKCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0aW5kZXggPSB0aGlzLm1lbnVpdGVtcy5pbmRleE9mKGN1cnJlbnRJdGVtKTtcclxuXHRcdHRoaXMubWVudWl0ZW1zW2luZGV4ICsgMV0uZG9tTm9kZS5mb2N1cygpO1xyXG5cdH1cclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuc2V0Rm9jdXNCeUZpcnN0Q2hhcmFjdGVyID0gZnVuY3Rpb24gKGN1cnJlbnRJdGVtLCBjaGFyKSB7XHJcblx0dmFyIHN0YXJ0LCBpbmRleCwgY2hhciA9IGNoYXIudG9Mb3dlckNhc2UoKTtcclxuXHJcblx0Ly8gR2V0IHN0YXJ0IGluZGV4IGZvciBzZWFyY2ggYmFzZWQgb24gcG9zaXRpb24gb2YgY3VycmVudEl0ZW1cclxuXHRzdGFydCA9IHRoaXMubWVudWl0ZW1zLmluZGV4T2YoY3VycmVudEl0ZW0pICsgMTtcclxuXHRpZiAoc3RhcnQgPT09IHRoaXMubWVudWl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0c3RhcnQgPSAwO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2hlY2sgcmVtYWluaW5nIHNsb3RzIGluIHRoZSBtZW51XHJcblx0aW5kZXggPSB0aGlzLmdldEluZGV4Rmlyc3RDaGFycyhzdGFydCwgY2hhcik7XHJcblxyXG5cdC8vIElmIG5vdCBmb3VuZCBpbiByZW1haW5pbmcgc2xvdHMsIGNoZWNrIGZyb20gYmVnaW5uaW5nXHJcblx0aWYgKGluZGV4ID09PSAtMSkge1xyXG5cdFx0aW5kZXggPSB0aGlzLmdldEluZGV4Rmlyc3RDaGFycygwLCBjaGFyKTtcclxuXHR9XHJcblxyXG5cdC8vIElmIG1hdGNoIHdhcyBmb3VuZC4uLlxyXG5cdGlmIChpbmRleCA+IC0xKSB7XHJcblx0XHR0aGlzLm1lbnVpdGVtc1tpbmRleF0uZG9tTm9kZS5mb2N1cygpO1xyXG5cdH1cclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuZ2V0SW5kZXhGaXJzdENoYXJzID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgsIGNoYXIpIHtcclxuXHRmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8IHRoaXMuZmlyc3RDaGFycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGNoYXIgPT09IHRoaXMuZmlyc3RDaGFyc1tpXSkge1xyXG5cdFx0XHRyZXR1cm4gaTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIC0xO1xyXG59O1xyXG5cclxuLyogTUVOVSBESVNQTEFZIE1FVEhPRFMgKi9cclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0dGhpcy5jb250cm9sbGVyLnNldEV4cGFuZGVkKHRydWUpO1xyXG5cclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZm9yY2UpIHtcclxuXHJcblx0dmFyIGNvbnRyb2xsZXJIYXNIb3ZlciA9IHRoaXMuY29udHJvbGxlci5oYXNIb3ZlcjtcclxuXHJcblx0dmFyIGhhc0ZvY3VzID0gdGhpcy5oYXNGb2N1cztcclxuXHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1lbnVpdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIG1pID0gdGhpcy5tZW51aXRlbXNbaV07XHJcblx0XHRpZiAobWkucG9wdXBNZW51KSB7XHJcblx0XHRcdGhhc0ZvY3VzID0gaGFzRm9jdXMgfCBtaS5wb3B1cE1lbnUuaGFzRm9jdXM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoIXRoaXMuY29udHJvbGxlci5pc01lbnViYXJJdGVtKSB7XHJcblx0XHRjb250cm9sbGVySGFzSG92ZXIgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdGlmIChmb3JjZSB8fCAoIWhhc0ZvY3VzICYmICF0aGlzLmhhc0hvdmVyICYmICFjb250cm9sbGVySGFzSG92ZXIpKSB7XHJcblx0XHR0aGlzLmNvbnRyb2xsZXIuc2V0RXhwYW5kZWQoZmFsc2UpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCB2YXIgUG9wdXBNZW51O1xyXG4iLCJpbXBvcnQgeyBNZW51YmFyIH0gZnJvbSAnLi4va2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvTWVudWJhckxpbmtzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd3N1X2J0X2tleWJvYXJkX25hdl9hY2Nlc3NpYmlsaXR5IHtcblx0Y29uc3RydWN0b3IocGFyYW1zKSB7XG5cdFx0dGhpcy5wYXJhbXMgPSBwYXJhbXM7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogTG9vcCB0aHJvdWdoIGVsZW1lbnRzIHRoYXQgd2Ugd2FudCB0byBoYXZlIGtleWJvYXJkIHN1cHBvcnQgYW5kIG1ha2UgaXQgc29cblx0XHQgKlxuXHRcdCAqL1xuXHRcdHRoaXMucGFyYW1zWydlbGVtZW50cyddLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHR0aGlzLmluaXRpYXRlS2V5Ym9hcmROYXZpZ2F0aW9uU3VwcG9ydChlbGVtZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdGluaXRpYXRlS2V5Ym9hcmROYXZpZ2F0aW9uU3VwcG9ydChlbGVtZW50KSB7XG5cdFx0dmFyIG1lbnViYXIgPSBuZXcgTWVudWJhcihlbGVtZW50KTtcblx0XHRtZW51YmFyLmluaXQoKTtcblx0fVxufVxuIiwiaW1wb3J0IHdzdV9idF9rZXlib2FyZF9uYXZfYWNjZXNzaWJpbGl0eSBmcm9tICcuLi9rZXlib2FyZC1uYXYtYWNjZXNzaWJpbGl0eS93c3UtYnQta2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHknO1xuaW1wb3J0IG1pdHQgZnJvbSAnbWl0dCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd3N1X2J0X3ZlcnRpY2FsX25hdiB7XG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xuXHRcdHRoaXMucGFyYW1zID0gcGFyYW1zO1xuXHRcdHRoaXMubmF2X2l0ZW1fc2VsZWN0b3IgPSAnJztcblx0XHR0aGlzLm5hdl9wYW5lbF9jb250cm9sX3NlbGVjdG9yID0gJyc7XG5cdFx0dGhpcy5uYXZfcGFuZWxfc2VsZWN0b3IgPSAnJztcblx0XHR0aGlzLm5hdl9saXN0X2NvbnRhaW5lcl9zZWxlY3RvciA9ICcnO1xuXHRcdHRoaXMudHJlZV9tb2RlID0gZmFsc2U7IC8vIEBUT0RPOiBuZWVkcyB0byBkbyBzb21ldGhpbmdcblx0XHRkb2N1bWVudC5lbWl0dGVyID0gbWl0dCgpO1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBBc3NpZ24gdmFsdWVzIHRvIHZhcmlhYmxlc1xuXHRcdCAqXG5cdFx0ICovXG5cblx0XHQvKiBOYXZpZ2F0aW9uIGl0ZW0gc2VsZWN0b3IgKi9cblx0XHR0aGlzLm5hdl9pdGVtX3NlbGVjdG9yID0gcGFyYW1zLm5hdl9pdGVtX3NlbGVjdG9yO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm5hdl9pdGVtX3NlbGVjdG9yID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc29sZS5lcnJvcignVW5kZWZpbmVkIG5hdl9pdGVtX3NlbGVjdG9yLiBQbGVhc2UgcGFzcyB0aGUgc2VsZWN0b3IgeW91IHdvdWxkIGxpa2UgdG8gYmUgZXhwYW5kYWJsZS4nKTtcblx0XHR9XG5cblx0XHQvKiBOYXZpZ2F0aW9uIFBhbmVsIENvbnRyb2wgKi9cblx0XHR0aGlzLm5hdl9wYW5lbF9jb250cm9sX3NlbGVjdG9yID0gcGFyYW1zLm5hdl9wYW5lbF9jb250cm9sX3NlbGVjdG9yO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm5hdl9wYW5lbF9jb250cm9sX3NlbGVjdG9yID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc29sZS5lcnJvcignVW5kZWZpbmVkIG5hdl9wYW5lbF9jb250cm9sX3NlbGVjdG9yLiBQbGVhc2UgcGFzcyB0aGUgc2VsZWN0b3IgeW91IHdvdWxkIGxpa2UgdG8gYmUgZXhwYW5kYWJsZS4nKTtcblx0XHR9XG5cblx0XHR0aGlzLm5hdl9wYW5lbF9jb250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm5hdl9wYW5lbF9jb250cm9sX3NlbGVjdG9yKTtcblxuXHRcdC8qIE5hdmlnYXRpb24gUGFuZWwgKi9cblx0XHR0aGlzLm5hdl9wYW5lbF9zZWxlY3RvciA9IHBhcmFtcy5uYXZfcGFuZWxfc2VsZWN0b3I7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMubmF2X3BhbmVsX3NlbGVjdG9yID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc29sZS5lcnJvcignVW5kZWZpbmVkIG5hdl9wYW5lbF9zZWxlY3Rvci4gUGxlYXNlIHBhc3MgdGhlIHNlbGVjdG9yIHlvdSB3b3VsZCBsaWtlIHRvIGJlIGV4cGFuZGFibGUuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5uYXZfcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMubmF2X3BhbmVsX3NlbGVjdG9yKTtcblxuXHRcdC8qIE5hdmlnYXRpb24gTGlzdCBDb250YWluZXIgU2VsZWN0b3IgKi9cblx0XHR0aGlzLm5hdl9saXN0X2NvbnRhaW5lcl9zZWxlY3RvciA9IHBhcmFtcy5uYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3I7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMubmF2X2xpc3RfY29udGFpbmVyX3NlbGVjdG9yID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc29sZS5lcnJvcignVW5kZWZpbmVkIG5hdl9saXN0X2NvbnRhaW5lcl9zZWxlY3Rvci4gUGxlYXNlIHBhc3MgdGhlIHNlbGVjdG9yIHlvdSB3b3VsZCBsaWtlIHRvIGJlIGV4cGFuZGFibGUuJyk7XG5cdFx0fVxuXHR9XG5cblx0aW5pdCgpIHtcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEVuYWJsZSBrZXlib2FyZCBuYXZpZ2F0aW9uIGFjY2Vzc2liaWxpdHlcblx0XHQgKlxuXHRcdCAqL1xuXHRcdGNvbnN0IG5hdl9pdGVtX3NlbGVjdG9yX2VsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm5hdl9saXN0X2NvbnRhaW5lcl9zZWxlY3Rvcik7XG5cdFx0dmFyIGtleWJvYXJkX25hdiA9IG5ldyB3c3VfYnRfa2V5Ym9hcmRfbmF2X2FjY2Vzc2liaWxpdHkoe1xuXHRcdFx0ZWxlbWVudHM6IG5hdl9pdGVtX3NlbGVjdG9yX2VsZW1lbnRzXG5cdFx0fSk7XG5cdFx0a2V5Ym9hcmRfbmF2LmluaXQoKTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogU2V0IG5hdiBpdGVtcyB0byBleHBhbmRlZCBmYWxzZVxuXHRcdCAqXG5cdFx0ICovXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm5hdl9wYW5lbF9jb250cm9sX3NlbGVjdG9yKS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmF2X2l0ZW1fc2VsZWN0b3IpLmZvckVhY2goZWxlbSA9PiB7IGVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7IH0pO1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBDcmVhdGUgZXZlbnQgbGlzdGVuZXJzXG5cdFx0ICpcblx0XHQgKi9cblxuXHRcdC8qIFRvZ2dsZSBQYW5lbHMgKi9cblx0XHR0aGlzLm5hdl9wYW5lbF9jb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVQYW5lbC5iaW5kKHRoaXMpKTtcblxuXHRcdC8qIFRvZ2dsZSBOYXYgSXRlbXMgKi9cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtaXRlbS0taGFzLWNoaWxkcmVuID4gLndzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LWxpbmsnKS5mb3JFYWNoKGVsZW0gPT4geyBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7IH0pOyAvLyBAVE9ETzogQWJzdHJhY3Qgc2VsZWN0b3IgYXMgcGFyYW1ldGVyXG5cblx0XHQvKiBPbiBwYW5lbCBvcGVuIGV2ZW50cyAqL1xuXHRcdGRvY3VtZW50LmVtaXR0ZXIub24oJ3dzdS12ZXJ0aWNhbC1uYXYtLWFmdGVyLW9wZW4nLCB0aGlzLnBhbmVsT3BlbmVkLmJpbmQodGhpcykpO1xuXHR9XG5cblx0b3BlbkN1cnJlbnRUYXJnZXQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQ7XG5cdFx0ZS5jdXJyZW50VGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cdH1cblxuXHRvcGVuVGFyZ2V0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0O1xuXHRcdGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cdH1cblxuXHRvcGVuUGFuZWwoKSB7XG5cdFx0LyogU2V0IGFyaWEgZXhwYW5kZWQgYXR0cmlidXRlICovXG5cdFx0dGhpcy5uYXZfcGFuZWxfY29udHJvbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXG5cdFx0LyogQWRkIGNsYXNzIHRvIHdyYXBwZXIgKi9cblx0XHR0aGlzLm5hdl9wYW5lbC5jbGFzc0xpc3QuYWRkKCd3c3Utcy1uYXYtdmVydGljYWxfX3dyYXBwZXItLW9wZW4nKTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogRXZlbnQgb24gb3BlblxuXHRcdCAqIHdzdS12ZXJ0aWNhbC1uYXYtLW9wZW5cblx0XHQgKlxuXHRcdCAqL1xuXHRcdGRvY3VtZW50LmVtaXR0ZXIuZW1pdCgnd3N1LXZlcnRpY2FsLW5hdi0tb3BlbicpO1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBFdmVudCBhZnRlciBvcGVuIGNvbXBsZXRlc1xuXHRcdCAqIHdzdS12ZXJ0aWNhbC1uYXYtLWFmdGVyLW9wZW5cblx0XHQgKlxuXHRcdCAqL1xuXHRcdGNvbnN0IG9wZW5BbmltYXRpb25UaW1lID0gNjAwOyAvLyBpbiBtcyB0aGUgdGltZSBpdCB0YWtlcyBmb3IgdGhlIG1lbnUgdG8gZmluaXNoIG9wZW5pbmdcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQuZW1pdHRlci5lbWl0KCd3c3UtdmVydGljYWwtbmF2LS1hZnRlci1vcGVuJyk7XG5cdFx0fSwgb3BlbkFuaW1hdGlvblRpbWUpO1xuXHR9XG5cblx0Y2xvc2UoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQ7XG5cdFx0ZS50YXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cdH1cblxuXHRjbG9zZVBhbmVsKCkge1xuXHRcdC8qIFNldCBhcmlhIGV4cGFuZGVkIGF0dHJpYnV0ZSAqL1xuXHRcdHRoaXMubmF2X3BhbmVsX2NvbnRyb2wuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cblx0XHQvKiBSZW1vdmUgb3BlbiBjbGFzcyAqL1xuXHRcdHRoaXMubmF2X3BhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1zLW5hdi12ZXJ0aWNhbF9fd3JhcHBlci0tb3BlbicpO1xuXG5cdFx0LyogRW1pdCBjbG9zZSBldmVudCAqL1xuXHRcdGRvY3VtZW50LmVtaXR0ZXIuZW1pdCgnd3N1LXZlcnRpY2FsLW5hdi0tY2xvc2UnKTtcblx0fVxuXG5cdHRvZ2dsZShlKSB7XG5cdFx0aWYgKGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAnZmFsc2UnKSB7XG5cdFx0XHR0aGlzLm9wZW5DdXJyZW50VGFyZ2V0KGUpO1xuXHRcdH0gZWxzZSBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ2ZhbHNlJykge1xuXHRcdFx0dGhpcy5vcGVuVGFyZ2V0KGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNsb3NlKGUpO1xuXHRcdH1cblx0fVxuXG5cdHRvZ2dsZVBhbmVsKCkge1xuXHRcdGlmICh0aGlzLm5hdl9wYW5lbF9jb250cm9sLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09ICd0cnVlJykge1xuXHRcdFx0dGhpcy5jbG9zZVBhbmVsKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3BlblBhbmVsKCk7XG5cdFx0fVxuXHR9XG5cblx0cGFuZWxPcGVuZWQoKSB7XG5cdFx0Y29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtY29udGFpbmVyLWNsb3NlLWxpbmsnKTtcblxuXHRcdGNsb3NlQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdGNsb3NlQnV0dG9uLnN0eWxlLm1hcmdpblRvcCA9IDA7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEFuaW1hdGUgbWVudSBpdGVtcyBpbiBvbiB2ZXJ0IG5hdiBvcGVuIHVzaW5nIGVtaXR0ZXJzXG5cdFx0ICpcblx0XHQgKi9cblx0XHRjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53c3Utcy1uYXYtdmVydGljYWxfX25hdi1saXN0LWNvbnRhaW5lciA+IGxpJyk7XG5cdFx0Y29uc3QgbmF2SXRlbXNDb3VudCA9IG5hdkl0ZW1zLmxlbmd0aDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbmF2SXRlbXNDb3VudDsgaSsrKSB7XG5cdFx0XHQoZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0Y29uc3QgZHVyYXRpb24gPSAyNTA7XG5cdFx0XHRcdGxldCBpbmNyZW1lbnQgPSBkdXJhdGlvbiArIChkdXJhdGlvbiAqIGkpO1xuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG5hdkl0ZW1zW2ldLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHRcdFx0XHRcdG5hdkl0ZW1zW2ldLnN0eWxlLm1hcmdpbkxlZnQgPSAnMCc7XG5cdFx0XHRcdH0sIGluY3JlbWVudCk7XG5cdFx0XHR9KShpKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBDcmVhdGUgZXZlbnQgbGlzdGVuZXIgZm9yIGFsbG93aW5nIHBhbmVsIHRvIGJlIGNsb3NlZCBvbiBjbGlja1xuXHRcdCAqXG5cdFx0ICovXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwid3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyIHdzdS1zLW5hdi12ZXJ0aWNhbF9fd3JhcHBlci0tb3BlblwiKSB7XG5cdFx0XHRcdF90aGlzLmNsb3NlUGFuZWwoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuIiwiaW1wb3J0IHdzdV9idF9hcmlhX2V4cGFuZGVkIGZyb20gJy4vYXJpYS1leHBhbmRlZC93c3UtYnQtYXJpYS1leHBhbmRlZCc7XG5pbXBvcnQgeyBNZW51YmFyIH0gZnJvbSAnLi9rZXlib2FyZC1uYXYtYWNjZXNzaWJpbGl0eS9NZW51YmFyTGlua3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB3c3VfYnRfcHJpb3JpdHlfbmF2IHtcblx0Y29uc3RydWN0b3IocGFyYW1zKSB7XG5cdFx0dGhpcy5icmVha3BvaW50cyA9IFtdO1xuXHRcdHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcblx0XHR0aGlzLm1haW5fbmF2X3dpZHRoID0gbnVsbDtcblx0XHR0aGlzLnBhcmFtcyA9IHBhcmFtcztcblx0XHR0aGlzLnNjcmVlbldpZHRoID0gbnVsbDtcblx0XHR0aGlzLndpbmRvdyA9IHdpbmRvdztcblx0fVxuXG5cdC8vIE1ldGhvZHNcblx0aW5pdCgpIHtcblx0XHR0aGlzLnVwZGF0ZV9uYXYoKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVfbmF2LmJpbmQodGhpcykpOyAvLyBUT0RPOiBsb29rIGludG8gaWYgd2UgbmVlZCB0byB1c2Ugc29tZXRoaW5nIGxpa2UgZGVib3VuY2Ugb3IgYXQgdGhlIHZlcnkgbGVhc3Qgc2V0IGEgdGltZW91dFxuXHR9XG5cblx0dXBkYXRlX25hdigpIHtcblx0XHQvLyBDaGVjayBpZiBhbGwgZm9udHMgYXJlIGxvYWRlZFxuXHRcdC8vIFRPRE86IEZpeCBmb3IgaWUgMTEgJiBlZGdlIChuZWVkcyB0ZXN0aW5nKVxuXHRcdHRoaXMuZG9jdW1lbnQuZm9udHMucmVhZHkudGhlbigoKSA9PiB7XG5cblx0XHRcdC8vIElmIGRvZXNuJ3QgZXhpc3QgJiBOYXYgaXMgZ3JlYXRlciB0aGFuIHNjcmVlbiB3aWR0aCwgY3JlYXRlIG5hdlxuXHRcdFx0aWYgKHRoaXMuZ2V0X3ByaW9yaXR5X25hdiA9PSBudWxsICYmIHRoaXMuZ2V0X3NjcmVlbl93aWR0aCA8PSB0aGlzLmdldF9tYWluX25hdl93aWR0aCkge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZV9wcmlvcml0eV9uYXYoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgbmF2IGV4aXN0cywganVzdCByZXNpemUgaXRcblx0XHRcdGlmICh0aGlzLmdldF9wcmlvcml0eV9uYXYgIT0gbnVsbCkge1xuXHRcdFx0XHR0aGlzLnJlc2l6ZV9uYXYoKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5pbml0aWF0ZUtleWJvYXJkTmF2aWdhdGlvblN1cHBvcnQoKTtcblx0XHRcdHRoaXMuaW5pdGlhdGVBcmlhRXhwYW5kZWQoKTtcblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZV9wcmlvcml0eV9uYXYoKSB7XG5cdFx0Ly8gQ3JlYXRlIGVsZW1lbnRzXG5cdFx0Y29uc3QgcHJpb3JpdHlfbmF2X2xpc3RfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0Y29uc3QgcHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdGNvbnN0IHByaW9yaXR5X25hdl91bm9yZGVyZWRfbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cblx0XHQvLyBDcmVhdGUgbGlzdCBpdGVtIHdyYXBwZXIgPGxpPlxuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMucGFyYW1zWydwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2NsYXNzX25hbWUnXSk7XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbm9uZScpO1xuXG5cdFx0Ly8gQ3JlYXRlIGxpc3QgaXRlbSBsaW5rIDxhPlxuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5pbm5lckhUTUwgPSB0aGlzLnBhcmFtc1snbW9yZV9pbm5lcl9odG1sJ107XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICcjJyk7XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLnBhcmFtc1sncHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rX2NsYXNzX25hbWUnXSk7XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rLnNldEF0dHJpYnV0ZSgnaWQnLCAnbW9yZScpO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbWVudWl0ZW0nKTtcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpbmsuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCAndHJ1ZScpO1xuXG5cdFx0Ly8gQ3JlYXRlIHVub3JkZXJlZCBsaXN0IGl0ZW0gY29udGFpbmVyIDx1bD5cblx0XHRwcmlvcml0eV9uYXZfdW5vcmRlcmVkX2xpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMucGFyYW1zWydwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpc3RfY2xhc3NfbmFtZSddKTtcblx0XHRwcmlvcml0eV9uYXZfdW5vcmRlcmVkX2xpc3Quc2V0QXR0cmlidXRlKCdyb2xlJywgJ21lbnUnKTtcblx0XHRwcmlvcml0eV9uYXZfdW5vcmRlcmVkX2xpc3Quc2V0QXR0cmlidXRlKCdhcmlhLWFiZWwnLCAnUmVwbGFjZSBNZSB3LyBMaW5rIE5hbWUgU3VibWVudScpO1xuXG5cdFx0Ly8gQXBwZW5kIHRvIGRvbVxuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rKTtcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5X25hdl91bm9yZGVyZWRfbGlzdCk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnBhcmFtc1snbWFpbl9uYXZfc2VsZWN0b3InXSkuYXBwZW5kQ2hpbGQocHJpb3JpdHlfbmF2X2xpc3RfaXRlbSk7XG5cdH1cblxuXHRyZXNpemVfbmF2KCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlV2lkdGhzKCk7XG5cblx0XHQvLyBNb3ZlIGl0ZW1zIHRvIHByaW9yaXR5IG5hdlxuXHRcdHdoaWxlICh0aGlzLnNjcmVlbldpZHRoIDw9IHRoaXMubWFpbl9uYXZfd2lkdGggJiYgdGhpcy5nZXRfbWFpbl9uYXYuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgaXRlbVRvTW92ZSA9IHRoaXMuZ2V0X21haW5fbmF2LmNoaWxkcmVuW3RoaXMuZ2V0X21haW5fbmF2LmNoaWxkcmVuLmxlbmd0aCAtIDJdO1xuXHRcdFx0dGhpcy5tb3ZlVG9Qcmlvcml0eU5hdihpdGVtVG9Nb3ZlKTtcblx0XHRcdHRoaXMuY2FsY3VsYXRlV2lkdGhzKCk7XG5cdFx0fVxuXG5cdFx0Ly8gTW92ZSBpdGVtcyB0byBtYWluIG5hdlxuXHRcdHdoaWxlICh0aGlzLnNjcmVlbldpZHRoID49IHRoaXMuYnJlYWtwb2ludHNbdGhpcy5icmVha3BvaW50cy5sZW5ndGggLSAxXSAmJiB0aGlzLmdldF9wcmlvcml0eV9uYXZfc3VibWVudS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm1vdmVUb01haW5OYXYodGhpcy5nZXRfcHJpb3JpdHlfbmF2X3N1Ym1lbnUuY2hpbGRyZW5bMF0pO1xuXHRcdH1cblxuXHRcdC8vIFR1cm4gb2ZmIHByaW9yaXR5IG5hdiBpZiB1bm5lY2Vzc2FyeVxuXHRcdGlmICh0aGlzLmJyZWFrcG9pbnRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lQcmlvcml0eU5hdigpO1xuXHRcdH1cblx0fVxuXG5cdGNhbGN1bGF0ZVdpZHRocygpIHtcblx0XHR0aGlzLm1haW5fbmF2X3dpZHRoID0gdGhpcy5nZXRfbWFpbl9uYXZfd2lkdGg7XG5cdFx0dGhpcy5zY3JlZW5XaWR0aCA9IHRoaXMuZ2V0X3NjcmVlbl93aWR0aDtcblx0fVxuXG5cdG1vdmVUb1ByaW9yaXR5TmF2KGl0ZW1Ub01vdmUpIHtcblx0XHR0aGlzLmdldF9wcmlvcml0eV9uYXZfc3VibWVudS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBpdGVtVG9Nb3ZlKTtcblx0XHR0aGlzLmJyZWFrcG9pbnRzLnB1c2godGhpcy5tYWluX25hdl93aWR0aCk7XG5cdH1cblxuXHRtb3ZlVG9NYWluTmF2KGl0ZW1Ub01vdmUpIHtcblx0XHR0aGlzLmdldF9tYWluX25hdi5pbnNlcnRCZWZvcmUoaXRlbVRvTW92ZSwgdGhpcy5nZXRfbWFpbl9uYXYubGFzdEVsZW1lbnRDaGlsZCk7XG5cdFx0dGhpcy5icmVha3BvaW50cy5wb3AoKTtcblx0fVxuXG5cdGRlc3Ryb3lQcmlvcml0eU5hdigpIHtcblx0XHR0aGlzLmdldF9wcmlvcml0eV9uYXYucmVtb3ZlKCk7XG5cdH1cblxuXHQvLyBJbml0aWF0ZSBjb2xsYXBzYWJsZSBhcmlhLWV4cGFuZGVkIGl0ZW1zXG5cdGluaXRpYXRlQXJpYUV4cGFuZGVkKCkge1xuXHRcdHZhciBleHBhbmRlZF9hcmlhX2l0ZW1zID0gbmV3IHdzdV9idF9hcmlhX2V4cGFuZGVkKHtcblx0XHRcdG5hdl9pdGVtX3NlbGVjdG9yczogJy4nICsgdGhpcy5wYXJhbXNbJ3ByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGlua19jbGFzc19uYW1lJ11cblx0XHR9KTtcblx0XHRleHBhbmRlZF9hcmlhX2l0ZW1zLmluaXQoKTtcblx0fVxuXG5cdC8vIEluaXRpYXRlIGtleWJvYXJkIGNvbnRyb2xzIGZvciBhY2Nlc3NpYmlsaXR5IHN1cHBvcnRcblx0aW5pdGlhdGVLZXlib2FyZE5hdmlnYXRpb25TdXBwb3J0KCkge1xuXHRcdHZhciBtZW51YmFyID0gbmV3IE1lbnViYXIoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnBhcmFtc1snbWFpbl9uYXZfc2VsZWN0b3InXSkpO1xuXHRcdG1lbnViYXIuaW5pdCgpO1xuXHR9XG5cblx0Ly8gR2V0dGVyc1xuXHRnZXQgZ2V0X3NjcmVlbl93aWR0aCgpIHtcblx0XHRjb25zdCB3aW5kb3dJbm5lcldpZHRoID0gdGhpcy53aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRyZXR1cm4gd2luZG93SW5uZXJXaWR0aDtcblx0fVxuXG5cdGdldCBnZXRfbWFpbl9uYXZfd2lkdGgoKSB7XG5cdFx0Y29uc3QgbWFpbk5hdklubmVyV2lkdGggPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wYXJhbXNbJ21haW5fbmF2X3NlbGVjdG9yJ10pLm9mZnNldFdpZHRoO1xuXHRcdHJldHVybiBtYWluTmF2SW5uZXJXaWR0aDtcblx0fVxuXG5cdGdldCBnZXRfbWFpbl9uYXYoKSB7XG5cdFx0Y29uc3QgbWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wYXJhbXNbJ21haW5fbmF2X3NlbGVjdG9yJ10pO1xuXHRcdHJldHVybiBtYWluTmF2O1xuXHR9XG5cblx0Z2V0IGdldF9wcmlvcml0eV9uYXYoKSB7XG5cdFx0Y29uc3QgcHJpb3JpdHlfbmF2ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMucGFyYW1zWydwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2NsYXNzX25hbWUnXSk7XG5cdFx0cmV0dXJuIHByaW9yaXR5X25hdjtcblx0fVxuXG5cdGdldCBnZXRfcHJpb3JpdHlfbmF2X3N1Ym1lbnUoKSB7XG5cdFx0Y29uc3QgcHJpb3JpdHlfbmF2ID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMucGFyYW1zWydwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpc3RfY2xhc3NfbmFtZSddKTtcblx0XHRyZXR1cm4gcHJpb3JpdHlfbmF2O1xuXHR9XG5cblx0Z2V0IGdldEJyZWFrcG9pbnRzKCkge1xuXHRcdGNvbnN0IGJyZWFrcG9pbnRzID0gdGhpcy5icmVha3BvaW50cztcblx0XHRyZXR1cm4gYnJlYWtwb2ludHM7XG5cdH1cbn1cbiIsIi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuLy8gQW4gYXJyYXkgb2YgYWxsIGN1cnJlbnRseSByZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzIGZvciBhIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIFxuXG4vKiogTWl0dDogVGlueSAofjIwMGIpIGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciAvIHB1YnN1Yi5cbiAqICBAbmFtZSBtaXR0XG4gKiAgQHJldHVybnMge01pdHR9XG4gKi9cbmZ1bmN0aW9uIG1pdHQoYWxsICAgICAgICAgICAgICAgICApIHtcblx0YWxsID0gYWxsIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byBsaXN0ZW4gZm9yLCBvciBgXCIqXCJgIGZvciBhbGwgZXZlbnRzXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgRnVuY3Rpb24gdG8gY2FsbCBpbiByZXNwb25zZSB0byBnaXZlbiBldmVudFxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b246IGZ1bmN0aW9uIG9uKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byB1bnJlZ2lzdGVyIGBoYW5kbGVyYCBmcm9tLCBvciBgXCIqXCJgXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgSGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9mZjogZnVuY3Rpb24gb2ZmKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHRpZiAoYWxsW3R5cGVdKSB7XG5cdFx0XHRcdGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnZva2UgYWxsIGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKiBJZiBwcmVzZW50LCBgXCIqXCJgIGhhbmRsZXJzIGFyZSBpbnZva2VkIGFmdGVyIHR5cGUtbWF0Y2hlZCBoYW5kbGVycy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlICBUaGUgZXZlbnQgdHlwZSB0byBpbnZva2Vcblx0XHQgKiBAcGFyYW0ge0FueX0gW2V2dF0gIEFueSB2YWx1ZSAob2JqZWN0IGlzIHJlY29tbWVuZGVkIGFuZCBwb3dlcmZ1bCksIHBhc3NlZCB0byBlYWNoIGhhbmRsZXJcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdGVtaXQ6IGZ1bmN0aW9uIGVtaXQodHlwZSAgICAgICAgLCBldnQgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcihldnQpOyB9KTtcblx0XHRcdChhbGxbJyonXSB8fCBbXSkuc2xpY2UoKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pdHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmVzLmpzLm1hcFxuIiwiLyoqXG4gKlxuICogRGVzaWduIHN5c3RlbSBidWlsZCBhbGwgY29tcG9uZW50c1xuICpcbiAqL1xuXG4vKiBHbG9iYWwgY29tcG9uZW50cyAqL1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9nbG9iYWwtZm9vdGVyL2J1aWxkJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zcmMvZ2xvYmFsLWhlYWRlci9idWlsZCc7XG5cbi8qIFNpdGUgY29tcG9uZW50cyAqL1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9zaXRlLWZvb3Rlci9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL3NpdGUtZm9vdGVyLWNvbmRlbnNlZC9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL3NpdGUtbmF2LWhvcml6b250YWwvYnVpbGQnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi12ZXJ0aWNhbC9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL3NpdGUtaGVhZGVyL2J1aWxkJztcblxuLyogQ29udGVudCBjb21wb25lbnRzICovXG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtaGVhZGluZy9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtbGlzdC9idWlsZCc7XG4iLCIvLyBKU1xuaW1wb3J0ICcuL2NvbnRlbnQtaGVhZGluZy5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9jb250ZW50LWhlYWRpbmcuc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL2NvbnRlbnQtbGlzdC5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9jb250ZW50LWxpc3Quc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL2dsb2JhbC1mb290ZXIuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vZ2xvYmFsLWZvb3Rlci5zY3NzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIEpTXG5pbXBvcnQgJy4vZ2xvYmFsLWhlYWRlci5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9nbG9iYWwtaGVhZGVyLnNjc3MnO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBNb3JlIGxpbmtzXG5cdCAqXG5cdCAqL1xuXHRjb25zdCBnbG9iYWxfaGVhZGVyX2xpbmtzX3RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3UtZy1oZWFkZXJfX21vcmUtaWNvbi1saW5rJyk7XG5cblx0Z2xvYmFsX2hlYWRlcl9saW5rc190b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ0xpbmtzIHRvZ2dsZSAtLSBDb21pbmcgc29vbiEnKTtcblx0fSk7XG5cblx0LyoqXG5cdCAqXG5cdCAqIFNlYXJjaCB0b2dnbGVcblx0ICpcblx0ICovXG5cdGNvbnN0IGdsb2JhbF9oZWFkZXJfc2VhcmNoX3RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3UtZy1oZWFkZXJfX3NlYXJjaC1pY29uLWxpbmsnKTtcblxuXHRnbG9iYWxfaGVhZGVyX3NlYXJjaF90b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ1NlYXJjaCB0b2dnbGUgLS0gQ29taW5nIHNvb24hJyk7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBWZXJ0aWNhbCBuYXYgdG9nZ2xlXG5cdCAqXG5cdCAqL1xuXHRjb25zdCBnbG9iYWxfaGVhZGVyX21lbnVfdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1nLWhlYWRlcl9fbWVudS1pY29uLWxpbmsnKTtcblxuXHRnbG9iYWxfaGVhZGVyX21lbnVfdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdHdpbmRvdy52ZXJ0aWNhbF9uYXYudG9nZ2xlUGFuZWwoKTtcblx0fSk7XG5cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gSlNcbmltcG9ydCAnLi9zaXRlLWZvb3Rlci1jb25kZW5zZWQuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vc2l0ZS1mb290ZXItY29uZGVuc2VkLnNjc3MnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gSlNcbmltcG9ydCAnLi9zaXRlLWZvb3Rlci5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9zaXRlLWZvb3Rlci5zY3NzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIEpTXG5pbXBvcnQgJy4vc2l0ZS1oZWFkZXIuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vc2l0ZS1oZWFkZXIuc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL3NpdGUtbmF2LWhvcml6b250YWwuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vc2l0ZS1uYXYtaG9yaXpvbnRhbC5zY3NzJztcbiIsIi8vIFRPRE86IGltcG9ydCBmcm9tIE5QTSBvbmNlIGZpbmFsIHZlcnNpb24gaXMgcmVhZHlcbmltcG9ydCBwcmlvcml0eV9uYXYgZnJvbSAnLi4vLi4vLi4vLi4vd3N1LWJ1aWxkLXRvb2xzL2pzL3dzdS1idC1wcmlvcml0eS1uYXYnO1xuXG5jb25zdCBuYXZfaG9yel93cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1zLW5hdi1ob3Jpem9udGFsX193cmFwcGVyJyk7XG5cbmlmICh0eXBlb2YgbmF2X2hvcnpfd3JhcHBlciAhPSBcInVuZGVmaW5lZFwiICYmIG5hdl9ob3J6X3dyYXBwZXIgIT0gbnVsbCkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBJbml0IEpTXG5cdCAqXG5cdCAqL1xuXHRuYXZfaG9yel93cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS11LW5vLWpzJyk7XG5cblx0LyoqXG5cdCAqXG5cdCAqIEluaXQgcHJpb3JpdHkgbmF2XG5cdCAqXG5cdCAqL1xuXHR2YXIgaG9yaXpvbnRhbF9uYXYgPSBuZXcgcHJpb3JpdHlfbmF2KHtcblx0XHRtYWluX25hdl9zZWxlY3RvcjogJy53c3Utcy1uYXYtaG9yaXpvbnRhbF9fbmF2LWxpc3QnLFxuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fY2xhc3NfbmFtZTogJ3dzdS1zLW5hdi1ob3Jpem9udGFsX19uYXYtaXRlbS0tbW9yZScsXG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rX2NsYXNzX25hbWU6ICd3c3Utcy1uYXYtaG9yaXpvbnRhbF9fbmF2LWxpbmsnLFxuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGlzdF9jbGFzc19uYW1lOiAnd3N1LXMtbmF2LWhvcml6b250YWxfX25hdi1saXN0LS1oYXMtbW9yZS1pdGVtcycsXG5cdFx0bW9yZV9pbm5lcl9odG1sOiAnTW9yZSdcblx0fSk7XG5cblx0aG9yaXpvbnRhbF9uYXYuaW5pdCgpO1xuXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL3NpdGUtbmF2LXZlcnRpY2FsLmpzJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL3NpdGUtbmF2LXZlcnRpY2FsLnNjc3MnO1xuIiwiaW1wb3J0IHdzdV9idF92ZXJ0aWNhbF9uYXYgZnJvbSAnLi4vLi4vLi4vLi4vd3N1LWJ1aWxkLXRvb2xzL2pzL3ZlcnRpY2FsLW5hdi93c3UtYnQtdmVydGljYWwtbmF2JztcblxuY29uc3QgbmF2X3ZlcnRfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3Utcy1uYXYtdmVydGljYWxfX3dyYXBwZXInKTtcblxuaWYgKHR5cGVvZiBuYXZfdmVydF93cmFwcGVyICE9IFwidW5kZWZpbmVkXCIgJiYgbmF2X3ZlcnRfd3JhcHBlciAhPSBudWxsKSB7XG5cblx0LyoqXG5cdCAqXG5cdCAqIEluaXQgSlNcblx0ICpcblx0ICovXG5cdG5hdl92ZXJ0X3dyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LXUtbm8tanMnKTtcblxuXHQvKipcblx0ICpcblx0ICogSW5pdCB2ZXJ0aWNhbCBuYXZcblx0ICpcblx0ICovXG5cdHdpbmRvdy52ZXJ0aWNhbF9uYXYgPSBuZXcgd3N1X2J0X3ZlcnRpY2FsX25hdih7XG5cdFx0bmF2X2l0ZW1fc2VsZWN0b3I6ICcud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtbGluaycsXG5cdFx0bmF2X3BhbmVsX2NvbnRyb2xfc2VsZWN0b3I6ICcud3N1LXMtbmF2LXZlcnRpY2FsX19tZW51LWljb24tbGluaycsXG5cdFx0bmF2X3BhbmVsX3NlbGVjdG9yOiAnLndzdS1zLW5hdi12ZXJ0aWNhbF9fd3JhcHBlcicsXG5cdFx0bmF2X2xpc3RfY29udGFpbmVyX3NlbGVjdG9yOiAnLndzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LWxpc3QtY29udGFpbmVyJyxcblx0fSk7XG5cblx0d2luZG93LnZlcnRpY2FsX25hdi5pbml0KCk7XG5cblx0LyoqXG5cdCAqXG5cdCAqIENsb3NlIEJ1dHRvblxuXHQgKlxuXHQgKi9cblx0Y29uc3QgY2xvc2VfbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3Utcy1uYXYtdmVydGljYWxfX25hdi1jb250YWluZXItY2xvc2UtbGluaycpO1xuXG5cdGNsb3NlX2xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0d2luZG93LnZlcnRpY2FsX25hdi5jbG9zZVBhbmVsKCk7XG5cdH0pO1xuXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9
=======
!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=16)}([function(e,t){},function(e,t,s){},function(e,t){document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".wsu-g-header__more-icon-link");void 0!==e&&null!=e&&e.addEventListener("click",(function(){console.log("Links toggle -- Coming soon!")}));var t=document.querySelector(".wsu-g-header__search-icon-link");void 0!==t&&null!=t&&t.addEventListener("click",(function(){console.log("Search toggle -- Coming soon!")}));var s=document.querySelector(".wsu-g-header__menu-icon-link");void 0!==s&&null!=s&&s.addEventListener("click",(function(){window.vertical_nav.togglePanel()})),document.addEventListener("scroll",(function(){setTimeout((function(){document.body.scrollTop>30?document.body.classList.add("wsu-g-header--is-hidden"):document.body.classList.remove("wsu-g-header--is-hidden")}),100)}))}))},function(e,t,s){},function(e,t){},function(e,t,s){},function(e,t){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t){},function(e,t,s){},function(e,t){},function(e,t,s){},function(e,t){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i,n,o,r;s(0),s(1),s(2),s(3),s(4),s(5),s(6),s(7);class a{constructor(e){this.params=e,this.nav_items=null,this.nav_items_selectors=e.nav_item_selectors,void 0===this.nav_items_selectors&&console.error("Undefined nav_item_selectors. Please pass the selector you would like to be expandable."),Array.isArray(this.nav_items_selectors)?this.nav_items_selectors.forEach((function(e,t,s){s[t]=e+'[aria-expanded="true"]'}),this.nav_items_selectors):this.nav_items_selectors=this.nav_items_selectors+'[aria-expanded="true"]'}init(){this.update_items(),window.addEventListener("resize",this.update_items.bind(this))}update_items(){Array.isArray(this.nav_items_selectors)?this.nav_items_selectors.forEach(e=>{this.nav_items=document.querySelectorAll(e),this.nav_items.forEach(e=>{e.setAttribute("aria-expanded","false")}),this.nav_items.forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault,"false"==this.getAttribute("aria-expanded")?this.setAttribute("aria-expanded","true"):this.setAttribute("aria-expanded","false")}))})}):(this.nav_items=document.querySelectorAll(this.nav_items_selectors),this.nav_items.forEach(e=>{e.setAttribute("aria-expanded","false")}),this.nav_items.forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault,"false"==this.getAttribute("aria-expanded")?this.setAttribute("aria-expanded","true"):this.setAttribute("aria-expanded","false")}))}))}}(i=function(e,t){this.domNode=e,this.menu=t,this.popupMenu=!1,this.isMenubarItem=!1,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new n(e,this),this.popupMenu.init())},i.prototype.isExpanded=function(){return"true"===this.domNode.getAttribute("aria-expanded")},i.prototype.handleKeydown=function(e){var t,s,i=e.currentTarget,n=e.key,o=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:if(this.popupMenu)this.popupMenu.open(),this.popupMenu.setFocusToFirstItem();else{try{t=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0})}catch(e){document.createEvent&&(t=document.createEvent("MouseEvents")).initEvent("click",!0,!0)}i.dispatchEvent(t)}o=!0;break;case this.keyCode.UP:this.menu.setFocusToPreviousItem(this),o=!0;break;case this.keyCode.DOWN:this.menu.setFocusToNextItem(this),o=!0;break;case this.keyCode.LEFT:this.menu.setFocusToController("previous",!0),this.menu.close(!0),o=!0;break;case this.keyCode.RIGHT:this.popupMenu?(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem()):(this.menu.setFocusToController("next",!0),this.menu.close(!0)),o=!0;break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),o=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),o=!0;break;case this.keyCode.ESC:this.menu.setFocusToController(),this.menu.close(!0),o=!0;break;case this.keyCode.TAB:this.menu.setFocusToController();break;default:1===(s=n).length&&s.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,n),o=!0)}o&&(e.stopPropagation(),e.preventDefault())},i.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},i.prototype.handleFocus=function(e){this.menu.hasFocus=!0},i.prototype.handleBlur=function(e){this.menu.hasFocus=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},i.prototype.handleMouseover=function(e){this.menu.hasHover=!0,this.menu.open(),this.popupMenu&&(this.popupMenu.hasHover=!0,this.popupMenu.open())},i.prototype.handleMouseout=function(e){this.popupMenu&&(this.popupMenu.hasHover=!1,this.popupMenu.close(!0)),this.menu.hasHover=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},(n=function(e,t){var s="PopupMenu constructor argument domNode ";if(!e instanceof Element)throw new TypeError(s+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(s+"has no element children.");for(var i=e.firstElementChild;i;){var n=i.firstElementChild;if(n&&"A"===n)throw new Error(s+"has descendant elements that are not A elements.");i=i.nextElementSibling}this.isMenubar=!1,this.domNode=e,this.controller=t,this.menuitems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){var e,t,s,n,o;for(e=this.domNode.firstElementChild;e;)(t=e.firstElementChild)&&"A"===t.tagName&&((s=new i(t,this)).init(),this.menuitems.push(s),n=t.textContent.trim(),this.firstChars.push(n.substring(0,1).toLowerCase())),e=e.nextElementSibling;(o=this.menuitems.length)>0&&(this.firstItem=this.menuitems[0],this.lastItem=this.menuitems[o-1])},n.prototype.handleMouseover=function(e){this.hasHover=!0},n.prototype.handleMouseout=function(e){this.hasHover=!1,setTimeout(this.close.bind(this,!1),1)},n.prototype.setFocusToController=function(e,t){if("string"!=typeof e&&(e=""),""!==e){if(this.controller.isMenubarItem)"previous"===e?this.controller.menu.setFocusToPreviousItem(this.controller,t):"next"===e&&this.controller.menu.setFocusToNextItem(this.controller,t);else if(this.controller.domNode.focus(),this.close(),"next"===e){var s=function(e,t){for(;e;){if(e.isMenubarItem)return e.domNode.focus(),e;t&&e.menu.close(!0),e.hasFocus=!1,e=e.menu.controller}return!1}(this.controller,!1);s&&s.menu.setFocusToNextItem(s,t)}}else this.controller&&this.controller.domNode&&this.controller.domNode.focus()},n.prototype.setFocusToFirstItem=function(){this.firstItem.domNode.focus()},n.prototype.setFocusToLastItem=function(){this.lastItem.domNode.focus()},n.prototype.setFocusToPreviousItem=function(e){var t;e===this.firstItem?this.lastItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t-1].domNode.focus())},n.prototype.setFocusToNextItem=function(e){var t;e===this.lastItem?this.firstItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t+1].domNode.focus())},n.prototype.setFocusByFirstCharacter=function(e,t){var s,i;t=t.toLowerCase();(s=this.menuitems.indexOf(e)+1)===this.menuitems.length&&(s=0),-1===(i=this.getIndexFirstChars(s,t))&&(i=this.getIndexFirstChars(0,t)),i>-1&&this.menuitems[i].domNode.focus()},n.prototype.getIndexFirstChars=function(e,t){for(var s=e;s<this.firstChars.length;s++)if(t===this.firstChars[s])return s;return-1},n.prototype.open=function(){this.controller.setExpanded(!0)},n.prototype.close=function(e){for(var t=this.controller.hasHover,s=this.hasFocus,i=0;i<this.menuitems.length;i++){var n=this.menuitems[i];n.popupMenu&&(s|=n.popupMenu.hasFocus)}this.controller.isMenubarItem||(t=!1),!e&&(s||this.hasHover||t)||this.controller.setExpanded(!1)},(o=function(e,t){this.menu=t,this.domNode=e,this.popupMenu=!1,this.hasFocus=!1,this.hasHover=!1,this.isMenubarItem=!0,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new n(e,this),this.popupMenu.init())},o.prototype.handleKeydown=function(e){e.currentTarget;var t,s=e.key,i=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:case this.keyCode.DOWN:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem(),i=!0);break;case this.keyCode.LEFT:this.menu.setFocusToPreviousItem(this),i=!0;break;case this.keyCode.RIGHT:this.menu.setFocusToNextItem(this),i=!0;break;case this.keyCode.UP:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToLastItem(),i=!0);break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),i=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),i=!0;break;case this.keyCode.TAB:case this.keyCode.ESC:0!=this.popupMenu&&this.popupMenu.close(!0);break;default:1===(t=s).length&&t.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,s),i=!0)}i&&(e.stopPropagation(),e.preventDefault())},o.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},o.prototype.handleFocus=function(e){this.menu.hasFocus=!0},o.prototype.handleBlur=function(e){this.menu.hasFocus=!1},(r=function(e){var t="Menubar constructor argument menubarNode ";if(!e instanceof Element)throw new TypeError(t+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(t+"has no element children.");for(var s=e.firstElementChild;s;){var i=s.firstElementChild;if(s&&i&&"A"!==i.tagName)throw new Error(t+"has child elements are not A elements.");s=s.nextElementSibling}this.isMenubar=!0,this.domNode=e,this.menubarItems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){for(var e,t,s,i=this.domNode.firstElementChild;i;){var n=i.firstElementChild;i&&n&&"A"===n.tagName&&((e=new o(n,this)).init(),this.menubarItems.push(e),t=n.textContent.trim(),this.firstChars.push(t.substring(0,1).toLowerCase())),i=i.nextElementSibling}(s=this.menubarItems.length)>0&&(this.firstItem=this.menubarItems[0],this.lastItem=this.menubarItems[s-1]),this.firstItem.domNode.tabIndex=0},r.prototype.setFocusToItem=function(e){for(var t=!1,s=0;s<this.menubarItems.length;s++){var i=this.menubarItems[s];0==i.domNode.tabIndex&&(t="true"===i.domNode.getAttribute("aria-expanded")),i.domNode.tabIndex=-1,i.popupMenu&&i.popupMenu.close()}e.domNode.focus(),e.domNode.tabIndex=0,t&&e.popupMenu&&e.popupMenu.open()},r.prototype.setFocusToFirstItem=function(e){this.setFocusToItem(this.firstItem)},r.prototype.setFocusToLastItem=function(e){this.setFocusToItem(this.lastItem)},r.prototype.setFocusToPreviousItem=function(e){var t,s;e===this.firstItem?s=this.lastItem:(t=this.menubarItems.indexOf(e),s=this.menubarItems[t-1]),this.setFocusToItem(s)},r.prototype.setFocusToNextItem=function(e){var t,s;e===this.lastItem?s=this.firstItem:(t=this.menubarItems.indexOf(e),s=this.menubarItems[t+1]),this.setFocusToItem(s)},r.prototype.setFocusByFirstCharacter=function(e,t){var s,i;t=t.toLowerCase(),e.domNode.getAttribute("aria-expanded");(s=this.menubarItems.indexOf(e)+1)===this.menubarItems.length&&(s=0),-1===(i=this.getIndexFirstChars(s,t))&&(i=this.getIndexFirstChars(0,t)),i>-1&&this.setFocusToItem(this.menubarItems[i])},r.prototype.getIndexFirstChars=function(e,t){for(var s=e;s<this.firstChars.length;s++)if(t===this.firstChars[s])return s;return-1};class u{constructor(e){this.breakpoints=[],this.document=document,this.main_nav_width=null,this.params=e,this.screenWidth=null,this.window=window}init(){this.update_nav(),window.addEventListener("resize",this.update_nav.bind(this))}update_nav(){this.document.fonts.ready.then(()=>{null==this.get_priority_nav&&this.get_screen_width<=this.get_main_nav_width&&this.create_priority_nav(),null!=this.get_priority_nav&&this.resize_nav(),this.initiateKeyboardNavigationSupport(),this.initiateAriaExpanded()})}create_priority_nav(){const e=document.createElement("li"),t=document.createElement("a"),s=document.createElement("ul");e.setAttribute("class",this.params.priority_nav_list_item_class_name),e.setAttribute("role","none"),t.innerHTML=this.params.more_inner_html,t.setAttribute("href","#"),t.setAttribute("class",this.params.priority_nav_list_item_link_class_name),t.setAttribute("id","more"),t.setAttribute("role","menuitem"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-expanded","true"),t.setAttribute("aria-haspopup","true"),s.setAttribute("class",this.params.priority_nav_list_item_list_class_name),s.setAttribute("role","menu"),s.setAttribute("aria-abel","Replace Me w/ Link Name Submenu"),e.appendChild(t),e.appendChild(s),document.querySelector(this.params.main_nav_selector).appendChild(e)}resize_nav(){for(this.calculateWidths();this.screenWidth<=this.main_nav_width&&this.get_main_nav.children.length>0;){const e=this.get_main_nav.children[this.get_main_nav.children.length-2];this.moveToPriorityNav(e),this.calculateWidths()}for(;this.screenWidth>=this.breakpoints[this.breakpoints.length-1]&&this.get_priority_nav_submenu.children.length>0;)this.moveToMainNav(this.get_priority_nav_submenu.children[0]);0==this.breakpoints.length&&this.destroyPriorityNav()}calculateWidths(){this.main_nav_width=this.get_main_nav_width,this.screenWidth=this.get_screen_width}moveToPriorityNav(e){this.get_priority_nav_submenu.insertAdjacentElement("afterbegin",e),this.breakpoints.push(this.main_nav_width)}moveToMainNav(e){this.get_main_nav.insertBefore(e,this.get_main_nav.lastElementChild),this.breakpoints.pop()}destroyPriorityNav(){this.get_priority_nav.remove()}initiateAriaExpanded(){new a({nav_item_selectors:"."+this.params.priority_nav_list_item_link_class_name}).init()}initiateKeyboardNavigationSupport(){new r(document.querySelector(this.params.main_nav_selector)).init()}get get_screen_width(){return this.window.innerWidth}get get_main_nav_width(){return this.document.querySelector(this.params.main_nav_selector).offsetWidth}get get_main_nav(){return document.querySelector(this.params.main_nav_selector)}get get_priority_nav(){return this.document.querySelector("."+this.params.priority_nav_list_item_class_name)}get get_priority_nav_submenu(){return this.document.querySelector("."+this.params.priority_nav_list_item_list_class_name)}get getBreakpoints(){return this.breakpoints}}var h=document.querySelector(".wsu-s-nav-horizontal__wrapper");void 0!==h&&null!=h&&(h.classList.remove("wsu-u-no-js"),new u({main_nav_selector:".wsu-s-nav-horizontal__nav-list",priority_nav_list_item_class_name:"wsu-s-nav-horizontal__nav-item--more",priority_nav_list_item_link_class_name:"wsu-s-nav-horizontal__nav-link",priority_nav_list_item_list_class_name:"wsu-s-nav-horizontal__nav-list--has-more-items",more_inner_html:'<div class="wsu-icon wsu-i-more"></div>'}).init());var c,l,d,m;s(8);function p(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(c=function(e,t){this.domNode=e,this.menu=t,this.popupMenu=!1,this.isMenubarItem=!1,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new l(e,this),this.popupMenu.init())},c.prototype.isExpanded=function(){return"true"===this.domNode.getAttribute("aria-expanded")},c.prototype.handleKeydown=function(e){var t,s,i=e.currentTarget,n=e.key,o=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:if(this.popupMenu)this.popupMenu.open(),this.popupMenu.setFocusToFirstItem();else{try{t=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0})}catch(e){document.createEvent&&(t=document.createEvent("MouseEvents")).initEvent("click",!0,!0)}i.dispatchEvent(t)}o=!0;break;case this.keyCode.UP:this.menu.setFocusToPreviousItem(this),o=!0;break;case this.keyCode.DOWN:this.menu.setFocusToNextItem(this),o=!0;break;case this.keyCode.LEFT:this.menu.setFocusToController("previous",!0),this.menu.close(!0),o=!0;break;case this.keyCode.RIGHT:this.popupMenu?(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem()):(this.menu.setFocusToController("next",!0),this.menu.close(!0)),o=!0;break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),o=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),o=!0;break;case this.keyCode.ESC:this.menu.setFocusToController(),this.menu.close(!0),o=!0;break;case this.keyCode.TAB:this.menu.setFocusToController();break;default:1===(s=n).length&&s.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,n),o=!0)}o&&(e.stopPropagation(),e.preventDefault())},c.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},c.prototype.handleFocus=function(e){this.menu.hasFocus=!0},c.prototype.handleBlur=function(e){this.menu.hasFocus=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},c.prototype.handleMouseover=function(e){this.menu.hasHover=!0,this.menu.open(),this.popupMenu&&(this.popupMenu.hasHover=!0,this.popupMenu.open())},c.prototype.handleMouseout=function(e){this.popupMenu&&(this.popupMenu.hasHover=!1,this.popupMenu.close(!0)),this.menu.hasHover=!1,setTimeout(this.menu.close.bind(this.menu,!1),300)},(l=function(e,t){var s="PopupMenu constructor argument domNode ";if(!e instanceof Element)throw new TypeError(s+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(s+"has no element children.");for(var i=e.firstElementChild;i;){var n=i.firstElementChild;if(n&&"A"===n)throw new Error(s+"has descendant elements that are not A elements.");i=i.nextElementSibling}this.isMenubar=!1,this.domNode=e,this.controller=t,this.menuitems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){var e,t,s,i,n;for(e=this.domNode.firstElementChild;e;)(t=e.firstElementChild)&&"A"===t.tagName&&((s=new c(t,this)).init(),this.menuitems.push(s),i=t.textContent.trim(),this.firstChars.push(i.substring(0,1).toLowerCase())),e=e.nextElementSibling;(n=this.menuitems.length)>0&&(this.firstItem=this.menuitems[0],this.lastItem=this.menuitems[n-1])},l.prototype.handleMouseover=function(e){this.hasHover=!0},l.prototype.handleMouseout=function(e){this.hasHover=!1,setTimeout(this.close.bind(this,!1),1)},l.prototype.setFocusToController=function(e,t){if("string"!=typeof e&&(e=""),""!==e){if(this.controller.isMenubarItem)"previous"===e?this.controller.menu.setFocusToPreviousItem(this.controller,t):"next"===e&&this.controller.menu.setFocusToNextItem(this.controller,t);else if(this.controller.domNode.focus(),this.close(),"next"===e){var s=function(e,t){for(;e;){if(e.isMenubarItem)return e.domNode.focus(),e;t&&e.menu.close(!0),e.hasFocus=!1,e=e.menu.controller}return!1}(this.controller,!1);s&&s.menu.setFocusToNextItem(s,t)}}else this.controller&&this.controller.domNode&&this.controller.domNode.focus()},l.prototype.setFocusToFirstItem=function(){this.firstItem.domNode.focus()},l.prototype.setFocusToLastItem=function(){this.lastItem.domNode.focus()},l.prototype.setFocusToPreviousItem=function(e){var t;e===this.firstItem?this.lastItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t-1].domNode.focus())},l.prototype.setFocusToNextItem=function(e){var t;e===this.lastItem?this.firstItem.domNode.focus():(t=this.menuitems.indexOf(e),this.menuitems[t+1].domNode.focus())},l.prototype.setFocusByFirstCharacter=function(e,t){var s,i;t=t.toLowerCase();(s=this.menuitems.indexOf(e)+1)===this.menuitems.length&&(s=0),-1===(i=this.getIndexFirstChars(s,t))&&(i=this.getIndexFirstChars(0,t)),i>-1&&this.menuitems[i].domNode.focus()},l.prototype.getIndexFirstChars=function(e,t){for(var s=e;s<this.firstChars.length;s++)if(t===this.firstChars[s])return s;return-1},l.prototype.open=function(){this.controller.setExpanded(!0)},l.prototype.close=function(e){for(var t=this.controller.hasHover,s=this.hasFocus,i=0;i<this.menuitems.length;i++){var n=this.menuitems[i];n.popupMenu&&(s|=n.popupMenu.hasFocus)}this.controller.isMenubarItem||(t=!1),!e&&(s||this.hasHover||t)||this.controller.setExpanded(!1)},(d=function(e,t){this.menu=t,this.domNode=e,this.popupMenu=!1,this.hasFocus=!1,this.hasHover=!1,this.isMenubarItem=!0,this.keyCode=Object.freeze({TAB:9,RETURN:13,ESC:27,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40})}).prototype.init=function(){this.domNode.tabIndex=-1,this.domNode.addEventListener("keydown",this.handleKeydown.bind(this)),this.domNode.addEventListener("focus",this.handleFocus.bind(this)),this.domNode.addEventListener("blur",this.handleBlur.bind(this));var e=this.domNode.nextElementSibling;e&&"UL"===e.tagName&&(this.popupMenu=new l(e,this),this.popupMenu.init())},d.prototype.handleKeydown=function(e){e.currentTarget;var t,s=e.key,i=!1;switch(e.keyCode){case this.keyCode.SPACE:case this.keyCode.RETURN:case this.keyCode.DOWN:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToFirstItem(),i=!0);break;case this.keyCode.LEFT:this.menu.setFocusToPreviousItem(this),i=!0;break;case this.keyCode.RIGHT:this.menu.setFocusToNextItem(this),i=!0;break;case this.keyCode.UP:this.popupMenu&&(this.popupMenu.open(),this.popupMenu.setFocusToLastItem(),i=!0);break;case this.keyCode.HOME:case this.keyCode.PAGEUP:this.menu.setFocusToFirstItem(),i=!0;break;case this.keyCode.END:case this.keyCode.PAGEDOWN:this.menu.setFocusToLastItem(),i=!0;break;case this.keyCode.TAB:case this.keyCode.ESC:0!=this.popupMenu&&this.popupMenu.close(!0);break;default:1===(t=s).length&&t.match(/\S/)&&(this.menu.setFocusByFirstCharacter(this,s),i=!0)}i&&(e.stopPropagation(),e.preventDefault())},d.prototype.setExpanded=function(e){e?this.domNode.setAttribute("aria-expanded","true"):this.domNode.setAttribute("aria-expanded","false")},d.prototype.handleFocus=function(e){this.menu.hasFocus=!0},d.prototype.handleBlur=function(e){this.menu.hasFocus=!1},(m=function(e){var t="Menubar constructor argument menubarNode ";if(!e instanceof Element)throw new TypeError(t+"is not a DOM Element.");if(0===e.childElementCount)throw new Error(t+"has no element children.");for(var s=e.firstElementChild;s;){var i=s.firstElementChild;if(s&&i&&"A"!==i.tagName)throw new Error(t+"has child elements are not A elements.");s=s.nextElementSibling}this.isMenubar=!0,this.domNode=e,this.menubarItems=[],this.firstChars=[],this.firstItem=null,this.lastItem=null,this.hasFocus=!1,this.hasHover=!1}).prototype.init=function(){for(var e,t,s,i=this.domNode.firstElementChild;i;){var n=i.firstElementChild;i&&n&&"A"===n.tagName&&((e=new d(n,this)).init(),this.menubarItems.push(e),t=n.textContent.trim(),this.firstChars.push(t.substring(0,1).toLowerCase())),i=i.nextElementSibling}(s=this.menubarItems.length)>0&&(this.firstItem=this.menubarItems[0],this.lastItem=this.menubarItems[s-1]),this.firstItem.domNode.tabIndex=0},m.prototype.setFocusToItem=function(e){for(var t=!1,s=0;s<this.menubarItems.length;s++){var i=this.menubarItems[s];0==i.domNode.tabIndex&&(t="true"===i.domNode.getAttribute("aria-expanded")),i.domNode.tabIndex=-1,i.popupMenu&&i.popupMenu.close()}e.domNode.focus(),e.domNode.tabIndex=0,t&&e.popupMenu&&e.popupMenu.open()},m.prototype.setFocusToFirstItem=function(e){this.setFocusToItem(this.firstItem)},m.prototype.setFocusToLastItem=function(e){this.setFocusToItem(this.lastItem)},m.prototype.setFocusToPreviousItem=function(e){var t,s;e===this.firstItem?s=this.lastItem:(t=this.menubarItems.indexOf(e),s=this.menubarItems[t-1]),this.setFocusToItem(s)},m.prototype.setFocusToNextItem=function(e){var t,s;e===this.lastItem?s=this.firstItem:(t=this.menubarItems.indexOf(e),s=this.menubarItems[t+1]),this.setFocusToItem(s)},m.prototype.setFocusByFirstCharacter=function(e,t){var s,i;t=t.toLowerCase(),e.domNode.getAttribute("aria-expanded");(s=this.menubarItems.indexOf(e)+1)===this.menubarItems.length&&(s=0),-1===(i=this.getIndexFirstChars(s,t))&&(i=this.getIndexFirstChars(0,t)),i>-1&&this.setFocusToItem(this.menubarItems[i])},m.prototype.getIndexFirstChars=function(e,t){for(var s=e;s<this.firstChars.length;s++)if(t===this.firstChars[s])return s;return-1};var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=t}var t,s,i;return t=e,(s=[{key:"init",value:function(){var e=this;this.params.elements.forEach((function(t){e.initiateKeyboardNavigationSupport(t)}))}},{key:"initiateKeyboardNavigationSupport",value:function(e){new m(e).init()}}])&&p(t.prototype,s),i&&p(t,i),e}();var f=function(e){return e=e||Object.create(null),{on:function(t,s){(e[t]||(e[t]=[])).push(s)},off:function(t,s){e[t]&&e[t].splice(e[t].indexOf(s)>>>0,1)},emit:function(t,s){(e[t]||[]).slice().map((function(e){e(s)})),(e["*"]||[]).slice().map((function(e){e(t,s)}))}}};function _(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.params=t,this.nav_item_selector="",this.nav_panel_control_selector="",this.nav_panel_selector="",this.nav_list_container_selector="",this.body=document.body,this.tree_mode=!1,document.emitter=f(),this.nav_item_selector=t.nav_item_selector,void 0===this.nav_item_selector&&console.error("Undefined nav_item_selector. Please pass the selector you would like to be expandable."),this.nav_panel_control_selector=t.nav_panel_control_selector,void 0===this.nav_panel_control_selector&&console.error("Undefined nav_panel_control_selector. Please pass the selector you would like to be expandable."),this.nav_panel_control=document.querySelector(this.nav_panel_control_selector),this.nav_panel_selector=t.nav_panel_selector,void 0===this.nav_panel_selector&&console.error("Undefined nav_panel_selector. Please pass the selector you would like to be expandable."),this.nav_panel=document.querySelector(this.nav_panel_selector),this.nav_list_container_selector=t.nav_list_container_selector,void 0===this.nav_list_container_selector&&console.error("Undefined nav_list_container_selector. Please pass the selector you would like to be expandable.")}var t,s,i;return t=e,(s=[{key:"init",value:function(){var e=this,t=document.querySelectorAll(this.nav_list_container_selector);new v({elements:t}).init(),document.querySelector(this.nav_panel_control_selector).setAttribute("aria-expanded","false"),document.querySelectorAll(this.nav_item_selector).forEach((function(e){e.setAttribute("aria-expanded","false")})),this.nav_panel_control.addEventListener("click",this.togglePanel.bind(this)),document.querySelectorAll(".wsu-s-nav-vertical__nav-item--has-children > .wsu-s-nav-vertical__nav-link").forEach((function(t){t.addEventListener("click",e.toggle.bind(e))})),document.emitter.on("wsu-vertical-nav--after-open",this.panelOpened.bind(this))}},{key:"openCurrentTarget",value:function(e){e.preventDefault(),e.currentTarget.setAttribute("aria-expanded","true")}},{key:"openTarget",value:function(e){e.preventDefault(),e.target.setAttribute("aria-expanded","true")}},{key:"openPanel",value:function(){this.nav_panel_control.setAttribute("aria-expanded","true"),this.nav_panel.classList.add("wsu-s-nav-vertical__wrapper--open"),document.emitter.emit("wsu-vertical-nav--open"),setTimeout((function(){document.emitter.emit("wsu-vertical-nav--after-open")}),600),this.body.classList.add("wsu-s-nav-vertical__nav--is-open")}},{key:"close",value:function(e){e.preventDefault(),e.target.setAttribute("aria-expanded","false")}},{key:"closePanel",value:function(){this.nav_panel_control.setAttribute("aria-expanded","false"),this.nav_panel.classList.remove("wsu-s-nav-vertical__wrapper--open"),document.emitter.emit("wsu-vertical-nav--close"),this.body.classList.remove("wsu-s-nav-vertical__nav--is-open")}},{key:"toggle",value:function(e){"false"==e.currentTarget.getAttribute("aria-expanded")?this.openCurrentTarget(e):"false"==e.target.getAttribute("aria-expanded")?this.openTarget(e):this.close(e)}},{key:"togglePanel",value:function(e){e.preventDefault(),"true"==this.nav_panel_control.getAttribute("aria-expanded")?this.closePanel():this.openPanel()}},{key:"panelOpened",value:function(){var e=document.querySelector(".wsu-s-nav-vertical__nav-container-close-link");e.style.opacity=1,e.style.marginTop=0;for(var t=document.querySelectorAll(".wsu-s-nav-vertical__nav-list-container > li"),s=t.length,i=0;i<s;i++)!function(e){setTimeout((function(){t[e].style.opacity=1,t[e].style.marginLeft="0"}),250+250*e)}(i);var n=this;window.addEventListener("click",(function(e){"wsu-s-nav-vertical__wrapper wsu-s-nav-vertical__wrapper--open"==e.target.className&&n.closePanel()}))}}])&&_(t.prototype,s),i&&_(t,i),e}(),b=document.querySelector(".wsu-s-nav-vertical__wrapper");void 0!==b&&null!=b&&(b.classList.remove("wsu-u-no-js"),window.vertical_nav=new y({nav_item_selector:".wsu-s-nav-vertical__nav-link",nav_panel_control_selector:".wsu-s-nav-vertical__menu-icon-link",nav_panel_selector:".wsu-s-nav-vertical__wrapper",nav_list_container_selector:".wsu-s-nav-vertical__nav-list-container"}),window.vertical_nav.init(),document.querySelector(".wsu-s-nav-vertical__nav-container-close-link").addEventListener("click",(function(e){e.preventDefault(),window.vertical_nav.closePanel()})));s(9),s(10),s(11),s(12),s(13),s(14),s(15)}]);
//# sourceMappingURL=wsu-design-system.bundle.dist.js.map
>>>>>>> master
