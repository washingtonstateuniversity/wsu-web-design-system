# Components

## File Structure

<pre>
|-- packages
    |-- components
        |--[component-name]
	       |-- index.js | Component
		   |-- style.scss | Component style or imported list of component styles from styles directory 
		   |-- script.js | Component JS
		   |-- styles | Optional. If more than one style exists they should be separated and independent.
		       |-- default.scss | Default style
		       |-- [style-name.scss] | Alternate style
		   |-- stories | For use in StoryBook
		       |-- index.stories.js
</pre>

## Code Standards

### Naming Conventions
- Variables: camelCase 
- Class names: PascalCase
- File names: kebab-case

