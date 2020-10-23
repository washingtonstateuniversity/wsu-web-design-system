import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

import { WsuColumnWrapper, WsuColumn } from '../../packages/components';
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

const contentGroupID = 'Preview';
const optionsGroupID = 'Options';
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
	let layout               = select( 'layout', columnLayouts, 'single', 'Columns Wrapper' );
	let bgColor              = select( 'backgroundColor', bgColorOptions, '', 'Columns Wrapper' );
	let wrapperMarginBefore  = text( 'marginBefore', '', 'Columns Wrapper' );
	let wrapperMarginAfter   = text( 'marginAfter', '', 'Columns Wrapper' );
	let wrapperPaddingBefore = text( 'PaddingBefore', '', 'Columns Wrapper' );
	let wrapperPaddingAfter  = text( 'PaddingAfter', '', 'Columns Wrapper' );

	let columnBgColor = select( 'backgroundColor', bgColorOptions, '', 'Column Options' );
	let marginBefore  = text( 'marginBefore', '', 'Column Options' );
	let marginAfter   = text( 'marginAfter ', '', 'Column Options' );
	let paddingBefore = text( 'paddingBefore', '', 'Column Options' );
	let paddingAfter  = text( 'paddingAfter', '', 'Column Options' );

	if ( 'halves' === layout ) {

		return ( 
			<WsuColumnWrapper
				layout={layout} 
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
		)

	} else if ( 'sidebar-right' === layout ) {
		return ( 
			<WsuColumnWrapper
				layout={layout}
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
		)
	} else if ( 'sidebar-left' === layout ) {
		return ( 
			<WsuColumnWrapper
				layout={layout}
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
		)
	} else if ( 'thirds' === layout ) {
		return ( 
			<WsuColumnWrapper
				layout={layout}
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
		)
	} else if ( 'quarters' === layout ) {
		return ( 
			<WsuColumnWrapper
				layout={layout}
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
		)
	} else {
		return ( 
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
		)
	}
}

export const Columns = () => {

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

	return(
		<ComponentWrapper layout="full" className="wsu-c-content">
			<WsuColumnWrapper 
				layout={'single'} 
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
					>
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
				</WsuColumn>
			</WsuColumnWrapper>
			<WsuColumnWrapper 
				layout={'halves'} 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<WsuColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
				<WsuColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
			</WsuColumnWrapper>
			<WsuColumnWrapper 
				layout={'halves'}
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
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
				<WsuColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
			</WsuColumnWrapper>
			<WsuColumnWrapper 
				layout={'sidebar-left'} 
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
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
				<WsuColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
			</WsuColumnWrapper>
			<WsuColumnWrapper 
				layout={'sidebar-right'} 
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<WsuColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
				<WsuColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
			</WsuColumnWrapper>
			<WsuColumnWrapper 
				layout={'thirds'}
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
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
				<WsuColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
				<WsuColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
			</WsuColumnWrapper>
			<WsuColumnWrapper 
				layout={'quarters'} 
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
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
				<WsuColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
				<WsuColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
				<WsuColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<WsuP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</WsuP>
				</WsuColumn>
			</WsuColumnWrapper>
		</ComponentWrapper>
	);
}
