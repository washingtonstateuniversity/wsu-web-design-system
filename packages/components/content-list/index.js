import React from 'react';

import { wsuHeading } from '../../components';
import './style.scss';

const ContentList = () => {
	console.log('No Content List component at this time.');
	return null;
}

const ContentListCheatsheet = () => {
	return(
		<>
			<wsuHeading>Default List Styles</wsuHeading>
			<wsuHeading tag="h2">Unordered List</wsuHeading>
			<ul className="wsu-c-list">
				<li className="wsu-c-list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					<ul className="wsu-c-list">
						<li className="wsu-c-list-item">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							<ul className="wsu-c-list">
								<li className="wsu-c-list-item">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
								<li className="wsu-c-list-item">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
								<li className="wsu-c-list-item">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
							</ul>
						</li>
						<li className="wsu-c-list-item">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
						<li className="wsu-c-list-item">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
					</ul>
				</li>
				<li className="wsu-c-list-item">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
				<li className="wsu-c-list-item">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
				<li className="wsu-c-list-item">Excepteur sint occaecat cupidatat non proident</li>
			</ul>

			<wsuHeading tag="h2">Ordered List</wsuHeading>
			<ol className="wsu-c-list__ordered">
				<li className="wsu-c-list-item">Lorem ipsum dolor sit amet, consectetur adipiscin
					<ol className="wsu-c-list__ordered">
						<li className="wsu-c-list-item">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
						<li className="wsu-c-list-item">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
						<li className="wsu-c-list-item">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
					</ol>
				</li>
				<li className="wsu-c-list-item">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
				<li className="wsu-c-list-item">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
				<li className="wsu-c-list-item">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
			</ol>

			<wsuHeading tag="h2">Ordered List Starting at 50</wsuHeading>
			<ol className="wsu-c-list__ordered wsu-c-list__ordered-reset--50">
				<li className="wsu-c-list-item">I am an ordered list</li>
				<li className="wsu-c-list-item">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
				<li className="wsu-c-list-item">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
				<li className="wsu-c-list-item">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
			</ol>
		</>
	)
}

export default ContentList;
export { ContentListCheatsheet };