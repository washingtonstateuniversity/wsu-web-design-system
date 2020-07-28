import React, { useState } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../../packages/storybook-components/content-wrapper/';
import './global-colors.scss';


// Story Time
export default {
	title: 'Design Tokens/Colors',
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const AllColors = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : false;
 
	return (
		<ComponentWrapper layout="content" className={classes}>
			<h2>Crimson</h2>
			<div className="wsu-u-requirements">
				<p>Mixin usage example:
					<pre>color: color(primary, base);</pre>
					<pre>color: color(primary, light);</pre>
				</p>
			</div>

			<div className="wsu-c-colors_crimson">
				<div className="box"></div>
				<div className="box"></div>
			</div>

			<h2>Gray</h2>
			<div className="wsu-u-requirements">
				<p>Mixin usage example:
					<pre>color: color(gray, 50);</pre>
				</p>
			</div>

			<div className="wsu-c-colors_gray">
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
				<div className="box"></div>
			</div>
		</ComponentWrapper>
	)
}