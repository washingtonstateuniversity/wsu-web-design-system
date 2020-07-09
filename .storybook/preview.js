import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/client-api';
import { withHTML } from '@whitespace/storybook-addon-html/react';

const customViewports = {
	mobile: {
		name: 'Mobile',
		styles: {
			width: '432px',
			height: '768px',
		},
	},
	tablet: {
		name: 'Tablet',
		styles: {
			width: '1260px',
			height: '708px',
		},
	},
	desktop: {
		name: 'Desktop',
		styles: {
			width: '1920px',
			height: '1080px',
		},
	},
};

addParameters({
	viewport: { viewports: customViewports },
});

addDecorator(withHTML);