var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    dispatcher = require('../dispatcher'),
    ActionTypes = require('../constants').ActionTypes,
    CHANGE_EVENT = 'change';

var _users = [];

var UserStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getAll: function() {
    return _users;
  },

});

UserStore.dispatchToken = dispatcher.register(function(action) {

  switch(action.type) {

    case ActionTypes.RECEIVE_RAW_USERS:
      _users = action.rawUsers;
      UserStore.emitChange();
      break;

    default:
      // do nothing
  }

});

module.exports = UserStore;
