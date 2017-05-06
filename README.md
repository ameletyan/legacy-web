# legacy-web

A dynamic illustration of the history of computing.

## Link

http://peaceful-sierra-98744.herokuapp.com/

## Documentation

#### V 0.2:

With the new release, users can add nodes and links or remove them.  Now when new nodes are created, they do not need a parent node.  To facilitate this, the "Clear Selection" button was added.  The descriptions of each node were hidden to conserve space, but they can still be read when clicking on the new "Info" button while a node is selected.  Links now have two additional parameters: description and source.  The link's description notifies the user why the two event nodes are linked and the link's source provides accountability for that description.  These two new parameters can be viewed by clicking the "Info" button while selecting a link.  Below are some features that may be added in the future:

* creating base nodes that are historically accurate
* database integration to persist added nodes
* general aesthetic changes
* add method to dispute nodes/links and their sources
* discussion forum?

#### V 0.1:

The intended goal of this project is to create a dynamic web of nodes that are linked such that the parent node has had an influence on the child node(s) (i.e. the node for "developing the MARK I series of computers" will be the parent node to the one for "developing the MARK II series of computers").  Users can add new nodes to be children of the existing nodes to build the web.  To do this, they must first select one of the existing nodes and then click on the "Add Node" button.

This application was built using JavaScript and HTML on top of this Node.js sample: https://github.com/heroku/node-js-sample.  The GoJS API is being used to generate the nodes and links of the web.  Currently, the application can add new nodes to the web and move the existing nodes around.  Below is a tentative list of some features that will be implemented in the future:

* creating base nodes that are historically accurate
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
