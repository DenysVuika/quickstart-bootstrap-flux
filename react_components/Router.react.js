var React = require('react');
var page = require('page');

var Router = React.createClass({
  getInitialState: function() {
    return {
      component: <div/>
    };
  },
  componentDidMount: function() {

    var self = this;

    this.props.routes.forEach(function (route) {
      var url = route[0];
      var View = route[1];

      page(url, function (ctx) {
        self.setState({
          component: <View params={ctx.params} querystring={ctx.querystring}/>
        });
      });

    });

    page.start();
  },
  render: function() {
    return this.state.component;
  }
});

module.exports = Router;
