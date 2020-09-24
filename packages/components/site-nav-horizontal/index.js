import React, { Component } from 'react';

import wsu_wds from '@wsuwebteam/build-tools/js/wsu-bt-wds';
import priority_nav from '@wsuwebteam/build-tools/js/wsu-bt-priority-nav';

import './style.scss';

class SiteNavHorizontal extends Component {
	componentDidMount() {
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
				more_inner_html: '<div class="wsu-icon wsu-i-more"></div>'
			});

			wsu_wds.horizontal_nav.init();
		}
	}

	render() {

		return (
			<div className="wsu-s-nav-horizontal__wrapper wsu-u-no-js">
				<nav className="wsu-s-nav-horizontal__nav-container" aria-label="Horizontal Site Navigation">
					<ul className="wsu-s-nav-horizontal__nav-list" id="wsu-s-nav-horizontal" role="menubar" aria-label="Horizontal Site Navigation">
						<li className="wsu-s-nav-horizontal__nav-item" role="none">
							<a href="#" className="wsu-s-nav-horizontal__nav-link" role="menuitem">Dolor</a>
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
						<li className="wsu-s-nav-horizontal__nav-item" role="none">
							<a href="#" className="wsu-s-nav-horizontal__nav-link" role="menuitem">Replace Me w/ Link Name</a>
						</li>
					</ul>
				</nav>
			</div>
		)
	}
}

export default SiteNavHorizontal;