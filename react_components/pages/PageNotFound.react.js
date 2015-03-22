var React = require('react');

var PageNotFound = React.createClass({
  render: function() {
    return (
      <div className="text-center">
        <h1>Sorry, page not found.</h1>
      </div>
    );
  }
});

module.exports = PageNotFound;
