var HeaderImg = React.createClass({
    render: function() {
        return (
          <div className = "headerimg" >
            <img src = {this.props.url} />
          </div>
        );
    }
});

var EmailInput = React.createClass({
    getInitialState: function() {
        return {
            email: ""
        };
    },

    searchHandler: function(event){
      var email = event.target.value;
      this.setState({
        email: email
      });
    },

    render: function() {
        return (
          <div className = "emailinput" >
            <input type = "email" placeholder="EMAIL" />
          </div>
        );
    }
});

var PasswordInput = React.createClass({
    render: function() {
        return (
          <div className = "passwordinput" >
            <input type = "password" placeholder="PASSWORD" />
          </div>
        );
      }
});

var NextButton = React.createClass({
    render: function() {
        return (
          <div className = "nextbutton" >
            <button type="button">{this.props.text}</button>
          </div>
        );
      }
});

var HelpLink = React.createClass({
    render: function() {
        return (
          <div className = "helplink" >
            <a href="#">{this.props.text}</a>
          </div>
        );
      }
});

var Footer = React.createClass({
    render: function() {
        return (
          <footer>
            <p>&copy; Scientific Technologies Corporation 2016</p>
          </footer>
        );
      }
});

var HomePage = React.createClass({
    render: function() {
        var url = 'imgs/washington-department-of-health-2151214158-std.png';

        return (
          <div >
            <HeaderImg url = {url}/>
            <EmailInput />
            <PasswordInput />
            <NextButton text="Next" />
            <HelpLink text="Need help?" />
            <Footer />
          </div>
        );
    }
});

ReactDOM.render(
  <HomePage /> ,
  document.getElementById('container')
);
