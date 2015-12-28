var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="post">
        <span className="postauthor">{this.props.author} </span>
        <span className="posttitle">{this.props.title}</span><br/>
        <span className="postbody">{this.props.body}</span>
      </li>
    );
  }
});
