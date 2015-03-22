var dispatcher = require('./dispatcher'),
    constants = require('./constants'),
    ActionTypes = constants.ActionTypes;

module.exports = {
  receiveAll: function(rawUsers) {
    dispatcher.dispatch({
      type: ActionTypes.RECEIVE_RAW_USERS,
      rawUsers: rawUsers
    });
  },
};
