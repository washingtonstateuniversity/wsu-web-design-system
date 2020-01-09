function importComponent(element) {
	// Remove head nonsense
	var splitAtStart = element.split('<!-- COMPONENT:START -->');

	// Remove foot nonsense
	var splitAtEnd = splitAtStart[1].split('<!-- COMPONENT:END -->');

	// Create component element variable
	var componentMarkup = splitAtEnd[0];

	// Add element to DOM
	app.innerHTML += componentMarkup;
}

// Import Component you want in demo
import globalHeader from '../components/dist/global-header/global-header.html';
import globalFooter from '../components/dist/global-footer/global-footer.html';
import siteNavVert from '../components/dist/site-nav-vertical/site-nav-vertical.html';
import siteFooter from '../components/dist/site-footer/site-footer.html';
import siteFooterCondensed from '../components/dist/site-footer-condensed/site-footer-condensed.html';
import siteNavHorz from '../components/dist/site-nav-horizontal/site-nav-horizontal.html';
import contentHeading from '../components/dist/content-heading/content-heading.html';

/**
 *
 * Header
 *
 */
var header = [
	globalHeader,
];

// Query app container
var app = document.querySelector('#header');

// Loop over each component
header.forEach(function (markup) {
	importComponent(markup);
});

/**
 *
 * Content
 *
 */

// Add component to array in order you want it to display in DOM
var content = [
	siteNavVert,
	contentHeading,
];

// Query app container
var app = document.querySelector('#content');

// Loop over each component
content.forEach(function (markup) {
	importComponent(markup);
});

/**
 *
 * Footer
 *
 */

// Add component to array in order you want it to display in DOM
var footer = [
	siteFooter,
	// siteFooterCondensed,
];

// Query app container
var app = document.querySelector('#footer');

// Loop over each component
footer.forEach(function (markup) {
	importComponent(markup);
});
