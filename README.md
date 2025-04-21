# Example UMD React component

This repo contains an example react component that can be built and imported into
a standard html page.

## Environment setup

Run `pnpm install` to install the dependencies.

## Building component

The component is built using vite. To build the component, run `pnpm run build`.
This will create a `dist` folder with the built component.

## Preview

### Storybook

### Built component

To preview the component run the root directory as a static server.
Go to localhost:PORT/preview.html to see the component in action.

## Usage

The component that will be exported is located in the `lib/main.ts` file.
After running `pnpm run build`, the component will be available in the `dist` folder.
This is then imported into a html page using the `<script>` tag.

See minimal example below:

```html

  <div id="root"></div>
  <script type="module">
    import { renderExampleComponent } from "./dist/example-umd.js";
    renderExampleComponent("root", "Hello from the example component!");
  </script>
```

## Contributing

### Linter

We use the default vite eslint setup. Run `pnpm run lint` to lint the code.

It is also recommended to use the eslint extension for your editor.

### Formatting

We use prettier for code formatting. Run `pnpm run format` to format the code.
