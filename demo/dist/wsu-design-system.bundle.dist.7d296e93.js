// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../build/dist/wsu-design-system.bundle.dist.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(i) {
    if (t[i]) return t[i].exports;
    var s = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, i) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var s in e) {
      n.d(i, s, function (t) {
        return e[t];
      }.bind(null, s));
    }
    return i;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 16);
}([function (e, t) {}, function (e, t, n) {}, function (e, t) {
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".wsu-g-header__more-icon-link").addEventListener("click", function () {
      console.log("Links toggle -- Coming soon!");
    }), document.querySelector(".wsu-g-header__search-icon-link").addEventListener("click", function () {
      console.log("Search toggle -- Coming soon!");
    }), document.querySelector(".wsu-g-header__menu-icon-link").addEventListener("click", function () {
      window.vertical_nav.togglePanel();
    });
  });
}, function (e, t, n) {}, function (e, t) {}, function (e, t, n) {}, function (e, t) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t, n) {}, function (e, t) {}, function (e, t, n) {}, function (e, t) {}, function (e, t, n) {}, function (e, t) {}, function (e, t, n) {}, function (e, t, n) {
  "use strict";

  n.r(t);
  n(0), n(1), n(2), n(3), n(4), n(5), n(6), n(7);

  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  var s,
      o,
      r,
      a,
      u = function () {
    function e(t) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.params = t, this.nav_items = null, this.nav_items_selectors = t.nav_item_selectors, void 0 === this.nav_items_selectors && console.error("Undefined nav_item_selectors. Please pass the selector you would like to be expandable."), Array.isArray(this.nav_items_selectors) ? this.nav_items_selectors.forEach(function (e, t, n) {
        n[t] = e + '[aria-expanded="true"]';
      }, this.nav_items_selectors) : this.nav_items_selectors = this.nav_items_selectors + '[aria-expanded="true"]';
    }

    var t, n, s;
    return t = e, (n = [{
      key: "init",
      value: function value() {
        this.update_items(), window.addEventListener("resize", this.update_items.bind(this));
      }
    }, {
      key: "update_items",
      value: function value() {
        var e = this;
        Array.isArray(this.nav_items_selectors) ? this.nav_items_selectors.forEach(function (t) {
          e.nav_items = document.querySelectorAll(t), e.nav_items.forEach(function (e) {
            e.setAttribute("aria-expanded", "false");
          }), e.nav_items.forEach(function (e) {
            e.addEventListener("click", function (e) {
              e.preventDefault, "false" == this.getAttribute("aria-expanded") ? this.setAttribute("aria-expanded", "true") : this.setAttribute("aria-expanded", "false");
            });
          });
        }) : (this.nav_items = document.querySelectorAll(this.nav_items_selectors), this.nav_items.forEach(function (e) {
          e.setAttribute("aria-expanded", "false");
        }), this.nav_items.forEach(function (e) {
          e.addEventListener("click", function (e) {
            e.preventDefault, "false" == this.getAttribute("aria-expanded") ? this.setAttribute("aria-expanded", "true") : this.setAttribute("aria-expanded", "false");
          });
        }));
      }
    }]) && i(t.prototype, n), s && i(t, s), e;
  }();

  function l(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  (s = function s(e, t) {
    this.domNode = e, this.menu = t, this.popupMenu = !1, this.isMenubarItem = !1, this.keyCode = Object.freeze({
      TAB: 9,
      RETURN: 13,
      ESC: 27,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    });
  }).prototype.init = function () {
    this.domNode.tabIndex = -1, this.domNode.addEventListener("keydown", this.handleKeydown.bind(this)), this.domNode.addEventListener("focus", this.handleFocus.bind(this)), this.domNode.addEventListener("blur", this.handleBlur.bind(this));
    var e = this.domNode.nextElementSibling;
    e && "UL" === e.tagName && (this.popupMenu = new o(e, this), this.popupMenu.init());
  }, s.prototype.isExpanded = function () {
    return "true" === this.domNode.getAttribute("aria-expanded");
  }, s.prototype.handleKeydown = function (e) {
    var t,
        n,
        i = e.currentTarget,
        s = e.key,
        o = !1;

    switch (e.keyCode) {
      case this.keyCode.SPACE:
      case this.keyCode.RETURN:
        if (this.popupMenu) this.popupMenu.open(), this.popupMenu.setFocusToFirstItem();else {
          try {
            t = new MouseEvent("click", {
              view: window,
              bubbles: !0,
              cancelable: !0
            });
          } catch (e) {
            document.createEvent && (t = document.createEvent("MouseEvents")).initEvent("click", !0, !0);
          }

          i.dispatchEvent(t);
        }
        o = !0;
        break;

      case this.keyCode.UP:
        this.menu.setFocusToPreviousItem(this), o = !0;
        break;

      case this.keyCode.DOWN:
        this.menu.setFocusToNextItem(this), o = !0;
        break;

      case this.keyCode.LEFT:
        this.menu.setFocusToController("previous", !0), this.menu.close(!0), o = !0;
        break;

      case this.keyCode.RIGHT:
        this.popupMenu ? (this.popupMenu.open(), this.popupMenu.setFocusToFirstItem()) : (this.menu.setFocusToController("next", !0), this.menu.close(!0)), o = !0;
        break;

      case this.keyCode.HOME:
      case this.keyCode.PAGEUP:
        this.menu.setFocusToFirstItem(), o = !0;
        break;

      case this.keyCode.END:
      case this.keyCode.PAGEDOWN:
        this.menu.setFocusToLastItem(), o = !0;
        break;

      case this.keyCode.ESC:
        this.menu.setFocusToController(), this.menu.close(!0), o = !0;
        break;

      case this.keyCode.TAB:
        this.menu.setFocusToController();
        break;

      default:
        1 === (n = s).length && n.match(/\S/) && (this.menu.setFocusByFirstCharacter(this, s), o = !0);
    }

    o && (e.stopPropagation(), e.preventDefault());
  }, s.prototype.setExpanded = function (e) {
    e ? this.domNode.setAttribute("aria-expanded", "true") : this.domNode.setAttribute("aria-expanded", "false");
  }, s.prototype.handleFocus = function (e) {
    this.menu.hasFocus = !0;
  }, s.prototype.handleBlur = function (e) {
    this.menu.hasFocus = !1, setTimeout(this.menu.close.bind(this.menu, !1), 300);
  }, s.prototype.handleMouseover = function (e) {
    this.menu.hasHover = !0, this.menu.open(), this.popupMenu && (this.popupMenu.hasHover = !0, this.popupMenu.open());
  }, s.prototype.handleMouseout = function (e) {
    this.popupMenu && (this.popupMenu.hasHover = !1, this.popupMenu.close(!0)), this.menu.hasHover = !1, setTimeout(this.menu.close.bind(this.menu, !1), 300);
  }, (o = function o(e, t) {
    var n = "PopupMenu constructor argument domNode ";
    if (!e instanceof Element) throw new TypeError(n + "is not a DOM Element.");
    if (0 === e.childElementCount) throw new Error(n + "has no element children.");

    for (var i = e.firstElementChild; i;) {
      var s = i.firstElementChild;
      if (s && "A" === s) throw new Error(n + "has descendant elements that are not A elements.");
      i = i.nextElementSibling;
    }

    this.isMenubar = !1, this.domNode = e, this.controller = t, this.menuitems = [], this.firstChars = [], this.firstItem = null, this.lastItem = null, this.hasFocus = !1, this.hasHover = !1;
  }).prototype.init = function () {
    var e, t, n, i, o;

    for (e = this.domNode.firstElementChild; e;) {
      (t = e.firstElementChild) && "A" === t.tagName && ((n = new s(t, this)).init(), this.menuitems.push(n), i = t.textContent.trim(), this.firstChars.push(i.substring(0, 1).toLowerCase())), e = e.nextElementSibling;
    }

    (o = this.menuitems.length) > 0 && (this.firstItem = this.menuitems[0], this.lastItem = this.menuitems[o - 1]);
  }, o.prototype.handleMouseover = function (e) {
    this.hasHover = !0;
  }, o.prototype.handleMouseout = function (e) {
    this.hasHover = !1, setTimeout(this.close.bind(this, !1), 1);
  }, o.prototype.setFocusToController = function (e, t) {
    if ("string" != typeof e && (e = ""), "" !== e) {
      if (this.controller.isMenubarItem) "previous" === e ? this.controller.menu.setFocusToPreviousItem(this.controller, t) : "next" === e && this.controller.menu.setFocusToNextItem(this.controller, t);else if (this.controller.domNode.focus(), this.close(), "next" === e) {
        var n = function (e, t) {
          for (; e;) {
            if (e.isMenubarItem) return e.domNode.focus(), e;
            t && e.menu.close(!0), e.hasFocus = !1, e = e.menu.controller;
          }

          return !1;
        }(this.controller, !1);

        n && n.menu.setFocusToNextItem(n, t);
      }
    } else this.controller && this.controller.domNode && this.controller.domNode.focus();
  }, o.prototype.setFocusToFirstItem = function () {
    this.firstItem.domNode.focus();
  }, o.prototype.setFocusToLastItem = function () {
    this.lastItem.domNode.focus();
  }, o.prototype.setFocusToPreviousItem = function (e) {
    var t;
    e === this.firstItem ? this.lastItem.domNode.focus() : (t = this.menuitems.indexOf(e), this.menuitems[t - 1].domNode.focus());
  }, o.prototype.setFocusToNextItem = function (e) {
    var t;
    e === this.lastItem ? this.firstItem.domNode.focus() : (t = this.menuitems.indexOf(e), this.menuitems[t + 1].domNode.focus());
  }, o.prototype.setFocusByFirstCharacter = function (e, t) {
    var n, i;
    t = t.toLowerCase();
    (n = this.menuitems.indexOf(e) + 1) === this.menuitems.length && (n = 0), -1 === (i = this.getIndexFirstChars(n, t)) && (i = this.getIndexFirstChars(0, t)), i > -1 && this.menuitems[i].domNode.focus();
  }, o.prototype.getIndexFirstChars = function (e, t) {
    for (var n = e; n < this.firstChars.length; n++) {
      if (t === this.firstChars[n]) return n;
    }

    return -1;
  }, o.prototype.open = function () {
    this.controller.setExpanded(!0);
  }, o.prototype.close = function (e) {
    for (var t = this.controller.hasHover, n = this.hasFocus, i = 0; i < this.menuitems.length; i++) {
      var s = this.menuitems[i];
      s.popupMenu && (n |= s.popupMenu.hasFocus);
    }

    this.controller.isMenubarItem || (t = !1), !e && (n || this.hasHover || t) || this.controller.setExpanded(!1);
  }, (r = function r(e, t) {
    this.menu = t, this.domNode = e, this.popupMenu = !1, this.hasFocus = !1, this.hasHover = !1, this.isMenubarItem = !0, this.keyCode = Object.freeze({
      TAB: 9,
      RETURN: 13,
      ESC: 27,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    });
  }).prototype.init = function () {
    this.domNode.tabIndex = -1, this.domNode.addEventListener("keydown", this.handleKeydown.bind(this)), this.domNode.addEventListener("focus", this.handleFocus.bind(this)), this.domNode.addEventListener("blur", this.handleBlur.bind(this));
    var e = this.domNode.nextElementSibling;
    e && "UL" === e.tagName && (this.popupMenu = new o(e, this), this.popupMenu.init());
  }, r.prototype.handleKeydown = function (e) {
    e.currentTarget;
    var t,
        n = e.key,
        i = !1;

    switch (e.keyCode) {
      case this.keyCode.SPACE:
      case this.keyCode.RETURN:
      case this.keyCode.DOWN:
        this.popupMenu && (this.popupMenu.open(), this.popupMenu.setFocusToFirstItem(), i = !0);
        break;

      case this.keyCode.LEFT:
        this.menu.setFocusToPreviousItem(this), i = !0;
        break;

      case this.keyCode.RIGHT:
        this.menu.setFocusToNextItem(this), i = !0;
        break;

      case this.keyCode.UP:
        this.popupMenu && (this.popupMenu.open(), this.popupMenu.setFocusToLastItem(), i = !0);
        break;

      case this.keyCode.HOME:
      case this.keyCode.PAGEUP:
        this.menu.setFocusToFirstItem(), i = !0;
        break;

      case this.keyCode.END:
      case this.keyCode.PAGEDOWN:
        this.menu.setFocusToLastItem(), i = !0;
        break;

      case this.keyCode.TAB:
      case this.keyCode.ESC:
        0 != this.popupMenu && this.popupMenu.close(!0);
        break;

      default:
        1 === (t = n).length && t.match(/\S/) && (this.menu.setFocusByFirstCharacter(this, n), i = !0);
    }

    i && (e.stopPropagation(), e.preventDefault());
  }, r.prototype.setExpanded = function (e) {
    e ? this.domNode.setAttribute("aria-expanded", "true") : this.domNode.setAttribute("aria-expanded", "false");
  }, r.prototype.handleFocus = function (e) {
    this.menu.hasFocus = !0;
  }, r.prototype.handleBlur = function (e) {
    this.menu.hasFocus = !1;
  }, (a = function a(e) {
    var t = "Menubar constructor argument menubarNode ";
    if (!e instanceof Element) throw new TypeError(t + "is not a DOM Element.");
    if (0 === e.childElementCount) throw new Error(t + "has no element children.");

    for (var n = e.firstElementChild; n;) {
      var i = n.firstElementChild;
      if (n && i && "A" !== i.tagName) throw new Error(t + "has child elements are not A elements.");
      n = n.nextElementSibling;
    }

    this.isMenubar = !0, this.domNode = e, this.menubarItems = [], this.firstChars = [], this.firstItem = null, this.lastItem = null, this.hasFocus = !1, this.hasHover = !1;
  }).prototype.init = function () {
    for (var e, t, n, i = this.domNode.firstElementChild; i;) {
      var s = i.firstElementChild;
      i && s && "A" === s.tagName && ((e = new r(s, this)).init(), this.menubarItems.push(e), t = s.textContent.trim(), this.firstChars.push(t.substring(0, 1).toLowerCase())), i = i.nextElementSibling;
    }

    (n = this.menubarItems.length) > 0 && (this.firstItem = this.menubarItems[0], this.lastItem = this.menubarItems[n - 1]), this.firstItem.domNode.tabIndex = 0;
  }, a.prototype.setFocusToItem = function (e) {
    for (var t = !1, n = 0; n < this.menubarItems.length; n++) {
      var i = this.menubarItems[n];
      0 == i.domNode.tabIndex && (t = "true" === i.domNode.getAttribute("aria-expanded")), i.domNode.tabIndex = -1, i.popupMenu && i.popupMenu.close();
    }

    e.domNode.focus(), e.domNode.tabIndex = 0, t && e.popupMenu && e.popupMenu.open();
  }, a.prototype.setFocusToFirstItem = function (e) {
    this.setFocusToItem(this.firstItem);
  }, a.prototype.setFocusToLastItem = function (e) {
    this.setFocusToItem(this.lastItem);
  }, a.prototype.setFocusToPreviousItem = function (e) {
    var t, n;
    e === this.firstItem ? n = this.lastItem : (t = this.menubarItems.indexOf(e), n = this.menubarItems[t - 1]), this.setFocusToItem(n);
  }, a.prototype.setFocusToNextItem = function (e) {
    var t, n;
    e === this.lastItem ? n = this.firstItem : (t = this.menubarItems.indexOf(e), n = this.menubarItems[t + 1]), this.setFocusToItem(n);
  }, a.prototype.setFocusByFirstCharacter = function (e, t) {
    var n, i;
    t = t.toLowerCase(), e.domNode.getAttribute("aria-expanded");
    (n = this.menubarItems.indexOf(e) + 1) === this.menubarItems.length && (n = 0), -1 === (i = this.getIndexFirstChars(n, t)) && (i = this.getIndexFirstChars(0, t)), i > -1 && this.setFocusToItem(this.menubarItems[i]);
  }, a.prototype.getIndexFirstChars = function (e, t) {
    for (var n = e; n < this.firstChars.length; n++) {
      if (t === this.firstChars[n]) return n;
    }

    return -1;
  };

  var c = function () {
    function e(t) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.breakpoints = [], this.document = document, this.main_nav_width = null, this.params = t, this.screenWidth = null, this.window = window;
    }

    var t, n, i;
    return t = e, (n = [{
      key: "init",
      value: function value() {
        this.update_nav(), window.addEventListener("resize", this.update_nav.bind(this));
      }
    }, {
      key: "update_nav",
      value: function value() {
        var e = this;
        this.document.fonts.ready.then(function () {
          null == e.get_priority_nav && e.get_screen_width <= e.get_main_nav_width && e.create_priority_nav(), null != e.get_priority_nav && e.resize_nav(), e.initiateKeyboardNavigationSupport(), e.initiateAriaExpanded();
        });
      }
    }, {
      key: "create_priority_nav",
      value: function value() {
        var e = document.createElement("li"),
            t = document.createElement("a"),
            n = document.createElement("ul");
        e.setAttribute("class", this.params.priority_nav_list_item_class_name), e.setAttribute("role", "none"), t.innerHTML = this.params.more_inner_html, t.setAttribute("href", "#"), t.setAttribute("class", this.params.priority_nav_list_item_link_class_name), t.setAttribute("id", "more"), t.setAttribute("role", "menuitem"), t.setAttribute("tabindex", "-1"), t.setAttribute("aria-expanded", "true"), t.setAttribute("aria-haspopup", "true"), n.setAttribute("class", this.params.priority_nav_list_item_list_class_name), n.setAttribute("role", "menu"), n.setAttribute("aria-abel", "Replace Me w/ Link Name Submenu"), e.appendChild(t), e.appendChild(n), document.querySelector(this.params.main_nav_selector).appendChild(e);
      }
    }, {
      key: "resize_nav",
      value: function value() {
        for (this.calculateWidths(); this.screenWidth <= this.main_nav_width && this.get_main_nav.children.length > 0;) {
          var e = this.get_main_nav.children[this.get_main_nav.children.length - 2];
          this.moveToPriorityNav(e), this.calculateWidths();
        }

        for (; this.screenWidth >= this.breakpoints[this.breakpoints.length - 1] && this.get_priority_nav_submenu.children.length > 0;) {
          this.moveToMainNav(this.get_priority_nav_submenu.children[0]);
        }

        0 == this.breakpoints.length && this.destroyPriorityNav();
      }
    }, {
      key: "calculateWidths",
      value: function value() {
        this.main_nav_width = this.get_main_nav_width, this.screenWidth = this.get_screen_width;
      }
    }, {
      key: "moveToPriorityNav",
      value: function value(e) {
        this.get_priority_nav_submenu.insertAdjacentElement("afterbegin", e), this.breakpoints.push(this.main_nav_width);
      }
    }, {
      key: "moveToMainNav",
      value: function value(e) {
        this.get_main_nav.insertBefore(e, this.get_main_nav.lastElementChild), this.breakpoints.pop();
      }
    }, {
      key: "destroyPriorityNav",
      value: function value() {
        this.get_priority_nav.remove();
      }
    }, {
      key: "initiateAriaExpanded",
      value: function value() {
        new u({
          nav_item_selectors: "." + this.params.priority_nav_list_item_link_class_name
        }).init();
      }
    }, {
      key: "initiateKeyboardNavigationSupport",
      value: function value() {
        new a(document.querySelector(this.params.main_nav_selector)).init();
      }
    }, {
      key: "get_screen_width",
      get: function get() {
        return this.window.innerWidth;
      }
    }, {
      key: "get_main_nav_width",
      get: function get() {
        return this.document.querySelector(this.params.main_nav_selector).offsetWidth;
      }
    }, {
      key: "get_main_nav",
      get: function get() {
        return document.querySelector(this.params.main_nav_selector);
      }
    }, {
      key: "get_priority_nav",
      get: function get() {
        return this.document.querySelector("." + this.params.priority_nav_list_item_class_name);
      }
    }, {
      key: "get_priority_nav_submenu",
      get: function get() {
        return this.document.querySelector("." + this.params.priority_nav_list_item_list_class_name);
      }
    }, {
      key: "getBreakpoints",
      get: function get() {
        return this.breakpoints;
      }
    }]) && l(t.prototype, n), i && l(t, i), e;
  }(),
      h = document.querySelector(".wsu-s-nav-horizontal__wrapper");

  void 0 !== h && null != h && (h.classList.remove("wsu-u-no-js"), new c({
    main_nav_selector: ".wsu-s-nav-horizontal__nav-list",
    priority_nav_list_item_class_name: "wsu-s-nav-horizontal__nav-item--more",
    priority_nav_list_item_link_class_name: "wsu-s-nav-horizontal__nav-link",
    priority_nav_list_item_list_class_name: "wsu-s-nav-horizontal__nav-list--has-more-items",
    more_inner_html: "More"
  }).init());
  n(8);

  function d(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  var m = function () {
    function e(t) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.params = t;
    }

    var t, n, i;
    return t = e, (n = [{
      key: "init",
      value: function value() {
        var e = this;
        this.params.elements.forEach(function (t) {
          e.initiateKeyboardNavigationSupport(t);
        });
      }
    }, {
      key: "initiateKeyboardNavigationSupport",
      value: function value(e) {
        new a(e).init();
      }
    }]) && d(t.prototype, n), i && d(t, i), e;
  }();

  var p = function p(e) {
    return e = e || Object.create(null), {
      on: function on(t, n) {
        (e[t] || (e[t] = [])).push(n);
      },
      off: function off(t, n) {
        e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
      },
      emit: function emit(t, n) {
        (e[t] || []).slice().map(function (e) {
          e(n);
        }), (e["*"] || []).slice().map(function (e) {
          e(t, n);
        });
      }
    };
  };

  function v(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }

  var _ = function () {
    function e(t) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.params = t, this.nav_item_selector = "", this.nav_panel_control_selector = "", this.nav_panel_selector = "", this.nav_list_container_selector = "", this.tree_mode = !1, document.emitter = p(), this.nav_item_selector = t.nav_item_selector, void 0 === this.nav_item_selector && console.error("Undefined nav_item_selector. Please pass the selector you would like to be expandable."), this.nav_panel_control_selector = t.nav_panel_control_selector, void 0 === this.nav_panel_control_selector && console.error("Undefined nav_panel_control_selector. Please pass the selector you would like to be expandable."), this.nav_panel_control = document.querySelector(this.nav_panel_control_selector), this.nav_panel_selector = t.nav_panel_selector, void 0 === this.nav_panel_selector && console.error("Undefined nav_panel_selector. Please pass the selector you would like to be expandable."), this.nav_panel = document.querySelector(this.nav_panel_selector), this.nav_list_container_selector = t.nav_list_container_selector, void 0 === this.nav_list_container_selector && console.error("Undefined nav_list_container_selector. Please pass the selector you would like to be expandable.");
    }

    var t, n, i;
    return t = e, (n = [{
      key: "init",
      value: function value() {
        var e = this,
            t = document.querySelectorAll(this.nav_list_container_selector);
        new m({
          elements: t
        }).init(), document.querySelector(this.nav_panel_control_selector).setAttribute("aria-expanded", "false"), document.querySelectorAll(this.nav_item_selector).forEach(function (e) {
          e.setAttribute("aria-expanded", "false");
        }), this.nav_panel_control.addEventListener("click", this.togglePanel.bind(this)), document.querySelectorAll(".wsu-s-nav-vertical__nav-item--has-children > .wsu-s-nav-vertical__nav-link").forEach(function (t) {
          t.addEventListener("click", e.toggle.bind(e));
        }), document.emitter.on("wsu-vertical-nav--after-open", this.panelOpened.bind(this));
      }
    }, {
      key: "openCurrentTarget",
      value: function value(e) {
        e.preventDefault, e.currentTarget.setAttribute("aria-expanded", "true");
      }
    }, {
      key: "openTarget",
      value: function value(e) {
        e.preventDefault, e.target.setAttribute("aria-expanded", "true");
      }
    }, {
      key: "openPanel",
      value: function value() {
        this.nav_panel_control.setAttribute("aria-expanded", "true"), this.nav_panel.classList.add("wsu-s-nav-vertical__wrapper--open"), document.emitter.emit("wsu-vertical-nav--open"), setTimeout(function () {
          document.emitter.emit("wsu-vertical-nav--after-open");
        }, 600);
      }
    }, {
      key: "close",
      value: function value(e) {
        e.preventDefault, e.target.setAttribute("aria-expanded", "false");
      }
    }, {
      key: "closePanel",
      value: function value() {
        this.nav_panel_control.setAttribute("aria-expanded", "false"), this.nav_panel.classList.remove("wsu-s-nav-vertical__wrapper--open"), document.emitter.emit("wsu-vertical-nav--close");
      }
    }, {
      key: "toggle",
      value: function value(e) {
        "false" == e.currentTarget.getAttribute("aria-expanded") ? this.openCurrentTarget(e) : "false" == e.target.getAttribute("aria-expanded") ? this.openTarget(e) : this.close(e);
      }
    }, {
      key: "togglePanel",
      value: function value() {
        "true" == this.nav_panel_control.getAttribute("aria-expanded") ? this.closePanel() : this.openPanel();
      }
    }, {
      key: "panelOpened",
      value: function value() {
        var e = document.querySelector(".wsu-s-nav-vertical__nav-container-close-link");
        e.style.opacity = 1, e.style.marginTop = 0;

        for (var t = document.querySelectorAll(".wsu-s-nav-vertical__nav-list-container > li"), n = t.length, i = 0; i < n; i++) {
          !function (e) {
            setTimeout(function () {
              t[e].style.opacity = 1, t[e].style.marginLeft = "0";
            }, 250 + 250 * e);
          }(i);
        }

        var s = this;
        window.addEventListener("click", function (e) {
          "wsu-s-nav-vertical__wrapper wsu-s-nav-vertical__wrapper--open" == e.target.className && s.closePanel();
        });
      }
    }]) && v(t.prototype, n), i && v(t, i), e;
  }(),
      f = document.querySelector(".wsu-s-nav-vertical__wrapper");

  void 0 !== f && null != f && (f.classList.remove("wsu-u-no-js"), window.vertical_nav = new _({
    nav_item_selector: ".wsu-s-nav-vertical__nav-link",
    nav_panel_control_selector: ".wsu-s-nav-vertical__menu-icon-link",
    nav_panel_selector: ".wsu-s-nav-vertical__wrapper",
    nav_list_container_selector: ".wsu-s-nav-vertical__nav-list-container"
  }), window.vertical_nav.init(), document.querySelector(".wsu-s-nav-vertical__nav-container-close-link").addEventListener("click", function () {
    window.vertical_nav.closePanel();
  }));
  n(9), n(10), n(11), n(12), n(13), n(14), n(15);
}]);
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58455" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../build/dist/wsu-design-system.bundle.dist.js"], null)
//# sourceMappingURL=/wsu-design-system.bundle.dist.7d296e93.js.map