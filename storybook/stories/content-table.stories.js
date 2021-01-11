import React from 'react';
import { Title, Subtitle, Description, Primary, ArgsTable, Stories, Story, Preview } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';
import { 
	WsuCaption,
	WsuColgroup,
	WsuTable,
	WsuTbody,
	WsuTd,
	WsuTfoot,
	WsuTh,
	WsuThead,
	WsuTr,
	WsuLink
} from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Table',
	parameters: {
		status: 'Needs Feedback', // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
		docs: {
			page: () => (
				<>
					{/* <Title>Forms</Title>
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
					</Preview> */}
				</>
			),
		},
	},
	decorators: [
		withA11y,
		withKnobs
	],
	component: WsuTable
};

export const DefaultTable = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<ComponentWrapper layout={layout} className={classes}>
			<WsuTable 
				striped={boolean('Zebra Stripe', false, optionsGroupID)}
				captionTop={boolean('Caption Top', false, optionsGroupID)}
				borders={boolean('Add Borders', false, optionsGroupID)}
				spacing={select('Cell Spacing', { Default: '', Compressed: 'spacingCompressed', Expanded: 'spacingExpanded' }, '', optionsGroupID)}
				alignment={select('Align text', { Default: '', Left: 'alignLeft', Center: 'alignCenter', Right: 'alignRight' }, '', optionsGroupID)}
			>
				<WsuCaption>Estimated yearly costs for two semesters at WSU.</WsuCaption>
				<WsuThead>
					<WsuTr>
						<WsuTh scope="col">Expense</WsuTh>
						<WsuTh scope="col">WA Resident</WsuTh>
						<WsuTh scope="col">Non-WA Resident</WsuTh>
						<WsuTh scope="col">WUE Recipient</WsuTh>
					</WsuTr>
				</WsuThead>
				<WsuTbody>
					<WsuTr>
						<WsuTh scope="row">Tuition</WsuTh>
						<WsuTd>$10,760</WsuTd>
						<WsuTd>$25,702</WsuTd>
						<WsuTd>$14,702</WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Dining</WsuTh>
						<WsuTd>$4,300</WsuTd>
						<WsuTd>$1,200</WsuTd>
						<WsuTd>$2,000</WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Housing</WsuTh>
						<WsuTd>$6,822</WsuTd>
						<WsuTd>$6,999</WsuTd>
						<WsuTd>$6</WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Fees</WsuTh>
						<WsuTd>$6,822</WsuTd>
						<WsuTd>$39</WsuTd>
						<WsuTd><WsuLink href="#">$10,000</WsuLink></WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Books</WsuTh>
						<WsuTd>$6,822</WsuTd>
						<WsuTd>$5,003</WsuTd>
						<WsuTd>$1,230</WsuTd>
					</WsuTr>
				</WsuTbody>
				<WsuTfoot>
					<WsuTr>
						<WsuTh scope="col">Expense</WsuTh>
						<WsuTh scope="col">WA Resident</WsuTh>
						<WsuTh scope="col">Non-WA Resident</WsuTh>
						<WsuTh scope="col">WUE Recipient</WsuTh>
					</WsuTr>
				</WsuTfoot>
			</WsuTable>
		</ComponentWrapper>
	)
}

export const stripedTable = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<ComponentWrapper layout={layout} className={classes}>
			<WsuTable striped>
				<WsuCaption>Estimated yearly costs for two semesters at WSU.</WsuCaption>
				<WsuThead>
					<WsuTr>
						<WsuTh scope="col">Expense</WsuTh>
						<WsuTh scope="col">WA Resident</WsuTh>
						<WsuTh scope="col">Non-WA Resident</WsuTh>
						<WsuTh scope="col">WUE Recipient</WsuTh>
					</WsuTr>
				</WsuThead>
				<WsuTbody>
					<WsuTr>
						<WsuTh scope="row">Tuition</WsuTh>
						<WsuTd>$10,760</WsuTd>
						<WsuTd>$25,702</WsuTd>
						<WsuTd>$14,702</WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Dining</WsuTh>
						<WsuTd>$4,300</WsuTd>
						<WsuTd>$1,200</WsuTd>
						<WsuTd>$2,000</WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Housing</WsuTh>
						<WsuTd>$6,822</WsuTd>
						<WsuTd>$6,999</WsuTd>
						<WsuTd>$6</WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Fees</WsuTh>
						<WsuTd>$6,822</WsuTd>
						<WsuTd>$39</WsuTd>
						<WsuTd>$10,000</WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Books</WsuTh>
						<WsuTd>$6,822</WsuTd>
						<WsuTd>$5,003</WsuTd>
						<WsuTd>$1,230</WsuTd>
					</WsuTr>
				</WsuTbody>
				<WsuTfoot>
					<WsuTr>
						<WsuTh scope="col">Expense</WsuTh>
						<WsuTh scope="col">WA Resident</WsuTh>
						<WsuTh scope="col">Non-WA Resident</WsuTh>
						<WsuTh scope="col">WUE Recipient</WsuTh>
					</WsuTr>
				</WsuTfoot>
			</WsuTable>
		</ComponentWrapper>
	)
}

export const borderedTable = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<ComponentWrapper layout={layout} className={classes}>
			<WsuTable borders>
				<WsuCaption>Estimated yearly costs for two semesters at WSU.</WsuCaption>
				<WsuThead>
					<WsuTr>
						<WsuTh scope="col">Expense</WsuTh>
						<WsuTh scope="col">WA Resident</WsuTh>
						<WsuTh scope="col">Non-WA Resident</WsuTh>
						<WsuTh scope="col">WUE Recipient</WsuTh>
					</WsuTr>
				</WsuThead>
				<WsuTbody>
					<WsuTr>
						<WsuTh scope="row">Tuition</WsuTh>
						<WsuTd>$10,760</WsuTd>
						<WsuTd>$25,702</WsuTd>
						<WsuTd>$14,702</WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Dining</WsuTh>
						<WsuTd>$4,300</WsuTd>
						<WsuTd>$1,200</WsuTd>
						<WsuTd>$2,000</WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Housing</WsuTh>
						<WsuTd>$6,822</WsuTd>
						<WsuTd>$6,999</WsuTd>
						<WsuTd>$6</WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Fees</WsuTh>
						<WsuTd>$6,822</WsuTd>
						<WsuTd>$39</WsuTd>
						<WsuTd>$10,000</WsuTd>
					</WsuTr>
					<WsuTr>
						<WsuTh scope="row">Books</WsuTh>
						<WsuTd>$6,822</WsuTd>
						<WsuTd>$5,003</WsuTd>
						<WsuTd>$1,230</WsuTd>
					</WsuTr>
				</WsuTbody>
				<WsuTfoot>
					<WsuTr>
						<WsuTh scope="col">Expense</WsuTh>
						<WsuTh scope="col">WA Resident</WsuTh>
						<WsuTh scope="col">Non-WA Resident</WsuTh>
						<WsuTh scope="col">WUE Recipient</WsuTh>
					</WsuTr>
				</WsuTfoot>
			</WsuTable>
		</ComponentWrapper>
	)
}