# Create Micro React App

[![Build Status](https://travis-ci.com/matheusmr13/create-microfrontend-react-app.svg?branch=master)](https://travis-ci.com/matheusmr13/create-microfrontend-react-app)
[![Build Status](https://dev.azure.com/matheusmr13/create-microfrontend-react-app/_apis/build/status/matheusmr13.create-microfrontend-react-app?branchName=master)](https://dev.azure.com/matheusmr13/create-microfrontend-react-app/_build/latest?definitionId=2&branchName=master)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=matheusmr13_create-microfrontend-react-app&metric=alert_status)](https://sonarcloud.io/dashboard?id=matheusmr13_create-microfrontend-react-app)

Create simple microfrontend architecture with tools like [Create React App](https://github.com/facebook/create-react-app).

<p align="center">
  <img src="icon.svg" width="40%">
</p>

## Quick Overview

```
  npx microfrontend-controller create my-app --app --microfrontend
  cd my-app
  npm start
```

## What it does

It helps you create a simple application with microfrontend architecture with no build configuration.

### Core Features

- Microfrontend development made easy:

  - Boilerplate and pre configured architechture;

  - Mock all other microfrontends (refering to a stable environment) combined with hotreload on current microfrontend, allowing you to see the changes you make as you develop new feature on a specific module;

  - Choose to split microfrontends into multiple repositories;

- You just need something to host your static files and you are ready to go with a microfrontend app;

- All of this with [Create React App](https://github.com/facebook/create-react-app) beautiful configuration.

- Integrates easy with a simple management interface that helps you organizing your microfrontends.

## Service

Splited on marketplace-backend and marketplace-frontend packages.

It helps you organizing your application integrated with the best tools (like github), like a backoffice for your architechtur.
You can have a simple microfrontend architechture on your application, and deploy it easily with many options.
Check our [site](https://matheusmr13.github.io/create-micro-react-app) for a demo.

## CLI Docs

Contained on microfrontend-controller package.

```
  npx microfrontend-controller --help
  npx microfrontend-controller start --help
  npx microfrontend-controller build --help
  npx microfrontend-controller create --help
```

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/)
