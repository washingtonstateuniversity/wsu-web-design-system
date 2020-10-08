import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

// Component Imports
import { WsuButton } from '../../packages/components';

const spacingOptions = ['default','none','xsmall','small','medium','medium-large','large','xlarge'];
const iconOptions = ['','alarm', 'alert-notification', 'arrow-down-carrot', 'arrow-down', 'arrow-left-carrot', 'arrow-left', 'arrow-right-carrot', 'arrow-right', 'arrow-up-carrot', 'arrow-up', 'attachment', 'basket', 'bookmark', 'calendar', 'cart', 'check', 'collapse', 'comment', 'contrast', 'credit-card', 'cut', 'discussion', 'document', 'download', 'edit', 'email', 'expand', 'favorite', 'feedback', 'filter', 'flag', 'gallery', 'graph', 'home', 'info', 'key', 'light-bulb', 'link', 'location', 'map-location', 'map', 'menu', 'minus-circle', 'minus', 'mobile', 'monitor', 'more-vertical', 'more', 'next', 'pause', 'phone', 'photos', 'play-circle', 'play', 'plus', 'pluse-circle', 'previous', 'print', 'profile-circle', 'profile', 'rate', 'refresh', 'save', 'search', 'secure', 'send', 'settings', 'share', 'social-facebook', 'social-instagram', 'social-linkedin', 'social-twitter', 'social-youtube', 'stop-circle', 'stop', 'tag', 'tent', 'time', 'trash', 'upload', 'video-slideshow', 'warning-caution', 'warning-stop', 'x-close', 'zoom-in', 'zoom-out'];

// Story Time
export default {
	title: 'Components/Content/Button',
	parameters: {
		status: 'Stable' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs,
	],
	component: WsuButton
};
 


export const DefaultButton = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : ''; 
	return (
		<ComponentWrapper layout="centered" className={classes}>
			<WsuButton
				tag={ select( 'tag',['default','a','button','div'],'default', optionsGroupID )  }
				buttonText={ text( 'buttonText','Lorem Ipsum', optionsGroupID ) }
				buttonUrl={ text( 'buttonUrl','#', optionsGroupID ) }
				marginBefore={ select( 'marginBefore',spacingOptions,'default', optionsGroupID )  }
				marginAfter={ select( 'marginAfter',spacingOptions,'default', optionsGroupID )  }
				shape={ select( 'shape',['default','square','round'],'default', optionsGroupID )  }
				color={ select( 'color',['default','crimson','white'],'default', optionsGroupID )  }
				size={ select( 'size',['default','small','medium','large'],'default', optionsGroupID )  }
				buttonAlign={ select( 'buttonAlign',['left','rigt','center'],'default', optionsGroupID )  }
				iconBefore={ select( 'iconBefore',iconOptions,'default', optionsGroupID )  }
				iconAfter={ select( 'iconAfter',iconOptions,'default', optionsGroupID )  }
			/>
		</ComponentWrapper>
	)
}