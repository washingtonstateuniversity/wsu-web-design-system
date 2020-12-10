import React from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, Story, Preview } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';
import { WsuForm, WsuFormCheatsheet, WsuFormCheatsheetInherited, WsuIconCheatsheet, WsuHr } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Form',
	parameters: {
		status: 'Needs Feedback', // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
		docs: {
			page: () => (
				<>
					<Title>Forms</Title>
					<Subtitle>Default Form (Named Values)</Subtitle>
					<ComponentWrapper className="wsu-c-content">
						<p>Default form styles assume you have full control of your markup, meaning you have to apply the class names and have a defined structure. If you don't have this level of control, for instance if you're using a third-party form option like Gravity Forms, you'll want to check out inherited form styles below to have your styles inherit from a parent wrapper class name.</p>
					</ComponentWrapper>

					<Preview>
						<Story id="components-content-form--default-form" inline={false} />
					</Preview>

					<WsuHr />

					<Subtitle>Inherited Form Styles</Subtitle>
					<ComponentWrapper className="wsu-c-content">
						<p>Using the <code>.wsu-c-content</code> wrapper class you can inherit form styles from this wrapper class. See <a href="?path=/story/components-global-containers--default">Global Containers</a> for guidance on where that should live in your DOM structure.</p>
					</ComponentWrapper>

					<Preview>
						<Story id="components-content-form--inherited-styles" inline={false} />
					</Preview>
				</>
			),
		},
	},
	decorators: [
		withA11y,
		withKnobs
	],
};

export const DefaultForm = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
    let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<ComponentWrapper layout={layout} className={classes}>
			{/* Hey Friend, this component currently only offers CSS. No React components have been created at this time. Sorry! If you're looking for HTML markup, go the HTML tab in the addons sidebar. If you already have the WDS included in your application, you can just apply these class names and everything should work. */}
			<WsuFormCheatsheet />
		</ComponentWrapper>
	)
}

export const inheritedStyles = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
    let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<ComponentWrapper layout={layout}  className={classes}>
			{/* Hey Friend, this component currently only offers CSS. No React components have been created at this time. Sorry! If you're looking for HTML markup, go the HTML tab in the addons sidebar. If you already have the WDS included in your application, you can just apply these class names and everything should work. */}
			<WsuFormCheatsheetInherited />
		</ComponentWrapper>
	)
}





