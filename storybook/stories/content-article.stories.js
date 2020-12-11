import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean, number, select } from "@storybook/addon-knobs";
import { previewGroupID, optionsGroupID } from '@wsuwebteam/build-tools/js/helpers/storybook';

// Storybook Imports
import ComponentWrapper from '../../packages/component-parts/content-wrapper';

// Component Imports
import { 
	WsuArticle, 
	WsuArticleHeader,
} from '../../packages/components';

// Story Time
export default {
	title: 'Components/Content/Article',
	parameters: {
		status: 'In Development' // In Development | Needs Feedback | Stable | Needs Deployment | Has Known Issues
	},
	decorators: [
		withA11y,
		withKnobs,
	]
};

export const DefaultArticle = () => {

	let classes = ( boolean('Apply wsu-c-content class', true, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );

	return (
		<ComponentWrapper layout={layout} className={classes}>
			<WsuArticle >
				<WsuArticleHeader
					title={ text( 'title','Lorem ipsum dolor sit amet', optionsGroupID ) }
					subtitle={ text( 'subtitle','Suspendisse suscipit leo lobortis vehicula vestibulum', optionsGroupID ) }
					authorName={text( 'authorName','Butch Cougar', optionsGroupID )}
					authorLink={text( 'authorLink','#', optionsGroupID )}
					publishDate={text( 'publishDate','April 7, 2020', optionsGroupID )}
					/>
			</WsuArticle>
			<p>faucibus sem. In hac habitasse platea dictumst. Sed in porttitor lectus, vel feugiat dui. Ut porttitor et ligula vel condimentum. 
			Sed odio turpis, malesuada a purus vitae, auctor hendrerit dui. Fusce laoreet turpis quis nisi aliquam, vitae faucibus quam pellentesque. 
			Proin sagittis ipsum vitae enim maximus suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
			<h2>Cimson cougar jumps</h2>
			<p>Morbi id lectus ut <a href="#">purus consectetur mattis in rutrum diam</a>. Donec vel ipsum ut orci commodo pulvinar eu at erat. In consectetur 
			massa sit amet orci tincidunt sagittis. Nam malesuada magna nec turpis iaculis, non dignissim lectus rhoncus. Morbi sit amet 
			ornare erat. Aenean pellentesque elit vel libero mattis ornare eu sed orci.</p>
			<h3>Over the lazy huskys</h3>
			<p>Integer tempus in nisl nec pharetra. Nulla justo 
			augue, facilisis et lorem a, interdum egestas ante. Sed elementum, ante tincidunt maximus condimentum, est mauris convallis 
			enim, ut fringilla felis lectus eu justo.</p>
			<ul>
				<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
				<li>Praesent eleifend velit eget tellus sollicitudin scelerisque.</li>
				<li>Nullam a augue ac urna dignissim porttitor nec eu arcu.</li>
				<li>Nunc vitae libero semper, placerat ante vitae, accumsan lorem.</li>
			</ul>
			<h2>Quick crimson cougar</h2>
			<p>Donec faucibus lacus vitae massa sollicitudin, eu aliquam ligula viverra. Sed a velit risus. Vestibulum vitae quam accumsan, 
			gravida tellus tincidunt, aliquam augue. Fusce blandit, lacus quis pulvinar semper, lacus velit euismod nibh, sit amet ultrices 
			libero lacus quis arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ultrices, massa quis tincidunt 
			venenatis, mauris mi tincidunt lacus, id porta magna turpis sit amet quam. Integer consequat blandit rutrum. Pellentesque 
			vitae nibh eu erat sollicitudin placerat vel quis augue. Curabitur laoreet egestas tempus.</p>
		</ComponentWrapper>
	)
}

export const ArticleHeader = () => {

	let classes = ( boolean('Apply wsu-c-content class', false, previewGroupID ) ) ? ['wsu-c-content'] : '';
	let layout = ( select('Wrapper Layout', ['full', 'content', 'centered'], 'content', previewGroupID ) );
	
	return (
		<ComponentWrapper layout={layout} className={classes}>
			<WsuArticleHeader
				title={ text( 'title','Lorem ipsum dolor sit amet', optionsGroupID ) }
				subtitle={ text( 'subtitle','Suspendisse suscipit leo lobortis vehicula vestibulum', optionsGroupID ) }
				authorName={text( 'authorName','Butch Cougar', optionsGroupID )}
				authorLink={text( 'authorLink','#', optionsGroupID )}
				publishDate={text( 'publishDate','April 7, 2020', optionsGroupID )}
				/>
		</ComponentWrapper>
	)
}