import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Storybook Imports
import { GlobalContainer, SiteContainer, ContentContainer } from '../../../packages/components/containers/index';

import './style.scss';

// Story Time
export default {
	title: 'Components/Global/Containers',
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
		<GlobalContainer>
			<SiteContainer>
				<ContentContainer>

				</ContentContainer>
			</SiteContainer>
		</GlobalContainer>
	)
}

export const Components = () => {


	return(
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
			</SiteContainer>
			<ComponentPlaceholder title="Global Footer" />
		</GlobalContainer>
	)
}