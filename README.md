# legacy-web

A dynamic illustration of the history of computing.

## Link

http://peaceful-sierra-98744.herokuapp.com/

## Documentation

This application was built using JavaScript and HTML on top of this Node.js sample: https://github.com/heroku/node-js-sample.  The GoJS API is being used to generate the nodes and links of the web.  Currently, the application can add new nodes to the web and move the existing nodes around.  Below is a tentative list of some features that will be implemented in the future:

* database integration to persist added nodes
* adding links between existing nodes
* making the data in each node more readable when zoomed out
* creating parentless nodes
* general aesthetic changes

# Development

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone https://github.com/ameletyan/legacy-web.git
cd legacy-web
npm install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [10 Habits of a Happy Node Hacker](https://blog.heroku.com/archives/2014/3/11/node-habits)
- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
