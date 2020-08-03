# Components

## Using Components
All the components can easily be imported into your projects using the root of the components folder as an entry point.
For Example: `import { Heading, P, Button } from '../../packages/components';`

## File Structure

<pre>
|-- packages
	|-- components
		|--[component-name]
			|-- partials | Optional. If more than one style exists they should be separated and independent.
				|-- _[style-name.scss] | Alternate style partials.
			|-- component-parts | Optional. Use if component is too overly complex to address in a single root index.js file.
				|-- index.stories.js
			|-- index.js | Component
			|-- style.scss | Component style or imported list of component styles from partials directory 
</pre>

## Code Standards

### Naming Conventions
- Variables: camelCase 
- Class names: PascalCase
- File names: kebab-case