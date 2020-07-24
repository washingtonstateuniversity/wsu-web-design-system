import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper/index'

import {ContentColumnWrapper,ContentColumn} from '../../packages/components/content-column/index';
import P from '../../packages/components/content-paragraph/index';

// Story Time
export default {
	title: 'Components/Content/Columns',
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
		<P>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
			varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
			platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
			purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
			rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
			suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
			arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
			eleifend et suscipit vel, faucibus vitae lorem.
		</P>
	)

}

export const DefaultColumn = () => {
	let layout               = select( 'layout', columnLayouts, 'single', 'Columns Wrapper' );
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

	if ( 'halves' === layout ) {

		return ( 
			<ContentColumnWrapper
				layout={layout} 
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					><Paragraph />
				</ContentColumn>
				<ContentColumn>
					<Paragraph />
				</ContentColumn>
			</ContentColumnWrapper>
		)

	} else if ( 'sidebar-right' === layout ) {
		return ( 
			<ContentColumnWrapper
				layout={layout}
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn>
					<Paragraph />
				</ContentColumn>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					><Paragraph />
				</ContentColumn>
			</ContentColumnWrapper>
		)
	} else if ( 'sidebar-left' === layout ) {
		return ( 
			<ContentColumnWrapper
				layout={layout}
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
					<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					><Paragraph />
				</ContentColumn>
				<ContentColumn>
					<Paragraph />
				</ContentColumn>
			</ContentColumnWrapper>
		)
	} else if ( 'thirds' === layout ) {
		return ( 
			<ContentColumnWrapper
				layout={layout}
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					><Paragraph />
				</ContentColumn>
				<ContentColumn>
					<Paragraph />
				</ContentColumn>
				<ContentColumn>
					<Paragraph />
				</ContentColumn>
			</ContentColumnWrapper>
		)
	} else if ( 'quarters' === layout ) {
		return ( 
			<ContentColumnWrapper
				layout={layout}
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					><Paragraph />
				</ContentColumn>
				<ContentColumn>
					<Paragraph />
				</ContentColumn>
				<ContentColumn>
					<Paragraph />
				</ContentColumn>
				<ContentColumn>
					<Paragraph />
				</ContentColumn>
			</ContentColumnWrapper>
		)
	} else {
		return ( 
			<ContentColumnWrapper
				layout="single"
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					><Paragraph />
				</ContentColumn>
			</ContentColumnWrapper>
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
			<ContentColumnWrapper 
				layout={'single'} 
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.
					</P>
				</ContentColumn>
			</ContentColumnWrapper>
			<ContentColumnWrapper 
				layout={'halves'} 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
			</ContentColumnWrapper>
			<ContentColumnWrapper 
				layout={'halves'}
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
				<ContentColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
			</ContentColumnWrapper>
			<ContentColumnWrapper 
				layout={'sidebar-left'} 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
				<ContentColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
			</ContentColumnWrapper>
			<ContentColumnWrapper 
				layout={'sidebar-right'} 
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
			</ContentColumnWrapper>
			<ContentColumnWrapper 
				layout={'thirds'}
				backgroundColor={ bgColor } 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
				<ContentColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
			</ContentColumnWrapper>
			<ContentColumnWrapper 
				layout={'quarters'} 
				marginBefore={wrapperMarginBefore}
				marginAfter={wrapperMarginAfter}
				paddingBefore={wrapperPaddingBefore}
				paddingAfter={wrapperPaddingAfter}
				>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
				<ContentColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
				<ContentColumn
					backgroundColor={ columnBgColor } 
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
				<ContentColumn
					marginBefore={marginBefore}
					marginAfter={marginAfter}
					paddingBefore={paddingBefore}
					paddingAfter={paddingAfter}
					>
					<P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacinia turpis. Nam commodo elit eget 
						varius ultricies. Nunc bibendum in libero nec egestas. In egestas sodales semper. In hac habitasse 
						platea dictumst. Suspendisse blandit, leo ac lacinia viverra, magna massa ornare nulla, eu rutrum 
						purus nunc at odio. Phasellus aliquam leo sed vulputate facilisis. Phasellus turpis dui, euismod ultrices 
						rutrum et, ultrices ut quam. Sed euismod tincidunt eros eu venenatis. Nunc accumsan, felis ac cursus 
						suscipit, tortor erat scelerisque libero, vitae luctus ex lacus sed felis. Vestibulum vitae sollicitudin 
						arcu, ultrices porttitor purus. Suspendisse ullamcorper massa a nisl egestas bibendum. Ut felis sem, 
						eleifend et suscipit vel, faucibus vitae lorem.</P>
				</ContentColumn>
			</ContentColumnWrapper>
		</ComponentWrapper>
	);
}
