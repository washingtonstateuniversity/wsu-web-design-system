import React, { Component } from 'react';

import './style.scss';
//import './script.scss';

const SiteNavVertical = ( props ) => {

	return (
		<div className="wsu-s-nav-vertical__wrapper wsu-u-no-js">
			<nav className="wsu-s-nav-vertical__nav-container" aria-label="Vertical Site Navigation">
				<a href="#" className="wsu-s-nav-vertical__nav-container-close-link">
					<span className="wsu-icon wsu-i-x-close"></span>
					<span className="wsu-s-nav-vertical__nav-container-close-label">Close</span>
				</a>
				<ul className="wsu-s-nav-vertical__nav-list-container" id="wsu-s-nav-vertical" role="menubar" aria-label="Vertical Site Navigation">
					<li className="wsu-s-nav-vertical__nav-item" role="none">
						<a href="/demo/dist/index.html" className="wsu-s-nav-vertical__nav-link wsu-s-nav-vertical__nav-link--active">Home</a>
					</li>
					<li className="wsu-s-nav-vertical__nav-item wsu-s-nav-vertical__nav-item--has-children" role="none">
						<a href="#" className="wsu-s-nav-vertical__nav-link " role="menuitem" aria-haspopup="true" aria-expanded="true">Components</a>
						<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
							<li className="wsu-s-nav-vertical__nav-item" role="none">
								<a href="#" className="wsu-s-nav-vertical__nav-link">All Components</a>
							</li>
							<li className="wsu-s-nav-vertical__nav-item wsu-s-nav-vertical__nav-item--has-children" role="none">
								<a href="#" className="wsu-s-nav-vertical__nav-link " role="menuitem" aria-haspopup="true" aria-expanded="true">Global Components</a>
								<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-global-footer.html" className="wsu-s-nav-vertical__nav-link">Global Footer</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-global-header.html" className="wsu-s-nav-vertical__nav-link">Global Header</a>
									</li>
								</ul>
							</li>
							<li className="wsu-s-nav-vertical__nav-item wsu-s-nav-vertical__nav-item--has-children" role="none">
								<a href="#" className="wsu-s-nav-vertical__nav-link " role="menuitem" aria-haspopup="true" aria-expanded="true">Site Components</a>
								<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-site-header.html" className="wsu-s-nav-vertical__nav-link">Site Header</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-site-footer.html" className="wsu-s-nav-vertical__nav-link">Site Footer</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-site-nav-vertical.html" className="wsu-s-nav-vertical__nav-link">Site Nav Vertical</a>
									</li>
								</ul>
							</li>
							<li className="wsu-s-nav-vertical__nav-item wsu-s-nav-vertical__nav-item--has-children" role="none">
								<a href="#" className="wsu-s-nav-vertical__nav-link " role="menuitem" aria-haspopup="true" aria-expanded="true">Content Components</a>
								<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-article-copy.html" className="wsu-s-nav-vertical__nav-link">Article Copy</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-article-footer.html" className="wsu-s-nav-vertical__nav-link">Article Footer</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-article-header.html" className="wsu-s-nav-vertical__nav-link">Article Header</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-button.html" className="wsu-s-nav-vertical__nav-link">Buttons</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-card.html" className="wsu-s-nav-vertical__nav-link">Cards</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-column.html" className="wsu-s-nav-vertical__nav-link">Columns</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-form.html" className="wsu-s-nav-vertical__nav-link">Forms</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-heading.html" className="wsu-s-nav-vertical__nav-link">Headings</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-hero.html" className="wsu-s-nav-vertical__nav-link">Hero Banner</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-icons.html" className="wsu-s-nav-vertical__nav-link">Icons</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-link.html" className="wsu-s-nav-vertical__nav-link">Links</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-list.html" className="wsu-s-nav-vertical__nav-link">List</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="/demo/dist/component-content-paragraph.html" className="wsu-s-nav-vertical__nav-link">Paragraph</a>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="wsu-s-nav-vertical__nav-item wsu-s-nav-vertical__nav-item--has-children" role="none">
						<a href="#" className="wsu-s-nav-vertical__nav-link" role="menuitem" aria-haspopup="true" aria-expanded="true">Page Types</a>
						<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
							<li className="wsu-s-nav-vertical__nav-item" role="none">
								<a href="/demo/dist/content-article-bundle.html" className="wsu-s-nav-vertical__nav-link">Article/Blog Post</a>
							</li>
							<li className="wsu-s-nav-vertical__nav-item" role="none">
								<a href="#" className="wsu-s-nav-vertical__nav-link">Dolor Sit Amet</a>
							</li>
							<li className="wsu-s-nav-vertical__nav-item--has-children" role="none">
								<a href="#" className="wsu-s-nav-vertical__nav-link">Second Level Nav Item</a>
								<ul className="wsu-s-nav-vertical__nav-list" role="menu" aria-label="Replace Me w/ Link Name Submenu">
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="#" className="wsu-s-nav-vertical__nav-link">Third Level Nav Item 1</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="#" className="wsu-s-nav-vertical__nav-link--active">Third Level Nav Item 2</a>
									</li>
									<li className="wsu-s-nav-vertical__nav-item" role="none">
										<a href="#" className="wsu-s-nav-vertical__nav-link">Third Level Nav Item 3</a>
									</li>
								</ul>
							</li>
							<li className="wsu-s-nav-vertical__nav-item" role="none">
								<a href="#" className="wsu-s-nav-vertical__nav-link">Adipiscing Elit</a>
							</li>
							<li className="wsu-s-nav-vertical__nav-item" role="none">
								<a href="#" className="wsu-s-nav-vertical__nav-link">Sed Mollis Ipsum</a>
							</li>
							<li className="wsu-s-nav-vertical__nav-item" role="none">
								<a href="#" className="wsu-s-nav-vertical__nav-link">Sed Mollis Ipsum</a>
							</li>
						</ul>
					</li>
					<li className="wsu-s-nav-vertical__nav-item" role="none">
						<a href="#" className="wsu-s-nav-vertical__nav-link" role="menuitem">Metus lorem</a>
					</li>
					<li className="wsu-s-nav-vertical__nav-item" role="none">
						<a href="#" className="wsu-s-nav-vertical__nav-link" role="menuitem">Egestas nulla</a>
					</li>
				</ul>
			</nav>
			<a className="wsu-s-nav-vertical__menu-icon-link" href="#" aria-haspopup="true" aria-expanded="true">
				<div className="wsu-s-nav-vertical__menu-icon-container">
					<div className="wsu-s-nav-vertical__menu-icon-bar"></div>
					<div className="wsu-s-nav-vertical__menu-icon-bar"></div>
					<div className="wsu-s-nav-vertical__menu-icon-bar"></div>
				</div>
				<span className="wsu-s-nav-vertical__menu-label"></span>
			</a>
		</div>
	);

}

SiteNavVertical.defaultProps = {
    showSearch:true,
}



export default SiteNavVertical;