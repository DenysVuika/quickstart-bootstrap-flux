var React = require('react'),
    UserStore = require('../stores/UserStore'),
    UserTableRow = require('./UserTableRow.react');

function getStateFromStores() {
  return {
    users: UserStore.getAll()
  };
}

function getUserTableRow(user) {
  return (
    <UserTableRow
      key={user.id}
      user={user}
    />
  );
}

var UsersView = React.createClass({
  getInitialState: function() {
    return getStateFromStores();
  },
  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var style = {
      textAlign: 'left'
    };
    var userTableRows = this.state.users.map(getUserTableRow);
    return (
      <table className="table table-bordered table-hover" style={style}>
        <caption>Users</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th><i className="fa fa-user"></i> Name</th>
            <th><i className="fa fa-envelope-o"></i> Email</th>
          </tr>
        </thead>
        <tbody>
          {userTableRows}
        </tbody>
      </table>
    );
  },

  /**
   * Event handler for 'change' events coming from the UserStore
   */
  _onChange: function() {
    this.setState(getStateFromStores());
  }

});

module.exports = UsersView;
