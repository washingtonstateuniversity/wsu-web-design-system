import React from 'react';

import wsu_wds from '@wsuwebteam/build-tools/js/wsu-bt-wds';
import priority_nav from '@wsuwebteam/build-tools/js/wsu-bt-priority-nav';

export const SiteNavHorizontal = () => {

	const nav_horz_wrapper = document.querySelector('.wsu-s-nav-horizontal__wrapper');

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
		wsu_wds.horizontal_nav = new priority_nav({
			main_nav_selector: '.wsu-s-nav-horizontal__nav-list',
			priority_nav_list_item_class_name: 'wsu-s-nav-horizontal__nav-item--more',
			priority_nav_list_item_link_class_name: 'wsu-s-nav-horizontal__nav-link',
			priority_nav_list_item_list_class_name: 'wsu-s-nav-horizontal__nav-list--has-more-items',
			more_inner_html: '<div className="wsu-icon wsu-i-more"></div>'
		});

		wsu_wds.horizontal_nav.init();

		// emitter.on('wsu-s-nav-horizontal--opened', function (e) {
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

	return (
		<div className="wsu-s-nav-horizontal__wrapper wsu-u-no-js">
			<nav className="wsu-s-nav-horizontal__nav-container" aria-label="Horizontal Site Navigation">
				<ul className="wsu-s-nav-horizontal__nav-list" id="wsu-s-nav-horizontal" role="menubar" aria-label="Horizontal Site Navigation">
					<li className="wsu-s-nav-horizontal__nav-item--has-children" role="none">
						<a href="#" className="wsu-s-nav-horizontal__nav-link" role="menuitem" aria-haspopup="true" aria-expanded="true">Dolor</a>
						<ul className="wsu-s-nav-horizontal__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link">Lorem Ipsum</a>
							</li>
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link">Dolor Sit Amet</a>
							</li>
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link--active">Consectetur</a>
							</li>
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link">Adipiscing Elit</a>
							</li>
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link">Sed Mollis Ipsum</a>
							</li>
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link wsu-s-nav-horizontal__nav-link--button">Sed Mollis Ipsum</a>
							</li>
						</ul>
					</li>
					<li className="wsu-s-nav-horizontal__nav-item" role="none">
						<a href="#" className="wsu-s-nav-horizontal__nav-link" role="menuitem">Sit Amet</a>
					</li>
					<li className="wsu-s-nav-horizontal__nav-item" role="none">
						<a href="#" className="wsu-s-nav-horizontal__nav-link" role="menuitem">Consectetur Adipiscing Elit</a>
					</li>
					<li className="wsu-s-nav-horizontal__nav-item" role="none">
						<a href="#" className="wsu-s-nav-horizontal__nav-link" role="menuitem">Lorem Ipsum</a>
					</li>
					<li className="wsu-s-nav-horizontal__nav-item" role="none">
						<a href="#" className="wsu-s-nav-horizontal__nav-link" role="menuitem">Dolor</a>
					</li>
					<li className="wsu-s-nav-horizontal__nav-item" role="none">
						<a href="#" className="wsu-s-nav-horizontal__nav-link" role="menuitem">Sit Amet</a>
					</li>
					<li className="wsu-s-nav-horizontal__nav-item" role="none">
						<a href="#" className="wsu-s-nav-horizontal__nav-link" role="menuitem">Consectetur Adipiscing Elit</a>
					</li>
					<li className="wsu-s-nav-horizontal__nav-item--has-children" role="none">
						<a href="#" className="wsu-s-nav-horizontal__nav-link" role="menuitem" aria-haspopup="true" aria-expanded="true">Replace Me w/ Link Name</a>
						<ul className="wsu-s-nav-horizontal__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link">Lorem Ipsum</a>
							</li>
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link">Dolor Sit Amet</a>
							</li>
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link">Consectetur</a>
							</li>
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link">Adipiscing Elit</a>
							</li>
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link">Sed Mollis Ipsum</a>
							</li>
							<li className="wsu-s-nav-horizontal__nav-item" role="none">
								<a href="#" className="wsu-s-nav-horizontal__nav-link">Sed Mollis Ipsum</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>

	)
}

export default SiteNavHorizontal;