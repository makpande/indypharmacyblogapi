var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li className="topic">
        <span className="topictitle">{this.props.title}</span><br/>
        <span className="topicbody">{this.props.body}</span>
      </li>
    );
  }
});
