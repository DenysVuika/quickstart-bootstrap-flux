var page = require('page');

var navigate = function (url) {
  return function (/*e*/) {
    page(url);
    /*e.preventDefault();*/
  };
};

module.exports = navigate;
