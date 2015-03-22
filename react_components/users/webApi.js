var actions = require('./actions');

module.exports = {
  getAllUsers: function () {
    $.get('/api/users', function (rawUsers) {
      actions.receiveAll(rawUsers);
    });
  }
};
