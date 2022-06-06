# Reddit Image parser

This project grabs the latest Reddit entries from [r/Funnypics](https://www.reddit.com/r/Funnypics) and presents them in a less cluttered and responsive way using React and Bootstrap as a proof of concept.

You also have the ability to sort said entries, as well as mark individual favorites.

## Objectives:
1. Use the subreddit API for r/Funnypics page, e.g. https://www.reddit.com/r/Funnypics.json
2. Using React, display the first page of results from the chosen API.
3. Add the ability for users to favorite items of data.
    Favorites aren’t required to be persisted, but we welcome discussion on persistence strategies.
4. Add the ability for users to unfavorite items they’ve previously favorited.
5. Add the ability for users to sort the list A-Z by the titles of each item.
    Bonus: also added ability to revert back to default 'post' order, or toggle between ascending vs descending by post title.
6. Be sure to have unit-tests for areas that can be tested.
7. The app should work in the latest versions of Chrome, Firefox, and Safari

## Tools Used:
* [Node.js](https://nodejs.dev/)
* [React.js](https://reactjs.org/)
* [axios](https://reactjs.org/) for our Reddit API calls.
* [reactstrap](https://www.npmjs.com/package/reactstrap) and [bootstrap](https://www.npmjs.com/package/bootstrap) for easier responsive layout grid elements and styling.
* [Jest](https://jestjs.io/) for Unit and Automated Testing

## Example Commands:
Within your terminal, download the project and then cd into the new directry to use the following:

1. `npm install` will install and pull down any dependencies
2. `npm test` will run all defined tests [NOTE: see the new coverage folder that will be created for more verbose details on said tests]
3. `npm test` will run a series of component and unit tests automatically
    While testing, you can type `w` for more info (like updating existing snapshots when known good changes have been made etc)
4. `control +c` will close your local test server and stop the app from running

![Alt text](/images/app-screenshot.png)