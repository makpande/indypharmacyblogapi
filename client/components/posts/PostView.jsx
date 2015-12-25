var React = require('react');
var PostsList = require('./PostList.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readPostsFromAPI();
  },
  readPostsFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/posts', function(posts) {
      this.setState({data: posts});
    }.bind(this));
  },

  render: function() {
    return (
      <div className="postview">
        <PostsList data={this.state.data} />
      </div>
    );
  }
});
