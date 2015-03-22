var React = require('react'),
    Router = require('../Router.react');

var MainContent = React.createClass({

  render: function() {
    return (
      <div className="container-fluid">
        <Router />
      </div>
    );
  }

});

module.exports = MainContent;
