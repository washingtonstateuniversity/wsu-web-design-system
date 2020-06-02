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
/******/ 	return __webpack_require__(__webpack_require__.s = "./bundles/src/wsu-design-system.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bundles/src/wsu-design-system.js":
/*!******************************************!*\
  !*** ./bundles/src/wsu-design-system.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_src_containers_build__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/src/containers/build */ "./components/src/containers/build.js");
/* harmony import */ var _components_src_global_footer_build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/src/global-footer/build */ "./components/src/global-footer/build.js");
/* harmony import */ var _components_src_global_header_build__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/src/global-header/build */ "./components/src/global-header/build.js");
/* harmony import */ var _components_src_global_colors_build__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/src/global-colors/build */ "./components/src/global-colors/build.js");
/* harmony import */ var _components_src_site_footer_build__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/src/site-footer/build */ "./components/src/site-footer/build.js");
/* harmony import */ var _components_src_site_footer_condensed_build__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/src/site-footer-condensed/build */ "./components/src/site-footer-condensed/build.js");
/* harmony import */ var _components_src_site_nav_horizontal_build__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/src/site-nav-horizontal/build */ "./components/src/site-nav-horizontal/build.js");
/* harmony import */ var _components_src_site_nav_vertical_build__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/src/site-nav-vertical/build */ "./components/src/site-nav-vertical/build.js");
/* harmony import */ var _components_src_site_header_build__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/src/site-header/build */ "./components/src/site-header/build.js");
/* harmony import */ var _components_src_content_button_build__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/src/content-button/build */ "./components/src/content-button/build.js");
/* harmony import */ var _components_src_content_card_build__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/src/content-card/build */ "./components/src/content-card/build.js");
/* harmony import */ var _components_src_content_form_build__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/src/content-form/build */ "./components/src/content-form/build.js");
/* harmony import */ var _components_src_content_heading_build__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/src/content-heading/build */ "./components/src/content-heading/build.js");
/* harmony import */ var _components_src_content_hero_build__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/src/content-hero/build */ "./components/src/content-hero/build.js");
/* harmony import */ var _components_src_content_link_build__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/src/content-link/build */ "./components/src/content-link/build.js");
/* harmony import */ var _components_src_content_list_build__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/src/content-list/build */ "./components/src/content-list/build.js");
/* harmony import */ var _components_src_content_column_build__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/src/content-column/build */ "./components/src/content-column/build.js");
/* harmony import */ var _components_src_content_paragraph_build__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/src/content-paragraph/build */ "./components/src/content-paragraph/build.js");
/* harmony import */ var _components_src_content_article_copy_build__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/src/content-article-copy/build */ "./components/src/content-article-copy/build.js");
/* harmony import */ var _components_src_content_article_header_build__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/src/content-article-header/build */ "./components/src/content-article-header/build.js");
/* harmony import */ var _components_src_content_article_footer_build__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/src/content-article-footer/build */ "./components/src/content-article-footer/build.js");
/**
 *
 * Design system build all components
 *
 */

/* Global components */




/* Site components */






/* Content components */














/***/ }),

/***/ "./components/src/containers/build.js":
/*!********************************************!*\
  !*** ./components/src/containers/build.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers.scss */ "./components/src/containers/containers.scss");
/* harmony import */ var _containers_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_containers_scss__WEBPACK_IMPORTED_MODULE_0__);
// SCSS


/***/ }),

/***/ "./components/src/containers/containers.scss":
/*!***************************************************!*\
  !*** ./components/src/containers/containers.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/content-article-copy/build.js":
/*!******************************************************!*\
  !*** ./components/src/content-article-copy/build.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_article_copy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-article-copy.js */ "./components/src/content-article-copy/content-article-copy.js");
/* harmony import */ var _content_article_copy_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_article_copy_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_article_copy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-article-copy.scss */ "./components/src/content-article-copy/content-article-copy.scss");
/* harmony import */ var _content_article_copy_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_article_copy_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/content-article-copy/content-article-copy.js":
/*!*********************************************************************!*\
  !*** ./components/src/content-article-copy/content-article-copy.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/src/content-article-copy/content-article-copy.scss":
/*!***********************************************************************!*\
  !*** ./components/src/content-article-copy/content-article-copy.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/content-article-footer/build.js":
/*!********************************************************!*\
  !*** ./components/src/content-article-footer/build.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_article_footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-article-footer.js */ "./components/src/content-article-footer/content-article-footer.js");
/* harmony import */ var _content_article_footer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_article_footer_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_article_footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-article-footer.scss */ "./components/src/content-article-footer/content-article-footer.scss");
/* harmony import */ var _content_article_footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_article_footer_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/content-article-footer/content-article-footer.js":
/*!*************************************************************************!*\
  !*** ./components/src/content-article-footer/content-article-footer.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/src/content-article-footer/content-article-footer.scss":
/*!***************************************************************************!*\
  !*** ./components/src/content-article-footer/content-article-footer.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/content-article-header/build.js":
/*!********************************************************!*\
  !*** ./components/src/content-article-header/build.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_article_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-article-header.js */ "./components/src/content-article-header/content-article-header.js");
/* harmony import */ var _content_article_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_article_header_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_article_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-article-header.scss */ "./components/src/content-article-header/content-article-header.scss");
/* harmony import */ var _content_article_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_article_header_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/content-article-header/content-article-header.js":
/*!*************************************************************************!*\
  !*** ./components/src/content-article-header/content-article-header.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/src/content-article-header/content-article-header.scss":
/*!***************************************************************************!*\
  !*** ./components/src/content-article-header/content-article-header.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/content-button/build.js":
/*!************************************************!*\
  !*** ./components/src/content-button/build.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-button.scss */ "./components/src/content-button/content-button.scss");
/* harmony import */ var _content_button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_button_scss__WEBPACK_IMPORTED_MODULE_0__);
// SCSS


/***/ }),

/***/ "./components/src/content-button/content-button.scss":
/*!***********************************************************!*\
  !*** ./components/src/content-button/content-button.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/content-card/build.js":
/*!**********************************************!*\
  !*** ./components/src/content-card/build.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-card.js */ "./components/src/content-card/content-card.js");
/* harmony import */ var _content_card_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-card.scss */ "./components/src/content-card/content-card.scss");
/* harmony import */ var _content_card_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_card_scss__WEBPACK_IMPORTED_MODULE_1__);
// js
 // SCSS



/***/ }),

/***/ "./components/src/content-card/content-card.js":
/*!*****************************************************!*\
  !*** ./components/src/content-card/content-card.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var objectFitPolyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! objectFitPolyfill */ "./node_modules/objectFitPolyfill/dist/objectFitPolyfill.min.js");
/* harmony import */ var objectFitPolyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(objectFitPolyfill__WEBPACK_IMPORTED_MODULE_0__);

objectFitPolyfill();

/***/ }),

/***/ "./components/src/content-card/content-card.scss":
/*!*******************************************************!*\
  !*** ./components/src/content-card/content-card.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/src/content-column/build.js":
/*!************************************************!*\
  !*** ./components/src/content-column/build.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_column_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-column.js */ "./components/src/content-column/content-column.js");
/* harmony import */ var _content_column_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_column_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_column_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-column.scss */ "./components/src/content-column/content-column.scss");
/* harmony import */ var _content_column_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_column_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



/***/ }),

/***/ "./components/src/content-column/content-column.js":
/*!*********************************************************!*\
  !*** ./components/src/content-column/content-column.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/src/content-column/content-column.scss":
/*!***********************************************************!*\
  !*** ./components/src/content-column/content-column.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "./components/src/content-hero/build.js":
/*!**********************************************!*\
  !*** ./components/src/content-hero/build.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_hero_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-hero.scss */ "./components/src/content-hero/content-hero.scss");
/* harmony import */ var _content_hero_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_hero_scss__WEBPACK_IMPORTED_MODULE_0__);
// SCSS


/***/ }),

/***/ "./components/src/content-hero/content-hero.scss":
/*!*******************************************************!*\
  !*** ./components/src/content-hero/content-hero.scss ***!
  \*******************************************************/
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

/***/ }),

/***/ "./components/src/global-colors/build.js":
/*!***********************************************!*\
  !*** ./components/src/global-colors/build.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_colors_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global-colors.scss */ "./components/src/global-colors/global-colors.scss");
/* harmony import */ var _global_colors_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_global_colors_scss__WEBPACK_IMPORTED_MODULE_0__);
// SCSS


/***/ }),

/***/ "./components/src/global-colors/global-colors.scss":
/*!*********************************************************!*\
  !*** ./components/src/global-colors/global-colors.scss ***!
  \*********************************************************/
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
/* harmony import */ var _global_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global-header.scss */ "./components/src/global-header/global-header.scss");
/* harmony import */ var _global_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_global_header_scss__WEBPACK_IMPORTED_MODULE_1__);
// JS
 // SCSS



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


/***/ }),

