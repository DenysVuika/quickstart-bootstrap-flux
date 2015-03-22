var React = require('react'),
    ChatApp = require('../chat/components/ChatApp.react'),
    ChatExampleData = require('../chat/ChatExampleData'),
    ChatWebAPIUtils = require('../chat/utils/ChatWebAPIUtils');

ChatExampleData.init(); // load example data into localstorage
ChatWebAPIUtils.getAllMessages();

var ChatPage = React.createClass({
  render: function() {
    return (
      <ChatApp />
    );
  }
});

module.exports = ChatPage;
