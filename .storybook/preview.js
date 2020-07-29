import { addDecorator } from '@storybook/react';
import { addParameters } from '@storybook/client-api';
import { withHTML } from '@whitespace/storybook-addon-html/react';
import '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';
import { withConsole } from '@storybook/addon-console';

// Add Custom viewports
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

// Add HTML output Panel
addDecorator(withHTML);

// Add Console to Actions Panel
setConsoleOptions({
	panelExclude: [],
	});


addDecorator((storyFn, context) => withConsole()(storyFn)(context));

// Sort stories
addParameters({
	options: {
		storySort: (a, b) => {
			// Put Pages before everything else
			if (a[1].name === "Page" || b[1].name === "Page") { 
				return 1;
			}

			// A-Z everything else
			return a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true });
		}
	},
});