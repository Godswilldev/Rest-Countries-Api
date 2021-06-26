# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - REST Countries API with color theme switcher solution](#frontend-mentor---rest-countries-api-with-color-theme-switcher-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Contribution](#contribution)
  - [Available Scripts](#available-scripts)
    - [`yarn start`](#yarn-start)
    - [`yarn build`](#yarn-build)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./public/design/desktop-design-home-dark.jpg)

### Links

- Live Site URL: [Add solution URL here](https://rest-countries-api-xi-six.vercel.app)

## My process

### Built with

- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Context Api](https://reactjs.org/)
- [React Hooks](https://reactjs.org/)
- [Material UI](https://material-ui.com/)
- [Framer Motion](https://material-ui.com/) For Transitions and Animations
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

In this challenge, i got more confident using the react Context Api, hooks and Styled-components.
This challenge also helped me with the confidence to be able to read docs on my own (Framer-Motion docs).
I would like to say a big Thanks to frontendmentor and i look forward to completing more of their challenges.

```js
const CountriesReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT":
      return {
        ...state,
        [action.name]: action.payload,
      };

    case "SET COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    case "SENDING REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "REQUEST FINISHED":
      return {
        ...state,
        loading: false,
      };
    case "SET ONE COUNTRY":
      return {
        ...state,
        currentCountry: action.payload,
      };
    default:
      return state;
  }
};

export default CountriesReducer;
```

### Contribution

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
