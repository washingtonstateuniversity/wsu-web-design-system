# Components

## Using Components
All the components can easily be imported into your projects using the root of the components folder as an entry point. For example: `import { Heading, P, Button } from '../../packages/components';`.

## File Structure

<pre>
|-- packages
  |-- components
    |--[component-name]
      |-- partials | Optional. If more than one style exists they should be separated and independent.
        |-- _[style-name.scss] | Alternate style partials.
      |-- component-parts | Optional. Use if component is too overly complex to address in a single root index.js file.
        |-- [component-name]-[component-part].js
      |-- index.js | Component
      |-- style.scss | Component style or imported list of component styles from partials directory 
</pre>

## Code Standards

### Naming Conventions
- Variables: camelCase 
- Class names: PascalCase
- File names: kebab-case

## CSS/SCSS 

#### Naming Convention
- Class names should follow the following schema wsu-placement-collection-name__subname--modifier
-- placement (g-global, s-site, c-content)
-- collection (optional). Omitted by default but in the case of a collection like EM it would be wsu-c-em-....
-- name is the the name of the component
-- subname is the part of the component that the class is being applied to. wsu-c-callout__title
-- additional subnames should be avoided in favor of descriptive names separated by a hyphen (ie. __title-link instead of __title__link );

#### Nesting
- Classes should use nesting as little as possible with the following exceptions.
-- General component styles should be nested under parent class to avoid creating style conflicts 
