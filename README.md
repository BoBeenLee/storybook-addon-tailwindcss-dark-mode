# Storybook Addon Tailwind CSS Dark Mode

Addon for storybook which toggle dark mode using tailwind css.
This helps and simplifies development of dark mode.

## Getting Started

### 1. Toggling dark mode manually

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

### 4. Start Storybook

![Kapture 2022-06-30 at 14 03 56](https://user-images.githubusercontent.com/1489321/176596917-c522e579-4c8a-452b-9e5a-a383d7cda3b7.gif)
