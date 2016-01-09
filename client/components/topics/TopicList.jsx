var React = require('react');
var Router = require('react-router');
var Topic = require('./Topic.jsx');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {

    var topics = this.props.data.map(function(topic) {
      return (
        // <Link to={topic.title} key={topic.id} body={topic.body}></Link>
        <Topic title={topic.title} key={topic.id} body={topic.body} />
      );
    });

    return (
      <div>
        <h1>From Topic View</h1>
      <ul className="topiclist">
        {topics}
      </ul>
    </div>
    );
  }
});
