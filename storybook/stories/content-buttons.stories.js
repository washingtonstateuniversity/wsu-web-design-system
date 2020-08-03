import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/storybook-components/content-wrapper';

// Component Imports
import { Button } from '../../packages/components';

const spacingOptions = ['default','none','xsmall','small','medium','medium-large','large','xlarge'];

// Story Time
export default {
	title: 'Components/Content/Button',
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const DefaultButton = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : ''; 
	return (
		<ComponentWrapper layout="centered" className={classes}>
			<Button
				tag={ select( 'tag',['default','a','button','div'],'default', optionsGroupID )  }
				buttonText={ text( 'buttonText','Lorem Ipsum', optionsGroupID ) }
				buttonUrl={ text( 'buttonUrl','#', optionsGroupID ) }
				marginBefore={ select( 'marginBefore',spacingOptions,'default', optionsGroupID )  }
				marginAfter={ select( 'marginAfter',spacingOptions,'default', optionsGroupID )  }
				shape={ select( 'shape',['default','square','round'],'default', optionsGroupID )  }
				color={ select( 'color',['default','crimson','white'],'default', optionsGroupID )  }
				size={ select( 'size',['default','small','medium','large'],'default', optionsGroupID )  }
				buttonAlign={ select( 'buttonAlign',['left','rigt','center'],'default', optionsGroupID )  }
			/>
		</ComponentWrapper>
	)
}