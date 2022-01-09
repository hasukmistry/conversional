# React Component Builder

React app that renders the content based on configuration only. It is able to render a JSON data structure into a functioning app.

Valid JSON files should be put inside the `./layouts` folder.

## Table of content
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)

## Project Structure
> `./` -
Root directory contains environment config and project setup files.

> `docker` -
It contains Dockerfile to build a container image.

> `layouts` -
It contains valid JSON data structure files.

> `public` -
It contains core files to render an app into the browser.

> `src` -
It contains application code along with components and tests.

Following are some of the important files in the project root directory:

- `.env` - 
It contains required environment variables. Only available when the app is running without docker.

- `package.json`, `package-lock.json` -
It describes project dependencies and core config. Read more here:
[https://docs.npmjs.com/cli/v8/configuring-npm/package-json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
[https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json](https://docs.npmjs.com/cli/v8/configuring-npm/package-lock-json)

- `postcss.config.js` -
It contains config for postcss plugin.
Read more here: [https://postcss.org/](https://postcss.org/)

- `tailwind.config.js` -
It contains config for tailwind plugin.
Read more here: [https://tailwindcss.com/docs/guides/create-react-app](https://tailwindcss.com/docs/guides/create-react-app)

- `docker-compose.yml` -
It contains a docker-compose config to build and run the app.

- `Makefile` -
It consists of commands to simplify the build and run process.

## Getting Started

### Install Node Modules & Build Docker Image

> `make setup`

### Run app locally

> `make run`

It runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The changes will be reloaded automatically.\
You may also see any lint errors in the console.

It will start the react application on the specified port in `docker-compose.yml`. For instance, it will start the app on port 3001 by default. Check the following lines in the `docker-compose.yml`.
```
environment:
    - PORT=3001
```

### Run tests

> `make run-tests`

Launches the test runner. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Run production

> `make run-production`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

This make command will start the app in production mode on the specified port in `docker-compose.yml`.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
