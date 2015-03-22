var React = require('react'),
    UsersView = require('../users/components/UsersView.react'),
    webApi = require('../users/webApi');

webApi.getAllUsers();

var UsersPage = React.createClass({
  render: function() {
    return (
      <div>
        <UsersView />
      </div>
    );
  }
});

module.exports = UsersPage;
