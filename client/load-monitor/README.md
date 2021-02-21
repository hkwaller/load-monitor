# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is this?

This is an app that monitors the cpu loads received from the server.

### Dependencies

The project was made with the CRA Typescript template, because it's a quick, easy and well-known way of setting up a React app without the need for large amounts of boilerplate.  
It includes dependencies like Babel, Webpack Eslint, Jest and Typescript.

I use Axios mainly because I'm used to it, and since the focus of this app is not in learning fetch. Automatic json parsing is a plus, but could probably be easily solved with some boilerplate. Future exbandability is a bit simplified through interceptors, and built in XSRF protection is fine I guess.

Highcharts is used for graphing because its a great graphing library, and Toastify is used for Notifications, since its simple, small and suits my needs.

### Architecture

The current application is basically a Highcharts chart, with some setting inputs and a separate component that monitors the load "category" ("High, "Recovered", etc.) and delivers a toast notification for certain categories.

Load data is retrieved globally for the app at 10-second intervals and made available through LoadContext.
I chose to use context since Redux would be overkill, and a lot of components will need the load data, at least in the extra goals.

### Future Improvements

More parameters can easily be made available for graph settings, ~~like data period~~ (never mind, I did it instead), and polling interval.

The current-load component should honestly be a part of the graph instead of a separate component, either as a visible-by-default tooltip, or as a part of the title.
I should also format the mouseover tooltip a bit nicer for the user.

A separate graph can be added for all CPU-cores to display percentage of non-idle time.

There should probably also be some better error handling in the http agent, with customized toast notifications for different error codes and messages. Authentication could be added to the server to prevent unauthorized access to CPU data.

I also think I should have added a stop button at some point, to stop the constant server polling.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
