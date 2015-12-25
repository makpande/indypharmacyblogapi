var React = require('react');
var Router = require('react-router');
var App = require('../components/layout/App.jsx');
var PostView = require('../components/posts/PostView.jsx');
var AboutView = require('../components/static/AboutView.jsx');
var HomeView = require('../components/static/HomeView.jsx');
var ContactView = require('../components/static/ContactView.jsx');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="home" handler={HomeView} />
    <Route name="posts" handler={PostView} />
    <Route name="about" handler={AboutView} />
    <Route name="contact" handler={ContactView} />
  </Route>
);
