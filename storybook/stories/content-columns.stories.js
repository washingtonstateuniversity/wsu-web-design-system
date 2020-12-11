import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';
import { WsuColumnWrapper, WsuColumn, WsuContentContainer } from '../../packages/components';
import { WsuP } from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Columns',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	]
};

const bgColorOptions = ['default','gray-0','gray-5','gray-10','gray-90','gray-95'];
const spacingOptions = ['default','none','xsmall','small','medium','medium-large','large','xlarge'];
const columnLayouts = ['single','halves','sidebar-right','sidebar-left','thirds','quarters'];

const Paragraph = ( props ) => {

	return (
		<WsuP>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
			varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
			platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
			purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
			rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
			suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
			arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
			eleifend et suscipit vel, faucibus vitae lorem.
		</WsuP>
	)

}

export const DefaultColumn = () => {
	let columnLayout         = select( 'layout', columnLayouts, 'single', 'Columns Wrapper' );
	let bgColor              = select( 'backgroundColor', bgColorOptions, '', 'Columns Wrapper' );
	let wrapperMarginBefore  = text( 'marginTop', '', 'Columns Wrapper' );
	let wrapperMarginAfter   = text( 'marginBottom', '', 'Columns Wrapper' );
	let wrapperPaddingBefore = text( 'PaddingTop', '', 'Columns Wrapper' );
	let wrapperPaddingAfter  = text( 'PaddingBottom', '', 'Columns Wrapper' );

	let columnBgColor = select( 'backgroundColor', bgColorOptions, '', 'Column Options' );
	let marginBefore  = text( 'marginTop', '', 'Column Options' );
	let marginAfter   = text( 'marginBottom ', '', 'Column Options' );
	let paddingBefore = text( 'paddingBottom', '', 'Column Options' );
	let paddingAfter  = text( 'paddingTop', '', 'Column Options' );

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	if ( 'halves' === columnLayout ) {

		return ( 
			<ComponentWrapper layout={layout} className={classes}>
				<WsuColumnWrapper
					layout={columnLayout} 
					backgroundColor={ bgColor } 
					marginBefore={wrapperMarginBefore}
					marginAfter={wrapperMarginAfter}
					paddingBefore={wrapperPaddingBefore}
					paddingAfter={wrapperPaddingAfter}
					>
					<WsuColumn
						backgroundColor={ columnBgColor } 
						marginBefore={marginBefore}
						marginAfter={marginAfter}
						paddingBefore={paddingBefore}
						paddingAfter={paddingAfter}
						><Paragraph />
					</WsuColumn>
					<WsuColumn>
						<Paragraph />
					</WsuColumn>
				</WsuColumnWrapper>
			</ComponentWrapper>
		)

	} else if ( 'sidebar-right' === columnLayout ) {
		return ( 
			<ComponentWrapper layout={layout} className={classes}>
				<WsuColumnWrapper
					layout={columnLayout}
					backgroundColor={ bgColor } 
					marginBefore={wrapperMarginBefore}
					marginAfter={wrapperMarginAfter}
					paddingBefore={wrapperPaddingBefore}
					paddingAfter={wrapperPaddingAfter}
					>
					<WsuColumn>
						<Paragraph />
					</WsuColumn>
					<WsuColumn
						backgroundColor={ columnBgColor } 
						marginBefore={marginBefore}
						marginAfter={marginAfter}
						paddingBefore={paddingBefore}
						paddingAfter={paddingAfter}
						><Paragraph />
					</WsuColumn>
				</WsuColumnWrapper>
			</ComponentWrapper>
		)
	} else if ( 'sidebar-left' === columnLayout ) {
		return ( 
			<ComponentWrapper layout={layout} className={classes}>
				<WsuColumnWrapper
					layout={columnLayout}
					backgroundColor={ bgColor } 
					marginBefore={wrapperMarginBefore}
					marginAfter={wrapperMarginAfter}
					paddingBefore={wrapperPaddingBefore}
					paddingAfter={wrapperPaddingAfter}
					>
						<WsuColumn
						backgroundColor={ columnBgColor } 
						marginBefore={marginBefore}
						marginAfter={marginAfter}
						paddingBefore={paddingBefore}
						paddingAfter={paddingAfter}
						><Paragraph />
					</WsuColumn>
					<WsuColumn>
						<Paragraph />
					</WsuColumn>
				</WsuColumnWrapper>
			</ComponentWrapper>
		)
	} else if ( 'thirds' === columnLayout ) {
		return ( 
			<ComponentWrapper layout={layout} className={classes}>
			<WsuColumnWrapper
				layout={columnLayout}
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<WsuColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					><Paragraph />
				</WsuColumn>
				<WsuColumn>
					<Paragraph />
				</WsuColumn>
				<WsuColumn>
					<Paragraph />
				</WsuColumn>
			</WsuColumnWrapper>
			</ComponentWrapper>
		)
	} else if ( 'quarters' === columnLayout ) {
		return ( 
			<ComponentWrapper layout={layout} className={classes}>
			<WsuColumnWrapper
				layout={columnLayout}
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<WsuColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					><Paragraph />
				</WsuColumn>
				<WsuColumn>
					<Paragraph />
				</WsuColumn>
				<WsuColumn>
					<Paragraph />
				</WsuColumn>
				<WsuColumn>
					<Paragraph />
				</WsuColumn>
			</WsuColumnWrapper>
			</ComponentWrapper>
		)
	} else {
		return ( 
			<ComponentWrapper layout={layout} className={classes}>
			<WsuColumnWrapper
				layout="single"
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<WsuColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					><Paragraph />
				</WsuColumn>
			</WsuColumnWrapper>
			</ComponentWrapper>
		)
	}
}

