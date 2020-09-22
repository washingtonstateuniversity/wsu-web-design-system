// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

// Component Deps
import { WsuSiteNavHorizontal, WsuLink } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Site/Navigation/Horizontal',
	parameters: {
		status: 'Has Known Issues' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	]
};

export const Default = () => {

	return (
		<>
			<WsuSiteNavHorizontal />

			<ComponentWrapper layout="content" type="notice">
				<p>Site Nav Horizontal does not support submenus. Site Nav Horizontal follows the <WsuLink href="https://css-tricks.com/the-priority-navigation-pattern/">Priority+ Navigation Pattern</WsuLink> which encourages using many top-level pages instead of a few pages with many nested child pages. While this can be good for handling more top-level pages or a "flat" page hierarchy, we still don't recommend going over 8-10 pages. Anything over that most likely will justify using a more structured navigation approach for which a vertical and/or mega menu would be more appropriate.</p>
			</ComponentWrapper>

			<ComponentWrapper layout="content" type="warning">
				<p>Site Nav Horizontal currently has issues some known issues related to how it performs when being resized. From what we can tell, it works fine as long as the browser isn't being drastically resized, very quickly, but we will be looking into a solution for this issue in the future.</p>
			</ComponentWrapper>
		</>
	)
}