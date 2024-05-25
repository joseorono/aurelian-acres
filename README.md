# Aurelian Acres

## Idle City-Builder Rome Game

This is a project template that uses the React framework and Vite for bundling. It includes a Zustand store, hot-reloading for quick development workflow and scripts to generate production-ready builds.

### Versions

This project has been updated for:

- [React 18.2.0](https://github.com/facebook/react)
- [Vite 5.1.4](https://github.com/vitejs/vite)
- [TypeScript 5.3.3](https://github.com/microsoft/TypeScript)

![screenshot](screenshot.png)

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command         | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm install`   | Install project dependencies                   |
| `npm run dev`   | Launch a development web server                |
| `npm run build` | Create a production build in the `dist` folder |

## Writing Code

After cloning the repo, run `npm install` from the project directory. Then, you can start the local development server by running `npm run dev`.

The local development server runs on `http://localhost:8080` by default. Please see the Vite documentation if you wish to change this, or add SSL support.

Once the server is running you can edit any of the files in the `src` folder. Vite will automatically recompile the code and then reload the browser.

## Project Structure

We have provided a default project structure to get you started. This is as follows:

- `index.html` - A basic HTML page to contain the game.
- `src` - Contains the React client source code.
- `src/main.tsx` - The main **React** entry point. This bootstraps the React application.
- `src/types` - Global TypeScript declarations, provide types information.
- `src/App.tsx` - The main React component.
- `public/assets` - Contains the static assets used by the game.

## Deploying to Production

After you run the `npm run build` command, the code will be built into a single bundle and saved to the `dist` folder, along with any other assets the project imported, or stored in the public assets folder.

In order to deploy the game, you will need to upload _all_ of the contents of the `dist` folder to a public facing web server.

## Credits and Licences

All licences are available in the public\assets\assetLicences.md and audio_notes.md files

## Customizing the Project

### Vite

If you want to customize the build, such as adding plugin (i.e. for loading CSS or fonts), you can modify the `vite.config.js` file for cross-project changes, or you can modify and/or create new configuration files and target them in specific npm tasks inside of `package.json`. Please see the [Vite documentation](https://vitejs.dev/) for more information.

The Phaser logo and characters are &copy; 2011 - 2024 Phaser Studio Inc.

All rights reserved.
