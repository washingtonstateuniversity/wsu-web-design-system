// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Component Deps
import {
	WsuIcon,
	WsuIconCheatsheet,
	WsuLoadingIcon
} from '../../packages/components';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Story Time
export default {
	title: 'Components/Content/Icons',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs
	],
	component: WsuIcon
};

const iconOptions = ['alarm', 'alert-notification', 'arrow-down-carrot', 'arrow-down', 'arrow-left-carrot', 'arrow-left', 'arrow-right-carrot', 'arrow-right', 'arrow-up-carrot', 'arrow-up', 'attachment', 'basket', 'bookmark', 'calendar', 'cart', 'check', 'collapse', 'comment', 'contrast', 'credit-card', 'cut', 'discussion', 'document', 'download', 'edit', 'email', 'expand', 'favorite', 'feedback', 'filter', 'flag', 'gallery', 'graph', 'home', 'info', 'key', 'light-bulb', 'link', 'location', 'map-location', 'map', 'menu', 'minus-circle', 'minus', 'mobile', 'monitor', 'more-vertical', 'more', 'next', 'pause', 'phone', 'photos', 'play-circle', 'play', 'plus', 'pluse-circle', 'previous', 'print', 'profile-circle', 'profile', 'rate', 'refresh', 'save', 'search', 'secure', 'send', 'settings', 'share', 'social-facebook', 'social-instagram', 'social-linkedin', 'social-twitter', 'social-youtube', 'stop-circle', 'stop', 'tag', 'tent', 'time', 'trash', 'upload', 'video-slideshow', 'warning-caution', 'warning-stop', 'x-close', 'zoom-in', 'zoom-out'];

export const defaultIcon = () => {

	let classes = (boolean('Apply wsu-c-content class', false, previewGroupID)) ? ['wsu-c-content'] : '';
	let layout = (select('Wrapper Layout', ['full', 'content', 'centered'], 'centered', previewGroupID));

	return (
		<ComponentWrapper layout={layout} className={classes}>
			<WsuIcon name={select('Icon', iconOptions, 'alarm', 'Preview')} />
		</ComponentWrapper>
	)
}

export const iconCheatsheet = () => <WsuIconCheatsheet />;