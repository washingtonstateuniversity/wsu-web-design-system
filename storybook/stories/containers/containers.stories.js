import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Storybook Imports
import { GlobalContainer, SiteContainer, ContentContainer } from '../../../packages/components/containers';
import ComponentWrapper from '../../../packages/storybook-components/content-wrapper';
import { WsuHeading, WsuList } from '../../../packages/components';



import './style.scss';

// Story Time
export default {
	title: 'Components/Global/Containers',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	]
};

const contentGroupID = 'Preview';
const optionsGroupID = 'Options';

const ComponentPlaceholder = ( props ) => {

	return <div className="storybook-component-placeholder"><span>{props.title}</span></div>

}

export const Default = () => {


	return(
		<div className="wsu-g-container-component">
			<GlobalContainer>
				<SiteContainer>
					<ContentContainer>
						<ComponentWrapper layout="content">
							<WsuHeading tag="h3">WSU Content Inheritance Class</WsuHeading>
							<p>At this time, the following html elements can inherit from the <code>.wsu-c-content</code> wrapper class:</p>
							<ul>
								<li>Headings</li>
								<li>Paragraphs</li>
								<li>Links</li>
								<li>Lists</li>
								<li>Forms</li>
							</ul>
						</ComponentWrapper>
					</ContentContainer>
				</SiteContainer>
			</GlobalContainer>
		</div>
	)
}

export const Components = () => {


	return(
		<div className="wsu-g-container-component">
			<GlobalContainer>
				<ComponentPlaceholder title="Global Header" />
				<ComponentPlaceholder title="Site Nav Vertical" />
				<SiteContainer>
					<ComponentPlaceholder title="Site Header" />
					<ComponentPlaceholder title="Site Nav Horizontal" />
					<ContentContainer>
						<ComponentPlaceholder title="All Content Components" />
					</ContentContainer>
					<ComponentPlaceholder title="Site Footer" />
					<ComponentPlaceholder title="Global Footer" />
				</SiteContainer>
			</GlobalContainer>
		</div>
	)
}