# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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


## Hidden message

### steps to find the imposter

1. start at the start of the application. make sure we're in the right place. 
- how can we check the page heading when the same text appears in other places? getByRole()
- 

2. how can we find our way deeper in? find the links on the page. findAllByRole()


- when there are many groups? findByText, then use within() and findAllByRole()

3. 


Site structure:

home page with title, body text with headings and list of links. link to 'about us'

about us page has lists of links, with headings

need to find links list with given heading

members list: table with names and secret agent role
- need to find table row with secret agent, and find name




### things to talk about

testing library suite
xxx-testing-library
dom-testing-library
jest-dom
user-event
https://github.com/testing-library/jest-dom

also chai-dom
https://github.com/nathanboktae/chai-dom


getByRole, with name
https://www.w3.org/TR/accname-1.1/#dfn-accessible-name
accessible name is visible text, e.g. button or heading text

within

getByText

await findBy...

typing input and clicking buttons

jest-dom
https://github.com/testing-library/jest-dom