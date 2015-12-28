var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var title = this.refs.title.getDOMNode().value.trim();
    if (!title) {return;}
    if (this.props.signedIn) {
      this.props.writePostToAPI(JSON.stringify({post: {title: title}}));
      this.refs.title.getDOMNode().value = '';
      this.refs.title.getDOMNode().blur();
    } else {
      alert('Please sign in to post!');
    }
  },
  render: function() {
    return (
      <form className="post-form pure-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="post title " ref="title" />
        <input type="text" placeholder="post description " ref="body" />
        <button type="submit" className="pure-button pure-button-primary">Post</button>
      </form>
    );
  }
});
