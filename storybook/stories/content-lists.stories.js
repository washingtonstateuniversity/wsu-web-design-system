import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';


// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

import { WsuListCheatsheet } from '../../packages/components';

import '../../bundles/src/wsu-design-system.content';

// Story Time
export default {
	title: 'Components/Content/List',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	]
};

export const UnorderedList = () => {

	return (
		<ComponentWrapper layout="content" className="wsu-c-content">

			<h1>Unordered List Styles</h1>
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					<ul>
						<li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							<ul>
								<li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
								<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
								<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
							</ul>
						</li>
						<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
						<li>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
					</ul>
				</li>
				<li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
				<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
				<li>Excepteur sint occaecat cupidatat non proident</li>
			</ul>
			
		</ComponentWrapper>
	)
}

export const OrderedList = () => {

	return (
		<ComponentWrapper layout="content" className="wsu-c-content">

			<h1>Ordered List Styles</h1>
			<ol>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					<ol>
						<li>Ut enim ad minim veniam, quis nostrud exercitation ollamco laboris nisi ut aliquip ex ea commodo consequat.
							<ol>
								<li>Ut enim ad minim veniam, quis nostrud exercitation ollamco laboris nisi ut aliquip ex ea commodo consequat.</li>
								<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nolla pariatur.</li>
								<li>Excepteur sint occaecat cupidatat non proident, sunt in colpa qui officia deserunt mollit anim id est laborum.</li>
							</ol>
						</li>
						<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nolla pariatur.</li>
						<li>Excepteur sint occaecat cupidatat non proident, sunt in colpa qui officia deserunt mollit anim id est laborum.</li>
					</ol>
				</li>
				<li>Ut enim ad minim veniam, quis nostrud exercitation ollamco laboris nisi ut aliquip ex ea commodo consequat.</li>
				<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nolla pariatur.</li>
				<li>Excepteur sint occaecat cupidatat non proident</li>
			</ol>
			
		</ComponentWrapper>
	)
}

export const SeparatedListStyle = () => {

	return (
		<ComponentWrapper layout="content" className="wsu-c-content">

			<h1>Ordered List Styles</h1>
			<ol className="wsu-m-list--separated">
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					<ol>
						<li>Ut enim ad minim veniam, quis nostrud exercitation ollamco laboris nisi ut aliquip ex ea commodo consequat.
							<ol>
								<li>Ut enim ad minim veniam, quis nostrud exercitation ollamco laboris nisi ut aliquip ex ea commodo consequat.</li>
								<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nolla pariatur.</li>
								<li>Excepteur sint occaecat cupidatat non proident, sunt in colpa qui officia deserunt mollit anim id est laborum.</li>
							</ol>
						</li>
						<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nolla pariatur.</li>
						<li>Excepteur sint occaecat cupidatat non proident, sunt in colpa qui officia deserunt mollit anim id est laborum.</li>
					</ol>
				</li>
				<li>Ut enim ad minim veniam, quis nostrud exercitation ollamco laboris nisi ut aliquip ex ea commodo consequat.</li>
				<li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nolla pariatur.</li>
				<li>Excepteur sint occaecat cupidatat non proident</li>
			</ol>
			
		</ComponentWrapper>
	)
}