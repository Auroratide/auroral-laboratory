# Two Ways to Test React Components

See the **[Two Ways to Test React Components](https://auroratide.com/posts/two-ways-to-test-react-components)** article for more details.

This project demonstrates how to test React components nicely by using two types of tests:

* **Render Tests** ensure that the component displays properly given a set of props
* **Behaviour Tests** ensure the component does the right things when the user interacts with it

## Project Layout

This project uses React and MobX to run a very tiny interactive demo that showcases when to use render tests and behaviour tests. There are three components:

* The `App` component is the main component and contains some state. Since this is the component with state, it has the behaviour test that ensures the user interaction is satisfied properly.
* The `ColoredBox` component just displays a box with some color. It is a pure presentation component, so it only has some render tests.
* The `TextInput` component is just a wrapper for an `input` tag, so it only has the default sanity render test.

Take a look at the following files for more information:

* `App/behaviour.spec.jsx`
* `App/render.spec.jsx`
* `ColoredBox/render.spec.jsx`
* `TextInput/render.spec.jsx`

## Running the App

To run the app:

1. Run `npm install` to install dependencies
2. Run `npm start` to turn on the app
3. Go to `http://localhost:5000` to view

To run the tests:

1. Run `npm test`