var React = require('react');

var UserTableRow = React.createClass({

  propTypes: {
    user: React.PropTypes.object
  },
  render: function() {
    var user = this.props.user;
    return (
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    );
  }

});

module.exports = UserTableRow;
