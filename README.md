# DataGrid Routing with Vue

## Repository Description

This repository contains a Vue.js sample application that demonstrates client-side routing using Vue Router along with the Syncfusion Vue DataGrid component across multiple routed views.

## Project Overview

This sample illustrates how to integrate the Syncfusion Vue DataGrid within a Vue application that uses Vue Router for navigation. The application defines multiple routes such as Home, About, and Contact, and renders different components based on the active route. One of the routed views displays a Syncfusion DataGrid bound to sample data, showing how the grid works seamlessly within a routed single-page application.

The project uses Vue 2 with Webpack configuration and highlights how routing, component-based architecture, and third-party UI components can work together in a structured Vue application. It serves as a reference for developers who want to use the Syncfusion DataGrid in applications that rely on client-side navigation.

## Key Features

- Vue Router–based navigation with multiple routes
- Integration of Syncfusion Vue DataGrid in routed components
- Declarative column definitions and data binding
- Webpack-based development and build workflow

## Prerequisites

- Node.js and npm
- Basic knowledge of Vue.js and Vue Router

## Running the Application

Follow the steps below to clone the repository, install dependencies, and run the application.

1. Clone the repository and navigate to the project directory:

   ```bash
   git clone <repository-url>
   cd DataGrid-routing-vue
   ```

2. Install the required npm packages:

   ```bash
   npm install
   ```

3. Run the application in development mode:

   ```bash
   npm run dev
   ```

Once the development server starts, open the displayed local URL in a browser. Use the navigation links to switch between routes and observe the Syncfusion DataGrid rendered within the routed components.

## Usage Notes

You can modify route definitions in the router configuration or update the grid configuration inside the component files to explore different routing and grid scenarios.

## Additional Resources

- [Syncfusion Vue Grid Documentation](https://ej2.syncfusion.com/vue/documentation/grid/getting-started)
- [Syncfusion Vue Demos](https://ej2.syncfusion.com/vue/demos)
- [Vue Router Documentation](https://router.vuejs.org/guide)
