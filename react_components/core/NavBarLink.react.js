var React = require('react');
var page = require('page');

var NavBarLink = React.createClass({
  getInitialState: function() {
    return {
      active: false
    };
  },
  componentWillMount: function() {
    var route = this.props.route;
    if (route) {
      page(route, function (ctx, next) {
        this.setState({active: true});
        next();
      }.bind(this));
      page.exit(route, function (ctx, next) {
        this.setState({active: false});
        next();
      }.bind(this));
    }
  },
  render: function() {
    var classString = '';
    if (this.state.active) {
      classString += 'active';
    }
    return (
      <li className={classString}>
        <a href={this.props.route}>{this.props.text}</a>
      </li>
    );
  }
});

module.exports = NavBarLink;
