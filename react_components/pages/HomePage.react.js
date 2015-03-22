var React = require('react'),
    WelcomeBanner = require('../core/WelcomeBanner.react');

var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <WelcomeBanner />
        <div className="text-center">
          <h1>Home Page</h1>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
