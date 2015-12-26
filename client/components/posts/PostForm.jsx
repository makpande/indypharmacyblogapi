var React = require('react');

module.exports = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var content = this.refs.content.getDOMNode().value.trim();
    if (!content) {return;}
    if (this.props.signedIn) {
      this.props.writePostToAPI(JSON.stringify({post: {content: content}}));
      this.refs.content.getDOMNode().value = '';
      this.refs.content.getDOMNode().blur();
    } else {
      alert('Please sign in to post!');
    }
  },
  render: function() {
    return (
      <form className="post-form pure-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="post here " ref="content" />
        <button type="submit" className="pure-button pure-button-primary">Post</button>
      </form>
    );
  }
});
