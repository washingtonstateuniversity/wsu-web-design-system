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
/******/ 	return __webpack_require__(__webpack_require__.s = "./components/src/global-header/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/src/global-header/global-header.html":
/*!*********************************************************!*\
  !*** ./components/src/global-header/global-header.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/dist/global-header/global-header.html";

/***/ }),

/***/ "./components/src/global-header/global-header.js":
/*!*******************************************************!*\
  !*** ./components/src/global-header/global-header.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wsuwebteam_build_tools_js_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wsuwebteam/build-tools/js/wsu-bt-wds */ "./node_modules/@wsuwebteam/build-tools/js/wsu-bt-wds.js");

/**
 *
 * More links
 *
 */

var global_header_links_toggle = document.querySelector('.wsu-g-header__more-icon-link');

if (typeof global_header_links_toggle != "undefined" && global_header_links_toggle != null) {
  global_header_links_toggle.addEventListener('click', function () {
    console.log('Links toggle -- Coming soon!');
  });
}
/**
 *
 * Search toggle
 *
 */


var global_header_search_toggle = document.querySelector('.wsu-g-header__search-icon-link');

if (typeof global_header_search_toggle != "undefined" && global_header_search_toggle != null) {
  global_header_search_toggle.addEventListener('click', function () {
    console.log('Search toggle -- Coming soon!');
  });
}
/**
 *
 * Vertical nav toggle
 *
 */


var global_header_menu_toggle = document.querySelector('.wsu-g-header__menu-icon-link');

if (typeof global_header_menu_toggle != "undefined" && global_header_menu_toggle != null) {
  global_header_menu_toggle.addEventListener('click', function (e) {
    _wsuwebteam_build_tools_js_wsu_bt_wds__WEBPACK_IMPORTED_MODULE_0__["default"].vertical_nav.toggle_panel(e);
  });
}
/**
 *
 * Hide on scroll
 *
 */


