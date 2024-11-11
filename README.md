# Pokemon-vue-app

Project developed in Vuejs that presents information about Pokémon through the consumption of an API [PokeApi](https://pokeapi.co)

<img src="https://raw.githubusercontent.com/aleegz/pokemon-vue-app/refs/heads/master/public/pokeball.png" alt="Pokeball" width="100" height="100">
<img src="https://vuejs.org/images/logo.png" alt="Vue logo" width="100" height="100">

## Prerequisites

Make sure you have the following tools installed:

- [Node.js](https://nodejs.org/): You will need Node.js to handle dependencies and run the development server. You can download it from the official website. The recommended version is the LTS (Long Term Support).
- [npm](https://www.npmjs.com/): npm is the package manager that comes with Node.js by default. Alternatively, you can use [Yarn](https://yarnpkg.com/) if you prefer.

You can check if you have Node.js and npm installed by running the following commands in your terminal:

```bash
node -v
npm -v
```

## Installation
Follow these steps to get the project up and running on your local machine:

### Clone the repository:

First, clone the repository to your local machine using the following command:

```bash
git clone <repository URL>
cd <repository name>
Replace <repository URL> with the URL of your project (for example, https://github.com/username/repository-name.git), and <repository name> with the folder name that is created after cloning the repository.
```

### Install dependencies:

Once the project is cloned, navigate to the project directory and install the required dependencies by running:

```bash
npm install
Or, if you prefer Yarn:

yarn install
This will download and install all the necessary dependencies listed in the package.json file.
```

### Running the Project
After the dependencies are installed, you can run the project in development mode:

Start the development server:

To start the Vue 3 development server, run the following command:

```bash
npm run dev
Or with Yarn:

yarn dev
The server will be available at http://localhost:5173 by default. You should be able to see the application running in your browser.
```

Build the project for production (optional):

If you want to create an optimized production build of the project, run:

```bash
npm run build
Or with Yarn:

yarn build
This will generate the production-ready files inside the dist/ folder, ready to be deployed.
```

### Available Scripts
This project includes the following npm (or Yarn) scripts:

`npm run dev` or `yarn dev`: Starts the development server.

`npm run build` or `yarn build`: Creates an optimized production build.

`npm run preview` or `yarn preview`: Serves the preview version of the project after building.

### Contributing

If you would like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch for your feature or bugfix.
Make your changes and commit them with clear messages.
Push your changes to your forked repository.
Create a pull request (PR) from your fork to the original repository.