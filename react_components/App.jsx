/** @jsx React.DOM */

var React   = require('react');
var NavBar  = require('./core/NavBar.react');
var MainContent = require('./core/MainContent.react');

React.render(
  <div>
    <NavBar />
    <MainContent />,
  </div>,
  document.body
);
