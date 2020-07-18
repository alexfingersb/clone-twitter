# Twitter Clone

This is a simple project for study proposals. It was developed by [Rocketseat](https://rocketseat.com.br) and you cant watch the tutorial [Responsive Twitter with ReactJS | UI Clone](https://www.youtube.com/watch?v=K-8z_4xvT3o&t=456s)

## Getting Started

These instructions will get you a new project up and running on your local machine for development and testing purposes.

## Tech

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- [Yarn] - Yarn is a package manager that doubles down as project manager.
- [ReactJS] - A JavaScript library for building user interfaces.
- [Styled Components] - Use the best bits of ES6 and CSS to style your apps without stress.
- [Styled Icons] - Popular icon packs like Font Awesome, Material Design, and Octicons, available as React Styled Components.
- [Sticky Box] - Sticky Boxes with sensible behaviour if the content is bigger than the viewport.
- [ESLint] - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

# Running the cloned project

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

# Steps to create a new project

### Configuring your project

- Use YARN to initialize your project and create package.json to store project dependencies.

### Create the project and go into the folder

### Install dependencies

```bash
# Add Styled Components
yarn add styled-components

# add Styled Components Types
yarn add -D @types/styled-components

# Add Styled Icons
yarn add styled-icons

# Add React Sticky Box
yarn add react-sticky-box

```

### Add ESLint

```
yarn add -D eslint
yarn eslint --init
```

### Runs the app in the development mode

### `yarn start`

Open http://localhost:3000 to view it in the browser.

## Some extra custom configurations

#### Create the `.prettierrc` file with the content

```
{
    "singleQuote": true,
    "trailingComma": "es5"
}
```

[yarn]: https://yarnpkg.com
[reactjs]: https://reactjs.org
[styled components]: https://styled-components.com
[styled icons]: https://styled-icons.js.org
[sticky box]: https://react-sticky-box.codecks.io/
[eslint]: https://eslint.org