/***/ "./node_modules/objectFitPolyfill/dist/objectFitPolyfill.min.js":
/*!**********************************************************************!*\
  !*** ./node_modules/objectFitPolyfill/dist/objectFitPolyfill.min.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(){"use strict";if("undefined"!=typeof window){var t=window.navigator.userAgent.match(/Edge\/(\d{2})\./),n=!!t&&16<=parseInt(t[1],10);if(!("objectFit"in document.documentElement.style!=!1)||n){var o=function(t,e,i){var n,o,l,a,d;if((i=i.split(" ")).length<2&&(i[1]=i[0]),"x"===t)n=i[0],o=i[1],l="left",a="right",d=e.clientWidth;else{if("y"!==t)return;n=i[1],o=i[0],l="top",a="bottom",d=e.clientHeight}if(n!==l&&o!==l){if(n!==a&&o!==a)return"center"===n||"50%"===n?(e.style[l]="50%",void(e.style["margin-"+l]=d/-2+"px")):void(0<=n.indexOf("%")?(n=parseInt(n))<50?(e.style[l]=n+"%",e.style["margin-"+l]=d*(n/-100)+"px"):(n=100-n,e.style[a]=n+"%",e.style["margin-"+a]=d*(n/-100)+"px"):e.style[l]=n);e.style[a]="0"}else e.style[l]="0"},l=function(t){var e=t.dataset?t.dataset.objectFit:t.getAttribute("data-object-fit"),i=t.dataset?t.dataset.objectPosition:t.getAttribute("data-object-position");e=e||"cover",i=i||"50% 50%";var n=t.parentNode;return function(t){var e=window.getComputedStyle(t,null),i=e.getPropertyValue("position"),n=e.getPropertyValue("overflow"),o=e.getPropertyValue("display");i&&"static"!==i||(t.style.position="relative"),"hidden"!==n&&(t.style.overflow="hidden"),o&&"inline"!==o||(t.style.display="block"),0===t.clientHeight&&(t.style.height="100%"),-1===t.className.indexOf("object-fit-polyfill")&&(t.className=t.className+" object-fit-polyfill")}(n),function(t){var e=window.getComputedStyle(t,null),i={"max-width":"none","max-height":"none","min-width":"0px","min-height":"0px",top:"auto",right:"auto",bottom:"auto",left:"auto","margin-top":"0px","margin-right":"0px","margin-bottom":"0px","margin-left":"0px"};for(var n in i)e.getPropertyValue(n)!==i[n]&&(t.style[n]=i[n])}(t),t.style.position="absolute",t.style.width="auto",t.style.height="auto","scale-down"===e&&(e=t.clientWidth<n.clientWidth&&t.clientHeight<n.clientHeight?"none":"contain"),"none"===e?(o("x",t,i),void o("y",t,i)):"fill"===e?(t.style.width="100%",t.style.height="100%",o("x",t,i),void o("y",t,i)):(t.style.height="100%",void("cover"===e&&t.clientWidth>n.clientWidth||"contain"===e&&t.clientWidth<n.clientWidth?(t.style.top="0",t.style.marginTop="0",o("x",t,i)):(t.style.width="100%",t.style.height="auto",t.style.left="0",t.style.marginLeft="0",o("y",t,i))))},e=function(t){if(void 0===t||t instanceof Event)t=document.querySelectorAll("[data-object-fit]");else if(t&&t.nodeName)t=[t];else{if("object"!=typeof t||!t.length||!t[0].nodeName)return!1;t=t}for(var e=0;e<t.length;e++)if(t[e].nodeName){var i=t[e].nodeName.toLowerCase();if("img"===i){if(n)continue;t[e].complete?l(t[e]):t[e].addEventListener("load",function(){l(this)})}else"video"===i?0<t[e].readyState?l(t[e]):t[e].addEventListener("loadedmetadata",function(){l(this)}):l(t[e])}return!0};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e(),window.addEventListener("resize",e),window.objectFitPolyfill=e}else window.objectFitPolyfill=function(){return!1}}}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYnVuZGxlcy9zcmMvd3N1LWRlc2lnbi1zeXN0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvY29udGFpbmVycy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250YWluZXJzL2NvbnRhaW5lcnMuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWFydGljbGUtY29weS9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWFydGljbGUtY29weS9jb250ZW50LWFydGljbGUtY29weS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtYXJ0aWNsZS1mb290ZXIvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvY29udGVudC1hcnRpY2xlLWZvb3Rlci9jb250ZW50LWFydGljbGUtZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvY29udGVudC1hcnRpY2xlLWhlYWRlci9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWFydGljbGUtaGVhZGVyL2NvbnRlbnQtYXJ0aWNsZS1oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWJ1dHRvbi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWJ1dHRvbi9jb250ZW50LWJ1dHRvbi5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtY2FyZC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWNhcmQvY29udGVudC1jYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtY2FyZC9jb250ZW50LWNhcmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWNvbHVtbi9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWNvbHVtbi9jb250ZW50LWNvbHVtbi5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtZm9ybS9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWZvcm0vY29udGVudC1mb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvY29udGVudC1oZWFkaW5nL2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtaGVhZGluZy9jb250ZW50LWhlYWRpbmcuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWhlcm8vYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvY29udGVudC1oZXJvL2NvbnRlbnQtaGVyby5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtbGluay9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWxpbmsvY29udGVudC1saW5rLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvY29udGVudC1saXN0L2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtbGlzdC9jb250ZW50LWxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LXBhcmFncmFwaC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9jb250ZW50LXBhcmFncmFwaC9jb250ZW50LXBhcmFncmFwaC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2dsb2JhbC1jb2xvcnMvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvZ2xvYmFsLWNvbG9ycy9nbG9iYWwtY29sb3JzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvZ2xvYmFsLWZvb3Rlci9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9nbG9iYWwtZm9vdGVyL2dsb2JhbC1mb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9nbG9iYWwtaGVhZGVyL2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL2dsb2JhbC1oZWFkZXIvZ2xvYmFsLWhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9nbG9iYWwtaGVhZGVyL2dsb2JhbC1oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLWZvb3Rlci1jb25kZW5zZWQvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1mb290ZXItY29uZGVuc2VkL3NpdGUtZm9vdGVyLWNvbmRlbnNlZC5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtZm9vdGVyL2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtZm9vdGVyL3NpdGUtZm9vdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1oZWFkZXIvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zcmMvc2l0ZS1oZWFkZXIvc2l0ZS1oZWFkZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi1ob3Jpem9udGFsL2J1aWxkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3JjL3NpdGUtbmF2LWhvcml6b250YWwvc2l0ZS1uYXYtaG9yaXpvbnRhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi1ob3Jpem9udGFsL3NpdGUtbmF2LWhvcml6b250YWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi12ZXJ0aWNhbC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi12ZXJ0aWNhbC9zaXRlLW5hdi12ZXJ0aWNhbC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi12ZXJ0aWNhbC9zaXRlLW5hdi12ZXJ0aWNhbC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad3N1d2VidGVhbS9idWlsZC10b29scy9qcy9hcmlhLWV4cGFuZGVkL3dzdS1idC1hcmlhLWV4cGFuZGVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad3N1d2VidGVhbS9idWlsZC10b29scy9qcy9rZXlib2FyZC1uYXYtYWNjZXNzaWJpbGl0eS9NZW51YmFySXRlbUxpbmtzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad3N1d2VidGVhbS9idWlsZC10b29scy9qcy9rZXlib2FyZC1uYXYtYWNjZXNzaWJpbGl0eS9NZW51YmFyTGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L1BvcHVwTWVudUl0ZW1MaW5rcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMva2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHkvUG9wdXBNZW51TGlua3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L3dzdS1idC1rZXlib2FyZC1uYXYtYWNjZXNzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMvdmVydGljYWwtbmF2L3dzdS1idC12ZXJ0aWNhbC1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL3dzdS1idC1wcmlvcml0eS1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL3dzdS1idC13ZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vYmplY3RGaXRQb2x5ZmlsbC9kaXN0L29iamVjdEZpdFBvbHlmaWxsLm1pbi5qcyJdLCJuYW1lcyI6WyJvYmplY3RGaXRQb2x5ZmlsbCIsImdsb2JhbF9oZWFkZXJfbGlua3NfdG9nZ2xlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJnbG9iYWxfaGVhZGVyX3NlYXJjaF90b2dnbGUiLCJnbG9iYWxfaGVhZGVyX21lbnVfdG9nZ2xlIiwiZSIsIndzdV93ZHMiLCJ2ZXJ0aWNhbF9uYXYiLCJ0b2dnbGVfcGFuZWwiLCJzZXRUaW1lb3V0IiwiYm9keSIsInNjcm9sbFRvcCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm5hdl9ob3J6X3dyYXBwZXIiLCJob3Jpem9udGFsX25hdiIsInByaW9yaXR5X25hdiIsIm1haW5fbmF2X3NlbGVjdG9yIiwicHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9jbGFzc19uYW1lIiwicHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rX2NsYXNzX25hbWUiLCJwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpc3RfY2xhc3NfbmFtZSIsIm1vcmVfaW5uZXJfaHRtbCIsImluaXQiLCJuYXZfdmVydF93cmFwcGVyIiwid3N1X2J0X3dkcyIsIndzdV9idF92ZXJ0aWNhbF9uYXYiLCJuYXZfaXRlbV9zZWxlY3RvciIsIm5hdl9wYW5lbF9jb250cm9sX3NlbGVjdG9yIiwibmF2X3BhbmVsX3NlbGVjdG9yIiwibmF2X2xpc3RfY29udGFpbmVyX3NlbGVjdG9yIiwic2hvd19sb2dzIiwic3RhcnRfY29sbGFwc2VkX3dpZHRoIiwiY2xvc2VfbGluayIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VfcGFuZWwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFNQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFFQUEsaUJBQWlCLEc7Ozs7Ozs7Ozs7O0FDRmpCLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBOzs7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QUFTO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7OztBQ2xKUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUQ7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsd0JBQXdCO0FBQ3hCLHNCQUFzQjs7QUFFdEIsdUJBQXVCO0FBQ3ZCLHNCQUFzQjs7QUFFdEIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsNkRBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsZ0JBQWdCLDhCQUE4QjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7OztBQ3hMUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkM7O0FBRTdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHlEQUFTO0FBQ2hDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7OztBQ3BNUDtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0Q7O0FBRWhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCLHNCQUFzQjs7QUFFdEIsdUJBQXVCO0FBQ3ZCLHNCQUFzQjs7QUFFdEIsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsNERBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztB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O0FDM0tBO0FBQUE7QUFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixvREFBSTs7QUFFUCxzRUFBTyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDVHZCO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBOzs7Ozs7QUFNQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLElBQUk7QUFDakI7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWMsRUFBRTtBQUNyRSxvREFBb0Qsb0JBQW9CLEVBQUU7QUFDMUU7QUFDQTtBQUNBOztBQUVlLG1FQUFJLEVBQUM7QUFDcEI7Ozs7Ozs7Ozs7OztBQy9EQSxZQUFZLGFBQWEsK0JBQStCLGtEQUFrRCxFQUFFLG1DQUFtQywyREFBMkQsc0JBQXNCLGNBQWMsbUdBQW1HLEtBQUssa0JBQWtCLGtEQUFrRCxpQkFBaUIsc1JBQXNSLGVBQWUsb0JBQW9CLGVBQWUsa0pBQWtKLDRCQUE0QixtQkFBbUIsbUJBQW1CLHdJQUF3SSxrUkFBa1IsZ0JBQWdCLHlDQUF5QyxpTkFBaU4sK0RBQStELDhpQkFBOGlCLGVBQWUsbUZBQW1GLDRCQUE0QixLQUFLLDBEQUEwRCxJQUFJLFlBQVksV0FBVyxzQkFBc0Isa0NBQWtDLGNBQWMsY0FBYyw4REFBOEQsUUFBUSxFQUFFLDRGQUE0RixRQUFRLFVBQVUsVUFBVSxtSkFBbUoseUNBQXlDLFdBQVcsRyIsImZpbGUiOiJidW5kbGVzL2Rpc3Qvd3N1LWRlc2lnbi1zeXN0ZW0uYnVuZGxlLmRpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2J1bmRsZXMvc3JjL3dzdS1kZXNpZ24tc3lzdGVtLmpzXCIpO1xuIiwiLyoqXG4gKlxuICogRGVzaWduIHN5c3RlbSBidWlsZCBhbGwgY29tcG9uZW50c1xuICpcbiAqL1xuXG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRhaW5lcnMvYnVpbGQnO1xuXG4vKiBHbG9iYWwgY29tcG9uZW50cyAqL1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9nbG9iYWwtZm9vdGVyL2J1aWxkJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zcmMvZ2xvYmFsLWhlYWRlci9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2dsb2JhbC1jb2xvcnMvYnVpbGQnO1xuXG4vKiBTaXRlIGNvbXBvbmVudHMgKi9cbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zcmMvc2l0ZS1mb290ZXIvYnVpbGQnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9zaXRlLWZvb3Rlci1jb25kZW5zZWQvYnVpbGQnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9zaXRlLW5hdi1ob3Jpem9udGFsL2J1aWxkJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zcmMvc2l0ZS1uYXYtdmVydGljYWwvYnVpbGQnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9zaXRlLWhlYWRlci9idWlsZCc7XG5cbi8qIENvbnRlbnQgY29tcG9uZW50cyAqL1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWJ1dHRvbi9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtY2FyZC9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtZm9ybS9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtaGVhZGluZy9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtaGVyby9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtbGluay9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtbGlzdC9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtY29sdW1uL2J1aWxkJztcbmltcG9ydCAnLi4vLi4vY29tcG9uZW50cy9zcmMvY29udGVudC1wYXJhZ3JhcGgvYnVpbGQnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWFydGljbGUtY29weS9idWlsZCc7XG5pbXBvcnQgJy4uLy4uL2NvbXBvbmVudHMvc3JjL2NvbnRlbnQtYXJ0aWNsZS1oZWFkZXIvYnVpbGQnO1xuaW1wb3J0ICcuLi8uLi9jb21wb25lbnRzL3NyYy9jb250ZW50LWFydGljbGUtZm9vdGVyL2J1aWxkJztcbiIsIi8vIFNDU1NcbmltcG9ydCAnLi9jb250YWluZXJzLnNjc3MnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gSlNcbmltcG9ydCAnLi9jb250ZW50LWFydGljbGUtY29weS5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9jb250ZW50LWFydGljbGUtY29weS5zY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL2NvbnRlbnQtYXJ0aWNsZS1mb290ZXIuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vY29udGVudC1hcnRpY2xlLWZvb3Rlci5zY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL2NvbnRlbnQtYXJ0aWNsZS1oZWFkZXIuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vY29udGVudC1hcnRpY2xlLWhlYWRlci5zY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBTQ1NTXG5pbXBvcnQgJy4vY29udGVudC1idXR0b24uc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBqc1xuaW1wb3J0ICcuL2NvbnRlbnQtY2FyZC5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9jb250ZW50LWNhcmQuc2Nzcyc7XG4iLCJpbXBvcnQgJ29iamVjdEZpdFBvbHlmaWxsJztcblxub2JqZWN0Rml0UG9seWZpbGwoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIEpTXG5pbXBvcnQgJy4vY29udGVudC1jb2x1bW4uanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vY29udGVudC1jb2x1bW4uc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBqc1xuaW1wb3J0ICcuL2NvbnRlbnQtZm9ybS5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9jb250ZW50LWZvcm0uc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL2NvbnRlbnQtaGVhZGluZy5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9jb250ZW50LWhlYWRpbmcuc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBTQ1NTXG5pbXBvcnQgJy4vY29udGVudC1oZXJvLnNjc3MnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gU0NTU1xuaW1wb3J0ICcuL2NvbnRlbnQtbGluay5zY3NzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIEpTXG5pbXBvcnQgJy4vY29udGVudC1saXN0LmpzJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL2NvbnRlbnQtbGlzdC5zY3NzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIFNDU1NcbmltcG9ydCAnLi9jb250ZW50LXBhcmFncmFwaC5zY3NzJzsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBTQ1NTXG5pbXBvcnQgJy4vZ2xvYmFsLWNvbG9ycy5zY3NzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIEpTXG5pbXBvcnQgJy4vZ2xvYmFsLWZvb3Rlci5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9nbG9iYWwtZm9vdGVyLnNjc3MnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gSlNcbmltcG9ydCAnLi9nbG9iYWwtaGVhZGVyLmpzJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL2dsb2JhbC1oZWFkZXIuc2Nzcyc7XG4iLCJpbXBvcnQgd3N1X3dkcyBmcm9tICdAd3N1d2VidGVhbS9idWlsZC10b29scy9qcy93c3UtYnQtd2RzJztcblxuLyoqXG4gKlxuICogTW9yZSBsaW5rc1xuICpcbiAqL1xuY29uc3QgZ2xvYmFsX2hlYWRlcl9saW5rc190b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LWctaGVhZGVyX19tb3JlLWljb24tbGluaycpO1xuXG5pZiAodHlwZW9mIGdsb2JhbF9oZWFkZXJfbGlua3NfdG9nZ2xlICE9IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsX2hlYWRlcl9saW5rc190b2dnbGUgIT0gbnVsbCkge1xuXHRnbG9iYWxfaGVhZGVyX2xpbmtzX3RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zb2xlLmxvZygnTGlua3MgdG9nZ2xlIC0tIENvbWluZyBzb29uIScpO1xuXHR9KTtcbn1cblxuLyoqXG4gKlxuICogU2VhcmNoIHRvZ2dsZVxuICpcbiAqL1xuY29uc3QgZ2xvYmFsX2hlYWRlcl9zZWFyY2hfdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1nLWhlYWRlcl9fc2VhcmNoLWljb24tbGluaycpO1xuXG5pZiAodHlwZW9mIGdsb2JhbF9oZWFkZXJfc2VhcmNoX3RvZ2dsZSAhPSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbF9oZWFkZXJfc2VhcmNoX3RvZ2dsZSAhPSBudWxsKSB7XG5cdGdsb2JhbF9oZWFkZXJfc2VhcmNoX3RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblx0XHRjb25zb2xlLmxvZygnU2VhcmNoIHRvZ2dsZSAtLSBDb21pbmcgc29vbiEnKTtcblx0fSk7XG59XG5cbi8qKlxuICpcbiAqIFZlcnRpY2FsIG5hdiB0b2dnbGVcbiAqXG4gKi9cbmNvbnN0IGdsb2JhbF9oZWFkZXJfbWVudV90b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LWctaGVhZGVyX19tZW51LWljb24tbGluaycpO1xuXG5pZiAodHlwZW9mIGdsb2JhbF9oZWFkZXJfbWVudV90b2dnbGUgIT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWxfaGVhZGVyX21lbnVfdG9nZ2xlICE9IG51bGwpIHtcblx0Z2xvYmFsX2hlYWRlcl9tZW51X3RvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0d3N1X3dkcy52ZXJ0aWNhbF9uYXYudG9nZ2xlX3BhbmVsKGUpO1xuXHR9KTtcbn1cblxuLyoqXG4gKlxuICogSGlkZSBvbiBzY3JvbGxcbiAqXG4gKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0aWYgKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID4gMzApIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd3N1LWctaGVhZGVyLS1pcy1oaWRkZW4nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtZy1oZWFkZXItLWlzLWhpZGRlbicpO1xuXHRcdH1cblx0fSwgMTAwKTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gSlNcbmltcG9ydCAnLi9zaXRlLWZvb3Rlci1jb25kZW5zZWQuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vc2l0ZS1mb290ZXItY29uZGVuc2VkLnNjc3MnO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gSlNcbmltcG9ydCAnLi9zaXRlLWZvb3Rlci5qcyc7XG5cbi8vIFNDU1NcbmltcG9ydCAnLi9zaXRlLWZvb3Rlci5zY3NzJztcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIEpTXG5pbXBvcnQgJy4vc2l0ZS1oZWFkZXIuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vc2l0ZS1oZWFkZXIuc2Nzcyc7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL3NpdGUtbmF2LWhvcml6b250YWwuanMnO1xuXG4vLyBTQ1NTXG5pbXBvcnQgJy4vc2l0ZS1uYXYtaG9yaXpvbnRhbC5zY3NzJztcbiIsImltcG9ydCB3c3Vfd2RzIGZyb20gJ0B3c3V3ZWJ0ZWFtL2J1aWxkLXRvb2xzL2pzL3dzdS1idC13ZHMnO1xuaW1wb3J0IHByaW9yaXR5X25hdiBmcm9tICdAd3N1d2VidGVhbS9idWlsZC10b29scy9qcy93c3UtYnQtcHJpb3JpdHktbmF2JztcblxuY29uc3QgbmF2X2hvcnpfd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3Utcy1uYXYtaG9yaXpvbnRhbF9fd3JhcHBlcicpO1xuXG5pZiAodHlwZW9mIG5hdl9ob3J6X3dyYXBwZXIgIT0gXCJ1bmRlZmluZWRcIiAmJiBuYXZfaG9yel93cmFwcGVyICE9IG51bGwpIHtcblxuXHQvKipcblx0ICpcblx0ICogSW5pdCBKU1xuXHQgKlxuXHQgKi9cblx0bmF2X2hvcnpfd3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCd3c3UtdS1uby1qcycpO1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBJbml0IHByaW9yaXR5IG5hdlxuXHQgKlxuXHQgKi9cblx0d3N1X3dkcy5ob3Jpem9udGFsX25hdiA9IG5ldyBwcmlvcml0eV9uYXYoe1xuXHRcdG1haW5fbmF2X3NlbGVjdG9yOiAnLndzdS1zLW5hdi1ob3Jpem9udGFsX19uYXYtbGlzdCcsXG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9jbGFzc19uYW1lOiAnd3N1LXMtbmF2LWhvcml6b250YWxfX25hdi1pdGVtLS1tb3JlJyxcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpbmtfY2xhc3NfbmFtZTogJ3dzdS1zLW5hdi1ob3Jpem9udGFsX19uYXYtbGluaycsXG5cdFx0cHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saXN0X2NsYXNzX25hbWU6ICd3c3Utcy1uYXYtaG9yaXpvbnRhbF9fbmF2LWxpc3QtLWhhcy1tb3JlLWl0ZW1zJyxcblx0XHRtb3JlX2lubmVyX2h0bWw6ICc8ZGl2IGNsYXNzPVwid3N1LWljb24gd3N1LWktbW9yZVwiPjwvZGl2Pidcblx0fSk7XG5cblx0d3N1X3dkcy5ob3Jpem9udGFsX25hdi5pbml0KCk7XG5cblx0Ly8gZW1pdHRlci5vbignd3N1LXMtbmF2LWhvcml6b250YWwtLW9wZW5lZCcsIGZ1bmN0aW9uIChlKSB7XG5cdC8vIFx0Ly8gZS5jdXJyZW50VGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlT3V0VXAnKTtcblx0Ly8gXHRlLmN1cnJlbnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJywgJ2ZhZGVJblVwJyk7XG5cblx0Ly8gXHRjb25zdCBzdWJfbmF2X2l0ZW1zID0gZS5jdXJyZW50VGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlbjtcblx0Ly8gXHRjb25zdCBzdWJfbmF2X2l0ZW1zX2NvdW50ID0gc3ViX25hdl9pdGVtcy5sZW5ndGg7XG5cblx0Ly8gXHRmb3IgKHZhciBpID0gMDsgaSA8IHN1Yl9uYXZfaXRlbXNfY291bnQ7IGkrKykge1xuXHQvLyBcdFx0KGZ1bmN0aW9uIChpKSB7XG5cblx0Ly8gXHRcdFx0Y29uc3QgZHVyYXRpb24gPSAzMDsgLy8gRHVyYXRpb24gYmV0d2VlbiBlYWNoIGl0ZW0gYmVpbmcgYW5pbWF0ZWRcblx0Ly8gXHRcdFx0Y29uc3QgY3VydmUgPSAwLjI1OyAvLyBJbmNyZW1lbnQgaW50ZW5zaXR5XG5cblx0Ly8gXHRcdFx0Ly8gbGV0IGluY3JlbWVudCA9IGR1cmF0aW9uICsgKGR1cmF0aW9uICogKGkgKiBjdXJ2ZSkpOyAvLyBMaW5lYXJcblx0Ly8gXHRcdFx0bGV0IGluY3JlbWVudCA9IGR1cmF0aW9uICsgKGR1cmF0aW9uICogKGkgKiAoaSAqIGN1cnZlKSkpOyAvLyBCZXppZXJcblxuXHQvLyBcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0Ly8gXHRcdFx0XHRzdWJfbmF2X2l0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJywgJ2ZhZGVJblVwJyk7XG5cdC8vIFx0XHRcdH0sIGluY3JlbWVudCk7XG5cdC8vIFx0XHR9KShpKTtcblx0Ly8gXHR9O1xuXG5cdC8vIFx0Ly8gY29uc29sZS5sb2coc3ViX25hdl9pdGVtc19jb3VudCk7XG5cblx0Ly8gXHQvLyBBcnJheS5mcm9tKHN1Yl9uYXZfaXRlbXMpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdC8vIFx0Ly8gXHQoZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0Ly8gXHQvLyBcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcsICdmYWRlSW5VcCcpO1xuXHQvLyBcdC8vIFx0fSk7XG5cdC8vIFx0Ly8gfSk7XG5cblx0Ly8gXHQvLyBBcnJheS5mcm9tKHN1Yl9uYXZfaXRlbXMpLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdC8vIFx0Ly8gXHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJywgJ2ZhZGVJblVwJyk7XG5cdC8vIFx0Ly8gfSk7XG5cblx0Ly8gfSk7XG5cblx0Ly8gZW1pdHRlci5vbignd3N1LXMtbmF2LWhvcml6b250YWwtLWNsb3NlZCcsIGZ1bmN0aW9uIChlKSB7XG5cdC8vIFx0Ly8gZS5jdXJyZW50VGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlSW5VcCcpO1xuXHQvLyBcdC8vIGUuY3VycmVudFRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZCgnZmFkZU91dERvd24nKTtcblx0Ly8gfSk7XG5cbn1cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBKU1xuaW1wb3J0ICcuL3NpdGUtbmF2LXZlcnRpY2FsLmpzJztcblxuLy8gU0NTU1xuaW1wb3J0ICcuL3NpdGUtbmF2LXZlcnRpY2FsLnNjc3MnO1xuIiwiaW1wb3J0IHdzdV9idF92ZXJ0aWNhbF9uYXYgZnJvbSAnQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMvdmVydGljYWwtbmF2L3dzdS1idC12ZXJ0aWNhbC1uYXYnO1xuaW1wb3J0IHdzdV9idF93ZHMgZnJvbSAnQHdzdXdlYnRlYW0vYnVpbGQtdG9vbHMvanMvd3N1LWJ0LXdkcyc7XG5cbmNvbnN0IG5hdl92ZXJ0X3dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyJyk7XG5cbmlmICh0eXBlb2YgbmF2X3ZlcnRfd3JhcHBlciAhPSBcInVuZGVmaW5lZFwiICYmIG5hdl92ZXJ0X3dyYXBwZXIgIT0gbnVsbCkge1xuXG5cdC8qKlxuXHQgKlxuXHQgKiBJbml0IEpTXG5cdCAqXG5cdCAqL1xuXHRuYXZfdmVydF93cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS11LW5vLWpzJyk7XG5cblx0LyoqXG5cdCAqXG5cdCAqIEluaXQgdmVydGljYWwgbmF2XG5cdCAqXG5cdCAqL1xuXHR3c3VfYnRfd2RzLnZlcnRpY2FsX25hdiA9IG5ldyB3c3VfYnRfdmVydGljYWxfbmF2KHtcblx0XHRuYXZfaXRlbV9zZWxlY3RvcjogJy53c3Utcy1uYXYtdmVydGljYWxfX25hdi1saW5rJyxcblx0XHRuYXZfcGFuZWxfY29udHJvbF9zZWxlY3RvcjogJy53c3Utcy1uYXYtdmVydGljYWxfX21lbnUtaWNvbi1saW5rJyxcblx0XHRuYXZfcGFuZWxfc2VsZWN0b3I6ICcud3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyJyxcblx0XHRuYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3I6ICcud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtbGlzdCcsXG5cdFx0c2hvd19sb2dzOiB0cnVlLFxuXHRcdHN0YXJ0X2NvbGxhcHNlZF93aWR0aDogMTM2MFxuXHR9KTtcblxuXHR3c3VfYnRfd2RzLnZlcnRpY2FsX25hdi5pbml0KCk7XG5cblx0LyoqXG5cdCAqXG5cdCAqIENsb3NlIEJ1dHRvblxuXHQgKlxuXHQgKi9cblx0Y29uc3QgY2xvc2VfbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3Utcy1uYXYtdmVydGljYWxfX25hdi1jb250YWluZXItY2xvc2UtbGluaycpO1xuXG5cdGNsb3NlX2xpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR3c3VfYnRfd2RzLnZlcnRpY2FsX25hdi5jbG9zZV9wYW5lbCgpO1xuXHR9KTtcblxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3Mgd3N1X2J0X2FyaWFfZXhwYW5kZWQge1xuXHRjb25zdHJ1Y3RvcihwYXJhbXMpIHtcblx0XHR0aGlzLnBhcmFtcyA9IHBhcmFtcztcblx0XHR0aGlzLm5hdl9pdGVtcyA9IG51bGw7XG5cdFx0dGhpcy5zaG93X2xvZ3MgPSBwYXJhbXMuc2hvd19sb2dzID8gdHJ1ZSA6IGZhbHNlO1xuXG5cdFx0LyoqXG5cdFx0ICogQXNzaWduIG5hdl9pdGVtc19zZWxlY3RvcnMgdG8gdmFyaWFibGVcblx0XHQgKi9cblx0XHR0aGlzLm5hdl9pdGVtc19zZWxlY3RvcnMgPSBwYXJhbXMubmF2X2l0ZW1fc2VsZWN0b3JzO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm5hdl9pdGVtc19zZWxlY3RvcnMgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdVbmRlZmluZWQgbmF2X2l0ZW1fc2VsZWN0b3JzLiBQbGVhc2UgcGFzcyB0aGUgc2VsZWN0b3IgeW91IHdvdWxkIGxpa2UgdG8gYmUgZXhwYW5kYWJsZS4nKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBBc3NpZ24gdXNlX2FuaW1hdGlvbnMgdG8gdmFyaWFibGVcblx0XHQgKi9cblx0XHR0aGlzLnVzZV9hbmltYXRpb25zID0gcGFyYW1zLnVzZV9hbmltYXRpb25zO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnVzZV9hbmltYXRpb25zID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGhpcy51c2VfYW5pbWF0aW9ucyA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0XG5cdCAqXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHRoaXMuc2V0X2luaXRfc3RhdGUoKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoZWNrX2Zvcl9jbG9zZS5iaW5kKHRoaXMsIGV2ZW50KSk7XG5cblx0XHRpZiAodGhpcy51c2VfYW5pbWF0aW9ucykge1xuXHRcdFx0dGhpcy5pbml0X211dGF0aW9uX29ic2VydmVycygpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgaW5pdGlhbCBzdGF0ZSBmb3IgYXJpYS1leHBhbmRlZCBpdGVtc1xuXHQgKlxuXHQgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnRzXG5cdCAqL1xuXHRzZXRfaW5pdF9zdGF0ZSgpIHtcblx0XHRjb25zdCBuYXZfaXRlbXMgPSB0aGlzLnF1ZXJ5X2FsbF9uYXZfaXRlbXM7XG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXG5cdFx0bmF2X2l0ZW1zLmZvckVhY2gobmF2X2l0ZW0gPT4ge1xuXHRcdFx0Ly8gSW5pdGlhbCBvbiBwYWdlIGxvYWQgc3RhdGVcblx0XHRcdG5hdl9pdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG5cdFx0XHQvLyBDcmVhdGUgZXZlbnQgbGlzdGVuZXJzIGZvciBlYWNoIG5hdiBpdGVtXG5cdFx0XHRuYXZfaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRfdGhpcy50b2dnbGVfYXJpYV9leHBhbmRlZF9zdGF0ZShldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gSWYgYW5pbWF0aW9ucyBhcmUgZW5hYmxlZCwgYWRkIHRoZSBkZWZhdWx0IGFuaW1hdGVkIGNsYXNzXG5cdFx0aWYgKF90aGlzLnVzZV9hbmltYXRpb25zKSB7XG5cdFx0XHRjb25zdCBuYXZfaXRlbXNfdG9fYW5pbWF0ZSA9IHRoaXMucXVlcnlfYWxsX25hdl9pdGVtcztcblxuXHRcdFx0bmF2X2l0ZW1zX3RvX2FuaW1hdGUuZm9yRWFjaChuYXZfaXRlbSA9PiB7XG5cblx0XHRcdFx0bmF2X2l0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyk7XG5cblx0XHRcdFx0Y29uc3QgbmF2X2l0ZW1fY2hpbGRyZW4gPSBBcnJheS5mcm9tKG5hdl9pdGVtLm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlbik7XG5cblx0XHRcdFx0bmF2X2l0ZW1fY2hpbGRyZW4uZm9yRWFjaChuYXZfaXRlbSA9PiB7XG5cdFx0XHRcdFx0bmF2X2l0ZW0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGUgdGhlIGFyaWEtZXhwYW5kZWQgZWxlbWVudCBzdGF0ZVxuXHQgKlxuXHQgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnRcblx0ICovXG5cdHRvZ2dsZV9hcmlhX2V4cGFuZGVkX3N0YXRlKGVsZW1lbnQpIHtcblx0XHRpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ2ZhbHNlJykge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgYXJpYS1leHBhbmRlZCBlbGVtZW50IHN0YXRlXG5cdCAqXG5cdCAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHlvdSB3YW50IHN0YXRlIHRvIGJlIHVwZGF0ZWQgb25cblx0ICogQHBhcmFtIHtib29sZWFufSBzdGF0ZSBTZXQgZWxlbWVudCBzdGF0ZSB0byB0cnVlIG9yIGZhbHNlXG5cdCAqL1xuXHRzZXRfYXJpYV9leHBhbmRlZF9zdGF0ZShlbGVtZW50LCBzdGF0ZSkge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgc3RhdGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFBsYWNlIHRvIGluaXQgYW55IE11dGF0aW9uIE9ic2VydmVyc1xuXHQgKlxuXHQgKiBAZnVuY3Rpb25cblx0ICovXG5cdGluaXRfbXV0YXRpb25fb2JzZXJ2ZXJzKCkge1xuXHRcdHRoaXMuY3JlYXRlX211dGF0aW9uKHRoaXMucGFyYW1zLm5hdl9pdGVtX3NlbGVjdG9ycywgdGhpcy5jaGVja19lbGVtZW50X3ZpZXdfc3RhdGUuYmluZCh0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBtdXRhdGlvbiBvYnNlcnZlcnMgdG8gd2F0Y2ggc3RhdGUgYW5kIGFsbG93cyB5b3UgdG8gdGVsbCBpdCB3aGF0IHRvIGRvIG9uIG1vZGlmaWNhdGlvblxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0X3F1ZXJ5X3NlbGVjdG9yXG5cdCAqIEBwYXJhbSB7bWV0aG9kfSBvbl9tb2RpZnlfbWV0aG9kXG5cdCAqL1xuXHRjcmVhdGVfbXV0YXRpb24odGFyZ2V0X3F1ZXJ5X3NlbGVjdG9yLCBvbl9tb2RpZnlfbWV0aG9kKSB7XG5cdFx0Ly8gU2VsZWN0IHRoZSBub2RlIHRoYXQgd2lsbCBiZSBvYnNlcnZlZCBmb3IgbXV0YXRpb25zXG5cdFx0Y29uc3QgdGFyZ2V0Tm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldF9xdWVyeV9zZWxlY3Rvcik7XG5cblx0XHQvLyBPcHRpb25zIGZvciB0aGUgb2JzZXJ2ZXIgKHdoaWNoIG11dGF0aW9ucyB0byBvYnNlcnZlKVxuXHRcdGNvbnN0IGNvbmZpZyA9IHsgYXR0cmlidXRlczogdHJ1ZSwgY2hpbGRMaXN0OiBmYWxzZSwgc3VidHJlZTogZmFsc2UgfTtcblxuXHRcdC8vIEdsb2JhbCBzY29wZVxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblxuXHRcdHRhcmdldE5vZGVzLmZvckVhY2godGFyZ2V0Tm9kZSA9PiB7XG5cdFx0XHQvLyBDYWxsYmFjayBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gbXV0YXRpb25zIGFyZSBvYnNlcnZlZFxuXHRcdFx0Y29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbiAobXV0YXRpb25zTGlzdCwgb2JzZXJ2ZXIpIHtcblx0XHRcdFx0Ly8gVXNlIHRyYWRpdGlvbmFsICdmb3IgbG9vcHMnIGZvciBJRSAxMVxuXHRcdFx0XHRmb3IgKGxldCBtdXRhdGlvbiBvZiBtdXRhdGlvbnNMaXN0KSB7XG5cdFx0XHRcdFx0aWYgKG11dGF0aW9uLnR5cGUgPT09ICdhdHRyaWJ1dGVzJykge1xuXHRcdFx0XHRcdFx0aWYgKF90aGlzLnNob3dfbG9ncykge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnVGhlICcgKyBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lICsgJyBhdHRyaWJ1dGUgd2FzIG1vZGlmaWVkLicpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0b25fbW9kaWZ5X21ldGhvZChtdXRhdGlvbik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBDcmVhdGUgYW4gb2JzZXJ2ZXIgaW5zdGFuY2UgbGlua2VkIHRvIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuXHRcdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjayk7XG5cblx0XHRcdC8vIFN0YXJ0IG9ic2VydmluZyB0aGUgdGFyZ2V0IG5vZGUgZm9yIGNvbmZpZ3VyZWQgbXV0YXRpb25zXG5cdFx0XHRvYnNlcnZlci5vYnNlcnZlKHRhcmdldE5vZGUsIGNvbmZpZyk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIHdoZXRoZXIgaXRlbXMgYXJlIGV4cGFuZGVkIHRydWUgb3IgZmFsc2Vcblx0ICpcblx0ICogQHBhcmFtIHtvYmplY3R9IG11dGF0aW9uX3JlY29yZCBSZXR1cm5zIHdoYXQgaGFzIGJlZW4gbW9kaWZpZWQgZnJvbSB0aGUgb2JzZXJ2ZXIgY2FsbCBiYWNrIGZ1bmN0aW9uXG5cdCAqL1xuXHRjaGVja19lbGVtZW50X3ZpZXdfc3RhdGUobXV0YXRpb25fcmVjb3JkKSB7XG5cdFx0aWYgKG11dGF0aW9uX3JlY29yZC5hdHRyaWJ1dGVOYW1lID09PSAnYXJpYS1leHBhbmRlZCcpIHtcblx0XHRcdGNvbnN0IG5hdl9pdGVtX2NvbnRhaW5lciA9IG11dGF0aW9uX3JlY29yZC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXHRcdFx0Y29uc3QgbmF2X2l0ZW1zID0gQXJyYXkuZnJvbShtdXRhdGlvbl9yZWNvcmQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jaGlsZHJlbik7XG5cblx0XHRcdGlmIChtdXRhdGlvbl9yZWNvcmQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09ICd0cnVlJykge1xuXHRcdFx0XHQvLyBBbmltYXRlIGluXG5cdFx0XHRcdHRoaXMuYW5pbWF0ZV9pdGVtKG5hdl9pdGVtX2NvbnRhaW5lcik7XG5cdFx0XHRcdHRoaXMuYW5pbWF0ZV9pdGVtcyhuYXZfaXRlbXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQW5pbWF0ZSBvdXRcblx0XHRcdFx0dGhpcy5hbmltYXRlX2l0ZW0obmF2X2l0ZW1fY29udGFpbmVyLCAnZmFkZU91dERvd24nLCAnZmFkZUluVXAnLCAnb3V0Jyk7XG5cdFx0XHRcdHRoaXMuYW5pbWF0ZV9pdGVtcyhuYXZfaXRlbXMsICdmYWRlT3V0RG93bicsICdmYWRlSW5VcCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cblx0LyoqXG5cdCAqIEFuaW1hdGUgYSBzaW5nbGUgaXRlbSBpbiBvciBvdXQgb2YgeW91ciBkaXNwbGF5XG5cdCAqXG5cdCAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudF90b19hbmltYXRlIFRoZSBlbGVtZW50IHlvdSB3YW50IHRvIGJlIGFuaW1hdGVkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhZGQgVGhlIGFuaW1hdGlvbiB0byBiZSBhZGRlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3ZlIFRoZSBhbmltYXRpb24gdG8gYmUgcmVtb3ZlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZGlyZWN0aW9uIFRoZSBkaXJlY3Rpb24gaW4gd2hpY2ggeW91ciBhbmltYXRpb24gaXMgZ29pbmcsIGluIChiZWNvbWluZyB2aXNpYmxlKSBhbmQgb3V0IChiZWNvbWluZyBpbnZpc2libGUpXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lX291dF9kdXJhdGlvbiBUaGUgdGltZW91dCB0aGF0IGNvbnRyb2xzIHdoZW4geW91ciBhbmltYXRpb24gaXMgZmluaXNoZWQgd2hlbiBhbmltYXRpbmcgb3V0XG5cdCAqL1xuXHRhbmltYXRlX2l0ZW0oZWxlbWVudF90b19hbmltYXRlLCBhZGQgPSAnZmFkZUluVXAnLCByZW1vdmUgPSAnZmFkZU91dERvd24nLCBkaXJlY3Rpb24gPSAnaW4nLCB0aW1lX291dF9kdXJhdGlvbiA9IDM1MCkge1xuXHRcdC8vIEFuaW1hdGUgZWxlbWVudFxuXHRcdGVsZW1lbnRfdG9fYW5pbWF0ZS5jbGFzc0xpc3QucmVtb3ZlKHJlbW92ZSk7XG5cdFx0ZWxlbWVudF90b19hbmltYXRlLmNsYXNzTGlzdC5hZGQoYWRkKTtcblxuXHRcdC8vIC8vIENoZWNrIGRpcmVjdGlvbiBhbmQgc2V0IHZpc2liaWxpdHkgc3RhdGVcblx0XHQvLyBpZiAoZGlyZWN0aW9uID09ICdpbicpIHtcblx0XHQvLyBcdGVsZW1lbnRfdG9fYW5pbWF0ZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXHRcdC8vIH0gZWxzZSB7XG5cdFx0Ly8gXHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHQvLyBcdFx0ZWxlbWVudF90b19hbmltYXRlLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XHQvLyBcdH0sIHRpbWVfb3V0X2R1cmF0aW9uKTtcblx0XHQvLyB9XG5cdH1cblxuXHQvKipcblx0ICogQW5pbWF0ZSBhbiBhcnJheSBvZiBlbGVtZW50cyBvbnRvIHRoZSBzY3JlZW4gc2VxdWVudGlhbGx5XG5cdCAqXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGVsZW1lbnRzX3RvX2FuaW1hdGUgVGhlIGVsZW1lbnRzIHlvdSB3YW50IHRvIGJlIGFuaW1hdGVkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBhZGQgVGhlIGFuaW1hdGlvbiB0byBiZSBhZGRlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcmVtb3ZlIFRoZSBhbmltYXRpb24gdG8gYmUgcmVtb3ZlZFxuXHQgKi9cblx0YW5pbWF0ZV9pdGVtcyhlbGVtZW50c190b19hbmltYXRlLCBhZGQgPSAnZmFkZUluVXAnLCByZW1vdmUgPSAnZmFkZU91dERvd24nKSB7XG5cdFx0Y29uc3Qgc3ViX25hdl9pdGVtcyA9IGVsZW1lbnRzX3RvX2FuaW1hdGU7XG5cdFx0Y29uc3Qgc3ViX25hdl9pdGVtc19jb3VudCA9IHN1Yl9uYXZfaXRlbXMubGVuZ3RoO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdWJfbmF2X2l0ZW1zX2NvdW50OyBpKyspIHtcblx0XHRcdChmdW5jdGlvbiAoaSkge1xuXG5cdFx0XHRcdGNvbnN0IGR1cmF0aW9uID0gMzA7IC8vIER1cmF0aW9uIGJldHdlZW4gZWFjaCBpdGVtIGJlaW5nIGFuaW1hdGVkXG5cdFx0XHRcdGNvbnN0IGN1cnZlID0gMC4yNTsgLy8gSW5jcmVtZW50IGludGVuc2l0eVxuXG5cdFx0XHRcdC8vIGxldCBpbmNyZW1lbnQgPSBkdXJhdGlvbiArIChkdXJhdGlvbiAqIChpICogY3VydmUpKTsgLy8gTGluZWFyXG5cdFx0XHRcdGxldCBpbmNyZW1lbnQgPSBkdXJhdGlvbiArIChkdXJhdGlvbiAqIChpICogKGkgKiBjdXJ2ZSkpKTsgLy8gQmV6aWVyXG5cblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0c3ViX25hdl9pdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKHJlbW92ZSk7XG5cdFx0XHRcdFx0c3ViX25hdl9pdGVtc1tpXS5jbGFzc0xpc3QuYWRkKGFkZCk7XG5cdFx0XHRcdH0sIGluY3JlbWVudCk7XG5cdFx0XHR9KShpKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIHRoZSBuYXYgaXRlbXMgc2hvdWxkIGJlIGNsb3NlZFxuXHQgKlxuXHQgKiBAZnVuY3Rpb25cblx0ICovXG5cdGNoZWNrX2Zvcl9jbG9zZSgpIHtcblx0XHR2YXIgbmF2X3dyYXBwZXJfc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3N1LXMtbmF2LWhvcml6b250YWxfX3dyYXBwZXInKTtcblxuXHRcdGlmICghbmF2X3dyYXBwZXJfc2VsZWN0b3IuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuXHRcdFx0Y29uc3QgYWxsX2l0ZW1zID0gdGhpcy5xdWVyeV9hbGxfb3Blbl9uYXZfaXRlbXM7XG5cblx0XHRcdGFsbF9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdFx0XHR0aGlzLnNldF9hcmlhX2V4cGFuZGVkX3N0YXRlKGl0ZW0sIGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldCBxdWVyeV9hbGxfb3Blbl9uYXZfaXRlbXMoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53c3Utcy1uYXYtaG9yaXpvbnRhbF9fbmF2LWxpbmtbYXJpYS1leHBhbmRlZD1cInRydWVcIl0nKTtcblx0fVxuXG5cdGdldCBxdWVyeV9hbGxfbmF2X2l0ZW1zKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3N1LXMtbmF2LWhvcml6b250YWxfX25hdi1saW5rW2FyaWEtZXhwYW5kZWRdJyk7XG5cdH1cbn1cbiIsIi8qXHJcbiogICBUaGlzIGNvbnRlbnQgaXMgbGljZW5zZWQgYWNjb3JkaW5nIHRvIHRoZSBXM0MgU29mdHdhcmUgTGljZW5zZSBhdFxyXG4qICAgaHR0cHM6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50XHJcbiovXHJcblxyXG5pbXBvcnQgeyBQb3B1cE1lbnUgfSBmcm9tICcuL1BvcHVwTWVudUxpbmtzJztcclxuXHJcbnZhciBNZW51YmFySXRlbSA9IGZ1bmN0aW9uIChkb21Ob2RlLCBtZW51T2JqKSB7XHJcblxyXG5cdHRoaXMubWVudSA9IG1lbnVPYmo7XHJcblx0dGhpcy5kb21Ob2RlID0gZG9tTm9kZTtcclxuXHR0aGlzLnBvcHVwTWVudSA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmhhc0ZvY3VzID0gZmFsc2U7XHJcblx0dGhpcy5oYXNIb3ZlciA9IGZhbHNlO1xyXG5cclxuXHR0aGlzLmlzTWVudWJhckl0ZW0gPSB0cnVlO1xyXG5cclxuXHR0aGlzLmtleUNvZGUgPSBPYmplY3QuZnJlZXplKHtcclxuXHRcdCdUQUInOiA5LFxyXG5cdFx0J1JFVFVSTic6IDEzLFxyXG5cdFx0J0VTQyc6IDI3LFxyXG5cdFx0J1NQQUNFJzogMzIsXHJcblx0XHQnUEFHRVVQJzogMzMsXHJcblx0XHQnUEFHRURPV04nOiAzNCxcclxuXHRcdCdFTkQnOiAzNSxcclxuXHRcdCdIT01FJzogMzYsXHJcblx0XHQnTEVGVCc6IDM3LFxyXG5cdFx0J1VQJzogMzgsXHJcblx0XHQnUklHSFQnOiAzOSxcclxuXHRcdCdET1dOJzogNDBcclxuXHR9KTtcclxufTtcclxuXHJcbk1lbnViYXJJdGVtLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZG9tTm9kZS50YWJJbmRleCA9IC0xO1xyXG5cclxuXHR0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5ZG93bi5iaW5kKHRoaXMpKTtcclxuXHR0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmhhbmRsZUZvY3VzLmJpbmQodGhpcykpO1xyXG5cdHRoaXMuZG9tTm9kZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5oYW5kbGVCbHVyLmJpbmQodGhpcykpO1xyXG5cclxuXHQvLyBJbml0aWFsaXplIHBvcCB1cCBtZW51c1xyXG5cclxuXHR2YXIgbmV4dEVsZW1lbnQgPSB0aGlzLmRvbU5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRpZiAobmV4dEVsZW1lbnQgJiYgbmV4dEVsZW1lbnQudGFnTmFtZSA9PT0gJ1VMJykge1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUgPSBuZXcgUG9wdXBNZW51KG5leHRFbGVtZW50LCB0aGlzKTtcclxuXHRcdHRoaXMucG9wdXBNZW51LmluaXQoKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuTWVudWJhckl0ZW0ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR2YXIgdGd0ID0gZXZlbnQuY3VycmVudFRhcmdldCxcclxuXHRcdGNoYXIgPSBldmVudC5rZXksXHJcblx0XHRmbGFnID0gZmFsc2UsXHJcblx0XHRjbGlja0V2ZW50O1xyXG5cclxuXHRmdW5jdGlvbiBpc1ByaW50YWJsZUNoYXJhY3RlcihzdHIpIHtcclxuXHRcdHJldHVybiBzdHIubGVuZ3RoID09PSAxICYmIHN0ci5tYXRjaCgvXFxTLyk7XHJcblx0fVxyXG5cclxuXHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlNQQUNFOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUkVUVVJOOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRE9XTjpcclxuXHRcdFx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUub3BlbigpO1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51LnNldEZvY3VzVG9GaXJzdEl0ZW0oKTtcclxuXHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5MRUZUOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb1ByZXZpb3VzSXRlbSh0aGlzKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlJJR0hUOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb05leHRJdGVtKHRoaXMpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuVVA6XHJcblx0XHRcdGlmICh0aGlzLnBvcHVwTWVudSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51Lm9wZW4oKTtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5zZXRGb2N1c1RvTGFzdEl0ZW0oKTtcclxuXHRcdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5IT01FOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUEFHRVVQOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSgpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRU5EOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUEFHRURPV046XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvTGFzdEl0ZW0oKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlRBQjpcclxuXHRcdFx0aWYgKHRoaXMucG9wdXBNZW51ICE9IGZhbHNlKSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRVNDOlxyXG5cdFx0XHRpZiAodGhpcy5wb3B1cE1lbnUgIT0gZmFsc2UpIHtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5jbG9zZSh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRkZWZhdWx0OlxyXG5cdFx0XHRpZiAoaXNQcmludGFibGVDaGFyYWN0ZXIoY2hhcikpIHtcclxuXHRcdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNCeUZpcnN0Q2hhcmFjdGVyKHRoaXMsIGNoYXIpO1xyXG5cdFx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGJyZWFrO1xyXG5cdH1cclxuXHJcblx0aWYgKGZsYWcpIHtcclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcbn07XHJcblxyXG5NZW51YmFySXRlbS5wcm90b3R5cGUuc2V0RXhwYW5kZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHRpZiAodmFsdWUpIHtcclxuXHRcdHRoaXMuZG9tTm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHRoaXMuZG9tTm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcclxuXHR9XHJcbn07XHJcblxyXG5NZW51YmFySXRlbS5wcm90b3R5cGUuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR0aGlzLm1lbnUuaGFzRm9jdXMgPSB0cnVlO1xyXG59O1xyXG5cclxuTWVudWJhckl0ZW0ucHJvdG90eXBlLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHR0aGlzLm1lbnUuaGFzRm9jdXMgPSBmYWxzZTtcclxufTtcclxuXHJcbmV4cG9ydCB2YXIgTWVudWJhckl0ZW07XHJcbiIsIi8qXHJcbiogICBUaGlzIGNvbnRlbnQgaXMgbGljZW5zZWQgYWNjb3JkaW5nIHRvIHRoZSBXM0MgU29mdHdhcmUgTGljZW5zZSBhdFxyXG4qICAgaHR0cHM6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50XHJcbiovXHJcblxyXG5pbXBvcnQgeyBNZW51YmFySXRlbSB9IGZyb20gJy4vTWVudWJhckl0ZW1MaW5rcyc7XHJcblxyXG52YXIgTWVudWJhciA9IGZ1bmN0aW9uIChkb21Ob2RlKSB7XHJcblx0dmFyIGVsZW1lbnRDaGlsZHJlbixcclxuXHRcdG1zZ1ByZWZpeCA9ICdNZW51YmFyIGNvbnN0cnVjdG9yIGFyZ3VtZW50IG1lbnViYXJOb2RlICc7XHJcblxyXG5cdC8vIENoZWNrIHdoZXRoZXIgbWVudWJhck5vZGUgaXMgYSBET00gZWxlbWVudFxyXG5cdGlmICghZG9tTm9kZSBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcclxuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IobXNnUHJlZml4ICsgJ2lzIG5vdCBhIERPTSBFbGVtZW50LicpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2hlY2sgd2hldGhlciBtZW51YmFyTm9kZSBoYXMgZGVzY2VuZGFudCBlbGVtZW50c1xyXG5cdGlmIChkb21Ob2RlLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IobXNnUHJlZml4ICsgJ2hhcyBubyBlbGVtZW50IGNoaWxkcmVuLicpO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2hlY2sgd2hldGhlciBtZW51YmFyTm9kZSBoYXMgQSBlbGVtZW50c1xyXG5cdHZhciBlID0gZG9tTm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHR3aGlsZSAoZSkge1xyXG5cdFx0dmFyIG1lbnViYXJJdGVtID0gZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHRcdGlmIChlICYmIG1lbnViYXJJdGVtICYmIG1lbnViYXJJdGVtLnRhZ05hbWUgIT09ICdBJykge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IobXNnUHJlZml4ICsgJ2hhcyBjaGlsZCBlbGVtZW50cyBhcmUgbm90IEEgZWxlbWVudHMuJyk7XHJcblx0XHR9XHJcblx0XHRlID0gZS5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0fVxyXG5cclxuXHR0aGlzLmlzTWVudWJhciA9IHRydWU7XHJcblxyXG5cdHRoaXMuZG9tTm9kZSA9IGRvbU5vZGU7XHJcblxyXG5cdHRoaXMubWVudWJhckl0ZW1zID0gW107IC8vIFNlZSBNZW51YmFyIGluaXQgbWV0aG9kXHJcblx0dGhpcy5maXJzdENoYXJzID0gW107IC8vIFNlZSBNZW51YmFyIGluaXQgbWV0aG9kXHJcblxyXG5cdHRoaXMuZmlyc3RJdGVtID0gbnVsbDsgLy8gU2VlIE1lbnViYXIgaW5pdCBtZXRob2RcclxuXHR0aGlzLmxhc3RJdGVtID0gbnVsbDsgLy8gU2VlIE1lbnViYXIgaW5pdCBtZXRob2RcclxuXHJcblx0dGhpcy5oYXNGb2N1cyA9IGZhbHNlOyAvLyBTZWUgTWVudWJhckl0ZW0gaGFuZGxlRm9jdXMsIGhhbmRsZUJsdXJcclxuXHR0aGlzLmhhc0hvdmVyID0gZmFsc2U7IC8vIFNlZSBNZW51YmFyIGhhbmRsZU1vdXNlb3ZlciwgaGFuZGxlTW91c2VvdXRcclxufTtcclxuXHJcbi8qXHJcbiogICBAbWV0aG9kIE1lbnViYXIucHJvdG90eXBlLmluaXRcclxuKlxyXG4qICAgQGRlc2NcclxuKiAgICAgICBBZGRzIEFSSUEgcm9sZSB0byB0aGUgbWVudWJhciBub2RlXHJcbiogICAgICAgVHJhdmVyc2UgbWVudWJhciBjaGlsZHJlbiBmb3IgQSBlbGVtZW50cyB0byBjb25maWd1cmUgZWFjaCBBIGVsZW1lbnQgYXMgYSBBUklBIG1lbnVpdGVtXHJcbiogICAgICAgYW5kIHBvcHVsYXRlIG1lbnVpdGVtcyBhcnJheS4gSW5pdGlhbGl6ZSBmaXJzdEl0ZW0gYW5kIGxhc3RJdGVtIHByb3BlcnRpZXMuXHJcbiovXHJcbk1lbnViYXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0dmFyIG1lbnViYXJJdGVtLCBjaGlsZEVsZW1lbnQsIG1lbnVFbGVtZW50LCB0ZXh0Q29udGVudCwgbnVtSXRlbXM7XHJcblxyXG5cclxuXHQvLyBUcmF2ZXJzZSB0aGUgZWxlbWVudCBjaGlsZHJlbiBvZiBtZW51YmFyTm9kZTogY29uZmlndXJlIGVhY2ggd2l0aFxyXG5cdC8vIG1lbnVpdGVtIHJvbGUgYmVoYXZpb3IgYW5kIHN0b3JlIHJlZmVyZW5jZSBpbiBtZW51aXRlbXMgYXJyYXkuXHJcblx0dmFyIGVsZW0gPSB0aGlzLmRvbU5vZGUuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5cdHdoaWxlIChlbGVtKSB7XHJcblx0XHR2YXIgbWVudUVsZW1lbnQgPSBlbGVtLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHRcdGlmIChlbGVtICYmIG1lbnVFbGVtZW50ICYmIG1lbnVFbGVtZW50LnRhZ05hbWUgPT09ICdBJykge1xyXG5cdFx0XHRtZW51YmFySXRlbSA9IG5ldyBNZW51YmFySXRlbShtZW51RWxlbWVudCwgdGhpcyk7XHJcblx0XHRcdG1lbnViYXJJdGVtLmluaXQoKTtcclxuXHRcdFx0dGhpcy5tZW51YmFySXRlbXMucHVzaChtZW51YmFySXRlbSk7XHJcblx0XHRcdHRleHRDb250ZW50ID0gbWVudUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cdFx0XHR0aGlzLmZpcnN0Q2hhcnMucHVzaCh0ZXh0Q29udGVudC5zdWJzdHJpbmcoMCwgMSkudG9Mb3dlckNhc2UoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWxlbSA9IGVsZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cdH1cclxuXHJcblx0Ly8gVXNlIHBvcHVsYXRlZCBtZW51aXRlbXMgYXJyYXkgdG8gaW5pdGlhbGl6ZSBmaXJzdEl0ZW0gYW5kIGxhc3RJdGVtLlxyXG5cdG51bUl0ZW1zID0gdGhpcy5tZW51YmFySXRlbXMubGVuZ3RoO1xyXG5cdGlmIChudW1JdGVtcyA+IDApIHtcclxuXHRcdHRoaXMuZmlyc3RJdGVtID0gdGhpcy5tZW51YmFySXRlbXNbMF07XHJcblx0XHR0aGlzLmxhc3RJdGVtID0gdGhpcy5tZW51YmFySXRlbXNbbnVtSXRlbXMgLSAxXTtcclxuXHR9XHJcblx0dGhpcy5maXJzdEl0ZW0uZG9tTm9kZS50YWJJbmRleCA9IDA7XHJcbn07XHJcblxyXG4vKiBGT0NVUyBNQU5BR0VNRU5UIE1FVEhPRFMgKi9cclxuXHJcbk1lbnViYXIucHJvdG90eXBlLnNldEZvY3VzVG9JdGVtID0gZnVuY3Rpb24gKG5ld0l0ZW0pIHtcclxuXHJcblx0dmFyIGZsYWcgPSBmYWxzZTtcclxuXHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1lbnViYXJJdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dmFyIG1iaSA9IHRoaXMubWVudWJhckl0ZW1zW2ldO1xyXG5cclxuXHRcdGlmIChtYmkuZG9tTm9kZS50YWJJbmRleCA9PSAwKSB7XHJcblx0XHRcdGZsYWcgPSBtYmkuZG9tTm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xyXG5cdFx0fVxyXG5cclxuXHRcdG1iaS5kb21Ob2RlLnRhYkluZGV4ID0gLTE7XHJcblx0XHRpZiAobWJpLnBvcHVwTWVudSkge1xyXG5cdFx0XHRtYmkucG9wdXBNZW51LmNsb3NlKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRuZXdJdGVtLmRvbU5vZGUuZm9jdXMoKTtcclxuXHRuZXdJdGVtLmRvbU5vZGUudGFiSW5kZXggPSAwO1xyXG5cclxuXHRpZiAoZmxhZyAmJiBuZXdJdGVtLnBvcHVwTWVudSkge1xyXG5cdFx0bmV3SXRlbS5wb3B1cE1lbnUub3BlbigpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnViYXIucHJvdG90eXBlLnNldEZvY3VzVG9GaXJzdEl0ZW0gPSBmdW5jdGlvbiAoZmxhZykge1xyXG5cdHRoaXMuc2V0Rm9jdXNUb0l0ZW0odGhpcy5maXJzdEl0ZW0pO1xyXG59O1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuc2V0Rm9jdXNUb0xhc3RJdGVtID0gZnVuY3Rpb24gKGZsYWcpIHtcclxuXHR0aGlzLnNldEZvY3VzVG9JdGVtKHRoaXMubGFzdEl0ZW0pO1xyXG59O1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuc2V0Rm9jdXNUb1ByZXZpb3VzSXRlbSA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSkge1xyXG5cdHZhciBpbmRleDtcclxuXHR2YXIgbmV3SXRlbTtcclxuXHJcblx0aWYgKGN1cnJlbnRJdGVtID09PSB0aGlzLmZpcnN0SXRlbSkge1xyXG5cdFx0bmV3SXRlbSA9IHRoaXMubGFzdEl0ZW07XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0aW5kZXggPSB0aGlzLm1lbnViYXJJdGVtcy5pbmRleE9mKGN1cnJlbnRJdGVtKTtcclxuXHRcdG5ld0l0ZW0gPSB0aGlzLm1lbnViYXJJdGVtc1tpbmRleCAtIDFdO1xyXG5cdH1cclxuXHJcblx0dGhpcy5zZXRGb2N1c1RvSXRlbShuZXdJdGVtKTtcclxuXHJcbn07XHJcblxyXG5NZW51YmFyLnByb3RvdHlwZS5zZXRGb2N1c1RvTmV4dEl0ZW0gPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0pIHtcclxuXHR2YXIgaW5kZXg7XHJcblx0dmFyIG5ld0l0ZW07XHJcblxyXG5cdGlmIChjdXJyZW50SXRlbSA9PT0gdGhpcy5sYXN0SXRlbSkge1xyXG5cdFx0bmV3SXRlbSA9IHRoaXMuZmlyc3RJdGVtO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGluZGV4ID0gdGhpcy5tZW51YmFySXRlbXMuaW5kZXhPZihjdXJyZW50SXRlbSk7XHJcblx0XHRuZXdJdGVtID0gdGhpcy5tZW51YmFySXRlbXNbaW5kZXggKyAxXTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc2V0Rm9jdXNUb0l0ZW0obmV3SXRlbSk7XHJcblxyXG59O1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuc2V0Rm9jdXNCeUZpcnN0Q2hhcmFjdGVyID0gZnVuY3Rpb24gKGN1cnJlbnRJdGVtLCBjaGFyKSB7XHJcblx0dmFyIHN0YXJ0LCBpbmRleCwgY2hhciA9IGNoYXIudG9Mb3dlckNhc2UoKTtcclxuXHR2YXIgZmxhZyA9IGN1cnJlbnRJdGVtLmRvbU5vZGUuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICd0cnVlJztcclxuXHJcblx0Ly8gR2V0IHN0YXJ0IGluZGV4IGZvciBzZWFyY2ggYmFzZWQgb24gcG9zaXRpb24gb2YgY3VycmVudEl0ZW1cclxuXHRzdGFydCA9IHRoaXMubWVudWJhckl0ZW1zLmluZGV4T2YoY3VycmVudEl0ZW0pICsgMTtcclxuXHRpZiAoc3RhcnQgPT09IHRoaXMubWVudWJhckl0ZW1zLmxlbmd0aCkge1xyXG5cdFx0c3RhcnQgPSAwO1xyXG5cdH1cclxuXHJcblx0Ly8gQ2hlY2sgcmVtYWluaW5nIHNsb3RzIGluIHRoZSBtZW51XHJcblx0aW5kZXggPSB0aGlzLmdldEluZGV4Rmlyc3RDaGFycyhzdGFydCwgY2hhcik7XHJcblxyXG5cdC8vIElmIG5vdCBmb3VuZCBpbiByZW1haW5pbmcgc2xvdHMsIGNoZWNrIGZyb20gYmVnaW5uaW5nXHJcblx0aWYgKGluZGV4ID09PSAtMSkge1xyXG5cdFx0aW5kZXggPSB0aGlzLmdldEluZGV4Rmlyc3RDaGFycygwLCBjaGFyKTtcclxuXHR9XHJcblxyXG5cdC8vIElmIG1hdGNoIHdhcyBmb3VuZC4uLlxyXG5cdGlmIChpbmRleCA+IC0xKSB7XHJcblx0XHR0aGlzLnNldEZvY3VzVG9JdGVtKHRoaXMubWVudWJhckl0ZW1zW2luZGV4XSk7XHJcblx0fVxyXG59O1xyXG5cclxuTWVudWJhci5wcm90b3R5cGUuZ2V0SW5kZXhGaXJzdENoYXJzID0gZnVuY3Rpb24gKHN0YXJ0SW5kZXgsIGNoYXIpIHtcclxuXHRmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8IHRoaXMuZmlyc3RDaGFycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0aWYgKGNoYXIgPT09IHRoaXMuZmlyc3RDaGFyc1tpXSkge1xyXG5cdFx0XHRyZXR1cm4gaTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIC0xO1xyXG59O1xyXG5cclxuZXhwb3J0IHZhciBNZW51YmFyO1xyXG4iLCIvKlxyXG4qICAgVGhpcyBjb250ZW50IGlzIGxpY2Vuc2VkIGFjY29yZGluZyB0byB0aGUgVzNDIFNvZnR3YXJlIExpY2Vuc2UgYXRcclxuKiAgIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxyXG4qL1xyXG5cclxuaW1wb3J0IHsgUG9wdXBNZW51IH0gZnJvbSAnLi9Qb3B1cE1lbnVMaW5rcyc7XHJcblxyXG52YXIgTWVudUl0ZW0gPSBmdW5jdGlvbiAoZG9tTm9kZSwgbWVudU9iaikge1xyXG5cclxuXHR0aGlzLmRvbU5vZGUgPSBkb21Ob2RlO1xyXG5cdHRoaXMubWVudSA9IG1lbnVPYmo7XHJcblx0dGhpcy5wb3B1cE1lbnUgPSBmYWxzZTtcclxuXHR0aGlzLmlzTWVudWJhckl0ZW0gPSBmYWxzZTtcclxuXHJcblx0dGhpcy5rZXlDb2RlID0gT2JqZWN0LmZyZWV6ZSh7XHJcblx0XHQnVEFCJzogOSxcclxuXHRcdCdSRVRVUk4nOiAxMyxcclxuXHRcdCdFU0MnOiAyNyxcclxuXHRcdCdTUEFDRSc6IDMyLFxyXG5cdFx0J1BBR0VVUCc6IDMzLFxyXG5cdFx0J1BBR0VET1dOJzogMzQsXHJcblx0XHQnRU5EJzogMzUsXHJcblx0XHQnSE9NRSc6IDM2LFxyXG5cdFx0J0xFRlQnOiAzNyxcclxuXHRcdCdVUCc6IDM4LFxyXG5cdFx0J1JJR0hUJzogMzksXHJcblx0XHQnRE9XTic6IDQwXHJcblx0fSk7XHJcbn07XHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmRvbU5vZGUudGFiSW5kZXggPSAtMTtcclxuXHJcblx0dGhpcy5kb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleWRvd24uYmluZCh0aGlzKSk7XHJcblx0dGhpcy5kb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5oYW5kbGVGb2N1cy5iaW5kKHRoaXMpKTtcclxuXHR0aGlzLmRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpKTtcclxuXHJcblx0Ly8gSW5pdGlhbGl6ZSBmbHlvdXQgbWVudVxyXG5cclxuXHR2YXIgbmV4dEVsZW1lbnQgPSB0aGlzLmRvbU5vZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG5cclxuXHRpZiAobmV4dEVsZW1lbnQgJiYgbmV4dEVsZW1lbnQudGFnTmFtZSA9PT0gJ1VMJykge1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUgPSBuZXcgUG9wdXBNZW51KG5leHRFbGVtZW50LCB0aGlzKTtcclxuXHRcdHRoaXMucG9wdXBNZW51LmluaXQoKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuTWVudUl0ZW0ucHJvdG90eXBlLmlzRXhwYW5kZWQgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuZG9tTm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xyXG59O1xyXG5cclxuLyogRVZFTlQgSEFORExFUlMgKi9cclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dmFyIHRndCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXHJcblx0XHRjaGFyID0gZXZlbnQua2V5LFxyXG5cdFx0ZmxhZyA9IGZhbHNlLFxyXG5cdFx0Y2xpY2tFdmVudDtcclxuXHJcblx0ZnVuY3Rpb24gaXNQcmludGFibGVDaGFyYWN0ZXIoc3RyKSB7XHJcblx0XHRyZXR1cm4gc3RyLmxlbmd0aCA9PT0gMSAmJiBzdHIubWF0Y2goL1xcUy8pO1xyXG5cdH1cclxuXHJcblx0c3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5TUEFDRTpcclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlJFVFVSTjpcclxuXHRcdFx0aWYgKHRoaXMucG9wdXBNZW51KSB7XHJcblx0XHRcdFx0dGhpcy5wb3B1cE1lbnUub3BlbigpO1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51LnNldEZvY3VzVG9GaXJzdEl0ZW0oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHJcblx0XHRcdFx0Ly8gQ3JlYXRlIHNpbXVsYXRlZCBtb3VzZSBldmVudCB0byBtaW1pYyB0aGUgYmVoYXZpb3Igb2YgQVRzXHJcblx0XHRcdFx0Ly8gYW5kIGxldCB0aGUgZXZlbnQgaGFuZGxlciBoYW5kbGVDbGljayBkbyB0aGUgaG91c2VrZWVwaW5nLlxyXG5cdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRjbGlja0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoJ2NsaWNrJywge1xyXG5cdFx0XHRcdFx0XHQndmlldyc6IHdpbmRvdyxcclxuXHRcdFx0XHRcdFx0J2J1YmJsZXMnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHQnY2FuY2VsYWJsZSc6IHRydWVcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCAoZXJyKSB7XHJcblx0XHRcdFx0XHRpZiAoZG9jdW1lbnQuY3JlYXRlRXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0Ly8gRE9NIExldmVsIDMgZm9yIElFIDkrXHJcblx0XHRcdFx0XHRcdGNsaWNrRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcclxuXHRcdFx0XHRcdFx0Y2xpY2tFdmVudC5pbml0RXZlbnQoJ2NsaWNrJywgdHJ1ZSwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRndC5kaXNwYXRjaEV2ZW50KGNsaWNrRXZlbnQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuVVA6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvUHJldmlvdXNJdGVtKHRoaXMpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRE9XTjpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9OZXh0SXRlbSh0aGlzKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkxFRlQ6XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvQ29udHJvbGxlcigncHJldmlvdXMnLCB0cnVlKTtcclxuXHRcdFx0dGhpcy5tZW51LmNsb3NlKHRydWUpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUklHSFQ6XHJcblx0XHRcdGlmICh0aGlzLnBvcHVwTWVudSkge1xyXG5cdFx0XHRcdHRoaXMucG9wdXBNZW51Lm9wZW4oKTtcclxuXHRcdFx0XHR0aGlzLnBvcHVwTWVudS5zZXRGb2N1c1RvRmlyc3RJdGVtKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9Db250cm9sbGVyKCduZXh0JywgdHJ1ZSk7XHJcblx0XHRcdFx0dGhpcy5tZW51LmNsb3NlKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZsYWcgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRjYXNlIHRoaXMua2V5Q29kZS5IT01FOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUEFHRVVQOlxyXG5cdFx0XHR0aGlzLm1lbnUuc2V0Rm9jdXNUb0ZpcnN0SXRlbSgpO1xyXG5cdFx0XHRmbGFnID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuRU5EOlxyXG5cdFx0Y2FzZSB0aGlzLmtleUNvZGUuUEFHRURPV046XHJcblx0XHRcdHRoaXMubWVudS5zZXRGb2N1c1RvTGFzdEl0ZW0oKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLkVTQzpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9Db250cm9sbGVyKCk7XHJcblx0XHRcdHRoaXMubWVudS5jbG9zZSh0cnVlKTtcclxuXHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGNhc2UgdGhpcy5rZXlDb2RlLlRBQjpcclxuXHRcdFx0dGhpcy5tZW51LnNldEZvY3VzVG9Db250cm9sbGVyKCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdGRlZmF1bHQ6XHJcblx0XHRcdGlmIChpc1ByaW50YWJsZUNoYXJhY3RlcihjaGFyKSkge1xyXG5cdFx0XHRcdHRoaXMubWVudS5zZXRGb2N1c0J5Rmlyc3RDaGFyYWN0ZXIodGhpcywgY2hhcik7XHJcblx0XHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG5cclxuXHRpZiAoZmxhZykge1xyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5zZXRFeHBhbmRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cdGlmICh2YWx1ZSkge1xyXG5cdFx0dGhpcy5kb21Ob2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0dGhpcy5kb21Ob2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMubWVudS5oYXNGb2N1cyA9IHRydWU7XHJcbn07XHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMubWVudS5oYXNGb2N1cyA9IGZhbHNlO1xyXG5cdHNldFRpbWVvdXQodGhpcy5tZW51LmNsb3NlLmJpbmQodGhpcy5tZW51LCBmYWxzZSksIDMwMCk7XHJcbn07XHJcblxyXG5NZW51SXRlbS5wcm90b3R5cGUuaGFuZGxlTW91c2VvdmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0dGhpcy5tZW51Lmhhc0hvdmVyID0gdHJ1ZTtcclxuXHR0aGlzLm1lbnUub3BlbigpO1xyXG5cdGlmICh0aGlzLnBvcHVwTWVudSkge1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUuaGFzSG92ZXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUub3BlbigpO1xyXG5cdH1cclxufTtcclxuXHJcbk1lbnVJdGVtLnByb3RvdHlwZS5oYW5kbGVNb3VzZW91dCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdGlmICh0aGlzLnBvcHVwTWVudSkge1xyXG5cdFx0dGhpcy5wb3B1cE1lbnUuaGFzSG92ZXIgPSBmYWxzZTtcclxuXHRcdHRoaXMucG9wdXBNZW51LmNsb3NlKHRydWUpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5tZW51Lmhhc0hvdmVyID0gZmFsc2U7XHJcblx0c2V0VGltZW91dCh0aGlzLm1lbnUuY2xvc2UuYmluZCh0aGlzLm1lbnUsIGZhbHNlKSwgMzAwKTtcclxufTtcclxuXHJcbmV4cG9ydCB2YXIgTWVudUl0ZW07XHJcbiIsIi8qXHJcbiogICBUaGlzIGNvbnRlbnQgaXMgbGljZW5zZWQgYWNjb3JkaW5nIHRvIHRoZSBXM0MgU29mdHdhcmUgTGljZW5zZSBhdFxyXG4qICAgaHR0cHM6Ly93d3cudzMub3JnL0NvbnNvcnRpdW0vTGVnYWwvMjAxNS9jb3B5cmlnaHQtc29mdHdhcmUtYW5kLWRvY3VtZW50XHJcbiovXHJcblxyXG5pbXBvcnQgeyBNZW51SXRlbSB9IGZyb20gJy4vUG9wdXBNZW51SXRlbUxpbmtzJztcclxuXHJcbnZhciBQb3B1cE1lbnUgPSBmdW5jdGlvbiAoZG9tTm9kZSwgY29udHJvbGxlck9iaikge1xyXG5cdHZhciBlbGVtZW50Q2hpbGRyZW4sXHJcblx0XHRtc2dQcmVmaXggPSAnUG9wdXBNZW51IGNvbnN0cnVjdG9yIGFyZ3VtZW50IGRvbU5vZGUgJztcclxuXHJcblx0Ly8gQ2hlY2sgd2hldGhlciBkb21Ob2RlIGlzIGEgRE9NIGVsZW1lbnRcclxuXHRpZiAoIWRvbU5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XHJcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKG1zZ1ByZWZpeCArICdpcyBub3QgYSBET00gRWxlbWVudC4nKTtcclxuXHR9XHJcblx0Ly8gQ2hlY2sgd2hldGhlciBkb21Ob2RlIGhhcyBjaGlsZCBlbGVtZW50c1xyXG5cdGlmIChkb21Ob2RlLmNoaWxkRWxlbWVudENvdW50ID09PSAwKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IobXNnUHJlZml4ICsgJ2hhcyBubyBlbGVtZW50IGNoaWxkcmVuLicpO1xyXG5cdH1cclxuXHQvLyBDaGVjayB3aGV0aGVyIGRvbU5vZGUgZGVzY2VuZGFudCBlbGVtZW50cyBoYXZlIEEgZWxlbWVudHNcclxuXHR2YXIgY2hpbGRFbGVtZW50ID0gZG9tTm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHR3aGlsZSAoY2hpbGRFbGVtZW50KSB7XHJcblx0XHR2YXIgbWVudWl0ZW0gPSBjaGlsZEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblx0XHRpZiAobWVudWl0ZW0gJiYgbWVudWl0ZW0gPT09ICdBJykge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IobXNnUHJlZml4ICsgJ2hhcyBkZXNjZW5kYW50IGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBBIGVsZW1lbnRzLicpO1xyXG5cdFx0fVxyXG5cdFx0Y2hpbGRFbGVtZW50ID0gY2hpbGRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuXHR9XHJcblxyXG5cdHRoaXMuaXNNZW51YmFyID0gZmFsc2U7XHJcblxyXG5cdHRoaXMuZG9tTm9kZSA9IGRvbU5vZGU7XHJcblx0dGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlck9iajtcclxuXHJcblx0dGhpcy5tZW51aXRlbXMgPSBbXTsgLy8gU2VlIFBvcHVwTWVudSBpbml0IG1ldGhvZFxyXG5cdHRoaXMuZmlyc3RDaGFycyA9IFtdOyAvLyBTZWUgUG9wdXBNZW51IGluaXQgbWV0aG9kXHJcblxyXG5cdHRoaXMuZmlyc3RJdGVtID0gbnVsbDsgLy8gU2VlIFBvcHVwTWVudSBpbml0IG1ldGhvZFxyXG5cdHRoaXMubGFzdEl0ZW0gPSBudWxsOyAvLyBTZWUgUG9wdXBNZW51IGluaXQgbWV0aG9kXHJcblxyXG5cdHRoaXMuaGFzRm9jdXMgPSBmYWxzZTsgLy8gU2VlIE1lbnVJdGVtIGhhbmRsZUZvY3VzLCBoYW5kbGVCbHVyXHJcblx0dGhpcy5oYXNIb3ZlciA9IGZhbHNlOyAvLyBTZWUgUG9wdXBNZW51IGhhbmRsZU1vdXNlb3ZlciwgaGFuZGxlTW91c2VvdXRcclxufTtcclxuXHJcbi8qXHJcbiogICBAbWV0aG9kIFBvcHVwTWVudS5wcm90b3R5cGUuaW5pdFxyXG4qXHJcbiogICBAZGVzY1xyXG4qICAgICAgIFRyYXZlcnNlIGRvbU5vZGUgY2hpbGRyZW4gdG8gY29uZmlndXJlIGVhY2ggbWVudWl0ZW0gYW5kIHBvcHVsYXRlXHJcbiogICAgICAgbWVudWl0ZW1zIGFycmF5LiBJbml0aWFsaXplIGZpcnN0SXRlbSBhbmQgbGFzdEl0ZW0gcHJvcGVydGllcy5cclxuKi9cclxuUG9wdXBNZW51LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHZhciBjaGlsZEVsZW1lbnQsIG1lbnVFbGVtZW50LCBtZW51SXRlbSwgdGV4dENvbnRlbnQsIG51bUl0ZW1zLCBsYWJlbDtcclxuXHJcblx0Ly8gVHJhdmVyc2UgdGhlIGVsZW1lbnQgY2hpbGRyZW4gb2YgZG9tTm9kZTogY29uZmlndXJlIGVhY2ggd2l0aFxyXG5cdC8vIG1lbnVpdGVtIHJvbGUgYmVoYXZpb3IgYW5kIHN0b3JlIHJlZmVyZW5jZSBpbiBtZW51aXRlbXMgYXJyYXkuXHJcblx0Y2hpbGRFbGVtZW50ID0gdGhpcy5kb21Ob2RlLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHR3aGlsZSAoY2hpbGRFbGVtZW50KSB7XHJcblx0XHRtZW51RWxlbWVudCA9IGNoaWxkRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcblx0XHRpZiAobWVudUVsZW1lbnQgJiYgbWVudUVsZW1lbnQudGFnTmFtZSA9PT0gJ0EnKSB7XHJcblx0XHRcdG1lbnVJdGVtID0gbmV3IE1lbnVJdGVtKG1lbnVFbGVtZW50LCB0aGlzKTtcclxuXHRcdFx0bWVudUl0ZW0uaW5pdCgpO1xyXG5cdFx0XHR0aGlzLm1lbnVpdGVtcy5wdXNoKG1lbnVJdGVtKTtcclxuXHRcdFx0dGV4dENvbnRlbnQgPSBtZW51RWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XHJcblx0XHRcdHRoaXMuZmlyc3RDaGFycy5wdXNoKHRleHRDb250ZW50LnN1YnN0cmluZygwLCAxKS50b0xvd2VyQ2FzZSgpKTtcclxuXHRcdH1cclxuXHRcdGNoaWxkRWxlbWVudCA9IGNoaWxkRWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0fVxyXG5cclxuXHQvLyBVc2UgcG9wdWxhdGVkIG1lbnVpdGVtcyBhcnJheSB0byBpbml0aWFsaXplIGZpcnN0SXRlbSBhbmQgbGFzdEl0ZW0uXHJcblx0bnVtSXRlbXMgPSB0aGlzLm1lbnVpdGVtcy5sZW5ndGg7XHJcblx0aWYgKG51bUl0ZW1zID4gMCkge1xyXG5cdFx0dGhpcy5maXJzdEl0ZW0gPSB0aGlzLm1lbnVpdGVtc1swXTtcclxuXHRcdHRoaXMubGFzdEl0ZW0gPSB0aGlzLm1lbnVpdGVtc1tudW1JdGVtcyAtIDFdO1xyXG5cdH1cclxufTtcclxuXHJcbi8qIEVWRU5UIEhBTkRMRVJTICovXHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLmhhbmRsZU1vdXNlb3ZlciA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMuaGFzSG92ZXIgPSB0cnVlO1xyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5oYW5kbGVNb3VzZW91dCA9IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdHRoaXMuaGFzSG92ZXIgPSBmYWxzZTtcclxuXHRzZXRUaW1lb3V0KHRoaXMuY2xvc2UuYmluZCh0aGlzLCBmYWxzZSksIDEpO1xyXG59O1xyXG5cclxuLyogRk9DVVMgTUFOQUdFTUVOVCBNRVRIT0RTICovXHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLnNldEZvY3VzVG9Db250cm9sbGVyID0gZnVuY3Rpb24gKGNvbW1hbmQsIGZsYWcpIHtcclxuXHJcblx0aWYgKHR5cGVvZiBjb21tYW5kICE9PSAnc3RyaW5nJykge1xyXG5cdFx0Y29tbWFuZCA9ICcnO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2V0Rm9jdXNUb01lbnViYXJJdGVtKGNvbnRyb2xsZXIsIGNsb3NlKSB7XHJcblx0XHR3aGlsZSAoY29udHJvbGxlcikge1xyXG5cdFx0XHRpZiAoY29udHJvbGxlci5pc01lbnViYXJJdGVtKSB7XHJcblx0XHRcdFx0Y29udHJvbGxlci5kb21Ob2RlLmZvY3VzKCk7XHJcblx0XHRcdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYgKGNsb3NlKSB7XHJcblx0XHRcdFx0XHRjb250cm9sbGVyLm1lbnUuY2xvc2UodHJ1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNvbnRyb2xsZXIuaGFzRm9jdXMgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb250cm9sbGVyID0gY29udHJvbGxlci5tZW51LmNvbnRyb2xsZXI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpZiAoY29tbWFuZCA9PT0gJycpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRyb2xsZXIgJiYgdGhpcy5jb250cm9sbGVyLmRvbU5vZGUpIHtcclxuXHRcdFx0dGhpcy5jb250cm9sbGVyLmRvbU5vZGUuZm9jdXMoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGlmICghdGhpcy5jb250cm9sbGVyLmlzTWVudWJhckl0ZW0pIHtcclxuXHRcdHRoaXMuY29udHJvbGxlci5kb21Ob2RlLmZvY3VzKCk7XHJcblx0XHR0aGlzLmNsb3NlKCk7XHJcblxyXG5cdFx0aWYgKGNvbW1hbmQgPT09ICduZXh0Jykge1xyXG5cdFx0XHR2YXIgbWVudWJhckl0ZW0gPSBzZXRGb2N1c1RvTWVudWJhckl0ZW0odGhpcy5jb250cm9sbGVyLCBmYWxzZSk7XHJcblx0XHRcdGlmIChtZW51YmFySXRlbSkge1xyXG5cdFx0XHRcdG1lbnViYXJJdGVtLm1lbnUuc2V0Rm9jdXNUb05leHRJdGVtKG1lbnViYXJJdGVtLCBmbGFnKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGlmIChjb21tYW5kID09PSAncHJldmlvdXMnKSB7XHJcblx0XHRcdHRoaXMuY29udHJvbGxlci5tZW51LnNldEZvY3VzVG9QcmV2aW91c0l0ZW0odGhpcy5jb250cm9sbGVyLCBmbGFnKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKGNvbW1hbmQgPT09ICduZXh0Jykge1xyXG5cdFx0XHR0aGlzLmNvbnRyb2xsZXIubWVudS5zZXRGb2N1c1RvTmV4dEl0ZW0odGhpcy5jb250cm9sbGVyLCBmbGFnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5zZXRGb2N1c1RvRmlyc3RJdGVtID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuZmlyc3RJdGVtLmRvbU5vZGUuZm9jdXMoKTtcclxufTtcclxuXHJcblBvcHVwTWVudS5wcm90b3R5cGUuc2V0Rm9jdXNUb0xhc3RJdGVtID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMubGFzdEl0ZW0uZG9tTm9kZS5mb2N1cygpO1xyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5zZXRGb2N1c1RvUHJldmlvdXNJdGVtID0gZnVuY3Rpb24gKGN1cnJlbnRJdGVtKSB7XHJcblx0dmFyIGluZGV4O1xyXG5cclxuXHRpZiAoY3VycmVudEl0ZW0gPT09IHRoaXMuZmlyc3RJdGVtKSB7XHJcblx0XHR0aGlzLmxhc3RJdGVtLmRvbU5vZGUuZm9jdXMoKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHRpbmRleCA9IHRoaXMubWVudWl0ZW1zLmluZGV4T2YoY3VycmVudEl0ZW0pO1xyXG5cdFx0dGhpcy5tZW51aXRlbXNbaW5kZXggLSAxXS5kb21Ob2RlLmZvY3VzKCk7XHJcblx0fVxyXG59O1xyXG5cclxuUG9wdXBNZW51LnByb3RvdHlwZS5zZXRGb2N1c1RvTmV4dEl0ZW0gPSBmdW5jdGlvbiAoY3VycmVudEl0ZW0pIHtcclxuXHR2YXIgaW5kZXg7XHJcblxyXG5cdGlmIChjdXJyZW50SXRlbSA9PT0gdGhpcy5sYXN0SXRlbSkge1xyXG5cdFx0dGhpcy5maXJzdEl0ZW0uZG9tTm9kZS5mb2N1cygpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdGluZGV4ID0gdGhpcy5tZW51aXRlbXMuaW5kZXhPZihjdXJyZW50SXRlbSk7XHJcblx0XHR0aGlzLm1lbnVpdGVtc1tpbmRleCArIDFdLmRvbU5vZGUuZm9jdXMoKTtcclxuXHR9XHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLnNldEZvY3VzQnlGaXJzdENoYXJhY3RlciA9IGZ1bmN0aW9uIChjdXJyZW50SXRlbSwgY2hhcikge1xyXG5cdHZhciBzdGFydCwgaW5kZXgsIGNoYXIgPSBjaGFyLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdC8vIEdldCBzdGFydCBpbmRleCBmb3Igc2VhcmNoIGJhc2VkIG9uIHBvc2l0aW9uIG9mIGN1cnJlbnRJdGVtXHJcblx0c3RhcnQgPSB0aGlzLm1lbnVpdGVtcy5pbmRleE9mKGN1cnJlbnRJdGVtKSArIDE7XHJcblx0aWYgKHN0YXJ0ID09PSB0aGlzLm1lbnVpdGVtcy5sZW5ndGgpIHtcclxuXHRcdHN0YXJ0ID0gMDtcclxuXHR9XHJcblxyXG5cdC8vIENoZWNrIHJlbWFpbmluZyBzbG90cyBpbiB0aGUgbWVudVxyXG5cdGluZGV4ID0gdGhpcy5nZXRJbmRleEZpcnN0Q2hhcnMoc3RhcnQsIGNoYXIpO1xyXG5cclxuXHQvLyBJZiBub3QgZm91bmQgaW4gcmVtYWluaW5nIHNsb3RzLCBjaGVjayBmcm9tIGJlZ2lubmluZ1xyXG5cdGlmIChpbmRleCA9PT0gLTEpIHtcclxuXHRcdGluZGV4ID0gdGhpcy5nZXRJbmRleEZpcnN0Q2hhcnMoMCwgY2hhcik7XHJcblx0fVxyXG5cclxuXHQvLyBJZiBtYXRjaCB3YXMgZm91bmQuLi5cclxuXHRpZiAoaW5kZXggPiAtMSkge1xyXG5cdFx0dGhpcy5tZW51aXRlbXNbaW5kZXhdLmRvbU5vZGUuZm9jdXMoKTtcclxuXHR9XHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLmdldEluZGV4Rmlyc3RDaGFycyA9IGZ1bmN0aW9uIChzdGFydEluZGV4LCBjaGFyKSB7XHJcblx0Zm9yICh2YXIgaSA9IHN0YXJ0SW5kZXg7IGkgPCB0aGlzLmZpcnN0Q2hhcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChjaGFyID09PSB0aGlzLmZpcnN0Q2hhcnNbaV0pIHtcclxuXHRcdFx0cmV0dXJuIGk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiAtMTtcclxufTtcclxuXHJcbi8qIE1FTlUgRElTUExBWSBNRVRIT0RTICovXHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdHRoaXMuY29udHJvbGxlci5zZXRFeHBhbmRlZCh0cnVlKTtcclxuXHJcbn07XHJcblxyXG5Qb3B1cE1lbnUucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKGZvcmNlKSB7XHJcblxyXG5cdHZhciBjb250cm9sbGVySGFzSG92ZXIgPSB0aGlzLmNvbnRyb2xsZXIuaGFzSG92ZXI7XHJcblxyXG5cdHZhciBoYXNGb2N1cyA9IHRoaXMuaGFzRm9jdXM7XHJcblxyXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tZW51aXRlbXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBtaSA9IHRoaXMubWVudWl0ZW1zW2ldO1xyXG5cdFx0aWYgKG1pLnBvcHVwTWVudSkge1xyXG5cdFx0XHRoYXNGb2N1cyA9IGhhc0ZvY3VzIHwgbWkucG9wdXBNZW51Lmhhc0ZvY3VzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0aWYgKCF0aGlzLmNvbnRyb2xsZXIuaXNNZW51YmFySXRlbSkge1xyXG5cdFx0Y29udHJvbGxlckhhc0hvdmVyID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRpZiAoZm9yY2UgfHwgKCFoYXNGb2N1cyAmJiAhdGhpcy5oYXNIb3ZlciAmJiAhY29udHJvbGxlckhhc0hvdmVyKSkge1xyXG5cdFx0dGhpcy5jb250cm9sbGVyLnNldEV4cGFuZGVkKGZhbHNlKTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgdmFyIFBvcHVwTWVudTtcclxuIiwiaW1wb3J0IHsgTWVudWJhciB9IGZyb20gJy4uL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L01lbnViYXJMaW5rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHdzdV9idF9rZXlib2FyZF9uYXZfYWNjZXNzaWJpbGl0eSB7XG5cdGNvbnN0cnVjdG9yKHBhcmFtcykge1xuXHRcdHRoaXMucGFyYW1zID0gcGFyYW1zO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIExvb3AgdGhyb3VnaCBlbGVtZW50cyB0aGF0IHdlIHdhbnQgdG8gaGF2ZSBrZXlib2FyZCBzdXBwb3J0IGFuZCBtYWtlIGl0IHNvXG5cdFx0ICpcblx0XHQgKi9cblx0XHR0aGlzLnBhcmFtc1snZWxlbWVudHMnXS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXHRcdFx0dGhpcy5pbml0aWF0ZUtleWJvYXJkTmF2aWdhdGlvblN1cHBvcnQoZWxlbWVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRpbml0aWF0ZUtleWJvYXJkTmF2aWdhdGlvblN1cHBvcnQoZWxlbWVudCkge1xuXHRcdHZhciBtZW51YmFyID0gbmV3IE1lbnViYXIoZWxlbWVudCk7XG5cdFx0bWVudWJhci5pbml0KCk7XG5cdH1cbn1cbiIsImltcG9ydCB3c3Vfd2RzIGZyb20gJy4uL3dzdS1idC13ZHMnO1xuaW1wb3J0IHdzdV9idF9rZXlib2FyZF9uYXZfYWNjZXNzaWJpbGl0eSBmcm9tICcuLi9rZXlib2FyZC1uYXYtYWNjZXNzaWJpbGl0eS93c3UtYnQta2V5Ym9hcmQtbmF2LWFjY2Vzc2liaWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB3c3VfYnRfdmVydGljYWxfbmF2IHtcblx0Y29uc3RydWN0b3IocGFyYW1zKSB7XG5cdFx0dGhpcy5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0dGhpcy5uYXZfaXRlbV9zZWxlY3RvciA9ICcnO1xuXHRcdHRoaXMubmF2X3BhbmVsX2NvbnRyb2xfc2VsZWN0b3IgPSAnJztcblx0XHR0aGlzLm5hdl9wYW5lbF9zZWxlY3RvciA9ICcnO1xuXHRcdHRoaXMubmF2X2xpc3RfY29udGFpbmVyX3NlbGVjdG9yID0gJyc7XG5cdFx0dGhpcy50cmVlX21vZGUgPSBwYXJhbXMudHJlZV9tb2RlID8gdHJ1ZSA6IGZhbHNlOyAvLyBUT0RPIG5lZWRzIHRvIGRvIHNvbWV0aGluZ1xuXHRcdHRoaXMuc2hvd19sb2dzID0gcGFyYW1zLnNob3dfbG9ncyA/IHRydWUgOiBmYWxzZTtcblx0XHR0aGlzLnN0YXJ0X2NvbGxhcHNlZF93aWR0aCA9IHBhcmFtcy5zdGFydF9jb2xsYXBzZWRfd2lkdGg7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEFzc2lnbiB2YWx1ZXMgdG8gdmFyaWFibGVzXG5cdFx0ICpcblx0XHQgKi9cblxuXHRcdC8qIE5hdmlnYXRpb24gaXRlbSBzZWxlY3RvciAqL1xuXHRcdHRoaXMubmF2X2l0ZW1fc2VsZWN0b3IgPSBwYXJhbXMubmF2X2l0ZW1fc2VsZWN0b3I7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMubmF2X2l0ZW1fc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdVbmRlZmluZWQgbmF2X2l0ZW1fc2VsZWN0b3IuIFBsZWFzZSBwYXNzIHRoZSBzZWxlY3RvciB5b3Ugd291bGQgbGlrZSB0byBiZSBleHBhbmRhYmxlLicpO1xuXHRcdH1cblxuXHRcdC8qIE5hdmlnYXRpb24gUGFuZWwgQ29udHJvbCAqL1xuXHRcdHRoaXMubmF2X3BhbmVsX2NvbnRyb2xfc2VsZWN0b3IgPSBwYXJhbXMubmF2X3BhbmVsX2NvbnRyb2xfc2VsZWN0b3I7XG5cblx0XHRpZiAodHlwZW9mIHRoaXMubmF2X3BhbmVsX2NvbnRyb2xfc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdVbmRlZmluZWQgbmF2X3BhbmVsX2NvbnRyb2xfc2VsZWN0b3IuIFBsZWFzZSBwYXNzIHRoZSBzZWxlY3RvciB5b3Ugd291bGQgbGlrZSB0byBiZSBleHBhbmRhYmxlLicpO1xuXHRcdH1cblxuXHRcdHRoaXMubmF2X3BhbmVsX2NvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMubmF2X3BhbmVsX2NvbnRyb2xfc2VsZWN0b3IpO1xuXG5cdFx0LyogTmF2aWdhdGlvbiBQYW5lbCAqL1xuXHRcdHRoaXMubmF2X3BhbmVsX3NlbGVjdG9yID0gcGFyYW1zLm5hdl9wYW5lbF9zZWxlY3RvcjtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5uYXZfcGFuZWxfc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdVbmRlZmluZWQgbmF2X3BhbmVsX3NlbGVjdG9yLiBQbGVhc2UgcGFzcyB0aGUgc2VsZWN0b3IgeW91IHdvdWxkIGxpa2UgdG8gYmUgZXhwYW5kYWJsZS4nKTtcblx0XHR9XG5cblx0XHR0aGlzLm5hdl9wYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5uYXZfcGFuZWxfc2VsZWN0b3IpO1xuXG5cdFx0LyogTmF2aWdhdGlvbiBMaXN0IENvbnRhaW5lciBTZWxlY3RvciAqL1xuXHRcdHRoaXMubmF2X2xpc3RfY29udGFpbmVyX3NlbGVjdG9yID0gcGFyYW1zLm5hdl9saXN0X2NvbnRhaW5lcl9zZWxlY3RvcjtcblxuXHRcdGlmICh0eXBlb2YgdGhpcy5uYXZfbGlzdF9jb250YWluZXJfc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdVbmRlZmluZWQgbmF2X2xpc3RfY29udGFpbmVyX3NlbGVjdG9yLiBQbGVhc2UgcGFzcyB0aGUgc2VsZWN0b3IgeW91IHdvdWxkIGxpa2UgdG8gYmUgZXhwYW5kYWJsZS4nKTtcblx0XHR9XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogRW5hYmxlIGtleWJvYXJkIG5hdmlnYXRpb24gYWNjZXNzaWJpbGl0eVxuXHRcdCAqXG5cdFx0ICovXG5cdFx0Y29uc3QgbmF2X2l0ZW1fc2VsZWN0b3JfZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMubmF2X2xpc3RfY29udGFpbmVyX3NlbGVjdG9yKTtcblx0XHR2YXIga2V5Ym9hcmRfbmF2ID0gbmV3IHdzdV9idF9rZXlib2FyZF9uYXZfYWNjZXNzaWJpbGl0eSh7XG5cdFx0XHRlbGVtZW50czogbmF2X2l0ZW1fc2VsZWN0b3JfZWxlbWVudHNcblx0XHR9KTtcblx0XHRrZXlib2FyZF9uYXYuaW5pdCgpO1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBTZXQgbmF2IGl0ZW1zIHRvIGV4cGFuZGVkIGZhbHNlXG5cdFx0ICpcblx0XHQgKi9cblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMubmF2X3BhbmVsX2NvbnRyb2xfc2VsZWN0b3IpLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5uYXZfaXRlbV9zZWxlY3RvcikuZm9yRWFjaChlbGVtID0+IHsgZWxlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTsgfSk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIENyZWF0ZSBldmVudCBsaXN0ZW5lcnNcblx0XHQgKlxuXHRcdCAqL1xuXG5cdFx0Ly8gVG9nZ2xlIFBhbmVsc1xuXHRcdHRoaXMubmF2X3BhbmVsX2NvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZV9wYW5lbC5iaW5kKHRoaXMpKTtcblxuXHRcdC8vIFRvZ2dsZSBOYXYgSXRlbXNcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtaXRlbS0taGFzLWNoaWxkcmVuID4gLndzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LWxpbmsnKS5mb3JFYWNoKGVsZW0gPT4geyBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7IH0pOyAvLyBUT0RPOiBBYnN0cmFjdCBzZWxlY3RvciBhcyBwYXJhbWV0ZXJcblxuXHRcdC8vIE9uIHBhbmVsIG9wZW5cblx0XHR3c3Vfd2RzLmVtaXR0ZXIub24oJ3dzdS12ZXJ0aWNhbC1uYXYtLW9wZW4nLCB0aGlzLnBhbmVsX29wZW4uYmluZCh0aGlzKSk7XG5cblx0XHQvLyBBZnRlciBwYW5lbCBvcGVuXG5cdFx0d3N1X3dkcy5lbWl0dGVyLm9uKCd3c3UtdmVydGljYWwtbmF2LS1hZnRlci1vcGVuJywgdGhpcy5wYW5lbF9hZnRlcl9vcGVuLmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gT24gcGFuZWwgY2xvc2Vcblx0XHR3c3Vfd2RzLmVtaXR0ZXIub24oJ3dzdS12ZXJ0aWNhbC1uYXYtLWNsb3NlJywgdGhpcy5wYW5lbF9jbG9zZS5iaW5kKHRoaXMpKTtcblxuXHRcdC8vIEFmdGVyIHBhbmVsIGNsb3NlXG5cdFx0d3N1X3dkcy5lbWl0dGVyLm9uKCd3c3UtdmVydGljYWwtbmF2LS1hZnRlci1jbG9zZScsIHRoaXMucGFuZWxfYWZ0ZXJfY2xvc2UuYmluZCh0aGlzKSk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIFNldCBkZWZhdWx0IHN0YXRlIGFzIG9wZW5cblx0XHQgKlxuXHRcdCAqL1xuXHRcdGlmICggdGhpcy5uYXZfcGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd3c3Utcy1uYXYtdmVydGljYWxfX3dyYXBwZXItLXN0YXJ0LW9wZW4nICkgKSB7XG5cblx0XHRcdHRoaXMubmF2X3BhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1zLW5hdi12ZXJ0aWNhbF9fd3JhcHBlci0tc3RhcnQtb3BlbicpO1xuXG5cdFx0XHRpZiAoIHRoaXMuc3RhcnRfY29sbGFwc2VkX3dpZHRoIDwgd2luZG93LmlubmVyV2lkdGggKSB7XG5cdFx0XHRcblx0XHRcdFx0dGhpcy5vcGVuX3BhbmVsKCk7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0dGhpcy5jbG9zZV9wYW5lbCgpO1xuXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0b3Blbl9jdXJyZW50X3RhcmdldChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUuY3VycmVudFRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHR9XG5cblx0b3Blbl90YXJnZXQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRlLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHR9XG5cblx0b3Blbl9wYW5lbCgpIHtcblx0XHQvKiBTZXQgYXJpYSBleHBhbmRlZCBhdHRyaWJ1dGUgKi9cblx0XHR0aGlzLm5hdl9wYW5lbF9jb250cm9sLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cblx0XHQvKiBBZGQgY2xhc3MgdG8gd3JhcHBlciAqL1xuXHRcdHRoaXMubmF2X3BhbmVsLmNsYXNzTGlzdC5hZGQoJ3dzdS1zLW5hdi12ZXJ0aWNhbF9fd3JhcHBlci0tb3BlbicpO1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBFdmVudCBvbiBvcGVuXG5cdFx0ICogd3N1LXZlcnRpY2FsLW5hdi0tb3BlblxuXHRcdCAqXG5cdFx0ICovXG5cdFx0d3N1X3dkcy5lbWl0dGVyLmVtaXQoJ3dzdS12ZXJ0aWNhbC1uYXYtLW9wZW4nKTtcblx0XHRpZiAodGhpcy5zaG93X2xvZ3MpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdFdmVudCBlbWl0dGVkOiB3c3UtdmVydGljYWwtbmF2LS1vcGVuJyk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBFdmVudCBhZnRlciBvcGVuIGNvbXBsZXRlc1xuXHRcdCAqIHdzdS12ZXJ0aWNhbC1uYXYtLWFmdGVyLW9wZW5cblx0XHQgKlxuXHRcdCAqL1xuXHRcdGNvbnN0IG9wZW5BbmltYXRpb25UaW1lID0gMzAwOyAvLyBpbiBtcyB0aGUgdGltZSBpdCB0YWtlcyBmb3IgdGhlIG1lbnUgdG8gZmluaXNoIG9wZW5pbmdcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0d3N1X3dkcy5lbWl0dGVyLmVtaXQoJ3dzdS12ZXJ0aWNhbC1uYXYtLWFmdGVyLW9wZW4nKTtcblxuXHRcdFx0aWYgKHRoaXMuc2hvd19sb2dzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFdmVudCBlbWl0dGVkOiB3c3UtdmVydGljYWwtbmF2LS1hZnRlci1vcGVuJyk7XG5cdFx0XHR9XG5cdFx0fSwgb3BlbkFuaW1hdGlvblRpbWUpO1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBBZGQgYm9keSBjbGFzc1xuXHRcdCAqXG5cdFx0ICovXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCd3c3Utcy1uYXYtdmVydGljYWxfX25hdi0taXMtb3BlbicpO1xuXHR9XG5cblx0Y2xvc2UoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRlLnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcblx0fVxuXG5cdGNsb3NlX3BhbmVsKCkge1xuXHRcdC8qIFNldCBhcmlhIGV4cGFuZGVkIGF0dHJpYnV0ZSAqL1xuXHRcdHRoaXMubmF2X3BhbmVsX2NvbnRyb2wuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cblx0XHQvKiBSZW1vdmUgb3BlbiBjbGFzcyAqL1xuXHRcdHRoaXMubmF2X3BhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1zLW5hdi12ZXJ0aWNhbF9fd3JhcHBlci0tb3BlbicpO1xuXG5cdFx0LyogRW1pdCBjbG9zZSBldmVudCAqL1xuXHRcdHdzdV93ZHMuZW1pdHRlci5lbWl0KCd3c3UtdmVydGljYWwtbmF2LS1jbG9zZScpO1xuXG5cdFx0aWYgKHRoaXMuc2hvd19sb2dzKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnRXZlbnQgZW1pdHRlZDogd3N1LXZlcnRpY2FsLW5hdi0tY2xvc2UnKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEV2ZW50IGFmdGVyIGNsb3NlIGNvbXBsZXRlc1xuXHRcdCAqIHdzdS12ZXJ0aWNhbC1uYXYtLWFmdGVyLWNsb3NlXG5cdFx0ICpcblx0XHQgKi9cblx0XHRjb25zdCBjbG9zZUFuaW1hdGlvblRpbWUgPSA2MDA7IC8vIGluIG1zIHRoZSB0aW1lIGl0IHRha2VzIGZvciB0aGUgbWVudSB0byBmaW5pc2ggb3BlbmluZ1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR3c3Vfd2RzLmVtaXR0ZXIuZW1pdCgnd3N1LXZlcnRpY2FsLW5hdi0tYWZ0ZXItY2xvc2UnKTtcblxuXHRcdFx0aWYgKHRoaXMuc2hvd19sb2dzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdFdmVudCBlbWl0dGVkOiB3c3UtdmVydGljYWwtbmF2LS1hZnRlci1jbG9zZScpO1xuXHRcdFx0fVxuXHRcdH0sIGNsb3NlQW5pbWF0aW9uVGltZSk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIFJlbW92ZSBib2R5IGNsYXNzXG5cdFx0ICpcblx0XHQgKi9cblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3dzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LS1pcy1vcGVuJyk7XG5cdH1cblxuXHR0b2dnbGUoZSkge1xuXHRcdGlmIChlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ2ZhbHNlJykge1xuXHRcdFx0dGhpcy5vcGVuX2N1cnJlbnRfdGFyZ2V0KGUpO1xuXHRcdH0gZWxzZSBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT0gJ2ZhbHNlJykge1xuXHRcdFx0dGhpcy5vcGVuX3RhcmdldChlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbG9zZShlKTtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVfcGFuZWwoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICh0aGlzLm5hdl9wYW5lbF9jb250cm9sLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09ICd0cnVlJykge1xuXHRcdFx0dGhpcy5jbG9zZV9wYW5lbCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm9wZW5fcGFuZWwoKTtcblx0XHR9XG5cdH1cblxuXHRwYW5lbF9vcGVuKCkge1xuXHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LWNvbnRhaW5lci1jbG9zZS1saW5rJyk7XG5cblx0XHRjbG9zZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlT3V0VXAnKTtcblx0XHRjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcsICdmYWRlSW5Eb3duJywgJ2Zhc3RlcicpO1xuXG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBBbmltYXRlIG1lbnUgaXRlbXMgaW4gb24gdmVydCBuYXYgb3BlbiB1c2luZyBlbWl0dGVyc1xuXHRcdCAqXG5cdFx0ICovXG5cdFx0Y29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3N1LXMtbmF2LXZlcnRpY2FsX19uYXYtbGlzdC1jb250YWluZXIgPiBsaScpO1xuXHRcdGNvbnN0IG5hdkl0ZW1zQ291bnQgPSBuYXZJdGVtcy5sZW5ndGg7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5hdkl0ZW1zQ291bnQ7IGkrKykge1xuXHRcdFx0KGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRcdC8vIER1cmF0aW9uIGJldHdlZW4gZWFjaCBpdGVtIGJlaW5nIGFuaW1hdGVkXG5cdFx0XHRcdGNvbnN0IGR1cmF0aW9uID0gMzA7XG5cdFx0XHRcdGNvbnN0IGN1cnZlID0gMC4yNTtcblxuXHRcdFx0XHRsZXQgaW5jcmVtZW50ID0gZHVyYXRpb24gKyAoZHVyYXRpb24gKiAoaSAqIChpICogY3VydmUpKSk7IC8vIEJlemllclxuXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdG5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVPdXRMZWZ0Jyk7XG5cdFx0XHRcdFx0bmF2SXRlbXNbaV0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnLCAnZmFkZUluTGVmdCcpO1xuXHRcdFx0XHR9LCBpbmNyZW1lbnQpO1xuXHRcdFx0fSkoaSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQ3JlYXRlIGV2ZW50IGxpc3RlbmVyIGZvciBhbGxvd2luZyBwYW5lbCB0byBiZSBjbG9zZWQgb24gY2xpY2tcblx0XHQgKlxuXHRcdCAqL1xuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09IFwid3N1LXMtbmF2LXZlcnRpY2FsX193cmFwcGVyIHdzdS1zLW5hdi12ZXJ0aWNhbF9fd3JhcHBlci0tb3BlblwiKSB7XG5cdFx0XHRcdF90aGlzLmNsb3NlX3BhbmVsKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIERpc3BsYXkgZ2xvYmFsIGhlYWRlciB3aGVuIHBhbmVsIGlzIG9wZW5lZCBpZiBpdCBleGlzdHNcblx0XHQgKlxuXHRcdCAqL1xuXHRcdGNvbnN0IHdzdV9nbG9iYWxfaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1nLWhlYWRlcl9fd3JhcHBlcicpO1xuXG5cdFx0aWYgKHR5cGVvZiB3c3VfZ2xvYmFsX2hlYWRlciAhPSBcInVuZGVmaW5lZFwiICYmIHdzdV9nbG9iYWxfaGVhZGVyICE9IG51bGwpIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd3N1LWctaGVhZGVyLS1pcy1oaWRkZW4nKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIFJlc2l6ZSBob3Jpem9udGFsIG5hdiBpZiBpdCBleGlzdHNcblx0XHQgKlxuXHRcdCAqL1xuXHRcdGNvbnN0IHdzdV9ob3J6X25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53c3Utcy1uYXYtaG9yaXpvbnRhbF9fd3JhcHBlcicpO1xuXG5cdFx0aWYgKHdzdV9ob3J6X25hdi5sZW5ndGggIT09IDApIHtcblx0XHRcdC8vIFJlc2l6ZSBob3Jpem9udGFsIG5hdmlnYXRpb25cblx0XHRcdHdzdV93ZHMuaG9yaXpvbnRhbF9uYXYudXBkYXRlX25hdigpO1xuXG5cdFx0XHRpZiAodGhpcy5zaG93X2xvZ3MpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy53c3Utcy1uYXYtaG9yaXpvbnRhbF9fd3JhcHBlciBleGlzdHMnKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHRoaXMuc2hvd19sb2dzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCcud3N1LXMtbmF2LWhvcml6b250YWxfX3dyYXBwZXIgZG9lcyBub3QgZXhpc3QnKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwYW5lbF9hZnRlcl9vcGVuKCkge1xuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogUmVzaXplIGhvcml6b250YWwgbmF2IGlmIGl0IGV4aXN0c1xuXHRcdCAqXG5cdFx0ICovXG5cdFx0Y29uc3Qgd3N1X2hvcnpfbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLndzdS1zLW5hdi1ob3Jpem9udGFsX193cmFwcGVyJyk7XG5cblx0XHRpZiAod3N1X2hvcnpfbmF2Lmxlbmd0aCAhPT0gMCkge1xuXHRcdFx0Ly8gUmVzaXplIGhvcml6b250YWwgbmF2aWdhdGlvblxuXHRcdFx0d3N1X3dkcy5ob3Jpem9udGFsX25hdi51cGRhdGVfbmF2KCk7XG5cblx0XHRcdGlmICh0aGlzLnNob3dfbG9ncykge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLndzdS1zLW5hdi1ob3Jpem9udGFsX193cmFwcGVyIGV4aXN0cycpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAodGhpcy5zaG93X2xvZ3MpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJy53c3Utcy1uYXYtaG9yaXpvbnRhbF9fd3JhcHBlciBkb2VzIG5vdCBleGlzdCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHBhbmVsX2Nsb3NlKCkge1xuXHRcdGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndzdS1zLW5hdi12ZXJ0aWNhbF9fbmF2LWNvbnRhaW5lci1jbG9zZS1saW5rJyk7XG5cblx0XHRjbG9zZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlSW5Eb3duJyk7XG5cdFx0Y2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnZmFkZU91dFVwJyk7XG5cblx0XHQvKipcblx0XHQgKlxuXHRcdCAqIEFuaW1hdGUgbWVudSBpdGVtcyBpbiBvbiB2ZXJ0IG5hdiBvcGVuIHVzaW5nIGVtaXR0ZXJzXG5cdFx0ICpcblx0XHQgKi9cblx0XHRjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53c3Utcy1uYXYtdmVydGljYWxfX25hdi1saXN0LWNvbnRhaW5lciA+IGxpJyk7XG5cdFx0Y29uc3QgbmF2SXRlbXNDb3VudCA9IG5hdkl0ZW1zLmxlbmd0aDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbmF2SXRlbXNDb3VudDsgaSsrKSB7XG5cblx0XHRcdChmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHQvLyBEdXJhdGlvbiBiZXR3ZWVuIGVhY2ggaXRlbSBiZWluZyBhbmltYXRlZFxuXHRcdFx0XHRjb25zdCBkdXJhdGlvbiA9IDUwO1xuXHRcdFx0XHRsZXQgaW5jcmVtZW50ID0gZHVyYXRpb24gKyAoZHVyYXRpb24gKiAoaSAqIChpICogLjIpKSk7XG5cblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0bmF2SXRlbXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnZmFkZUluTGVmdCcpO1xuXHRcdFx0XHRcdG5hdkl0ZW1zW2ldLmNsYXNzTGlzdC5hZGQoJ2ZhZGVPdXRMZWZ0Jyk7XG5cdFx0XHRcdH0sIGluY3JlbWVudCk7XG5cdFx0XHR9KShpKTtcblx0XHR9O1xuXHR9XG5cblx0cGFuZWxfYWZ0ZXJfY2xvc2UoKSB7XG5cdFx0LyoqXG5cdFx0ICpcblx0XHQgKiBSZXNpemUgaG9yaXpvbnRhbCBuYXYgaWYgaXQgZXhpc3RzXG5cdFx0ICpcblx0XHQgKi9cblx0XHRjb25zdCB3c3VfaG9yel9uYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud3N1LXMtbmF2LWhvcml6b250YWxfX3dyYXBwZXInKTtcblxuXHRcdGlmICh3c3VfaG9yel9uYXYubGVuZ3RoICE9PSAwKSB7XG5cdFx0XHQvLyBSZXNpemUgaG9yaXpvbnRhbCBuYXZpZ2F0aW9uXG5cdFx0XHR3c3Vfd2RzLmhvcml6b250YWxfbmF2LnVwZGF0ZV9uYXYoKTtcblxuXHRcdFx0aWYgKHRoaXMuc2hvd19sb2dzKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCcud3N1LXMtbmF2LWhvcml6b250YWxfX3dyYXBwZXIgZXhpc3RzJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh0aGlzLnNob3dfbG9ncykge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnLndzdS1zLW5hdi1ob3Jpem9udGFsX193cmFwcGVyIGRvZXMgbm90IGV4aXN0Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgd3N1X2J0X2FyaWFfZXhwYW5kZWQgZnJvbSAnLi9hcmlhLWV4cGFuZGVkL3dzdS1idC1hcmlhLWV4cGFuZGVkJztcbmltcG9ydCB7IE1lbnViYXIgfSBmcm9tICcuL2tleWJvYXJkLW5hdi1hY2Nlc3NpYmlsaXR5L01lbnViYXJMaW5rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHdzdV9idF9wcmlvcml0eV9uYXYge1xuXHRjb25zdHJ1Y3RvcihwYXJhbXMpIHtcblx0XHR0aGlzLmJyZWFrcG9pbnRzID0gW107XG5cdFx0dGhpcy5tYWluX25hdl93aWR0aCA9IG51bGw7XG5cdFx0dGhpcy5wYXJhbXMgPSBwYXJhbXM7XG5cdFx0dGhpcy5zY3JlZW5XaWR0aCA9IG51bGw7XG5cdFx0dGhpcy53aW5kb3cgPSB3aW5kb3c7XG5cdH1cblxuXHQvLyBNZXRob2RzXG5cdGluaXQoKSB7XG5cdFx0dGhpcy51cGRhdGVfbmF2KCk7XG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlX25hdi5iaW5kKHRoaXMpKTsgLy8gVE9ETzogbG9vayBpbnRvIGlmIHdlIG5lZWQgdG8gdXNlIHNvbWV0aGluZyBsaWtlIGRlYm91bmNlIG9yIGF0IHRoZSB2ZXJ5IGxlYXN0IHNldCBhIHRpbWVvdXRcblx0fVxuXG5cdHVwZGF0ZV9uYXYoKSB7XG5cdFx0Ly8gQ2hlY2sgaWYgYWxsIGZvbnRzIGFyZSBsb2FkZWRcblx0XHQvLyBUT0RPOiBGaXggZm9yIGllIDExICYgZWRnZSAobmVlZHMgdGVzdGluZylcblx0XHRkb2N1bWVudC5mb250cy5yZWFkeS50aGVuKCgpID0+IHtcblxuXHRcdFx0Ly8gSWYgZG9lc24ndCBleGlzdCAmIE5hdiBpcyBncmVhdGVyIHRoYW4gc2NyZWVuIHdpZHRoLCBjcmVhdGUgbmF2XG5cdFx0XHRpZiAodGhpcy5nZXRfcHJpb3JpdHlfbmF2ID09IG51bGwgJiYgdGhpcy5nZXRfZnJhbWVfd2lkdGggPD0gdGhpcy5nZXRfbWFpbl9uYXZfd2lkdGgpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVfcHJpb3JpdHlfbmF2KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIG5hdiBleGlzdHMsIGp1c3QgcmVzaXplIGl0XG5cdFx0XHRpZiAodGhpcy5nZXRfcHJpb3JpdHlfbmF2ICE9IG51bGwpIHtcblx0XHRcdFx0dGhpcy5yZXNpemVfbmF2KCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuaW5pdGlhdGVLZXlib2FyZE5hdmlnYXRpb25TdXBwb3J0KCk7XG5cdFx0XHR0aGlzLmluaXRpYXRlQXJpYUV4cGFuZGVkKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjcmVhdGVfcHJpb3JpdHlfbmF2KCkge1xuXHRcdC8vIENyZWF0ZSBlbGVtZW50c1xuXHRcdGNvbnN0IHByaW9yaXR5X25hdl9saXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXHRcdGNvbnN0IHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRjb25zdCBwcmlvcml0eV9uYXZfdW5vcmRlcmVkX2xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG5cdFx0Ly8gQ3JlYXRlIGxpc3QgaXRlbSB3cmFwcGVyIDxsaT5cblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLnBhcmFtc1sncHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9jbGFzc19uYW1lJ10pO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ25vbmUnKTtcblxuXHRcdC8vIENyZWF0ZSBsaXN0IGl0ZW0gbGluayA8YT5cblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpbmsuaW5uZXJIVE1MID0gdGhpcy5wYXJhbXNbJ21vcmVfaW5uZXJfaHRtbCddO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnIycpO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgdGhpcy5wYXJhbXNbJ3ByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGlua19jbGFzc19uYW1lJ10pO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbWVudWl0ZW0nKTtcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpbmsuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGluay5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCAndHJ1ZScpO1xuXG5cdFx0Ly8gQ3JlYXRlIHVub3JkZXJlZCBsaXN0IGl0ZW0gY29udGFpbmVyIDx1bD5cblx0XHRwcmlvcml0eV9uYXZfdW5vcmRlcmVkX2xpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsIHRoaXMucGFyYW1zWydwcmlvcml0eV9uYXZfbGlzdF9pdGVtX2xpc3RfY2xhc3NfbmFtZSddKTtcblx0XHRwcmlvcml0eV9uYXZfdW5vcmRlcmVkX2xpc3Quc2V0QXR0cmlidXRlKCdyb2xlJywgJ21lbnUnKTtcblx0XHRwcmlvcml0eV9uYXZfdW5vcmRlcmVkX2xpc3Quc2V0QXR0cmlidXRlKCdhcmlhLWFiZWwnLCAnUmVwbGFjZSBNZSB3LyBMaW5rIE5hbWUgU3VibWVudScpO1xuXG5cdFx0Ly8gQXBwZW5kIHRvIGRvbVxuXHRcdHByaW9yaXR5X25hdl9saXN0X2l0ZW0uYXBwZW5kQ2hpbGQocHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9saW5rKTtcblx0XHRwcmlvcml0eV9uYXZfbGlzdF9pdGVtLmFwcGVuZENoaWxkKHByaW9yaXR5X25hdl91bm9yZGVyZWRfbGlzdCk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnBhcmFtc1snbWFpbl9uYXZfc2VsZWN0b3InXSkuYXBwZW5kQ2hpbGQocHJpb3JpdHlfbmF2X2xpc3RfaXRlbSk7XG5cdH1cblxuXHRyZXNpemVfbmF2KCkge1xuXHRcdHRoaXMuY2FsY3VsYXRlV2lkdGhzKCk7XG5cblx0XHQvLyBNb3ZlIGl0ZW1zIHRvIHByaW9yaXR5IG5hdlxuXHRcdHdoaWxlICh0aGlzLnNjcmVlbldpZHRoIDw9IHRoaXMubWFpbl9uYXZfd2lkdGggJiYgdGhpcy5nZXRfbWFpbl9uYXYuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuXHRcdFx0Y29uc3QgaXRlbVRvTW92ZSA9IHRoaXMuZ2V0X21haW5fbmF2LmNoaWxkcmVuW3RoaXMuZ2V0X21haW5fbmF2LmNoaWxkcmVuLmxlbmd0aCAtIDJdO1xuXHRcdFx0dGhpcy5tb3ZlVG9Qcmlvcml0eU5hdihpdGVtVG9Nb3ZlKTtcblx0XHRcdHRoaXMuY2FsY3VsYXRlV2lkdGhzKCk7XG5cdFx0fVxuXG5cdFx0Ly8gTW92ZSBpdGVtcyB0byBtYWluIG5hdlxuXHRcdHdoaWxlICh0aGlzLnNjcmVlbldpZHRoID49IHRoaXMuYnJlYWtwb2ludHNbdGhpcy5icmVha3BvaW50cy5sZW5ndGggLSAxXSAmJiB0aGlzLmdldF9wcmlvcml0eV9uYXZfc3VibWVudS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLm1vdmVUb01haW5OYXYodGhpcy5nZXRfcHJpb3JpdHlfbmF2X3N1Ym1lbnUuY2hpbGRyZW5bMF0pO1xuXHRcdH1cblxuXHRcdC8vIFR1cm4gb2ZmIHByaW9yaXR5IG5hdiBpZiB1bm5lY2Vzc2FyeVxuXHRcdGlmICh0aGlzLmJyZWFrcG9pbnRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHR0aGlzLmRlc3Ryb3lQcmlvcml0eU5hdigpO1xuXHRcdH1cblx0fVxuXG5cdGNhbGN1bGF0ZVdpZHRocygpIHtcblx0XHR0aGlzLm1haW5fbmF2X3dpZHRoID0gdGhpcy5nZXRfbWFpbl9uYXZfd2lkdGg7XG5cdFx0dGhpcy5zY3JlZW5XaWR0aCA9IHRoaXMuZ2V0X2ZyYW1lX3dpZHRoO1xuXHR9XG5cblx0bW92ZVRvUHJpb3JpdHlOYXYoaXRlbVRvTW92ZSkge1xuXHRcdHRoaXMuY2xlYW5JdGVtQmVmb3JlTW92ZShpdGVtVG9Nb3ZlKTtcblx0XHR0aGlzLmdldF9wcmlvcml0eV9uYXZfc3VibWVudS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyYmVnaW4nLCBpdGVtVG9Nb3ZlKTtcblx0XHR0aGlzLmJyZWFrcG9pbnRzLnB1c2godGhpcy5tYWluX25hdl93aWR0aCk7XG5cdH1cblxuXHRtb3ZlVG9NYWluTmF2KGl0ZW1Ub01vdmUpIHtcblx0XHR0aGlzLmNsZWFuSXRlbUJlZm9yZU1vdmUoaXRlbVRvTW92ZSk7XG5cdFx0dGhpcy5nZXRfbWFpbl9uYXYuaW5zZXJ0QmVmb3JlKGl0ZW1Ub01vdmUsIHRoaXMuZ2V0X21haW5fbmF2Lmxhc3RFbGVtZW50Q2hpbGQpO1xuXHRcdHRoaXMuYnJlYWtwb2ludHMucG9wKCk7XG5cdH1cblxuXHRjbGVhbkl0ZW1CZWZvcmVNb3ZlKGl0ZW1fdG9fY2xlYW4pIHtcblx0XHRjb25zdCBjbGFzc19saXN0ID0gaXRlbV90b19jbGVhbi5jbGFzc0xpc3Q7XG5cdFx0Y29uc3QgZGlydHlfY2xhc3NlcyA9IFtcblx0XHRcdCdhbmltYXRlZCcsXG5cdFx0XHQnZmFkZU91dERvd24nLFxuXHRcdFx0J2ZhZGVJblVwJ1xuXHRcdF07XG5cblx0XHRkaXJ0eV9jbGFzc2VzLmZvckVhY2goZGlydHlfY2xhc3MgPT4ge1xuXHRcdFx0aWYgKEFycmF5LmZyb20oY2xhc3NfbGlzdCkuaW5jbHVkZXMoZGlydHlfY2xhc3MpKSB7XG5cdFx0XHRcdGNsYXNzX2xpc3QucmVtb3ZlKGRpcnR5X2NsYXNzKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGRlc3Ryb3lQcmlvcml0eU5hdigpIHtcblx0XHR0aGlzLmdldF9wcmlvcml0eV9uYXYucmVtb3ZlKCk7XG5cdH1cblxuXHQvLyBJbml0aWF0ZSBjb2xsYXBzYWJsZSBhcmlhLWV4cGFuZGVkIGl0ZW1zXG5cdGluaXRpYXRlQXJpYUV4cGFuZGVkKCkge1xuXHRcdHZhciBleHBhbmRlZF9hcmlhX2l0ZW1zID0gbmV3IHdzdV9idF9hcmlhX2V4cGFuZGVkKHtcblx0XHRcdG5hdl9pdGVtX3NlbGVjdG9yczogJy4nICsgdGhpcy5wYXJhbXNbJ3ByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGlua19jbGFzc19uYW1lJ10sXG5cdFx0XHR1c2VfYW5pbWF0aW9uczogdHJ1ZSxcblx0XHRcdHNob3dfbG9nczogdHJ1ZVxuXHRcdH0pO1xuXHRcdGV4cGFuZGVkX2FyaWFfaXRlbXMuaW5pdCgpO1xuXHR9XG5cblx0Ly8gSW5pdGlhdGUga2V5Ym9hcmQgY29udHJvbHMgZm9yIGFjY2Vzc2liaWxpdHkgc3VwcG9ydFxuXHRpbml0aWF0ZUtleWJvYXJkTmF2aWdhdGlvblN1cHBvcnQoKSB7XG5cdFx0dmFyIG1lbnViYXIgPSBuZXcgTWVudWJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMucGFyYW1zWydtYWluX25hdl9zZWxlY3RvciddKSk7XG5cdFx0bWVudWJhci5pbml0KCk7XG5cdH1cblxuXHQvLyBHZXR0ZXJzXG5cdGdldCBnZXRfZnJhbWVfd2lkdGgoKSB7XG5cdFx0Y29uc3Qgd2luZG93SW5uZXJXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53c3Utcy1uYXYtaG9yaXpvbnRhbF9fbmF2LWNvbnRhaW5lcicpLm9mZnNldFdpZHRoO1xuXHRcdHJldHVybiB3aW5kb3dJbm5lcldpZHRoO1xuXHR9XG5cblx0Z2V0IGdldF9tYWluX25hdl93aWR0aCgpIHtcblx0XHRjb25zdCBtYWluTmF2SW5uZXJXaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wYXJhbXNbJ21haW5fbmF2X3NlbGVjdG9yJ10pLm9mZnNldFdpZHRoO1xuXHRcdHJldHVybiBtYWluTmF2SW5uZXJXaWR0aDtcblx0fVxuXG5cdGdldCBnZXRfbWFpbl9uYXYoKSB7XG5cdFx0Y29uc3QgbWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5wYXJhbXNbJ21haW5fbmF2X3NlbGVjdG9yJ10pO1xuXHRcdHJldHVybiBtYWluTmF2O1xuXHR9XG5cblx0Z2V0IGdldF9wcmlvcml0eV9uYXYoKSB7XG5cdFx0Y29uc3QgcHJpb3JpdHlfbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLnBhcmFtc1sncHJpb3JpdHlfbmF2X2xpc3RfaXRlbV9jbGFzc19uYW1lJ10pO1xuXHRcdHJldHVybiBwcmlvcml0eV9uYXY7XG5cdH1cblxuXHRnZXQgZ2V0X3ByaW9yaXR5X25hdl9zdWJtZW51KCkge1xuXHRcdGNvbnN0IHByaW9yaXR5X25hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5wYXJhbXNbJ3ByaW9yaXR5X25hdl9saXN0X2l0ZW1fbGlzdF9jbGFzc19uYW1lJ10pO1xuXHRcdHJldHVybiBwcmlvcml0eV9uYXY7XG5cdH1cblxuXHRnZXQgZ2V0QnJlYWtwb2ludHMoKSB7XG5cdFx0Y29uc3QgYnJlYWtwb2ludHMgPSB0aGlzLmJyZWFrcG9pbnRzO1xuXHRcdHJldHVybiBicmVha3BvaW50cztcblx0fVxufVxuIiwiaW1wb3J0IG1pdHQgZnJvbSAnbWl0dCc7XG5cbmlmICh0eXBlb2Ygd3N1X3dkcyA9PSAndW5kZWZpbmVkJykge1xuXHR3aW5kb3dbJ3dzdV93ZHMnXSA9IHt9O1xuXHR3c3Vfd2RzID0gd2luZG93LndzdV93ZHM7XG59XG5cbndzdV93ZHMuZW1pdHRlciA9IG1pdHQoKTtcblxuZXhwb3J0IGRlZmF1bHQgd3N1X3dkcztcbiIsIi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuLy8gQW4gYXJyYXkgb2YgYWxsIGN1cnJlbnRseSByZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzIGZvciBhIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIFxuXG4vKiogTWl0dDogVGlueSAofjIwMGIpIGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciAvIHB1YnN1Yi5cbiAqICBAbmFtZSBtaXR0XG4gKiAgQHJldHVybnMge01pdHR9XG4gKi9cbmZ1bmN0aW9uIG1pdHQoYWxsICAgICAgICAgICAgICAgICApIHtcblx0YWxsID0gYWxsIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byBsaXN0ZW4gZm9yLCBvciBgXCIqXCJgIGZvciBhbGwgZXZlbnRzXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgRnVuY3Rpb24gdG8gY2FsbCBpbiByZXNwb25zZSB0byBnaXZlbiBldmVudFxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b246IGZ1bmN0aW9uIG9uKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byB1bnJlZ2lzdGVyIGBoYW5kbGVyYCBmcm9tLCBvciBgXCIqXCJgXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgSGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9mZjogZnVuY3Rpb24gb2ZmKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHRpZiAoYWxsW3R5cGVdKSB7XG5cdFx0XHRcdGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnZva2UgYWxsIGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKiBJZiBwcmVzZW50LCBgXCIqXCJgIGhhbmRsZXJzIGFyZSBpbnZva2VkIGFmdGVyIHR5cGUtbWF0Y2hlZCBoYW5kbGVycy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlICBUaGUgZXZlbnQgdHlwZSB0byBpbnZva2Vcblx0XHQgKiBAcGFyYW0ge0FueX0gW2V2dF0gIEFueSB2YWx1ZSAob2JqZWN0IGlzIHJlY29tbWVuZGVkIGFuZCBwb3dlcmZ1bCksIHBhc3NlZCB0byBlYWNoIGhhbmRsZXJcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdGVtaXQ6IGZ1bmN0aW9uIGVtaXQodHlwZSAgICAgICAgLCBldnQgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcihldnQpOyB9KTtcblx0XHRcdChhbGxbJyonXSB8fCBbXSkuc2xpY2UoKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pdHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXR0LmVzLmpzLm1hcFxuIiwiIWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7dmFyIHQ9d2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkezJ9KVxcLi8pLG49ISF0JiYxNjw9cGFyc2VJbnQodFsxXSwxMCk7aWYoIShcIm9iamVjdEZpdFwiaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlIT0hMSl8fG4pe3ZhciBvPWZ1bmN0aW9uKHQsZSxpKXt2YXIgbixvLGwsYSxkO2lmKChpPWkuc3BsaXQoXCIgXCIpKS5sZW5ndGg8MiYmKGlbMV09aVswXSksXCJ4XCI9PT10KW49aVswXSxvPWlbMV0sbD1cImxlZnRcIixhPVwicmlnaHRcIixkPWUuY2xpZW50V2lkdGg7ZWxzZXtpZihcInlcIiE9PXQpcmV0dXJuO249aVsxXSxvPWlbMF0sbD1cInRvcFwiLGE9XCJib3R0b21cIixkPWUuY2xpZW50SGVpZ2h0fWlmKG4hPT1sJiZvIT09bCl7aWYobiE9PWEmJm8hPT1hKXJldHVyblwiY2VudGVyXCI9PT1ufHxcIjUwJVwiPT09bj8oZS5zdHlsZVtsXT1cIjUwJVwiLHZvaWQoZS5zdHlsZVtcIm1hcmdpbi1cIitsXT1kLy0yK1wicHhcIikpOnZvaWQoMDw9bi5pbmRleE9mKFwiJVwiKT8obj1wYXJzZUludChuKSk8NTA/KGUuc3R5bGVbbF09bitcIiVcIixlLnN0eWxlW1wibWFyZ2luLVwiK2xdPWQqKG4vLTEwMCkrXCJweFwiKToobj0xMDAtbixlLnN0eWxlW2FdPW4rXCIlXCIsZS5zdHlsZVtcIm1hcmdpbi1cIithXT1kKihuLy0xMDApK1wicHhcIik6ZS5zdHlsZVtsXT1uKTtlLnN0eWxlW2FdPVwiMFwifWVsc2UgZS5zdHlsZVtsXT1cIjBcIn0sbD1mdW5jdGlvbih0KXt2YXIgZT10LmRhdGFzZXQ/dC5kYXRhc2V0Lm9iamVjdEZpdDp0LmdldEF0dHJpYnV0ZShcImRhdGEtb2JqZWN0LWZpdFwiKSxpPXQuZGF0YXNldD90LmRhdGFzZXQub2JqZWN0UG9zaXRpb246dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9iamVjdC1wb3NpdGlvblwiKTtlPWV8fFwiY292ZXJcIixpPWl8fFwiNTAlIDUwJVwiO3ZhciBuPXQucGFyZW50Tm9kZTtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCxudWxsKSxpPWUuZ2V0UHJvcGVydHlWYWx1ZShcInBvc2l0aW9uXCIpLG49ZS5nZXRQcm9wZXJ0eVZhbHVlKFwib3ZlcmZsb3dcIiksbz1lLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpO2kmJlwic3RhdGljXCIhPT1pfHwodC5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLFwiaGlkZGVuXCIhPT1uJiYodC5zdHlsZS5vdmVyZmxvdz1cImhpZGRlblwiKSxvJiZcImlubGluZVwiIT09b3x8KHQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIpLDA9PT10LmNsaWVudEhlaWdodCYmKHQuc3R5bGUuaGVpZ2h0PVwiMTAwJVwiKSwtMT09PXQuY2xhc3NOYW1lLmluZGV4T2YoXCJvYmplY3QtZml0LXBvbHlmaWxsXCIpJiYodC5jbGFzc05hbWU9dC5jbGFzc05hbWUrXCIgb2JqZWN0LWZpdC1wb2x5ZmlsbFwiKX0obiksZnVuY3Rpb24odCl7dmFyIGU9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCxudWxsKSxpPXtcIm1heC13aWR0aFwiOlwibm9uZVwiLFwibWF4LWhlaWdodFwiOlwibm9uZVwiLFwibWluLXdpZHRoXCI6XCIwcHhcIixcIm1pbi1oZWlnaHRcIjpcIjBweFwiLHRvcDpcImF1dG9cIixyaWdodDpcImF1dG9cIixib3R0b206XCJhdXRvXCIsbGVmdDpcImF1dG9cIixcIm1hcmdpbi10b3BcIjpcIjBweFwiLFwibWFyZ2luLXJpZ2h0XCI6XCIwcHhcIixcIm1hcmdpbi1ib3R0b21cIjpcIjBweFwiLFwibWFyZ2luLWxlZnRcIjpcIjBweFwifTtmb3IodmFyIG4gaW4gaSllLmdldFByb3BlcnR5VmFsdWUobikhPT1pW25dJiYodC5zdHlsZVtuXT1pW25dKX0odCksdC5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsdC5zdHlsZS53aWR0aD1cImF1dG9cIix0LnN0eWxlLmhlaWdodD1cImF1dG9cIixcInNjYWxlLWRvd25cIj09PWUmJihlPXQuY2xpZW50V2lkdGg8bi5jbGllbnRXaWR0aCYmdC5jbGllbnRIZWlnaHQ8bi5jbGllbnRIZWlnaHQ/XCJub25lXCI6XCJjb250YWluXCIpLFwibm9uZVwiPT09ZT8obyhcInhcIix0LGkpLHZvaWQgbyhcInlcIix0LGkpKTpcImZpbGxcIj09PWU/KHQuc3R5bGUud2lkdGg9XCIxMDAlXCIsdC5zdHlsZS5oZWlnaHQ9XCIxMDAlXCIsbyhcInhcIix0LGkpLHZvaWQgbyhcInlcIix0LGkpKToodC5zdHlsZS5oZWlnaHQ9XCIxMDAlXCIsdm9pZChcImNvdmVyXCI9PT1lJiZ0LmNsaWVudFdpZHRoPm4uY2xpZW50V2lkdGh8fFwiY29udGFpblwiPT09ZSYmdC5jbGllbnRXaWR0aDxuLmNsaWVudFdpZHRoPyh0LnN0eWxlLnRvcD1cIjBcIix0LnN0eWxlLm1hcmdpblRvcD1cIjBcIixvKFwieFwiLHQsaSkpOih0LnN0eWxlLndpZHRoPVwiMTAwJVwiLHQuc3R5bGUuaGVpZ2h0PVwiYXV0b1wiLHQuc3R5bGUubGVmdD1cIjBcIix0LnN0eWxlLm1hcmdpbkxlZnQ9XCIwXCIsbyhcInlcIix0LGkpKSkpfSxlPWZ1bmN0aW9uKHQpe2lmKHZvaWQgMD09PXR8fHQgaW5zdGFuY2VvZiBFdmVudCl0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1vYmplY3QtZml0XVwiKTtlbHNlIGlmKHQmJnQubm9kZU5hbWUpdD1bdF07ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgdHx8IXQubGVuZ3RofHwhdFswXS5ub2RlTmFtZSlyZXR1cm4hMTt0PXR9Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspaWYodFtlXS5ub2RlTmFtZSl7dmFyIGk9dFtlXS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO2lmKFwiaW1nXCI9PT1pKXtpZihuKWNvbnRpbnVlO3RbZV0uY29tcGxldGU/bCh0W2VdKTp0W2VdLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXtsKHRoaXMpfSl9ZWxzZVwidmlkZW9cIj09PWk/MDx0W2VdLnJlYWR5U3RhdGU/bCh0W2VdKTp0W2VdLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRtZXRhZGF0YVwiLGZ1bmN0aW9uKCl7bCh0aGlzKX0pOmwodFtlXSl9cmV0dXJuITB9O1wibG9hZGluZ1wiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZT9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGUpOmUoKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGUpLHdpbmRvdy5vYmplY3RGaXRQb2x5ZmlsbD1lfWVsc2Ugd2luZG93Lm9iamVjdEZpdFBvbHlmaWxsPWZ1bmN0aW9uKCl7cmV0dXJuITF9fX0oKTsiXSwic291cmNlUm9vdCI6IiJ9