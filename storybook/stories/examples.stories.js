// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper/index'

// Component Deps
import GlobalFooter from '../../packages/components/global-footer/index';
import GlobalHeader from '../../packages/components/global-header/index';
import SiteNavVertical from '../../packages/components/site-nav-vertical/index';
import ContentHero from '../../packages/components/content-hero/index';
import ContentHeading from '../../packages/components/content-heading/index';
import P from '../../packages/components/content-paragraph/index';
import {ContentColumnWrapper,ContentColumn} from '../../packages/components/content-column/index';
import ContentButton from '../../packages/components/content-buttons/index';

import { 
	GlobalContainer,
	SiteContainer,
	ContentContainer
} from '../../packages/components/containers/index';


// Story Time
export default {
	title: 'Examples',
	decorators: [
		withA11y,
		withKnobs
	]
};

export const HomepageVersion1 = () => {

	return (
		<GlobalContainer>
			<GlobalHeader />
			<SiteNavVertical />
			<SiteContainer>
			<ContentHero
				title='Odio et purus metus placerat neque.'
				subtitle='Consectetur adipiscing elit donec fringilla'
				buttonText='Lorem Ipsum'
				buttonUrl='#'
				imageCaption='By consectetur adipiscing elit donec fringilla'
				/>
				<ContentContainer>
					<ContentHeading>Lorem ipsum dolor sit amet</ContentHeading>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt mi sed pretium commodo. Donec pharetra pulvinar diam nec placerat. Mauris sodales eros aliquam dolor luctus venenatis. Integer sed arcu at risus convallis iaculis.</P>
					<ContentColumnWrapper
						layout='sidebar-right'
						>
						<ContentColumn>
							<ContentHeading tag="h2">Lorem ipsum dolor sit amet</ContentHeading>
							<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt mi sed pretium commodo. 
								Donec pharetra pulvinar diam nec placerat. Mauris sodales eros aliquam dolor luctus venenatis. 
								Integer sed arcu at risus convallis iaculis.
							</P>
						</ContentColumn>
						<ContentColumn>
							<ContentButton
								buttonText='Lorem Ipsum'
								buttonUrl='#'
								/>
							<ContentButton
								buttonText='Lorem Ipsum'
								buttonUrl='#'
								/> 
						</ContentColumn>
			</ContentColumnWrapper>
				</ContentContainer>
			</SiteContainer>
			<GlobalFooter />
		</GlobalContainer>
	)
}