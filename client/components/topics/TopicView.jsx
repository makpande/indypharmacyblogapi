var React = require('react');
var TopicsList = require('./TopicList.jsx');


module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readTopicFromAPI();
  },
  readTopicFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/topics', function(topics) {
      this.setState({data: topics});
    }.bind(this));
  },

  writeTopicToAPI: function(data) {
    this.props.writeToAPI('topic', this.props.origin + '/topics', data, function(topics) {
      var topics = this.state.data;
      topics.unshift(topics);
      this.setState({data: topics});
    }.bind(this));
  },


  render: function() {
    return (
      <div className="topicview">
        <h1>Topics</h1>
        <TopicsList data={this.state.data} />
      </div>
    );
  }
  });