document.addEventListener('scroll', function () {
  setTimeout(function () {
    if (document.body.scrollTop > 30) {
      document.body.classList.add('wsu-g-header--is-hidden');
    } else {
      document.body.classList.remove('wsu-g-header--is-hidden');
    }
  }, 100);
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

/***/ "./components/src/global-header/index.js":
/*!***********************************************!*\
  !*** ./components/src/global-header/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-header.js */ "./components/src/global-header/global-header.js");
/* harmony import */ var _global_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-header.scss */ "./components/src/global-header/global-header.scss");
/* harmony import */ var _global_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_header_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-header.html */ "./components/src/global-header/global-header.html");
/* harmony import */ var _global_header_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_header_html__WEBPACK_IMPORTED_MODULE_2__);
// JS
 // SCSS

 // HTML



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvZ2xvYmFsLWhlYWRlci9nbG9iYWwtaGVhZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvZ2xvYmFsLWhlYWRlci9nbG9iYWwtaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2dsb2JhbC1oZWFkZXIvZ2xvYmFsLWhlYWRlci5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2dsb2JhbC1oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL3dzdS1idC13ZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIl0sIm5hbWVzIjpbImdsb2JhbF9oZWFkZXJfbGlua3NfdG9nZ2xlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJnbG9iYWxfaGVhZGVyX3NlYXJjaF90b2dnbGUiLCJnbG9iYWxfaGVhZGVyX21lbnVfdG9nZ2xlIiwiZSIsIndzdV93ZHMiLCJ2ZXJ0aWNhbF9uYXYiLCJ0b2dnbGVfcGFuZWwiLCJzZXRUaW1lb3V0IiwiYm9keSIsInNjcm9sbFRvcCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFB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Q0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsSUFBSTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYyxFQUFFO0FBQ3JFLG9EQUFvRCxvQkFBb0IsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQztBQUNwQiIsImZpbGUiOiJjb21wb25lbnRzL2Rpc3QvZ2xvYmFsLWhlYWRlci9nbG9iYWwtaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jb21wb25lbnRzL3NyYy9nbG9iYWwtaGVhZGVyL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY29tcG9uZW50cy9kaXN0L2dsb2JhbC1oZWFkZXIvZ2xvYmFsLWhlYWRlci5odG1sXCI7IiwiaW1wb3J0IHdzdV93ZHMgZnJvbSAnQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMvd3N1LWJ0LXdkcyc7XG5cbi8qKlxuICpcbiAqIE1vcmUgbGlua3NcbiAqXG4gKi9cbmNvbnN0IGdsb2JhbF9oZWFkZXJfbGlua3NfdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1nLWhlYWRlcl9fbW9yZS1pY29uLWxpbmsnKTtcblxuaWYgKHR5cGVvZiBnbG9iYWxfaGVhZGVyX2xpbmtzX3RvZ2dsZSAhPSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbF9oZWFkZXJfbGlua3NfdG9nZ2xlICE9IG51bGwpIHtcblx0Z2xvYmFsX2hlYWRlcl9saW5rc190b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ0xpbmtzIHRvZ2dsZSAtLSBDb21pbmcgc29vbiEnKTtcblx0fSk7XG59XG5cbi8qKlxuICpcbiAqIFNlYXJjaCB0b2dnbGVcbiAqXG4gKi9cbmNvbnN0IGdsb2JhbF9oZWFkZXJfc2VhcmNoX3RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3UtZy1oZWFkZXJfX3NlYXJjaC1pY29uLWxpbmsnKTtcblxuaWYgKHR5cGVvZiBnbG9iYWxfaGVhZGVyX3NlYXJjaF90b2dnbGUgIT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWxfaGVhZGVyX3NlYXJjaF90b2dnbGUgIT0gbnVsbCkge1xuXHRnbG9iYWxfaGVhZGVyX3NlYXJjaF90b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc29sZS5sb2coJ1NlYXJjaCB0b2dnbGUgLS0gQ29taW5nIHNvb24hJyk7XG5cdH0pO1xufVxuXG4vKipcbiAqXG4gKiBWZXJ0aWNhbCBuYXYgdG9nZ2xlXG4gKlxuICovXG5jb25zdCBnbG9iYWxfaGVhZGVyX21lbnVfdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1nLWhlYWRlcl9fbWVudS1pY29uLWxpbmsnKTtcblxuaWYgKHR5cGVvZiBnbG9iYWxfaGVhZGVyX21lbnVfdG9nZ2xlICE9IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsX2hlYWRlcl9tZW51X3RvZ2dsZSAhPSBudWxsKSB7XG5cdGdsb2JhbF9oZWFkZXJfbWVudV90b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdHdzdV93ZHMudmVydGljYWxfbmF2LnRvZ2dsZV9wYW5lbChlKTtcblx0fSk7XG59XG5cbi8qKlxuICpcbiAqIEhpZGUgb24gc2Nyb2xsXG4gKlxuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDMwKSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3dzdS1nLWhlYWRlci0taXMtaGlkZGVuJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LWctaGVhZGVyLS1pcy1oaWRkZW4nKTtcblx0XHR9XG5cdH0sIDEwMCk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIEpTXG5pbXBvcnQgJy4vZ2xvYmFsLWhlYWRlci5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9nbG9iYWwtaGVhZGVyLnNjc3MnO1xuXG4vLyBIVE1MXG5pbXBvcnQgJy4vZ2xvYmFsLWhlYWRlci5odG1sJztcbiIsImltcG9ydCBtaXR0IGZyb20gJ21pdHQnO1xuXG5pZiAodHlwZW9mIHdzdV93ZHMgPT0gJ3VuZGVmaW5lZCcpIHtcblx0d2luZG93Wyd3c3Vfd2RzJ10gPSB7fTtcblx0d3N1X3dkcyA9IHdpbmRvdy53c3Vfd2RzO1xufVxuXG53c3Vfd2RzLmVtaXR0ZXIgPSBtaXR0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdzdV93ZHM7XG4iLCIvLyAgICAgIFxuLy8gQW4gZXZlbnQgaGFuZGxlciBjYW4gdGFrZSBhbiBvcHRpb25hbCBldmVudCBhcmd1bWVudFxuLy8gYW5kIHNob3VsZCBub3QgcmV0dXJuIGEgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbi8vIEFuIGFycmF5IG9mIGFsbCBjdXJyZW50bHkgcmVnaXN0ZXJlZCBldmVudCBoYW5kbGVycyBmb3IgYSB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyBBIG1hcCBvZiBldmVudCB0eXBlcyBhbmQgdGhlaXIgY29ycmVzcG9uZGluZyBldmVudCBoYW5kbGVycy5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBcblxuLyoqIE1pdHQ6IFRpbnkgKH4yMDBiKSBmdW5jdGlvbmFsIGV2ZW50IGVtaXR0ZXIgLyBwdWJzdWIuXG4gKiAgQG5hbWUgbWl0dFxuICogIEByZXR1cm5zIHtNaXR0fVxuICovXG5mdW5jdGlvbiBtaXR0KGFsbCAgICAgICAgICAgICAgICAgKSB7XG5cdGFsbCA9IGFsbCB8fCBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG5cdHJldHVybiB7XG5cdFx0LyoqXG5cdFx0ICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gbGlzdGVuIGZvciwgb3IgYFwiKlwiYCBmb3IgYWxsIGV2ZW50c1xuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEZ1bmN0aW9uIHRvIGNhbGwgaW4gcmVzcG9uc2UgdG8gZ2l2ZW4gZXZlbnRcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9uOiBmdW5jdGlvbiBvbih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBSZW1vdmUgYW4gZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGVcdFR5cGUgb2YgZXZlbnQgdG8gdW5yZWdpc3RlciBgaGFuZGxlcmAgZnJvbSwgb3IgYFwiKlwiYFxuXHRcdCAqIEBwYXJhbSAge0Z1bmN0aW9ufSBoYW5kbGVyIEhhbmRsZXIgZnVuY3Rpb24gdG8gcmVtb3ZlXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvZmY6IGZ1bmN0aW9uIG9mZih0eXBlICAgICAgICAsIGhhbmRsZXIgICAgICAgICAgICAgICkge1xuXHRcdFx0aWYgKGFsbFt0eXBlXSkge1xuXHRcdFx0XHRhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogSW52b2tlIGFsbCBoYW5kbGVycyBmb3IgdGhlIGdpdmVuIHR5cGUuXG5cdFx0ICogSWYgcHJlc2VudCwgYFwiKlwiYCBoYW5kbGVycyBhcmUgaW52b2tlZCBhZnRlciB0eXBlLW1hdGNoZWQgaGFuZGxlcnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSAgVGhlIGV2ZW50IHR5cGUgdG8gaW52b2tlXG5cdFx0ICogQHBhcmFtIHtBbnl9IFtldnRdICBBbnkgdmFsdWUgKG9iamVjdCBpcyByZWNvbW1lbmRlZCBhbmQgcG93ZXJmdWwpLCBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyXG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRlbWl0OiBmdW5jdGlvbiBlbWl0KHR5cGUgICAgICAgICwgZXZ0ICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIoZXZ0KTsgfSk7XG5cdFx0XHQoYWxsWycqJ10gfHwgW10pLnNsaWNlKCkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IGhhbmRsZXIodHlwZSwgZXZ0KTsgfSk7XG5cdFx0fVxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaXR0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWl0dC5lcy5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=