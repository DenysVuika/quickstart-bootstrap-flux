var HomePage      = require('./pages/Homepage.react'),
    AboutPage     = require('./pages/AboutPage.react'),
    ContactPage   = require('./pages/ContactPage.react'),
    UsersPage     = require('./pages/UsersPage.react'),
    ChatPage      = require('./pages/ChatPage.react'),
    PageNotFound  = require('./pages/PageNotFound.react');

var routes = [
  ['/', HomePage],
  ['/about', AboutPage],
  ['/contact', ContactPage],
  ['/users', UsersPage],
  ['/chat', ChatPage],
  ['*', PageNotFound]
];

module.exports = routes;
