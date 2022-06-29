# Storybook Addon Tailwind CSS Dark Mode

Addon for storybook which toggle dark mode using tailwind css.
This helps and simplifies development of dark mode.

## Getting Started

### 1.Toggling dark mode manually

- https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually

### 2. yarn or npm install

```sh
npm i --save-dev storybook-addon-tailwindcss-dark-mode
```

or with yarn:

```sh
yarn add -D storybook-addon-tailwindcss-dark-mode
```

### 3. Then, add following content to `.storybook/main.js`

```js
module.exports = {
  addons: ["storybook-addon-tailwindcss-dark-mode"],
};
```
