# React Component Builder > Components & Tests

## Components

H1Component, H2Component, ParagraphComponent, ListComponent, ButtonComponent, LinkComponent, BoxComponent and ModalComponent are currently supported components right now.

These components are rendered using `React.createElement` method. It uses properties from JSON file or directly as an attribute.

Components are located into `./src/components` directory.

`./src/components/render.js` involves the core part of the rendering process. `createComponent()` method has `layoutConfig` as the parameter. Which is JSON data from json file. Function calls itself recursively to render all the related components.

`./src/app/index.js` imports render.js and calls `renderComponent()`. This method renders components as JSX elements.

Each individual component has a separate directory inside `./src/components` directory. The component is created by extending `React.Component` class inside `${name}.component.js` file.

For instance, H1Component is located inside `./src/components/h1`. And class file is `h1.component.js`.

Consider the following example to understand the behaviour of components.

```
import H1Component from './src/components/h1/h1.component';

<H1Component text="lorem ipsum dolor sit amet"></H1Component>
```

Similarly other components can be used anywhere in the app.

## Tests

Each individual component has a separate directory inside `./src/components` directory. That consists of `__tests__` as a sub directory.

For instance, H1Component is located inside `./src/components/h1`. It has `__tests__` sub directory. Subdirectory includes relevant tests for the component.

Tests are written using `@testing-library/react` and `@testing-library/jest-dom`.

For instance, consider the following test.

```
const layoutConfig = {
    'Content': {
        'type': 'H1Component',
        'props': {
            'text': 'Lorem Ipsum Dolor Sit Amet'
        }
    }
};

render( <App layout={ layoutConfig } /> );

const h1Element = screen.getByTestId( 'H1Component' );

expect( h1Element ).toHaveTextContent( layoutConfig.Content.props.text );
expect( h1Element ).toBeInTheDocument();

```

Test will have json as a property to `App` component. It should render `H1Component` in the screen when invoked.

The above test will try to find element after rendering and make sure that the given criteria match.