var React = require('react');
var PostsList = require('./PostList.jsx');
var PostsForm = require('./PostForm.jsx');

module.exports = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.readPostFromAPI();
  },
  readPostFromAPI: function() {
    this.props.readFromAPI(this.props.origin + '/posts', function(posts) {
      this.setState({data: posts});
    }.bind(this));
  },
  writePostToAPI: function(data) {
    this.props.writeToAPI('post', this.props.origin + '/posts', data, function(posts) {
      var posts = this.state.data;
      posts.unshift(posts);
      this.setState({data: posts});
    }.bind(this));
  },

  render: function() {
    return (
      <div className="postview">
        <h1>Needs to push into main body</h1>
        <PostsForm writePostToAPI={this.writePostToAPI} signedIn={this.props.signedIn} />
        <PostsList data={this.state.data} />
      </div>
    );
  }
});