export const ColumnBleed = () => {

	let bgColor              = select( 'backgroundColor', bgColorOptions, '', 'Columns Wrapper' );
	let wrapperMarginBefore  = select( 'marginBefore', spacingOptions, 'default', 'Columns Wrapper' );
	let wrapperMarginAfter   = select( 'marginAfter', spacingOptions, 'default', 'Columns Wrapper' );
	let wrapperPaddingBefore = select( 'paddingBefore', spacingOptions, 'default', 'Columns Wrapper' );
	let wrapperPaddingAfter  = select( 'paddingAfter', spacingOptions, 'default', 'Columns Wrapper' );

	let columnBgColor = select( 'backgroundColor', bgColorOptions, '', 'Column Options' );
	let marginBefore  = select( 'marginBefore', spacingOptions, 'default', 'Column Options' );
	let marginAfter   = select( 'marginAfter', spacingOptions, 'default', 'Column Options' );
	let paddingBefore = select( 'paddingBefore', spacingOptions, 'default', 'Column Options' );
	let paddingAfter  = select( 'paddingAfter', spacingOptions, 'default', 'Column Options' );

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<ComponentWrapper layout={layout} className={classes}>
			<WsuContentContainer>
				<WsuColumnWrapper
					layout='halves'
					backgroundColor={ bgColor } 
					marginBefore={wrapperMarginBefore}
					marginAfter={wrapperMarginAfter}
					paddingBefore={wrapperPaddingBefore}
					paddingAfter={wrapperPaddingAfter}
					>
					<WsuColumn
						backgroundColor={ columnBgColor } 
						marginBefore={marginBefore}
						marginAfter={marginAfter}
						paddingBefore={paddingBefore}
						paddingAfter={paddingAfter}
						bleedLeft={true}
						><Paragraph />
					</WsuColumn>
					<WsuColumn
						bleedRight={true}
						>
						<Paragraph />
					</WsuColumn>
				</WsuColumnWrapper>
				<WsuColumnWrapper
					layout="single"
					backgroundColor={ bgColor } 
					marginBefore={wrapperMarginBefore}
					marginAfter={wrapperMarginAfter}
					paddingBefore={wrapperPaddingBefore}
					paddingAfter={wrapperPaddingAfter}
					>
					<WsuColumn
						backgroundColor={ columnBgColor } 
						marginBefore={marginBefore}
						marginAfter={marginAfter}
						paddingBefore={paddingBefore}
						paddingAfter={paddingAfter}
						bleedLeft={true}
						bleedRight={true}
						><Paragraph />
					</WsuColumn>
				</WsuColumnWrapper>
			</WsuContentContainer>
		</ComponentWrapper>
	);
}
