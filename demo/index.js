// Import Component you want in demo
import globalHeader from '../components/dist/global-header/global-header.html';
import globalFooter from '../components/dist/global-footer/global-footer.html';

import siteFooter from '../components/dist/site-footer/site-footer.html';
import siteFooterCondensed from '../components/dist/site-footer-condensed/site-footer-condensed.html';
import siteNavHorz from '../components/dist/site-nav-horizontal/site-nav-horizontal.html';

import contentHeading from '../components/dist/content-heading/content-heading.html';

// Add component to array in order you want it to display in DOM
var components = [
	globalHeader,
	siteNavHorz,
	contentHeading,
	siteFooter,
	// siteFooterCondensed,
	globalFooter
];

// Query app container
var app = document.querySelector('#app');

// Loop over each component
components.forEach(function (markup) {
	// Remove head nonsense
	var splitAtStart = markup.split('<!-- COMPONENT:START -->');

	// Remove foot nonsense
	var splitAtEnd = splitAtStart[1].split('<!-- COMPONENT:END -->');

	// Create component markup variable
	var componentMarkup = splitAtEnd[0];

	// Add markup to DOM
	app.innerHTML += componentMarkup;
});
