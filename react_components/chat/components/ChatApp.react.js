var React = require('react'),
    MessageSection = require('./MessageSection.react'),
    ThreadSection = require('./ThreadSection.react');

var ChatApp = React.createClass({

  render: function() {
    return (
      <div className="chatapp">
        <ThreadSection />
        <MessageSection />
      </div>
    );
  }

});

module.exports = ChatApp;
