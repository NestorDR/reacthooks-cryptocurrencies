## Description

This example is a simple application that allows you to test some React and React-Redux hooks. The application implements information queries about cryptomonies, taking advantage of the Nomics API [Nomics API](https://docs.nomics.com/).

You can find an even simpler example at [learn-hooks](https://github.com/NestorDR/learn-hooks).

Hooks are a new feature in React v16.8. They allow you to use the state, effect and other features of React without writing a class.

This example allows you to test useState and useEffect, along with some [Material-UI](https://material-ui.com/) controls.

#### useState
It's the React.Js hook that allows to manage states within a functional component. It would be the equivalent of **this.state** / **state** of a class component.

#### useEffect
It's the hook of React.Js that allows to carry out secondary effects in functional components. It is equivalent to **componentDidMount**, **componentDidUpdate** and **componentWillUnmount** combined, of a class component.

By using this hook, we tell React.Js that the component must do something after it is rendered.

In addition, this example uses the React-Redux library, which from v7.10 offers a [set of hook APIs](https://react-redux.js.org/next/api/hooks) as an alternative to the existing connect() Higher Order Component. These APIs allow you to subscribe to the Redux store and dispatch actions, without having to wrap your components in connect().

This example allows you to test useDispatch and useSelector. Also uses the Axios and Redux-Saga libraries.

#### useDispatch
This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.

#### useSelector
Allows you to extract data from the Redux store state, using a selector function.

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
