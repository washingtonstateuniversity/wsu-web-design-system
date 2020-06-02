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
/******/ 	return __webpack_require__(__webpack_require__.s = "./bundles/src/wsu-design-system.content.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundles/src/wsu-design-system.content.js":
/*!**************************************************!*\
  !*** ./bundles/src/wsu-design-system.content.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_src_content_link_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/src/content-link/build */ "./components/src/content-link/build.js");
/* harmony import */ var _components_src_content_paragraph_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/src/content-paragraph/build */ "./components/src/content-paragraph/build.js");
/* harmony import */ var _components_src_content_heading_build__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/src/content-heading/build */ "./components/src/content-heading/build.js");
/* harmony import */ var _components_src_content_form_build__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/src/content-form/build */ "./components/src/content-form/build.js");
/* harmony import */ var _components_src_content_list_build__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/src/content-list/build */ "./components/src/content-list/build.js");
/**
 * All styles included in this file should be general content items
 * scoped to .wsu-c-content. Specific individual components should not be included. 
 */






/***/ }),

/***/ "./components/src/content-form/build.js":
/*!**********************************************!*\
  !*** ./components/src/content-form/build.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-form.js */ "./components/src/content-form/content-form.js");
/* harmony import */ var _content_form_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_form_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-form.scss */ "./components/src/content-form/content-form.scss");
/* harmony import */ var _content_form_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_form_scss__WEBPACK_IMPORTED_MODULE_1__);
// js
 // SCSS



/***/ }),

/***/ "./components/src/content-form/content-form.js":
/*!*****************************************************!*\
  !*** ./components/src/content-form/content-form.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/src/content-form/content-form.scss":
/*!*******************************************************!*\
  !*** ./components/src/content-form/content-form.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./components/src/content-link/build.js":
/*!**********************************************!*\
  !*** ./components/src/content-link/build.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_link_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-link.scss */ "./components/src/content-link/content-link.scss");
/* harmony import */ var _content_link_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_link_scss__WEBPACK_IMPORTED_MODULE_0__);
// SCSS


/***/ }),

/***/ "./components/src/content-link/content-link.scss":
/*!*******************************************************!*\
  !*** ./components/src/content-link/content-link.scss ***!
  \*******************************************************/
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

/***/ "./components/src/content-paragraph/build.js":
/*!***************************************************!*\
  !*** ./components/src/content-paragraph/build.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_paragraph_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-paragraph.scss */ "./components/src/content-paragraph/content-paragraph.scss");
/* harmony import */ var _content_paragraph_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_paragraph_scss__WEBPACK_IMPORTED_MODULE_0__);
// SCSS


/***/ }),

/***/ "./components/src/content-paragraph/content-paragraph.scss":
/*!*****************************************************************!*\
  !*** ./components/src/content-paragraph/content-paragraph.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlcy9zcmMvd3N1LWRlc2lnbi1zeXN0ZW0uY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWZvcm0vYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvY29udGVudC1mb3JtL2NvbnRlbnQtZm9ybS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtaGVhZGluZy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWhlYWRpbmcvY29udGVudC1oZWFkaW5nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvY29udGVudC1saW5rL2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtbGluay9jb250ZW50LWxpbmsuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWxpc3QvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvY29udGVudC1saXN0L2NvbnRlbnQtbGlzdC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtcGFyYWdyYXBoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtcGFyYWdyYXBoL2NvbnRlbnQtcGFyYWdyYXBoLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYnVuZGxlcy9kaXN0L3dzdS1kZXNpZ24tc3lzdGVtLmNvbnRlbnQuYnVuZGxlLmRpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2J1bmRsZXMvc3JjL3dzdS1kZXNpZ24tc3lzdGVtLmNvbnRlbnQuanNcIik7XG4iLCIvKipcbiAqIEFsbCBzdHlsZXMgaW5jbHVkZWQgaW4gdGhpcyBmaWxlIHNob3VsZCBiZSBnZW5lcmFsIGNvbnRlbnQgaXRlbXNcbiAqIHNjb3BlZCB0byAud3N1LWMtY29udGVudC4gU3BlY2lmaWMgaW5kaXZpZHVhbCBjb21wb25lbnRzIHNob3VsZCBub3QgYmUgaW5jbHVkZWQuIFxuICovXG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtbGluay9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtcGFyYWdyYXBoL2J1aWxkJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zcmMvY29udGVudC1oZWFkaW5nL2J1aWxkJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zcmMvY29udGVudC1mb3JtL2J1aWxkJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zcmMvY29udGVudC1saXN0L2J1aWxkJztcbiIsIi8vIGpzXG5pbXBvcnQgJy4vY29udGVudC1mb3JtLmpzJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL2NvbnRlbnQtZm9ybS5zY3NzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIEpTXG5pbXBvcnQgJy4vY29udGVudC1oZWFkaW5nLmpzJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL2NvbnRlbnQtaGVhZGluZy5zY3NzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIFNDU1NcbmltcG9ydCAnLi9jb250ZW50LWxpbmsuc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL2NvbnRlbnQtbGlzdC5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9jb250ZW50LWxpc3Quc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBTQ1NTXG5pbXBvcnQgJy4vY29udGVudC1wYXJhZ3JhcGguc2Nzcyc7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==