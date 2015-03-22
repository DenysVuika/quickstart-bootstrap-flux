var React = require('react');
var page = require('page');

var HomePage = require('./pages/Homepage.react'),
    AboutPage = require('./pages/AboutPage.react'),
    ContactPage = require('./pages/ContactPage.react'),
    UsersPage = require('./pages/UsersPage.react'),
    ChatPage = require('./pages/ChatPage.react'),
    PageNotFound = require('./pages/PageNotFound.react');

var Router = React.createClass({
  getInitialState: function() {
    return {
      component: <div/>
    };
  },
  componentDidMount: function() {

    page('/', function (ctx) {
      this.setState({component: <HomePage />});
    }.bind(this));

    page('/about', function (ctx) {
      this.setState({component: <AboutPage />});
    }.bind(this));

    page('/contact', function (ctx) {
      this.setState({component: <ContactPage />});
    }.bind(this));

    page('/users', function (ctx) {
      this.setState({component: <UsersPage />});
    }.bind(this));

    page('/chat', function (ctx) {
      this.setState({component: <ChatPage />});
    }.bind(this));

    /*
    // Component then may cantain route variables via this.props.params.*
    page('/users/:id', function (ctx) {
      this.setState({component: <Page2 params={ctx.params} />});
    }.bind(this));
    */

    page('*', function (ctx) {
      this.setState({component: <PageNotFound />});
    }.bind(this));

    page.start();
  },
  render: function() {
    return this.state.component;
  }
});

module.exports = Router;
