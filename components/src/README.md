
# WSU Design System CSS Documentation

The WSU Design System is a collection of components that aims to provide any platform and/or tool with the resources it needs to be a beautifully-branded WSU property.

## Component Structure

WSU Design System components are made up of one of three categories: global, site, and content. Each category has a distinct role and purpose for its functionality. All components will have a consistent naming convention (see Naming Conventions) to ensure editors across multiple tools and properties should have a consistent experience.

## Naming Conventions

### Category Prefixing

All components will prefixed to ensure Design System items can function without interference from other tools and provide a consistent experience when implementing the system across multiple platforms and tools. Global level components will be prefixed as `wsu-g-`, site level components will be prefixed `wsu-s-`, and content level components will be prefixed `wsu-c-`.

### Flat Class Naming

All components should have a logical, unique, identifying class name. Class names should be short, descriptive, and not conflict with other class names in the WSU design system. Class names should be prefixed with the category prefix and component name, followed by function/purpose (ie wrapper, container, link, heading, etc) and finally, any modifiers (if needed). For example, `wsu-g-header__wrapper` would be an appropriate class name to container multiple HTML elements in a component or `wsu-g-header__wrapper--dark` to accurately describe the same wrapper with a dark modifier.

### Child Class Names

Any HTML child element, should follow the same class naming convention above and focus primarily on the role and purpose the element is providing. This will allow us to avoid any heavy nesting of CSS styles. This will methodology, we'll ensure our specificity remains in-tack, while also provide a flexible and predictable way for users to interact with the codebase on their sites.  Here is an example of an HTML element and proper class naming:

```

	<div class="wsu-c-featured-events__wrapper">
		<ul class="wsu-c-featured-events__list">
			<li class="wsu-c-featured-events__item">
				<a href="#" class="wsu-c-featured-events__link">
					<h3 class="wsu-c-featured-events__heading">I am a Heading</h3>
				</a>
			</li>
		</ul>
	</div>
	
```

Avoid `wsu-g-header__heading__link` to avoid any confusion with regards to its location in the DOM. Multiple word element names are appropriate though. For example, `wsu-g-header__nav-item` would be an appropriate use of the dash to best describe the element, its purpose, and increase its uniqueness. 

### Class Name Modifiers

If you find that you have a common set of styles, but variants on that item, a class name modifier may be the best idea. For instance, if you had three list items and wanted one of those to be a "featured" list item, this would be a perfect use-case for a class name modifier. Instead of saying, `wsu-c-featured-events__featured-item` (which would lose your default styles from the normal event item, you can use a class name modifier: `wsu-c-featured-events__item--featured`. 

### Class Name Modifiers / Nesting in SCSS
To ensure that your class name modifiers work properly, you need to employ some nesting in our SCSS. In general, you want to avoid nesting styles in SCSS as much as possible. In general, nesting should only be utilized class name modifiers and pseudo selectors (like ::before or :hover). Otherwise, as a 'rule of thumb' create a new, opt for creating new unique class names over relying on SCSS nesting for specificity. Here is an example on how to target class name modifiers in SCSS:

```

	HTML:
	<div class="wsu-g-header__wrapper--dark">...</div>

	SCSS:
	.wsu-g-header__wrapper {
		padding: 20px;
		margin: 0 auto;
		background-color: white;
		
		&--dark {
			background-color: black;
		}
	}
	
```

This method ensures you can easily maintain consistent padding and margin across multiple elements, without having to sacrifice flexibility and predictability.

