var React = require('react');
var Post = require('./Post.jsx');

module.exports = React.createClass({
  render: function() {
    var posts = this.props.data.map(function(post) {
      return (
        <Post key={post.id} title={post.title} body={post.body} author={post.user.handle} />
      );
    });

    return (
      <ul className="postlist">
        {posts}
      </ul>
    );
  }
});
