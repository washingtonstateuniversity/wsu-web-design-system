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

      document.emitter.emit('close');
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

  var vertical_nav = new _wsu_build_tools_js_vertical_nav_wsu_bt_vertical_nav__WEBPACK_IMPORTED_MODULE_0__["default"]({
    nav_item_selector: '.wsu-s-nav-vertical__nav-link',
    nav_panel_control_selector: '.wsu-s-nav-vertical__menu-icon-link',
    nav_panel_selector: '.wsu-s-nav-vertical__wrapper',
    nav_list_container_selector: '.wsu-s-nav-vertical__nav-list-container'
  });
  vertical_nav.init();
  /**
   *
   * Close Button
   *
   */

  var close_link = document.querySelector('.wsu-s-nav-vertical__nav-container-close-link');
  close_link.addEventListener('click', function () {
    vertical_nav.closePanel();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3dzdS1idWlsZC10b29scy9qcy9hcmlhLWV4cGFuZGVkL3dzdS1idC1hcmlhLWV4cGFuZGVkLmpzIiwid2VicGFjazovLy8uLi93c3UtYnVpbGQtdG9vbHMvanMva2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvTWVudWJhckl0ZW1MaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi4vd3N1LWJ1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L01lbnViYXJMaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi4vd3N1LWJ1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L1BvcHVwTWVudUl0ZW1MaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi4vd3N1LWJ1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L1BvcHVwTWVudUxpbmtzLmpzIiwid2VicGFjazovLy8uLi93c3UtYnVpbGQtdG9vbHMvanMva2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvd3N1LWJ0LWtleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5LmpzIiwid2VicGFjazovLy8uLi93c3UtYnVpbGQtdG9vbHMvanMvdmVydGljYWwtbmF2L3dzdS1idC12ZXJ0aWNhbC1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4uL3dzdS1idWlsZC10b29scy9qcy93c3UtYnQtcHJpb3JpdHktbmF2LmpzIiwid2VicGFjazovLy8uLi93c3UtYnVpbGQtdG9vbHMvbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwid2VicGFjazovLy8uL2J1aWxkL3NyYy93c3UtZGVzaWduLXN5c3RlbS5idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWhlYWRpbmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvY29udGVudC1oZWFkaW5nL2NvbnRlbnQtaGVhZGluZy5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtbGlzdC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWxpc3QvY29udGVudC1saXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvZ2xvYmFsLWZvb3Rlci9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9nbG9iYWwtaGVhZGVyL2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2dsb2JhbC1oZWFkZXIvZ2xvYmFsLWhlYWRlci5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtZm9vdGVyLWNvbmRlbnNlZC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLWZvb3Rlci1jb25kZW5zZWQvc2l0ZS1mb290ZXItY29uZGVuc2VkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1mb290ZXIvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1mb290ZXIvc2l0ZS1mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLWhlYWRlci9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLWhlYWRlci9zaXRlLWhlYWRlci5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtbmF2LWhvcml6b250YWwvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1uYXYtaG9yaXpvbnRhbC9zaXRlLW5hdi1ob3Jpem9udGFsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtbmF2LWhvcml6b250YWwvc2l0ZS1uYXYtaG9yaXpvbnRhbC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtbmF2LXZlcnRpY2FsL2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtbmF2LXZlcnRpY2FsL3NpdGUtbmF2LXZlcnRpY2FsLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtbmF2LXZlcnRpY2FsL3NpdGUtbmF2LXZlcnRpY2FsLnNjc3MiXSwibmFtZXMiOlsid3N1X2J0X2FyaWFfZXhwYW5kZWQiLCJwYXJhbXMiLCJuYXZfaXRlbXMiLCJuYXZfaXRlbXNfc2VsZWN0b3JzIiwibmF2X2l0ZW1fc2VsZWN0b3JzIiwiY29uc29sZSIsImVycm9yIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImVsZW0iLCJpIiwiYXJyIiwidXBkYXRlX2l0ZW1zIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJpbmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuYXZfaXRlbSIsInNldEF0dHJpYnV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdldEF0dHJpYnV0ZSIsIk1lbnViYXJJdGVtIiwiZG9tTm9kZSIsIm1lbnVPYmoiLCJtZW51IiwicG9wdXBNZW51IiwiaGFzRm9jdXMiLCJoYXNIb3ZlciIsImlzTWVudWJhckl0ZW0iLCJrZXlDb2RlIiwiT2JqZWN0IiwiZnJlZXplIiwicHJvdG90eXBlIiwiaW5pdCIsInRhYkluZGV4IiwiaGFuZGxlS2V5ZG93biIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQmx1ciIsIm5leHRFbGVtZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidGFnTmFtZSIsIlBvcHVwTWVudSIsImV2ZW50IiwidGd0IiwiY3VycmVudFRhcmdldCIsImNoYXIiLCJrZXkiLCJmbGFnIiwiY2xpY2tFdmVudCIsImlzUHJpbnRhYmxlQ2hhcmFjdGVyIiwic3RyIiwibGVuZ3RoIiwibWF0Y2giLCJTUEFDRSIsIlJFVFVSTiIsIkRPV04iLCJvcGVuIiwic2V0Rm9jdXNUb0ZpcnN0SXRlbSIsIkxFRlQiLCJzZXRGb2N1c1RvUHJldmlvdXNJdGVtIiwiUklHSFQiLCJzZXRGb2N1c1RvTmV4dEl0ZW0iLCJVUCIsInNldEZvY3VzVG9MYXN0SXRlbSIsIkhPTUUiLCJQQUdFVVAiLCJFTkQiLCJQQUdFRE9XTiIsIlRBQiIsImNsb3NlIiwiRVNDIiwic2V0Rm9jdXNCeUZpcnN0Q2hhcmFjdGVyIiwic3RvcFByb3BhZ2F0aW9uIiwic2V0RXhwYW5kZWQiLCJ2YWx1ZSIsIk1lbnViYXIiLCJlbGVtZW50Q2hpbGRyZW4iLCJtc2dQcmVmaXgiLCJFbGVtZW50IiwiVHlwZUVycm9yIiwiY2hpbGRFbGVtZW50Q291bnQiLCJFcnJvciIsImZpcnN0RWxlbWVudENoaWxkIiwibWVudWJhckl0ZW0iLCJpc01lbnViYXIiLCJtZW51YmFySXRlbXMiLCJmaXJzdENoYXJzIiwiZmlyc3RJdGVtIiwibGFzdEl0ZW0iLCJjaGlsZEVsZW1lbnQiLCJtZW51RWxlbWVudCIsInRleHRDb250ZW50IiwibnVtSXRlbXMiLCJwdXNoIiwidHJpbSIsInN1YnN0cmluZyIsInRvTG93ZXJDYXNlIiwic2V0Rm9jdXNUb0l0ZW0iLCJuZXdJdGVtIiwibWJpIiwiZm9jdXMiLCJjdXJyZW50SXRlbSIsImluZGV4IiwiaW5kZXhPZiIsInN0YXJ0IiwiZ2V0SW5kZXhGaXJzdENoYXJzIiwic3RhcnRJbmRleCIsIk1lbnVJdGVtIiwiaXNFeHBhbmRlZCIsIk1vdXNlRXZlbnQiLCJlcnIiLCJjcmVhdGVFdmVudCIsImluaXRFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJzZXRGb2N1c1RvQ29udHJvbGxlciIsInNldFRpbWVvdXQiLCJoYW5kbGVNb3VzZW92ZXIiLCJoYW5kbGVNb3VzZW91dCIsImNvbnRyb2xsZXJPYmoiLCJtZW51aXRlbSIsImNvbnRyb2xsZXIiLCJtZW51aXRlbXMiLCJtZW51SXRlbSIsImxhYmVsIiwiY29tbWFuZCIsInNldEZvY3VzVG9NZW51YmFySXRlbSIsImZvcmNlIiwiY29udHJvbGxlckhhc0hvdmVyIiwibWkiLCJ3c3VfYnRfa2V5Ym9hcmRfbmF2X2FjY2Vzc2liaWxpdHkiLCJlbGVtZW50IiwiaW5pdGlhdGVLZXlib2FyZE5hdmlnYXRpb25TdXBwb3J0IiwibWVudWJhciIsIndzdV9idF92ZXJ0aWNhbF9uYXYiLCJuYXZfaXRlbV9zZWxlY3RvciIsIm5hdl9wYW5lbF9jb250cm9sX3NlbGVjdG9yIiwibmF2X3BhbmVsX3NlbGVjdG9yIiwibmF2X2xpc3RfY29udGFpbmVyX3NlbGVjdG9yIiwidHJlZV9tb2RlIiwiZW1pdHRlciIsIm1pdHQiLCJuYXZfcGFuZWxfY29udHJvbCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXZfcGFuZWwiLCJuYXZfaXRlbV9zZWxlY3Rvcl9lbGVtZW50cyIsImtleWJvYXJkX25hdiIsImVsZW1lbnRzIiwidG9nZ2xlUGFuZWwiLCJ0b2dnbGUiLCJvbiIsInBhbmVsT3BlbmVkIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZW1pdCIsIm9wZW5BbmltYXRpb25UaW1lIiwicmVtb3ZlIiwib3BlbkN1cnJlbnRUYXJnZXQiLCJvcGVuVGFyZ2V0IiwiY2xvc2VQYW5lbCIsIm9wZW5QYW5lbCIsImNsb3NlQnV0dG9uIiwic3R5bGUiLCJvcGFjaXR5IiwibWFyZ2luVG9wIiwibmF2SXRlbXMiLCJuYXZJdGVtc0NvdW50IiwiZHVyYXRpb24iLCJpbmNyZW1lbnQiLCJtYXJnaW5MZWZ0IiwiX3RoaXMiLCJjbGFzc05hbWUiLCJ3c3VfYnRfcHJpb3JpdHlfbmF2IiwiYnJlYWtwb2ludHMiLCJtYWluX25hdl93aWR0aCIsInNjcmVlbldpZHRoIiwidXBkYXRlX25hdiIsImZvbnRzIiwicmVhZHkiLCJ0aGVuIiwiZ2V0X3ByaW9yaXR5X25hdiIsImdldF9zY3JlZW5fd2lkdGgiLCJnZXRfbWFpbl9uYXZfd2lkdGgiLCJjcmVhdGVfcHJpb3JpdHlfbmF2IiwicmVzaXplX25hdiIsImluaXRpYXRlQXJpYUV4cGFuZGVkIiwicHJpb3JpdHlfbmF2X2xpc3RfaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpbmsiLCJwcmlvcml0eV9uYXZfdW5vcmRlcmVkX2xpc3QiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNhbGN1bGF0ZVdpZHRocyIsImdldF9tYWluX25hdiIsImNoaWxkcmVuIiwiaXRlbVRvTW92ZSIsIm1vdmVUb1ByaW9yaXR5TmF2IiwiZ2V0X3ByaW9yaXR5X25hdl9zdWJtZW51IiwibW92ZVRvTWFpbk5hdiIsImRlc3Ryb3lQcmlvcml0eU5hdiIsImluc2VydEFkamFjZW50RWxlbWVudCIsImluc2VydEJlZm9yZSIsImxhc3RFbGVtZW50Q2hpbGQiLCJwb3AiLCJleHBhbmRlZF9hcmlhX2l0ZW1zIiwid2luZG93SW5uZXJXaWR0aCIsImlubmVyV2lkdGgiLCJtYWluTmF2SW5uZXJXaWR0aCIsIm9mZnNldFdpZHRoIiwibWFpbk5hdiIsInByaW9yaXR5X25hdiIsIm5hdl9ob3J6X3dyYXBwZXIiLCJob3Jpem9udGFsX25hdiIsIm1haW5fbmF2X3NlbGVjdG9yIiwicHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9jbGFzc19uYW1lIiwicHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rX2NsYXNzX25hbWUiLCJwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpc3RfY2xhc3NfbmFtZSIsIm1vcmVfaW5uZXJfaHRtbCIsIm5hdl92ZXJ0X3dyYXBwZXIiLCJ2ZXJ0aWNhbF9uYXYiLCJjbG9zZV9saW5rIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdE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QUFFLCtCQUR5QjtBQUU1Q0MsOEJBQTBCLEVBQUUscUNBRmdCO0FBRzVDQyxzQkFBa0IsRUFBRSw4QkFId0I7QUFJNUNDLCtCQUEyQixFQUFFO0FBSmUsR0FBeEIsQ0FBckI7QUFPQWtGLGNBQVksQ0FBQzFMLElBQWI7QUFFQTs7Ozs7O0FBS0EsTUFBTTJMLFVBQVUsR0FBRzlNLFFBQVEsQ0FBQ2dJLGFBQVQsQ0FBdUIsK0NBQXZCLENBQW5CO0FBRUE4RSxZQUFVLENBQUNoTixnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFZO0FBQ2hEK00sZ0JBQVksQ0FBQzVELFVBQWI7QUFDQSxHQUZEO0FBSUEsQzs7Ozs7Ozs7Ozs7QUN0Q0QsdUMiLCJmaWxlIjoid3N1LWRlc2lnbi1zeXN0ZW0uYnVuZGxlLmRpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2J1aWxkL3NyYy93c3UtZGVzaWduLXN5c3RlbS5idWlsZC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHdzdV9idF9hcmlhX2V4cGFuZGVkIHtcblx0Y29uc3RydWN0b3IocGFyYW1zKSB7XG5cdFx0dGhpcy5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0dGhpcy5uYXZfaXRlbXMgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBBc3NpZ24gbmF2X2l0ZW1zX3NlbGVjdG9ycyB0byB2YXJpYWJsZVxuXHRcdCAqXG5cdFx0ICovXG5cdFx0dGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzID0gcGFyYW1zLm5hdl9pdGVtX3NlbGVjdG9ycztcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0Y29uc29sZS5lcnJvcignVW5kZWZpbmVkIG5hdl9pdGVtX3NlbGVjdG9ycy4gUGxlYXNlIHBhc3MgdGhlIHNlbGVjdG9yIHlvdSB3b3VsZCBsaWtlIHRvIGJlIGV4cGFuZGFibGUuJyk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBMb29wIHRocm91Z2ggc2VsZWN0b3JzIGFuZCBhcHBlbmQgYXJpYSB0YXJnZXRcblx0XHQgKlxuXHRcdCAqL1xuXHRcdGlmIChBcnJheS5pc0FycmF5KHRoaXMubmF2X2l0ZW1zX3NlbGVjdG9ycykpIHtcblx0XHRcdHRoaXMubmF2X2l0ZW1zX3NlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtLCBpLCBhcnIpIHtcblxuXHRcdFx0XHRhcnJbaV0gPSBlbGVtICsgJ1thcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSc7XG5cblx0XHRcdH0sIHRoaXMubmF2X2l0ZW1zX3NlbGVjdG9ycyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubmF2X2l0ZW1zX3NlbGVjdG9ycyA9IHRoaXMubmF2X2l0ZW1zX3NlbGVjdG9ycyArICdbYXJpYS1leHBhbmRlZD1cInRydWVcIl0nO1xuXHRcdH1cblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0dGhpcy51cGRhdGVfaXRlbXMoKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVfaXRlbXMuYmluZCh0aGlzKSk7IC8vIFRPRE86IGxvb2sgaW50byBpZiB3ZSBuZWVkIHRvIHVzZSBzb21ldGhpbmcgbGlrZSBkZWJvdW5jZSBvciBhdCB0aGUgdmVyeSBsZWFzdCBzZXQgYSB0aW1lb3V0XG5cdH1cblxuXHR1cGRhdGVfaXRlbXMoKSB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzKSkge1xuXHRcdFx0dGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzLmZvckVhY2goZWxlbSA9PiB7XG5cdFx0XHRcdC8vIFF1ZXJ5IG5hdiBpdGVtc1xuXHRcdFx0XHR0aGlzLm5hdl9pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWxlbSk7XG5cblx0XHRcdFx0Ly8gU2V0IGNvbGxhcHNpYmxlIG5hdiBpdGVtcyB0byBoaWRkZW5cblx0XHRcdFx0dGhpcy5uYXZfaXRlbXMuZm9yRWFjaChuYXZfaXRlbSA9PiB7XG5cdFx0XHRcdFx0bmF2X2l0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIFNldCBjb2xsYXBzaWJsZSBuYXYgaXRlbXMgdG8gdG9nZ2xlIG9uIGNsaWNrXG5cdFx0XHRcdHRoaXMubmF2X2l0ZW1zLmZvckVhY2gobmF2X2l0ZW0gPT4ge1xuXHRcdFx0XHRcdG5hdl9pdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQ7XG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09ICdmYWxzZScpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gUXVlcnkgbmF2IGl0ZW1zXG5cdFx0XHR0aGlzLm5hdl9pdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5uYXZfaXRlbXNfc2VsZWN0b3JzKTtcblxuXHRcdFx0Ly8gU2V0IGNvbGxhcHNpYmxlIG5hdiBpdGVtcyB0byBoaWRkZW5cblx0XHRcdHRoaXMubmF2X2l0ZW1zLmZvckVhY2gobmF2X2l0ZW0gPT4ge1xuXHRcdFx0XHRuYXZfaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBTZXQgY29sbGFwc2libGUgbmF2IGl0ZW1zIHRvIHRvZ2dsZSBvbiBjbGlja1xuXHRcdFx0dGhpcy5uYXZfaXRlbXMuZm9yRWFjaChuYXZfaXRlbSA9PiB7XG5cdFx0XHRcdG5hdl9pdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0O1xuXG5cdFx0XHRcdFx0aWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ2ZhbHNlJykge1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbn1cbiIsIi8qXHJcbiogICBUaGlzIGNvbnRlbnQgaXMgbGljZW5zZWQgYWNjb3JkaW5nIHRvIHRoZSBXM0MgU29mdHdhcmUgTGljZW5zZSBhdFxyXG4qICAgaHR0cHM6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50XHJcbiovXHJcblxyXG5pbXBvcnQgeyBQb3B1cE1lbnUgfSBmcm9tICcuL1BvcHVwTWVudUxpbmtzJztcclxuXHJcbnZhciBNZW51YmFySXRlbSA9IGZ1bmN0aW9uIChkb21Ob2RlLCBtZW51T2JqKSB7XHJcblxyXG5cdHRoaXMubWVudSA9IG1lbnVPYmo7XHJcblx0dGhpcy5kb21Ob2RlID0gZG9tTm9kZTtcclxuXHR0aGlzLnBvcHVwTWVudSA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XHJcblx0dGhpcy5oYXNIb3ZlciA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmlzTWVudWJhckl0ZW0gPSB0cnVlO1xyXG5cclxuXHR0aGlzLmtleUNvZGUgPSBPYmplY3QuZnJlZXplKHtcclxuXHRcdCdUQUInOiA5LFxyXG5cdFx0J1JFVFVSTic6IDEzLFxyXG5cdFx0J0VTQyc6IDI3LFxyXG5cdFx0J1NQQUNFJzogMzIsXHJcblx0XHQnUEFHRVVQJzogMzMsXHJcblx0XHQnUEFHRURPV04nOiAzNCxcclxuXHRcdCdFTkQnOiAzNSxcclxuXHRcdCdIT01FJzogMzYsXHJcblx0XHQnTEVGVCc6IDM3LFxyXG5cdFx0J1VQJzogMzgsXHJcblx0XHQnUklHSFQnOiAzOSxcclxuXHRcdCdET1dOJzogNDBcclxuXHR9KTtcclxufTtcclxuXHJcbk1lbnViYXJJdGVtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZG9tTm9kZS50YWJJbmRleCA9IC0xO1xyXG5cclxuXHR0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bi5iaW5kKHRoaXMpKTtcclxuXHR0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcykpO1xyXG5cdHRoaXMuZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcykpO1xyXG5cclxuXHQvLyBJbml0aWFsaXplIHBvcCB1cCBtZW51c1xyXG5cclxuXHR2YXIgbmV4dEVsZW1lbnQgPSB0aGlzLmRvbU5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRpZiAobmV4dEVsZW1lbnQgJiYgbmV4dEVsZW1lbnQudGFnTmFtZSA9PT0gJ1VMJykge1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUgPSBuZXcgUG9wdXBNZW51KG5leHRFbGVtZW50LCB0aGlzKTtcclxuXHRcdHRoaXMucG9wdXBNZW51LmluaXQoKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuTWVudWJhckl0ZW0ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR2YXIgdGd0ID0gZXZlbnQuY3VycmVudFRhcmdldCxcclxuXHRcdGNoYXIgPSBldmVudC5rZXksXHJcblx0XHRmbGFnID0gZmFsc2UsXHJcblx0XHRjbGlja0V2ZW50O1xyXG5cclxuXHRmdW5jdGlvbiBpc1ByaW50YWJsZUNoYXJhY3RlcihzdHIpIHtcclxuXHRcdHJldHVybiBzdHIubGVuZ3RoID09PSAxICYmIHN0ci5tYXRjaCgvXFxTLyk7XHJcblx0fVxyXG5cclxuXHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlNQQUNFOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUkVUVVJOOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRE9XTjpcclxuXHRcdFx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUub3BlbigpO1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51LnNldEZvY3VzVG9GaXJzdEl0ZW0oKTtcclxuXHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5MRUZUOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb1ByZXZpb3VzSXRlbSh0aGlzKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlJJR0hUOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb05leHRJdGVtKHRoaXMpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuVVA6XHJcblx0XHRcdGlmICh0aGlzLnBvcHVwTWVudSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51Lm9wZW4oKTtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5zZXRGb2N1c1RvTGFzdEl0ZW0oKTtcclxuXHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5IT01FOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUEFHRVVQOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSgpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRU5EOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUEFHRURPV046XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvTGFzdEl0ZW0oKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlRBQjpcclxuXHRcdFx0aWYgKHRoaXMucG9wdXBNZW51ICE9IGZhbHNlKSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRVNDOlxyXG5cdFx0XHRpZiAodGhpcy5wb3B1cE1lbnUgIT0gZmFsc2UpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5jbG9zZSh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRpZiAoaXNQcmludGFibGVDaGFyYWN0ZXIoY2hhcikpIHtcclxuXHRcdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNCeUZpcnN0Q2hhcmFjdGVyKHRoaXMsIGNoYXIpO1xyXG5cdFx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0aWYgKGZsYWcpIHtcclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcbn07XHJcblxyXG5NZW51YmFySXRlbS5wcm90b3R5cGUuc2V0RXhwYW5kZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdHRoaXMuZG9tTm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHRoaXMuZG9tTm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuXHR9XHJcbn07XHJcblxyXG5NZW51YmFySXRlbS5wcm90b3R5cGUuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR0aGlzLm1lbnUuaGFzRm9jdXMgPSB0cnVlO1xyXG59O1xyXG5cclxuTWVudWJhckl0ZW0ucHJvdG90eXBlLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR0aGlzLm1lbnUuaGFzRm9jdXMgPSBmYWxzZTtcclxufTtcclxuXHJcbmV4cG9ydCB2YXIgTWVudWJhckl0ZW07XHJcbiIsIi8qXHJcbiogICBUaGlzIGNvbnRlbnQgaXMgbGljZW5zZWQgYWNjb3JkaW5nIHRvIHRoZSBXM0MgU29mdHdhcmUgTGljZW5zZSBhdFxyXG4qICAgaHR0cHM6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50XHJcbiovXHJcblxyXG5pbXBvcnQgeyBNZW51YmFySXRlbSB9IGZyb20gJy4vTWVudWJhckl0ZW1MaW5rcyc7XHJcblxyXG52YXIgTWVudWJhciA9IGZ1bmN0aW9uIChkb21Ob2RlKSB7XHJcblx0dmFyIGVsZW1lbnRDaGlsZHJlbixcclxuXHRcdG1zZ1ByZWZpeCA9ICdNZW51YmFyIGNvbnN0cnVjdG9yIGFyZ3VtZW50IG1lbnViYXJOb2RlICc7XHJcblxyXG5cdC8vIENoZWNrIHdoZXRoZXIgbWVudWJhck5vZGUgaXMgYSBET00gZWxlbWVudFxyXG5cdGlmICghZG9tTm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IobXNnUHJlZml4ICsgJ2lzIG5vdCBhIERPTSBFbGVtZW50LicpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2hlY2sgd2hldGhlciBtZW51YmFyTm9kZSBoYXMgZGVzY2VuZGFudCBlbGVtZW50c1xyXG5cdGlmIChkb21Ob2RlLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IobXNnUHJlZml4ICsgJ2hhcyBubyBlbGVtZW50IGNoaWxkcmVuLicpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2hlY2sgd2hldGhlciBtZW51YmFyTm9kZSBoYXMgQSBlbGVtZW50c1xyXG5cdHZhciBlID0gZG9tTm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHR3aGlsZSAoZSkge1xyXG5cdFx0dmFyIG1lbnViYXJJdGVtID0gZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHRcdGlmIChlICYmIG1lbnViYXJJdGVtICYmIG1lbnViYXJJdGVtLnRhZ05hbWUgIT09ICdBJykge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IobXNnUHJlZml4ICsgJ2hhcyBjaGlsZCBlbGVtZW50cyBhcmUgbm90IEEgZWxlbWVudHMuJyk7XHJcblx0XHR9XHJcblx0XHRlID0gZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0fVxyXG5cclxuXHR0aGlzLmlzTWVudWJhciA9IHRydWU7XHJcblxyXG5cdHRoaXMuZG9tTm9kZSA9IGRvbU5vZGU7XHJcblxyXG5cdHRoaXMubWVudWJhckl0ZW1zID0gW107IC8vIFNlZSBNZW51YmFyIGluaXQgbWV0aG9kXHJcblx0dGhpcy5maXJzdENoYXJzID0gW107IC8vIFNlZSBNZW51YmFyIGluaXQgbWV0aG9kXHJcblxyXG5cdHRoaXMuZmlyc3RJdGVtID0gbnVsbDsgLy8gU2VlIE1lbnViYXIgaW5pdCBtZXRob2RcclxuXHR0aGlzLmxhc3RJdGVtID0gbnVsbDsgLy8gU2VlIE1lbnViYXIgaW5pdCBtZXRob2RcclxuXHJcblx0dGhpcy5oYXNGb2N1cyA9IGZhbHNlOyAvLyBTZWUgTWVudWJhckl0ZW0gaGFuZGxlRm9jdXMsIGhhbmRsZUJsdXJcclxuXHR0aGlzLmhhc0hvdmVyID0gZmFsc2U7IC8vIFNlZSBNZW51YmFyIGhhbmRsZU1vdXNlb3ZlciwgaGFuZGxlTW91c2VvdXRcclxufTtcclxuXHJcbi8qXHJcbiogICBAbWV0aG9kIE1lbnViYXIucHJvdG90eXBlLmluaXRcclxuKlxyXG4qICAgQGRlc2NcclxuKiAgICAgICBBZGRzIEFSSUEgcm9sZSB0byB0aGUgbWVudWJhciBub2RlXHJcbiogICAgICAgVHJhdmVyc2UgbWVudWJhciBjaGlsZHJlbiBmb3IgQSBlbGVtZW50cyB0byBjb25maWd1cmUgZWFjaCBBIGVsZW1lbnQgYXMgYSBBUklBIG1lbnVpdGVtXHJcbiogICAgICAgYW5kIHBvcHVsYXRlIG1lbnVpdGVtcyBhcnJheS4gSW5pdGlhbGl6ZSBmaXJzdEl0ZW0gYW5kIGxhc3RJdGVtIHByb3BlcnRpZXMuXHJcbiovXHJcbk1lbnViYXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dmFyIG1lbnViYXJJdGVtLCBjaGlsZEVsZW1lbnQsIG1lbnVFbGVtZW50LCB0ZXh0Q29udGVudCwgbnVtSXRlbXM7XHJcblxyXG5cclxuXHQvLyBUcmF2ZXJzZSB0aGUgZWxlbWVudCBjaGlsZHJlbiBvZiBtZW51YmFyTm9kZTogY29uZmlndXJlIGVhY2ggd2l0aFxyXG5cdC8vIG1lbnVpdGVtIHJvbGUgYmVoYXZpb3IgYW5kIHN0b3JlIHJlZmVyZW5jZSBpbiBtZW51aXRlbXMgYXJyYXkuXHJcblx0dmFyIGVsZW0gPSB0aGlzLmRvbU5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5cdHdoaWxlIChlbGVtKSB7XHJcblx0XHR2YXIgbWVudUVsZW1lbnQgPSBlbGVtLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHRcdGlmIChlbGVtICYmIG1lbnVFbGVtZW50ICYmIG1lbnVFbGVtZW50LnRhZ05hbWUgPT09ICdBJykge1xyXG5cdFx0XHRtZW51YmFySXRlbSA9IG5ldyBNZW51YmFySXRlbShtZW51RWxlbWVudCwgdGhpcyk7XHJcblx0XHRcdG1lbnViYXJJdGVtLmluaXQoKTtcclxuXHRcdFx0dGhpcy5tZW51YmFySXRlbXMucHVzaChtZW51YmFySXRlbSk7XHJcblx0XHRcdHRleHRDb250ZW50ID0gbWVudUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHR0aGlzLmZpcnN0Q2hhcnMucHVzaCh0ZXh0Q29udGVudC5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWxlbSA9IGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdH1cclxuXHJcblx0Ly8gVXNlIHBvcHVsYXRlZCBtZW51aXRlbXMgYXJyYXkgdG8gaW5pdGlhbGl6ZSBmaXJzdEl0ZW0gYW5kIGxhc3RJdGVtLlxyXG5cdG51bUl0ZW1zID0gdGhpcy5tZW51YmFySXRlbXMubGVuZ3RoO1xyXG5cdGlmIChudW1JdGVtcyA+IDApIHtcclxuXHRcdHRoaXMuZmlyc3RJdGVtID0gdGhpcy5tZW51YmFySXRlbXNbMF07XHJcblx0XHR0aGlzLmxhc3RJdGVtID0gdGhpcy5tZW51YmFySXRlbXNbbnVtSXRlbXMgLSAxXTtcclxuXHR9XHJcblx0dGhpcy5maXJzdEl0ZW0uZG9tTm9kZS50YWJJbmRleCA9IDA7XHJcbn07XHJcblxyXG4vKiBGT0NVUyBNQU5BR0VNRU5UIE1FVEhPRFMgKi9cclxuXHJcbk1lbnViYXIucHJvdG90eXBlLnNldEZvY3VzVG9JdGVtID0gZnVuY3Rpb24gKG5ld0l0ZW0pIHtcclxuXHJcblx0dmFyIGZsYWcgPSBmYWxzZTtcclxuXHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1lbnViYXJJdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIG1iaSA9IHRoaXMubWVudWJhckl0ZW1zW2ldO1xyXG5cclxuXHRcdGlmIChtYmkuZG9tTm9kZS50YWJJbmRleCA9PSAwKSB7XHJcblx0XHRcdGZsYWcgPSBtYmkuZG9tTm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1iaS5kb21Ob2RlLnRhYkluZGV4ID0gLTE7XHJcblx0XHRpZiAobWJpLnBvcHVwTWVudSkge1xyXG5cdFx0XHRtYmkucG9wdXBNZW51LmNsb3NlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZXdJdGVtLmRvbU5vZGUuZm9jdXMoKTtcclxuXHRuZXdJdGVtLmRvbU5vZGUudGFiSW5kZXggPSAwO1xyXG5cclxuXHRpZiAoZmxhZyAmJiBuZXdJdGVtLnBvcHVwTWVudSkge1xyXG5cdFx0bmV3SXRlbS5wb3B1cE1lbnUub3BlbigpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnViYXIucHJvdG90eXBlLnNldEZvY3VzVG9GaXJzdEl0ZW0gPSBmdW5jdGlvbiAoZmxhZykge1xyXG5cdHRoaXMuc2V0Rm9jdXNUb0l0ZW0odGhpcy5maXJzdEl0ZW0pO1xyXG59O1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuc2V0Rm9jdXNUb0xhc3RJdGVtID0gZnVuY3Rpb24gKGZsYWcpIHtcclxuXHR0aGlzLnNldEZvY3VzVG9JdGVtKHRoaXMubGFzdEl0ZW0pO1xyXG59O1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuc2V0Rm9jdXNUb1ByZXZpb3VzSXRlbSA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSkge1xyXG5cdHZhciBpbmRleDtcclxuXHR2YXIgbmV3SXRlbTtcclxuXHJcblx0aWYgKGN1cnJlbnRJdGVtID09PSB0aGlzLmZpcnN0SXRlbSkge1xyXG5cdFx0bmV3SXRlbSA9IHRoaXMubGFzdEl0ZW07XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0aW5kZXggPSB0aGlzLm1lbnViYXJJdGVtcy5pbmRleE9mKGN1cnJlbnRJdGVtKTtcclxuXHRcdG5ld0l0ZW0gPSB0aGlzLm1lbnViYXJJdGVtc1tpbmRleCAtIDFdO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zZXRGb2N1c1RvSXRlbShuZXdJdGVtKTtcclxuXHJcbn07XHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5zZXRGb2N1c1RvTmV4dEl0ZW0gPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0pIHtcclxuXHR2YXIgaW5kZXg7XHJcblx0dmFyIG5ld0l0ZW07XHJcblxyXG5cdGlmIChjdXJyZW50SXRlbSA9PT0gdGhpcy5sYXN0SXRlbSkge1xyXG5cdFx0bmV3SXRlbSA9IHRoaXMuZmlyc3RJdGVtO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGluZGV4ID0gdGhpcy5tZW51YmFySXRlbXMuaW5kZXhPZihjdXJyZW50SXRlbSk7XHJcblx0XHRuZXdJdGVtID0gdGhpcy5tZW51YmFySXRlbXNbaW5kZXggKyAxXTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc2V0Rm9jdXNUb0l0ZW0obmV3SXRlbSk7XHJcblxyXG59O1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuc2V0Rm9jdXNCeUZpcnN0Q2hhcmFjdGVyID0gZnVuY3Rpb24gKGN1cnJlbnRJdGVtLCBjaGFyKSB7XHJcblx0dmFyIHN0YXJ0LCBpbmRleCwgY2hhciA9IGNoYXIudG9Mb3dlckNhc2UoKTtcclxuXHR2YXIgZmxhZyA9IGN1cnJlbnRJdGVtLmRvbU5vZGUuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJztcclxuXHJcblx0Ly8gR2V0IHN0YXJ0IGluZGV4IGZvciBzZWFyY2ggYmFzZWQgb24gcG9zaXRpb24gb2YgY3VycmVudEl0ZW1cclxuXHRzdGFydCA9IHRoaXMubWVudWJhckl0ZW1zLmluZGV4T2YoY3VycmVudEl0ZW0pICsgMTtcclxuXHRpZiAoc3RhcnQgPT09IHRoaXMubWVudWJhckl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0c3RhcnQgPSAwO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2hlY2sgcmVtYWluaW5nIHNsb3RzIGluIHRoZSBtZW51XHJcblx0aW5kZXggPSB0aGlzLmdldEluZGV4Rmlyc3RDaGFycyhzdGFydCwgY2hhcik7XHJcblxyXG5cdC8vIElmIG5vdCBmb3VuZCBpbiByZW1haW5pbmcgc2xvdHMsIGNoZWNrIGZyb20gYmVnaW5uaW5nXHJcblx0aWYgKGluZGV4ID09PSAtMSkge1xyXG5cdFx0aW5kZXggPSB0aGlzLmdldEluZGV4Rmlyc3RDaGFycygwLCBjaGFyKTtcclxuXHR9XHJcblxyXG5cdC8vIElmIG1hdGNoIHdhcyBmb3VuZC4uLlxyXG5cdGlmIChpbmRleCA+IC0xKSB7XHJcblx0XHR0aGlzLnNldEZvY3VzVG9JdGVtKHRoaXMubWVudWJhckl0ZW1zW2luZGV4XSk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuZ2V0SW5kZXhGaXJzdENoYXJzID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgsIGNoYXIpIHtcclxuXHRmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8IHRoaXMuZmlyc3RDaGFycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGNoYXIgPT09IHRoaXMuZmlyc3RDaGFyc1tpXSkge1xyXG5cdFx0XHRyZXR1cm4gaTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIC0xO1xyXG59O1xyXG5cclxuZXhwb3J0IHZhciBNZW51YmFyO1xyXG4iLCIvKlxyXG4qICAgVGhpcyBjb250ZW50IGlzIGxpY2Vuc2VkIGFjY29yZGluZyB0byB0aGUgVzNDIFNvZnR3YXJlIExpY2Vuc2UgYXRcclxuKiAgIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxyXG4qL1xyXG5cclxuaW1wb3J0IHsgUG9wdXBNZW51IH0gZnJvbSAnLi9Qb3B1cE1lbnVMaW5rcyc7XHJcblxyXG52YXIgTWVudUl0ZW0gPSBmdW5jdGlvbiAoZG9tTm9kZSwgbWVudU9iaikge1xyXG5cclxuXHR0aGlzLmRvbU5vZGUgPSBkb21Ob2RlO1xyXG5cdHRoaXMubWVudSA9IG1lbnVPYmo7XHJcblx0dGhpcy5wb3B1cE1lbnUgPSBmYWxzZTtcclxuXHR0aGlzLmlzTWVudWJhckl0ZW0gPSBmYWxzZTtcclxuXHJcblx0dGhpcy5rZXlDb2RlID0gT2JqZWN0LmZyZWV6ZSh7XHJcblx0XHQnVEFCJzogOSxcclxuXHRcdCdSRVRVUk4nOiAxMyxcclxuXHRcdCdFU0MnOiAyNyxcclxuXHRcdCdTUEFDRSc6IDMyLFxyXG5cdFx0J1BBR0VVUCc6IDMzLFxyXG5cdFx0J1BBR0VET1dOJzogMzQsXHJcblx0XHQnRU5EJzogMzUsXHJcblx0XHQnSE9NRSc6IDM2LFxyXG5cdFx0J0xFRlQnOiAzNyxcclxuXHRcdCdVUCc6IDM4LFxyXG5cdFx0J1JJR0hUJzogMzksXHJcblx0XHQnRE9XTic6IDQwXHJcblx0fSk7XHJcbn07XHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmRvbU5vZGUudGFiSW5kZXggPSAtMTtcclxuXHJcblx0dGhpcy5kb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24uYmluZCh0aGlzKSk7XHJcblx0dGhpcy5kb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpKTtcclxuXHR0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpKTtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZSBmbHlvdXQgbWVudVxyXG5cclxuXHR2YXIgbmV4dEVsZW1lbnQgPSB0aGlzLmRvbU5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRpZiAobmV4dEVsZW1lbnQgJiYgbmV4dEVsZW1lbnQudGFnTmFtZSA9PT0gJ1VMJykge1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUgPSBuZXcgUG9wdXBNZW51KG5leHRFbGVtZW50LCB0aGlzKTtcclxuXHRcdHRoaXMucG9wdXBNZW51LmluaXQoKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLmlzRXhwYW5kZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuZG9tTm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xyXG59O1xyXG5cclxuLyogRVZFTlQgSEFORExFUlMgKi9cclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dmFyIHRndCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXHJcblx0XHRjaGFyID0gZXZlbnQua2V5LFxyXG5cdFx0ZmxhZyA9IGZhbHNlLFxyXG5cdFx0Y2xpY2tFdmVudDtcclxuXHJcblx0ZnVuY3Rpb24gaXNQcmludGFibGVDaGFyYWN0ZXIoc3RyKSB7XHJcblx0XHRyZXR1cm4gc3RyLmxlbmd0aCA9PT0gMSAmJiBzdHIubWF0Y2goL1xcUy8pO1xyXG5cdH1cclxuXHJcblx0c3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5TUEFDRTpcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlJFVFVSTjpcclxuXHRcdFx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUub3BlbigpO1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51LnNldEZvY3VzVG9GaXJzdEl0ZW0oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0Ly8gQ3JlYXRlIHNpbXVsYXRlZCBtb3VzZSBldmVudCB0byBtaW1pYyB0aGUgYmVoYXZpb3Igb2YgQVRzXHJcblx0XHRcdFx0Ly8gYW5kIGxldCB0aGUgZXZlbnQgaGFuZGxlciBoYW5kbGVDbGljayBkbyB0aGUgaG91c2VrZWVwaW5nLlxyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRjbGlja0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xyXG5cdFx0XHRcdFx0XHQndmlldyc6IHdpbmRvdyxcclxuXHRcdFx0XHRcdFx0J2J1YmJsZXMnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHQnY2FuY2VsYWJsZSc6IHRydWVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0Ly8gRE9NIExldmVsIDMgZm9yIElFIDkrXHJcblx0XHRcdFx0XHRcdGNsaWNrRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcclxuXHRcdFx0XHRcdFx0Y2xpY2tFdmVudC5pbml0RXZlbnQoJ2NsaWNrJywgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRndC5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuVVA6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvUHJldmlvdXNJdGVtKHRoaXMpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRE9XTjpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9OZXh0SXRlbSh0aGlzKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkxFRlQ6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvQ29udHJvbGxlcigncHJldmlvdXMnLCB0cnVlKTtcclxuXHRcdFx0dGhpcy5tZW51LmNsb3NlKHRydWUpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUklHSFQ6XHJcblx0XHRcdGlmICh0aGlzLnBvcHVwTWVudSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51Lm9wZW4oKTtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5zZXRGb2N1c1RvRmlyc3RJdGVtKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9Db250cm9sbGVyKCduZXh0JywgdHJ1ZSk7XHJcblx0XHRcdFx0dGhpcy5tZW51LmNsb3NlKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5IT01FOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUEFHRVVQOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSgpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRU5EOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUEFHRURPV046XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvTGFzdEl0ZW0oKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkVTQzpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9Db250cm9sbGVyKCk7XHJcblx0XHRcdHRoaXMubWVudS5jbG9zZSh0cnVlKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlRBQjpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9Db250cm9sbGVyKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGlmIChpc1ByaW50YWJsZUNoYXJhY3RlcihjaGFyKSkge1xyXG5cdFx0XHRcdHRoaXMubWVudS5zZXRGb2N1c0J5Rmlyc3RDaGFyYWN0ZXIodGhpcywgY2hhcik7XHJcblx0XHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHRpZiAoZmxhZykge1xyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5zZXRFeHBhbmRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0dGhpcy5kb21Ob2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0dGhpcy5kb21Ob2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMubWVudS5oYXNGb2N1cyA9IHRydWU7XHJcbn07XHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMubWVudS5oYXNGb2N1cyA9IGZhbHNlO1xyXG5cdHNldFRpbWVvdXQodGhpcy5tZW51LmNsb3NlLmJpbmQodGhpcy5tZW51LCBmYWxzZSksIDMwMCk7XHJcbn07XHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuaGFuZGxlTW91c2VvdmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5tZW51Lmhhc0hvdmVyID0gdHJ1ZTtcclxuXHR0aGlzLm1lbnUub3BlbigpO1xyXG5cdGlmICh0aGlzLnBvcHVwTWVudSkge1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUuaGFzSG92ZXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUub3BlbigpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5oYW5kbGVNb3VzZW91dCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdGlmICh0aGlzLnBvcHVwTWVudSkge1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUuaGFzSG92ZXIgPSBmYWxzZTtcclxuXHRcdHRoaXMucG9wdXBNZW51LmNsb3NlKHRydWUpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5tZW51Lmhhc0hvdmVyID0gZmFsc2U7XHJcblx0c2V0VGltZW91dCh0aGlzLm1lbnUuY2xvc2UuYmluZCh0aGlzLm1lbnUsIGZhbHNlKSwgMzAwKTtcclxufTtcclxuXHJcbmV4cG9ydCB2YXIgTWVudUl0ZW07XHJcbiIsIi8qXHJcbiogICBUaGlzIGNvbnRlbnQgaXMgbGljZW5zZWQgYWNjb3JkaW5nIHRvIHRoZSBXM0MgU29mdHdhcmUgTGljZW5zZSBhdFxyXG4qICAgaHR0cHM6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50XHJcbiovXHJcblxyXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4vUG9wdXBNZW51SXRlbUxpbmtzJztcclxuXHJcbnZhciBQb3B1cE1lbnUgPSBmdW5jdGlvbiAoZG9tTm9kZSwgY29udHJvbGxlck9iaikge1xyXG5cdHZhciBlbGVtZW50Q2hpbGRyZW4sXHJcblx0XHRtc2dQcmVmaXggPSAnUG9wdXBNZW51IGNvbnN0cnVjdG9yIGFyZ3VtZW50IGRvbU5vZGUgJztcclxuXHJcblx0Ly8gQ2hlY2sgd2hldGhlciBkb21Ob2RlIGlzIGEgRE9NIGVsZW1lbnRcclxuXHRpZiAoIWRvbU5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKG1zZ1ByZWZpeCArICdpcyBub3QgYSBET00gRWxlbWVudC4nKTtcclxuXHR9XHJcblx0Ly8gQ2hlY2sgd2hldGhlciBkb21Ob2RlIGhhcyBjaGlsZCBlbGVtZW50c1xyXG5cdGlmIChkb21Ob2RlLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IobXNnUHJlZml4ICsgJ2hhcyBubyBlbGVtZW50IGNoaWxkcmVuLicpO1xyXG5cdH1cclxuXHQvLyBDaGVjayB3aGV0aGVyIGRvbU5vZGUgZGVzY2VuZGFudCBlbGVtZW50cyBoYXZlIEEgZWxlbWVudHNcclxuXHR2YXIgY2hpbGRFbGVtZW50ID0gZG9tTm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHR3aGlsZSAoY2hpbGRFbGVtZW50KSB7XHJcblx0XHR2YXIgbWVudWl0ZW0gPSBjaGlsZEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblx0XHRpZiAobWVudWl0ZW0gJiYgbWVudWl0ZW0gPT09ICdBJykge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IobXNnUHJlZml4ICsgJ2hhcyBkZXNjZW5kYW50IGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBBIGVsZW1lbnRzLicpO1xyXG5cdFx0fVxyXG5cdFx0Y2hpbGRFbGVtZW50ID0gY2hpbGRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuXHR9XHJcblxyXG5cdHRoaXMuaXNNZW51YmFyID0gZmFsc2U7XHJcblxyXG5cdHRoaXMuZG9tTm9kZSA9IGRvbU5vZGU7XHJcblx0dGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlck9iajtcclxuXHJcblx0dGhpcy5tZW51aXRlbXMgPSBbXTsgLy8gU2VlIFBvcHVwTWVudSBpbml0IG1ldGhvZFxyXG5cdHRoaXMuZmlyc3RDaGFycyA9IFtdOyAvLyBTZWUgUG9wdXBNZW51IGluaXQgbWV0aG9kXHJcblxyXG5cdHRoaXMuZmlyc3RJdGVtID0gbnVsbDsgLy8gU2VlIFBvcHVwTWVudSBpbml0IG1ldGhvZFxyXG5cdHRoaXMubGFzdEl0ZW0gPSBudWxsOyAvLyBTZWUgUG9wdXBNZW51IGluaXQgbWV0aG9kXHJcblxyXG5cdHRoaXMuaGFzRm9jdXMgPSBmYWxzZTsgLy8gU2VlIE1lbnVJdGVtIGhhbmRsZUZvY3VzLCBoYW5kbGVCbHVyXHJcblx0dGhpcy5oYXNIb3ZlciA9IGZhbHNlOyAvLyBTZWUgUG9wdXBNZW51IGhhbmRsZU1vdXNlb3ZlciwgaGFuZGxlTW91c2VvdXRcclxufTtcclxuXHJcbi8qXHJcbiogICBAbWV0aG9kIFBvcHVwTWVudS5wcm90b3R5cGUuaW5pdFxyXG4qXHJcbiogICBAZGVzY1xyXG4qICAgICAgIFRyYXZlcnNlIGRvbU5vZGUgY2hpbGRyZW4gdG8gY29uZmlndXJlIGVhY2ggbWVudWl0ZW0gYW5kIHBvcHVsYXRlXHJcbiogICAgICAgbWVudWl0ZW1zIGFycmF5LiBJbml0aWFsaXplIGZpcnN0SXRlbSBhbmQgbGFzdEl0ZW0gcHJvcGVydGllcy5cclxuKi9cclxuUG9wdXBNZW51LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHZhciBjaGlsZEVsZW1lbnQsIG1lbnVFbGVtZW50LCBtZW51SXRlbSwgdGV4dENvbnRlbnQsIG51bUl0ZW1zLCBsYWJlbDtcclxuXHJcblx0Ly8gVHJhdmVyc2UgdGhlIGVsZW1lbnQgY2hpbGRyZW4gb2YgZG9tTm9kZTogY29uZmlndXJlIGVhY2ggd2l0aFxyXG5cdC8vIG1lbnVpdGVtIHJvbGUgYmVoYXZpb3IgYW5kIHN0b3JlIHJlZmVyZW5jZSBpbiBtZW51aXRlbXMgYXJyYXkuXHJcblx0Y2hpbGRFbGVtZW50ID0gdGhpcy5kb21Ob2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHR3aGlsZSAoY2hpbGRFbGVtZW50KSB7XHJcblx0XHRtZW51RWxlbWVudCA9IGNoaWxkRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcblx0XHRpZiAobWVudUVsZW1lbnQgJiYgbWVudUVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcblx0XHRcdG1lbnVJdGVtID0gbmV3IE1lbnVJdGVtKG1lbnVFbGVtZW50LCB0aGlzKTtcclxuXHRcdFx0bWVudUl0ZW0uaW5pdCgpO1xyXG5cdFx0XHR0aGlzLm1lbnVpdGVtcy5wdXNoKG1lbnVJdGVtKTtcclxuXHRcdFx0dGV4dENvbnRlbnQgPSBtZW51RWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdHRoaXMuZmlyc3RDaGFycy5wdXNoKHRleHRDb250ZW50LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpKTtcclxuXHRcdH1cclxuXHRcdGNoaWxkRWxlbWVudCA9IGNoaWxkRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0fVxyXG5cclxuXHQvLyBVc2UgcG9wdWxhdGVkIG1lbnVpdGVtcyBhcnJheSB0byBpbml0aWFsaXplIGZpcnN0SXRlbSBhbmQgbGFzdEl0ZW0uXHJcblx0bnVtSXRlbXMgPSB0aGlzLm1lbnVpdGVtcy5sZW5ndGg7XHJcblx0aWYgKG51bUl0ZW1zID4gMCkge1xyXG5cdFx0dGhpcy5maXJzdEl0ZW0gPSB0aGlzLm1lbnVpdGVtc1swXTtcclxuXHRcdHRoaXMubGFzdEl0ZW0gPSB0aGlzLm1lbnVpdGVtc1tudW1JdGVtcyAtIDFdO1xyXG5cdH1cclxufTtcclxuXHJcbi8qIEVWRU5UIEhBTkRMRVJTICovXHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLmhhbmRsZU1vdXNlb3ZlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMuaGFzSG92ZXIgPSB0cnVlO1xyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5oYW5kbGVNb3VzZW91dCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMuaGFzSG92ZXIgPSBmYWxzZTtcclxuXHRzZXRUaW1lb3V0KHRoaXMuY2xvc2UuYmluZCh0aGlzLCBmYWxzZSksIDEpO1xyXG59O1xyXG5cclxuLyogRk9DVVMgTUFOQUdFTUVOVCBNRVRIT0RTICovXHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLnNldEZvY3VzVG9Db250cm9sbGVyID0gZnVuY3Rpb24gKGNvbW1hbmQsIGZsYWcpIHtcclxuXHJcblx0aWYgKHR5cGVvZiBjb21tYW5kICE9PSAnc3RyaW5nJykge1xyXG5cdFx0Y29tbWFuZCA9ICcnO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2V0Rm9jdXNUb01lbnViYXJJdGVtKGNvbnRyb2xsZXIsIGNsb3NlKSB7XHJcblx0XHR3aGlsZSAoY29udHJvbGxlcikge1xyXG5cdFx0XHRpZiAoY29udHJvbGxlci5pc01lbnViYXJJdGVtKSB7XHJcblx0XHRcdFx0Y29udHJvbGxlci5kb21Ob2RlLmZvY3VzKCk7XHJcblx0XHRcdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYgKGNsb3NlKSB7XHJcblx0XHRcdFx0XHRjb250cm9sbGVyLm1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnRyb2xsZXIuaGFzRm9jdXMgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb250cm9sbGVyID0gY29udHJvbGxlci5tZW51LmNvbnRyb2xsZXI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpZiAoY29tbWFuZCA9PT0gJycpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRyb2xsZXIgJiYgdGhpcy5jb250cm9sbGVyLmRvbU5vZGUpIHtcclxuXHRcdFx0dGhpcy5jb250cm9sbGVyLmRvbU5vZGUuZm9jdXMoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghdGhpcy5jb250cm9sbGVyLmlzTWVudWJhckl0ZW0pIHtcclxuXHRcdHRoaXMuY29udHJvbGxlci5kb21Ob2RlLmZvY3VzKCk7XHJcblx0XHR0aGlzLmNsb3NlKCk7XHJcblxyXG5cdFx0aWYgKGNvbW1hbmQgPT09ICduZXh0Jykge1xyXG5cdFx0XHR2YXIgbWVudWJhckl0ZW0gPSBzZXRGb2N1c1RvTWVudWJhckl0ZW0odGhpcy5jb250cm9sbGVyLCBmYWxzZSk7XHJcblx0XHRcdGlmIChtZW51YmFySXRlbSkge1xyXG5cdFx0XHRcdG1lbnViYXJJdGVtLm1lbnUuc2V0Rm9jdXNUb05leHRJdGVtKG1lbnViYXJJdGVtLCBmbGFnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGlmIChjb21tYW5kID09PSAncHJldmlvdXMnKSB7XHJcblx0XHRcdHRoaXMuY29udHJvbGxlci5tZW51LnNldEZvY3VzVG9QcmV2aW91c0l0ZW0odGhpcy5jb250cm9sbGVyLCBmbGFnKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGNvbW1hbmQgPT09ICduZXh0Jykge1xyXG5cdFx0XHR0aGlzLmNvbnRyb2xsZXIubWVudS5zZXRGb2N1c1RvTmV4dEl0ZW0odGhpcy5jb250cm9sbGVyLCBmbGFnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5zZXRGb2N1c1RvRmlyc3RJdGVtID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZmlyc3RJdGVtLmRvbU5vZGUuZm9jdXMoKTtcclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuc2V0Rm9jdXNUb0xhc3RJdGVtID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMubGFzdEl0ZW0uZG9tTm9kZS5mb2N1cygpO1xyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5zZXRGb2N1c1RvUHJldmlvdXNJdGVtID0gZnVuY3Rpb24gKGN1cnJlbnRJdGVtKSB7XHJcblx0dmFyIGluZGV4O1xyXG5cclxuXHRpZiAoY3VycmVudEl0ZW0gPT09IHRoaXMuZmlyc3RJdGVtKSB7XHJcblx0XHR0aGlzLmxhc3RJdGVtLmRvbU5vZGUuZm9jdXMoKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRpbmRleCA9IHRoaXMubWVudWl0ZW1zLmluZGV4T2YoY3VycmVudEl0ZW0pO1xyXG5cdFx0dGhpcy5tZW51aXRlbXNbaW5kZXggLSAxXS5kb21Ob2RlLmZvY3VzKCk7XHJcblx0fVxyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5zZXRGb2N1c1RvTmV4dEl0ZW0gPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0pIHtcclxuXHR2YXIgaW5kZXg7XHJcblxyXG5cdGlmIChjdXJyZW50SXRlbSA9PT0gdGhpcy5sYXN0SXRlbSkge1xyXG5cdFx0dGhpcy5maXJzdEl0ZW0uZG9tTm9kZS5mb2N1cygpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGluZGV4ID0gdGhpcy5tZW51aXRlbXMuaW5kZXhPZihjdXJyZW50SXRlbSk7XHJcblx0XHR0aGlzLm1lbnVpdGVtc1tpbmRleCArIDFdLmRvbU5vZGUuZm9jdXMoKTtcclxuXHR9XHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLnNldEZvY3VzQnlGaXJzdENoYXJhY3RlciA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSwgY2hhcikge1xyXG5cdHZhciBzdGFydCwgaW5kZXgsIGNoYXIgPSBjaGFyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdC8vIEdldCBzdGFydCBpbmRleCBmb3Igc2VhcmNoIGJhc2VkIG9uIHBvc2l0aW9uIG9mIGN1cnJlbnRJdGVtXHJcblx0c3RhcnQgPSB0aGlzLm1lbnVpdGVtcy5pbmRleE9mKGN1cnJlbnRJdGVtKSArIDE7XHJcblx0aWYgKHN0YXJ0ID09PSB0aGlzLm1lbnVpdGVtcy5sZW5ndGgpIHtcclxuXHRcdHN0YXJ0ID0gMDtcclxuXHR9XHJcblxyXG5cdC8vIENoZWNrIHJlbWFpbmluZyBzbG90cyBpbiB0aGUgbWVudVxyXG5cdGluZGV4ID0gdGhpcy5nZXRJbmRleEZpcnN0Q2hhcnMoc3RhcnQsIGNoYXIpO1xyXG5cclxuXHQvLyBJZiBub3QgZm91bmQgaW4gcmVtYWluaW5nIHNsb3RzLCBjaGVjayBmcm9tIGJlZ2lubmluZ1xyXG5cdGlmIChpbmRleCA9PT0gLTEpIHtcclxuXHRcdGluZGV4ID0gdGhpcy5nZXRJbmRleEZpcnN0Q2hhcnMoMCwgY2hhcik7XHJcblx0fVxyXG5cclxuXHQvLyBJZiBtYXRjaCB3YXMgZm91bmQuLi5cclxuXHRpZiAoaW5kZXggPiAtMSkge1xyXG5cdFx0dGhpcy5tZW51aXRlbXNbaW5kZXhdLmRvbU5vZGUuZm9jdXMoKTtcclxuXHR9XHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLmdldEluZGV4Rmlyc3RDaGFycyA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBjaGFyKSB7XHJcblx0Zm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPCB0aGlzLmZpcnN0Q2hhcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChjaGFyID09PSB0aGlzLmZpcnN0Q2hhcnNbaV0pIHtcclxuXHRcdFx0cmV0dXJuIGk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAtMTtcclxufTtcclxuXHJcbi8qIE1FTlUgRElTUExBWSBNRVRIT0RTICovXHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdHRoaXMuY29udHJvbGxlci5zZXRFeHBhbmRlZCh0cnVlKTtcclxuXHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGZvcmNlKSB7XHJcblxyXG5cdHZhciBjb250cm9sbGVySGFzSG92ZXIgPSB0aGlzLmNvbnRyb2xsZXIuaGFzSG92ZXI7XHJcblxyXG5cdHZhciBoYXNGb2N1cyA9IHRoaXMuaGFzRm9jdXM7XHJcblxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tZW51aXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBtaSA9IHRoaXMubWVudWl0ZW1zW2ldO1xyXG5cdFx0aWYgKG1pLnBvcHVwTWVudSkge1xyXG5cdFx0XHRoYXNGb2N1cyA9IGhhc0ZvY3VzIHwgbWkucG9wdXBNZW51Lmhhc0ZvY3VzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKCF0aGlzLmNvbnRyb2xsZXIuaXNNZW51YmFySXRlbSkge1xyXG5cdFx0Y29udHJvbGxlckhhc0hvdmVyID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpZiAoZm9yY2UgfHwgKCFoYXNGb2N1cyAmJiAhdGhpcy5oYXNIb3ZlciAmJiAhY29udHJvbGxlckhhc0hvdmVyKSkge1xyXG5cdFx0dGhpcy5jb250cm9sbGVyLnNldEV4cGFuZGVkKGZhbHNlKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIFBvcHVwTWVudTtcclxuIiwiaW1wb3J0IHsgTWVudWJhciB9IGZyb20gJy4uL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L01lbnViYXJMaW5rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHdzdV9idF9rZXlib2FyZF9uYXZfYWNjZXNzaWJpbGl0eSB7XG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xuXHRcdHRoaXMucGFyYW1zID0gcGFyYW1zO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIExvb3AgdGhyb3VnaCBlbGVtZW50cyB0aGF0IHdlIHdhbnQgdG8gaGF2ZSBrZXlib2FyZCBzdXBwb3J0IGFuZCBtYWtlIGl0IHNvXG5cdFx0ICpcblx0XHQgKi9cblx0XHR0aGlzLnBhcmFtc1snZWxlbWVudHMnXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0dGhpcy5pbml0aWF0ZUtleWJvYXJkTmF2aWdhdGlvblN1cHBvcnQoZWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0aWF0ZUtleWJvYXJkTmF2aWdhdGlvblN1cHBvcnQoZWxlbWVudCkge1xuXHRcdHZhciBtZW51YmFyID0gbmV3IE1lbnViYXIoZWxlbWVudCk7XG5cdFx0bWVudWJhci5pbml0KCk7XG5cdH1cbn1cbiIsImltcG9ydCB3c3VfYnRfa2V5Ym9hcmRfbmF2X2FjY2Vzc2liaWxpdHkgZnJvbSAnLi4va2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvd3N1LWJ0LWtleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5JztcbmltcG9ydCBtaXR0IGZyb20gJ21pdHQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHdzdV9idF92ZXJ0aWNhbF9uYXYge1xuXHRjb25zdHJ1Y3RvcihwYXJhbXMpIHtcblx0XHR0aGlzLnBhcmFtcyA9IHBhcmFtcztcblx0XHR0aGlzLm5hdl9pdGVtX3NlbGVjdG9yID0gJyc7XG5cdFx0dGhpcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3RvciA9ICcnO1xuXHRcdHRoaXMubmF2X3BhbmVsX3NlbGVjdG9yID0gJyc7XG5cdFx0dGhpcy5uYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3IgPSAnJztcblx0XHR0aGlzLnRyZWVfbW9kZSA9IGZhbHNlOyAvLyBAVE9ETzogbmVlZHMgdG8gZG8gc29tZXRoaW5nXG5cdFx0ZG9jdW1lbnQuZW1pdHRlciA9IG1pdHQoKTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQXNzaWduIHZhbHVlcyB0byB2YXJpYWJsZXNcblx0XHQgKlxuXHRcdCAqL1xuXG5cdFx0LyogTmF2aWdhdGlvbiBpdGVtIHNlbGVjdG9yICovXG5cdFx0dGhpcy5uYXZfaXRlbV9zZWxlY3RvciA9IHBhcmFtcy5uYXZfaXRlbV9zZWxlY3RvcjtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5uYXZfaXRlbV9zZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuZGVmaW5lZCBuYXZfaXRlbV9zZWxlY3Rvci4gUGxlYXNlIHBhc3MgdGhlIHNlbGVjdG9yIHlvdSB3b3VsZCBsaWtlIHRvIGJlIGV4cGFuZGFibGUuJyk7XG5cdFx0fVxuXG5cdFx0LyogTmF2aWdhdGlvbiBQYW5lbCBDb250cm9sICovXG5cdFx0dGhpcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3RvciA9IHBhcmFtcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3RvcjtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuZGVmaW5lZCBuYXZfcGFuZWxfY29udHJvbF9zZWxlY3Rvci4gUGxlYXNlIHBhc3MgdGhlIHNlbGVjdG9yIHlvdSB3b3VsZCBsaWtlIHRvIGJlIGV4cGFuZGFibGUuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5uYXZfcGFuZWxfY29udHJvbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3Rvcik7XG5cblx0XHQvKiBOYXZpZ2F0aW9uIFBhbmVsICovXG5cdFx0dGhpcy5uYXZfcGFuZWxfc2VsZWN0b3IgPSBwYXJhbXMubmF2X3BhbmVsX3NlbGVjdG9yO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm5hdl9wYW5lbF9zZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuZGVmaW5lZCBuYXZfcGFuZWxfc2VsZWN0b3IuIFBsZWFzZSBwYXNzIHRoZSBzZWxlY3RvciB5b3Ugd291bGQgbGlrZSB0byBiZSBleHBhbmRhYmxlLicpO1xuXHRcdH1cblxuXHRcdHRoaXMubmF2X3BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm5hdl9wYW5lbF9zZWxlY3Rvcik7XG5cblx0XHQvKiBOYXZpZ2F0aW9uIExpc3QgQ29udGFpbmVyIFNlbGVjdG9yICovXG5cdFx0dGhpcy5uYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3IgPSBwYXJhbXMubmF2X2xpc3RfY29udGFpbmVyX3NlbGVjdG9yO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm5hdl9saXN0X2NvbnRhaW5lcl9zZWxlY3RvciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ1VuZGVmaW5lZCBuYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3IuIFBsZWFzZSBwYXNzIHRoZSBzZWxlY3RvciB5b3Ugd291bGQgbGlrZSB0byBiZSBleHBhbmRhYmxlLicpO1xuXHRcdH1cblx0fVxuXG5cdGluaXQoKSB7XG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBFbmFibGUga2V5Ym9hcmQgbmF2aWdhdGlvbiBhY2Nlc3NpYmlsaXR5XG5cdFx0ICpcblx0XHQgKi9cblx0XHRjb25zdCBuYXZfaXRlbV9zZWxlY3Rvcl9lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5uYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3IpO1xuXHRcdHZhciBrZXlib2FyZF9uYXYgPSBuZXcgd3N1X2J0X2tleWJvYXJkX25hdl9hY2Nlc3NpYmlsaXR5KHtcblx0XHRcdGVsZW1lbnRzOiBuYXZfaXRlbV9zZWxlY3Rvcl9lbGVtZW50c1xuXHRcdH0pO1xuXHRcdGtleWJvYXJkX25hdi5pbml0KCk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIFNldCBuYXYgaXRlbXMgdG8gZXhwYW5kZWQgZmFsc2Vcblx0XHQgKlxuXHRcdCAqL1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5uYXZfcGFuZWxfY29udHJvbF9zZWxlY3Rvcikuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLm5hdl9pdGVtX3NlbGVjdG9yKS5mb3JFYWNoKGVsZW0gPT4geyBlbGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpOyB9KTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQ3JlYXRlIGV2ZW50IGxpc3RlbmVyc1xuXHRcdCAqXG5cdFx0ICovXG5cblx0XHQvKiBUb2dnbGUgUGFuZWxzICovXG5cdFx0dGhpcy5uYXZfcGFuZWxfY29udHJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlUGFuZWwuYmluZCh0aGlzKSk7XG5cblx0XHQvKiBUb2dnbGUgTmF2IEl0ZW1zICovXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LWl0ZW0tLWhhcy1jaGlsZHJlbiA+IC53c3Utcy1uYXYtdmVydGljYWxfX25hdi1saW5rJykuZm9yRWFjaChlbGVtID0+IHsgZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpOyB9KTsgLy8gQFRPRE86IEFic3RyYWN0IHNlbGVjdG9yIGFzIHBhcmFtZXRlclxuXG5cdFx0LyogT24gcGFuZWwgb3BlbiBldmVudHMgKi9cblx0XHRkb2N1bWVudC5lbWl0dGVyLm9uKCd3c3UtdmVydGljYWwtbmF2LS1hZnRlci1vcGVuJywgdGhpcy5wYW5lbE9wZW5lZC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdG9wZW5DdXJyZW50VGFyZ2V0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0O1xuXHRcdGUuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHR9XG5cblx0b3BlblRhcmdldChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdDtcblx0XHRlLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHR9XG5cblx0b3BlblBhbmVsKCkge1xuXHRcdC8qIFNldCBhcmlhIGV4cGFuZGVkIGF0dHJpYnV0ZSAqL1xuXHRcdHRoaXMubmF2X3BhbmVsX2NvbnRyb2wuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcblxuXHRcdC8qIEFkZCBjbGFzcyB0byB3cmFwcGVyICovXG5cdFx0dGhpcy5uYXZfcGFuZWwuY2xhc3NMaXN0LmFkZCgnd3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyLS1vcGVuJyk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEV2ZW50IG9uIG9wZW5cblx0XHQgKiB3c3UtdmVydGljYWwtbmF2LS1vcGVuXG5cdFx0ICpcblx0XHQgKi9cblx0XHRkb2N1bWVudC5lbWl0dGVyLmVtaXQoJ3dzdS12ZXJ0aWNhbC1uYXYtLW9wZW4nKTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogRXZlbnQgYWZ0ZXIgb3BlbiBjb21wbGV0ZXNcblx0XHQgKiB3c3UtdmVydGljYWwtbmF2LS1hZnRlci1vcGVuXG5cdFx0ICpcblx0XHQgKi9cblx0XHRjb25zdCBvcGVuQW5pbWF0aW9uVGltZSA9IDYwMDsgLy8gaW4gbXMgdGhlIHRpbWUgaXQgdGFrZXMgZm9yIHRoZSBtZW51IHRvIGZpbmlzaCBvcGVuaW5nXG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGRvY3VtZW50LmVtaXR0ZXIuZW1pdCgnd3N1LXZlcnRpY2FsLW5hdi0tYWZ0ZXItb3BlbicpO1xuXHRcdH0sIG9wZW5BbmltYXRpb25UaW1lKTtcblx0fVxuXG5cdGNsb3NlKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0O1xuXHRcdGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHR9XG5cblx0Y2xvc2VQYW5lbCgpIHtcblx0XHQvKiBTZXQgYXJpYSBleHBhbmRlZCBhdHRyaWJ1dGUgKi9cblx0XHR0aGlzLm5hdl9wYW5lbF9jb250cm9sLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG5cdFx0LyogUmVtb3ZlIG9wZW4gY2xhc3MgKi9cblx0XHR0aGlzLm5hdl9wYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCd3c3Utcy1uYXYtdmVydGljYWxfX3dyYXBwZXItLW9wZW4nKTtcblxuXHRcdC8qIEVtaXQgY2xvc2UgZXZlbnQgKi9cblx0XHRkb2N1bWVudC5lbWl0dGVyLmVtaXQoJ2Nsb3NlJyk7XG5cdH1cblxuXHR0b2dnbGUoZSkge1xuXHRcdGlmIChlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ2ZhbHNlJykge1xuXHRcdFx0dGhpcy5vcGVuQ3VycmVudFRhcmdldChlKTtcblx0XHR9IGVsc2UgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09ICdmYWxzZScpIHtcblx0XHRcdHRoaXMub3BlblRhcmdldChlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZShlKTtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVQYW5lbCgpIHtcblx0XHRpZiAodGhpcy5uYXZfcGFuZWxfY29udHJvbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PSAndHJ1ZScpIHtcblx0XHRcdHRoaXMuY2xvc2VQYW5lbCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5QYW5lbCgpO1xuXHRcdH1cblx0fVxuXG5cdHBhbmVsT3BlbmVkKCkge1xuXHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LWNvbnRhaW5lci1jbG9zZS1saW5rJyk7XG5cblx0XHRjbG9zZUJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHRjbG9zZUJ1dHRvbi5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBBbmltYXRlIG1lbnUgaXRlbXMgaW4gb24gdmVydCBuYXYgb3BlbiB1c2luZyBlbWl0dGVyc1xuXHRcdCAqXG5cdFx0ICovXG5cdFx0Y29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtbGlzdC1jb250YWluZXIgPiBsaScpO1xuXHRcdGNvbnN0IG5hdkl0ZW1zQ291bnQgPSBuYXZJdGVtcy5sZW5ndGg7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5hdkl0ZW1zQ291bnQ7IGkrKykge1xuXHRcdFx0KGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdGNvbnN0IGR1cmF0aW9uID0gMjUwO1xuXHRcdFx0XHRsZXQgaW5jcmVtZW50ID0gZHVyYXRpb24gKyAoZHVyYXRpb24gKiBpKTtcblxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRuYXZJdGVtc1tpXS5zdHlsZS5vcGFjaXR5ID0gMTtcblx0XHRcdFx0XHRuYXZJdGVtc1tpXS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzAnO1xuXHRcdFx0XHR9LCBpbmNyZW1lbnQpO1xuXHRcdFx0fSkoaSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQ3JlYXRlIGV2ZW50IGxpc3RlbmVyIGZvciBhbGxvd2luZyBwYW5lbCB0byBiZSBjbG9zZWQgb24gY2xpY2tcblx0XHQgKlxuXHRcdCAqL1xuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0aWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PSBcIndzdS1zLW5hdi12ZXJ0aWNhbF9fd3JhcHBlciB3c3Utcy1uYXYtdmVydGljYWxfX3dyYXBwZXItLW9wZW5cIikge1xuXHRcdFx0XHRfdGhpcy5jbG9zZVBhbmVsKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cbiIsImltcG9ydCB3c3VfYnRfYXJpYV9leHBhbmRlZCBmcm9tICcuL2FyaWEtZXhwYW5kZWQvd3N1LWJ0LWFyaWEtZXhwYW5kZWQnO1xuaW1wb3J0IHsgTWVudWJhciB9IGZyb20gJy4va2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvTWVudWJhckxpbmtzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd3N1X2J0X3ByaW9yaXR5X25hdiB7XG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xuXHRcdHRoaXMuYnJlYWtwb2ludHMgPSBbXTtcblx0XHR0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG5cdFx0dGhpcy5tYWluX25hdl93aWR0aCA9IG51bGw7XG5cdFx0dGhpcy5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0dGhpcy5zY3JlZW5XaWR0aCA9IG51bGw7XG5cdFx0dGhpcy53aW5kb3cgPSB3aW5kb3c7XG5cdH1cblxuXHQvLyBNZXRob2RzXG5cdGluaXQoKSB7XG5cdFx0dGhpcy51cGRhdGVfbmF2KCk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlX25hdi5iaW5kKHRoaXMpKTsgLy8gVE9ETzogbG9vayBpbnRvIGlmIHdlIG5lZWQgdG8gdXNlIHNvbWV0aGluZyBsaWtlIGRlYm91bmNlIG9yIGF0IHRoZSB2ZXJ5IGxlYXN0IHNldCBhIHRpbWVvdXRcblx0fVxuXG5cdHVwZGF0ZV9uYXYoKSB7XG5cdFx0Ly8gQ2hlY2sgaWYgYWxsIGZvbnRzIGFyZSBsb2FkZWRcblx0XHQvLyBUT0RPOiBGaXggZm9yIGllIDExICYgZWRnZSAobmVlZHMgdGVzdGluZylcblx0XHR0aGlzLmRvY3VtZW50LmZvbnRzLnJlYWR5LnRoZW4oKCkgPT4ge1xuXG5cdFx0XHQvLyBJZiBkb2Vzbid0IGV4aXN0ICYgTmF2IGlzIGdyZWF0ZXIgdGhhbiBzY3JlZW4gd2lkdGgsIGNyZWF0ZSBuYXZcblx0XHRcdGlmICh0aGlzLmdldF9wcmlvcml0eV9uYXYgPT0gbnVsbCAmJiB0aGlzLmdldF9zY3JlZW5fd2lkdGggPD0gdGhpcy5nZXRfbWFpbl9uYXZfd2lkdGgpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVfcHJpb3JpdHlfbmF2KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIG5hdiBleGlzdHMsIGp1c3QgcmVzaXplIGl0XG5cdFx0XHRpZiAodGhpcy5nZXRfcHJpb3JpdHlfbmF2ICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5yZXNpemVfbmF2KCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuaW5pdGlhdGVLZXlib2FyZE5hdmlnYXRpb25TdXBwb3J0KCk7XG5cdFx0XHR0aGlzLmluaXRpYXRlQXJpYUV4cGFuZGVkKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjcmVhdGVfcHJpb3JpdHlfbmF2KCkge1xuXHRcdC8vIENyZWF0ZSBlbGVtZW50c1xuXHRcdGNvbnN0IHByaW9yaXR5X25hdl9saXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdGNvbnN0IHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRjb25zdCBwcmlvcml0eV9uYXZfdW5vcmRlcmVkX2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG5cdFx0Ly8gQ3JlYXRlIGxpc3QgaXRlbSB3cmFwcGVyIDxsaT5cblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLnBhcmFtc1sncHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9jbGFzc19uYW1lJ10pO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ25vbmUnKTtcblxuXHRcdC8vIENyZWF0ZSBsaXN0IGl0ZW0gbGluayA8YT5cblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpbmsuaW5uZXJIVE1MID0gdGhpcy5wYXJhbXNbJ21vcmVfaW5uZXJfaHRtbCddO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5wYXJhbXNbJ3ByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGlua19jbGFzc19uYW1lJ10pO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21vcmUnKTtcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpbmsuc2V0QXR0cmlidXRlKCdyb2xlJywgJ21lbnVpdGVtJyk7XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWhhc3BvcHVwJywgJ3RydWUnKTtcblxuXHRcdC8vIENyZWF0ZSB1bm9yZGVyZWQgbGlzdCBpdGVtIGNvbnRhaW5lciA8dWw+XG5cdFx0cHJpb3JpdHlfbmF2X3Vub3JkZXJlZF9saXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLnBhcmFtc1sncHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saXN0X2NsYXNzX25hbWUnXSk7XG5cdFx0cHJpb3JpdHlfbmF2X3Vub3JkZXJlZF9saXN0LnNldEF0dHJpYnV0ZSgncm9sZScsICdtZW51Jyk7XG5cdFx0cHJpb3JpdHlfbmF2X3Vub3JkZXJlZF9saXN0LnNldEF0dHJpYnV0ZSgnYXJpYS1hYmVsJywgJ1JlcGxhY2UgTWUgdy8gTGluayBOYW1lIFN1Ym1lbnUnKTtcblxuXHRcdC8vIEFwcGVuZCB0byBkb21cblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluayk7XG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbS5hcHBlbmRDaGlsZChwcmlvcml0eV9uYXZfdW5vcmRlcmVkX2xpc3QpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wYXJhbXNbJ21haW5fbmF2X3NlbGVjdG9yJ10pLmFwcGVuZENoaWxkKHByaW9yaXR5X25hdl9saXN0X2l0ZW0pO1xuXHR9XG5cblx0cmVzaXplX25hdigpIHtcblx0XHR0aGlzLmNhbGN1bGF0ZVdpZHRocygpO1xuXG5cdFx0Ly8gTW92ZSBpdGVtcyB0byBwcmlvcml0eSBuYXZcblx0XHR3aGlsZSAodGhpcy5zY3JlZW5XaWR0aCA8PSB0aGlzLm1haW5fbmF2X3dpZHRoICYmIHRoaXMuZ2V0X21haW5fbmF2LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcdGNvbnN0IGl0ZW1Ub01vdmUgPSB0aGlzLmdldF9tYWluX25hdi5jaGlsZHJlblt0aGlzLmdldF9tYWluX25hdi5jaGlsZHJlbi5sZW5ndGggLSAyXTtcblx0XHRcdHRoaXMubW92ZVRvUHJpb3JpdHlOYXYoaXRlbVRvTW92ZSk7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZVdpZHRocygpO1xuXHRcdH1cblxuXHRcdC8vIE1vdmUgaXRlbXMgdG8gbWFpbiBuYXZcblx0XHR3aGlsZSAodGhpcy5zY3JlZW5XaWR0aCA+PSB0aGlzLmJyZWFrcG9pbnRzW3RoaXMuYnJlYWtwb2ludHMubGVuZ3RoIC0gMV0gJiYgdGhpcy5nZXRfcHJpb3JpdHlfbmF2X3N1Ym1lbnUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5tb3ZlVG9NYWluTmF2KHRoaXMuZ2V0X3ByaW9yaXR5X25hdl9zdWJtZW51LmNoaWxkcmVuWzBdKTtcblx0XHR9XG5cblx0XHQvLyBUdXJuIG9mZiBwcmlvcml0eSBuYXYgaWYgdW5uZWNlc3Nhcnlcblx0XHRpZiAodGhpcy5icmVha3BvaW50cy5sZW5ndGggPT0gMCkge1xuXHRcdFx0dGhpcy5kZXN0cm95UHJpb3JpdHlOYXYoKTtcblx0XHR9XG5cdH1cblxuXHRjYWxjdWxhdGVXaWR0aHMoKSB7XG5cdFx0dGhpcy5tYWluX25hdl93aWR0aCA9IHRoaXMuZ2V0X21haW5fbmF2X3dpZHRoO1xuXHRcdHRoaXMuc2NyZWVuV2lkdGggPSB0aGlzLmdldF9zY3JlZW5fd2lkdGg7XG5cdH1cblxuXHRtb3ZlVG9Qcmlvcml0eU5hdihpdGVtVG9Nb3ZlKSB7XG5cdFx0dGhpcy5nZXRfcHJpb3JpdHlfbmF2X3N1Ym1lbnUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgaXRlbVRvTW92ZSk7XG5cdFx0dGhpcy5icmVha3BvaW50cy5wdXNoKHRoaXMubWFpbl9uYXZfd2lkdGgpO1xuXHR9XG5cblx0bW92ZVRvTWFpbk5hdihpdGVtVG9Nb3ZlKSB7XG5cdFx0dGhpcy5nZXRfbWFpbl9uYXYuaW5zZXJ0QmVmb3JlKGl0ZW1Ub01vdmUsIHRoaXMuZ2V0X21haW5fbmF2Lmxhc3RFbGVtZW50Q2hpbGQpO1xuXHRcdHRoaXMuYnJlYWtwb2ludHMucG9wKCk7XG5cdH1cblxuXHRkZXN0cm95UHJpb3JpdHlOYXYoKSB7XG5cdFx0dGhpcy5nZXRfcHJpb3JpdHlfbmF2LnJlbW92ZSgpO1xuXHR9XG5cblx0Ly8gSW5pdGlhdGUgY29sbGFwc2FibGUgYXJpYS1leHBhbmRlZCBpdGVtc1xuXHRpbml0aWF0ZUFyaWFFeHBhbmRlZCgpIHtcblx0XHR2YXIgZXhwYW5kZWRfYXJpYV9pdGVtcyA9IG5ldyB3c3VfYnRfYXJpYV9leHBhbmRlZCh7XG5cdFx0XHRuYXZfaXRlbV9zZWxlY3RvcnM6ICcuJyArIHRoaXMucGFyYW1zWydwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpbmtfY2xhc3NfbmFtZSddXG5cdFx0fSk7XG5cdFx0ZXhwYW5kZWRfYXJpYV9pdGVtcy5pbml0KCk7XG5cdH1cblxuXHQvLyBJbml0aWF0ZSBrZXlib2FyZCBjb250cm9scyBmb3IgYWNjZXNzaWJpbGl0eSBzdXBwb3J0XG5cdGluaXRpYXRlS2V5Ym9hcmROYXZpZ2F0aW9uU3VwcG9ydCgpIHtcblx0XHR2YXIgbWVudWJhciA9IG5ldyBNZW51YmFyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wYXJhbXNbJ21haW5fbmF2X3NlbGVjdG9yJ10pKTtcblx0XHRtZW51YmFyLmluaXQoKTtcblx0fVxuXG5cdC8vIEdldHRlcnNcblx0Z2V0IGdldF9zY3JlZW5fd2lkdGgoKSB7XG5cdFx0Y29uc3Qgd2luZG93SW5uZXJXaWR0aCA9IHRoaXMud2luZG93LmlubmVyV2lkdGg7XG5cdFx0cmV0dXJuIHdpbmRvd0lubmVyV2lkdGg7XG5cdH1cblxuXHRnZXQgZ2V0X21haW5fbmF2X3dpZHRoKCkge1xuXHRcdGNvbnN0IG1haW5OYXZJbm5lcldpZHRoID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucGFyYW1zWydtYWluX25hdl9zZWxlY3RvciddKS5vZmZzZXRXaWR0aDtcblx0XHRyZXR1cm4gbWFpbk5hdklubmVyV2lkdGg7XG5cdH1cblxuXHRnZXQgZ2V0X21haW5fbmF2KCkge1xuXHRcdGNvbnN0IG1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucGFyYW1zWydtYWluX25hdl9zZWxlY3RvciddKTtcblx0XHRyZXR1cm4gbWFpbk5hdjtcblx0fVxuXG5cdGdldCBnZXRfcHJpb3JpdHlfbmF2KCkge1xuXHRcdGNvbnN0IHByaW9yaXR5X25hdiA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLnBhcmFtc1sncHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9jbGFzc19uYW1lJ10pO1xuXHRcdHJldHVybiBwcmlvcml0eV9uYXY7XG5cdH1cblxuXHRnZXQgZ2V0X3ByaW9yaXR5X25hdl9zdWJtZW51KCkge1xuXHRcdGNvbnN0IHByaW9yaXR5X25hdiA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLnBhcmFtc1sncHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saXN0X2NsYXNzX25hbWUnXSk7XG5cdFx0cmV0dXJuIHByaW9yaXR5X25hdjtcblx0fVxuXG5cdGdldCBnZXRCcmVha3BvaW50cygpIHtcblx0XHRjb25zdCBicmVha3BvaW50cyA9IHRoaXMuYnJlYWtwb2ludHM7XG5cdFx0cmV0dXJuIGJyZWFrcG9pbnRzO1xuXHR9XG59XG4iLCIvLyAgICAgIFxuLy8gQW4gZXZlbnQgaGFuZGxlciBjYW4gdGFrZSBhbiBvcHRpb25hbCBldmVudCBhcmd1bWVudFxuLy8gYW5kIHNob3VsZCBub3QgcmV0dXJuIGEgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbi8vIEFuIGFycmF5IG9mIGFsbCBjdXJyZW50bHkgcmVnaXN0ZXJlZCBldmVudCBoYW5kbGVycyBmb3IgYSB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBIG1hcCBvZiBldmVudCB0eXBlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIoZXZ0KTsgfSk7XG5cdFx0XHQoYWxsWycqJ10gfHwgW10pLnNsaWNlKCkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIodHlwZSwgZXZ0KTsgfSk7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaXR0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5lcy5qcy5tYXBcbiIsIi8qKlxuICpcbiAqIERlc2lnbiBzeXN0ZW0gYnVpbGQgYWxsIGNvbXBvbmVudHNcbiAqXG4gKi9cblxuLyogR2xvYmFsIGNvbXBvbmVudHMgKi9cbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zcmMvZ2xvYmFsLWZvb3Rlci9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2dsb2JhbC1oZWFkZXIvYnVpbGQnO1xuXG4vKiBTaXRlIGNvbXBvbmVudHMgKi9cbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zcmMvc2l0ZS1mb290ZXIvYnVpbGQnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9zaXRlLWZvb3Rlci1jb25kZW5zZWQvYnVpbGQnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi1ob3Jpem9udGFsL2J1aWxkJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zcmMvc2l0ZS1uYXYtdmVydGljYWwvYnVpbGQnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9zaXRlLWhlYWRlci9idWlsZCc7XG5cbi8qIENvbnRlbnQgY29tcG9uZW50cyAqL1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWhlYWRpbmcvYnVpbGQnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWxpc3QvYnVpbGQnO1xuIiwiLy8gSlNcbmltcG9ydCAnLi9jb250ZW50LWhlYWRpbmcuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vY29udGVudC1oZWFkaW5nLnNjc3MnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gSlNcbmltcG9ydCAnLi9jb250ZW50LWxpc3QuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vY29udGVudC1saXN0LnNjc3MnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gSlNcbmltcG9ydCAnLi9nbG9iYWwtZm9vdGVyLmpzJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL2dsb2JhbC1mb290ZXIuc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL2dsb2JhbC1oZWFkZXIuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vZ2xvYmFsLWhlYWRlci5zY3NzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIEpTXG5pbXBvcnQgJy4vc2l0ZS1mb290ZXItY29uZGVuc2VkLmpzJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL3NpdGUtZm9vdGVyLWNvbmRlbnNlZC5zY3NzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIEpTXG5pbXBvcnQgJy4vc2l0ZS1mb290ZXIuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vc2l0ZS1mb290ZXIuc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL3NpdGUtaGVhZGVyLmpzJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL3NpdGUtaGVhZGVyLnNjc3MnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gSlNcbmltcG9ydCAnLi9zaXRlLW5hdi1ob3Jpem9udGFsLmpzJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL3NpdGUtbmF2LWhvcml6b250YWwuc2Nzcyc7XG4iLCIvLyBUT0RPOiBpbXBvcnQgZnJvbSBOUE0gb25jZSBmaW5hbCB2ZXJzaW9uIGlzIHJlYWR5XG5pbXBvcnQgcHJpb3JpdHlfbmF2IGZyb20gJy4uLy4uLy4uLy4uL3dzdS1idWlsZC10b29scy9qcy93c3UtYnQtcHJpb3JpdHktbmF2JztcblxuY29uc3QgbmF2X2hvcnpfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3Utcy1uYXYtaG9yaXpvbnRhbF9fd3JhcHBlcicpO1xuXG5pZiAodHlwZW9mIG5hdl9ob3J6X3dyYXBwZXIgIT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZfaG9yel93cmFwcGVyICE9IG51bGwpIHtcblxuXHQvKipcblx0ICpcblx0ICogSW5pdCBKU1xuXHQgKlxuXHQgKi9cblx0bmF2X2hvcnpfd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtdS1uby1qcycpO1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBJbml0IHByaW9yaXR5IG5hdlxuXHQgKlxuXHQgKi9cblx0dmFyIGhvcml6b250YWxfbmF2ID0gbmV3IHByaW9yaXR5X25hdih7XG5cdFx0bWFpbl9uYXZfc2VsZWN0b3I6ICcud3N1LXMtbmF2LWhvcml6b250YWxfX25hdi1saXN0Jyxcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2NsYXNzX25hbWU6ICd3c3Utcy1uYXYtaG9yaXpvbnRhbF9fbmF2LWl0ZW0tLW1vcmUnLFxuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGlua19jbGFzc19uYW1lOiAnd3N1LXMtbmF2LWhvcml6b250YWxfX25hdi1saW5rJyxcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpc3RfY2xhc3NfbmFtZTogJ3dzdS1zLW5hdi1ob3Jpem9udGFsX19uYXYtbGlzdC0taGFzLW1vcmUtaXRlbXMnLFxuXHRcdG1vcmVfaW5uZXJfaHRtbDogJ01vcmUnXG5cdH0pO1xuXG5cdGhvcml6b250YWxfbmF2LmluaXQoKTtcblxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gSlNcbmltcG9ydCAnLi9zaXRlLW5hdi12ZXJ0aWNhbC5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9zaXRlLW5hdi12ZXJ0aWNhbC5zY3NzJztcbiIsImltcG9ydCB3c3VfYnRfdmVydGljYWxfbmF2IGZyb20gJy4uLy4uLy4uLy4uL3dzdS1idWlsZC10b29scy9qcy92ZXJ0aWNhbC1uYXYvd3N1LWJ0LXZlcnRpY2FsLW5hdic7XG5cbmNvbnN0IG5hdl92ZXJ0X3dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyJyk7XG5cbmlmICh0eXBlb2YgbmF2X3ZlcnRfd3JhcHBlciAhPSBcInVuZGVmaW5lZFwiICYmIG5hdl92ZXJ0X3dyYXBwZXIgIT0gbnVsbCkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBJbml0IEpTXG5cdCAqXG5cdCAqL1xuXHRuYXZfdmVydF93cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS11LW5vLWpzJyk7XG5cblx0LyoqXG5cdCAqXG5cdCAqIEluaXQgdmVydGljYWwgbmF2XG5cdCAqXG5cdCAqL1xuXHRjb25zdCB2ZXJ0aWNhbF9uYXYgPSBuZXcgd3N1X2J0X3ZlcnRpY2FsX25hdih7XG5cdFx0bmF2X2l0ZW1fc2VsZWN0b3I6ICcud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtbGluaycsXG5cdFx0bmF2X3BhbmVsX2NvbnRyb2xfc2VsZWN0b3I6ICcud3N1LXMtbmF2LXZlcnRpY2FsX19tZW51LWljb24tbGluaycsXG5cdFx0bmF2X3BhbmVsX3NlbGVjdG9yOiAnLndzdS1zLW5hdi12ZXJ0aWNhbF9fd3JhcHBlcicsXG5cdFx0bmF2X2xpc3RfY29udGFpbmVyX3NlbGVjdG9yOiAnLndzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LWxpc3QtY29udGFpbmVyJyxcblx0fSk7XG5cblx0dmVydGljYWxfbmF2LmluaXQoKTtcblxuXHQvKipcblx0ICpcblx0ICogQ2xvc2UgQnV0dG9uXG5cdCAqXG5cdCAqL1xuXHRjb25zdCBjbG9zZV9saW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LWNvbnRhaW5lci1jbG9zZS1saW5rJyk7XG5cblx0Y2xvc2VfbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHR2ZXJ0aWNhbF9uYXYuY2xvc2VQYW5lbCgpO1xuXHR9KTtcblxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==