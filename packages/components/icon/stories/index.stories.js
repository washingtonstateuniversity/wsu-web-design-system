// External Deps
import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";

// Component Deps
import Icon, { IconCheatsheet } from '../';


// Story Time
export default {
	title: 'Icons',
	decorators: [
		withA11y,
		withKnobs
	]
};

const iconOptions = ['alarm', 'alert-notification', 'arrow-down-carrot', 'arrow-down', 'arrow-left-carrot', 'arrow-left', 'arrow-right-carrot', 'arrow-right', 'arrow-up-carrot', 'arrow-up', 'attachment', 'basket', 'bookmark', 'calendar', 'cart', 'check', 'collapse', 'comment', 'contrast', 'credit-card', 'cut', 'discussion', 'document', 'download', 'edit', 'email', 'expand', 'favorite', 'feedback', 'filter', 'flag', 'gallery', 'graph', 'home', 'info', 'key', 'light-bulb', 'link', 'location', 'map-location', 'map', 'menu', 'minus-circle', 'minus', 'mobile', 'monitor', 'more-vertical', 'more', 'next', 'pause', 'phone', 'photos', 'play-circle', 'play', 'plus', 'pluse-circle', 'previous', 'print', 'profile-circle', 'profile', 'rate', 'refresh', 'save', 'search', 'secure', 'send', 'settings', 'share', 'social-facebook', 'social-instagram', 'social-linkedin', 'social-twitter', 'social-youtube', 'stop-circle', 'stop', 'tag', 'tent', 'time', 'trash', 'upload', 'video-slideshow', 'warning-caution', 'warning-stop', 'x-close', 'zoom-in', 'zoom-out'];

export const all = () => <IconCheatsheet />;

export const icon = () => <Icon iconName={select('Icon', iconOptions, 'alarm', 'Preview')}/>;