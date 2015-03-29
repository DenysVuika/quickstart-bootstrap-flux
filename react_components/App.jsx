/** @jsx React.DOM */

var React = require('react'),
    Router = require('./Router.react'),
    routes = require('./routes'),
    NavBar = require('./core/NavBar.react');

React.render(
  <div>
    <NavBar />
    <div className="container-fluid">
      <Router routes={routes} />
    </div>
  </div>,
  document.body
);
