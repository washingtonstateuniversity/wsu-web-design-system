import { addons } from '@storybook/addons';
import '@whitespace/storybook-addon-html/register';
import wsuwdstheme from './wsuwdstheme';

addons.setConfig({
	panelPosition: 'right',
	theme: wsuwdstheme,
});

