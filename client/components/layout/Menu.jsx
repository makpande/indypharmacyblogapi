var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

// module.exports = React.createClass({
//   render: function() {
//     return (
//
//       <div id="menulist">
//         <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
//         <ul>
//           <li><Link to="contact">Contact</Link></li>
//           <li><Link to="about">About</Link></li>
//           <li><Link to="posts">Pharmacyblog</Link></li>
//         </ul>
//       </div>
//     );
//  }
// });

module.exports = React.createClass({

  handleSignOutLink: function() {
   sessionStorage.setItem('jwt','');
   location = '/';
 },
  render: function() {
    if (this.props.signedIn) {
      var signingLink = <li><span onClick={this.handleSignOutLink}>Sign Out</span></li>;
    } else {
      var signingLink = <li><a href={this.props.origin + '/request_token'}>Sign In</a></li>;
    }
    return (
      <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
        <div id="menulist">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading">IndyPharmacy</span>
            <ul>
              <li><Link to="home">Home</Link></li>
              <li><Link to="posts">IndyPharmacyBlog</Link></li>
              <li><Link to="contact">Contact Us</Link></li>
              <li><Link to="about">About</Link></li>
              {signingLink}
          </ul>
          </div>
        </div>
      </div>
    );
  }
});
