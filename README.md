# Clone Directory and start working!

## Creating an App for 2nd Semester @DHBW Mannheim
## Available Scripts

In the project directory, you can run:

#### This is also available with `yarn`.

To install yarn simply write 

### `npm install -g yarn`

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Using Material-Ui!:

Material UI is a Component Library based on Google's Web Standards and you can easily choose Components on their Website

https://material-ui.com/demos/buttons/ 

Here you have a variety of Components for example Buttons, which you can use.

#### Adding Components in React:

Simply create a new `.jsx` File and Name it to its purpose. For example name it DrawBar if its a Draw-Bar.
Then create a class with a specific Name and `export` it as a `default`.
Inside the class simply paste your copied code from Material-Ui into the class. 
*Don't* copy the imports within the class, do it above.

Then finally to use it in the App Component, which connects it all, import your class 

##### `import [generic Name because default] from './[ path where file is found] '`

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build` (not important)

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject` (not important aswell)

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

