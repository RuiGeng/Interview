var HeaderImg = React.createClass({
    render: function() {
        return(
            <div className = "headerimg" >
              <img src = {this.props.url} />
            </div>
        );
    }
});

var EmailInput = React.createClass({
    getInitialState: function() {
        return {
            userEmail: ""
        };
    },

    getUserEmail: function(event) {
        var email = event.target.value;
        this.setState({
            userEmail: email
        });
        this.props.searchUser(email);
    },

    render: function() {
        return(
          <div className = "emailinput" >
            <input type = "email" placeholder="EMAIL" onBlur={this.getUserEmail} />
          </div>
        );
    }
});

var PasswordInput = React.createClass({
    getInitialState: function() {
        return {
            password: ""
        };
    },

    getUserPassword: function(event) {
        var passwd = event.target.value;
        this.setState({
            password: passwd
        });
        this.props.getPassword(passwd);
    },

    render: function() {
        return(
            <div className = "passwordinput" >
              <input type = "password" placeholder="PASSWORD" onBlur={this.getUserPassword} />
            </div>
        );
    }
});

var NextButton = React.createClass({
    render: function() {
        return(
            <div className = "nextbutton" >
              <button type="button" onClick={this.props.validateUser}>{this.props.text}</button>
            </div>
        );
    }
});

var HelpLink = React.createClass({
    render: function() {
        return(
            <div className = "helplink" >
              <a href="#">{this.props.text}</a>
            </div>
        );
    }
});

var ApplicationListItem = React.createClass({
    render: function () {
        return (
          <div className = "headerimg" >
            <img src = {this.props.application.src} />
          </div>
        );
    }
});

var ApplicationList = React.createClass({
    render: function () {
        var items = this.props.applications.map(function (application) {
            return (
                <ApplicationListItem key={application.id} application={application} />
            );
        });
        return (
            <ul>
                {items}
            </ul>
        );
    }
});

var Footer = React.createClass({
    render: function() {
        return(
            <footer>
              <p>&copy; Scientific Technologies Corporation 2016</p>
            </footer>
        );
    }
});

var HomePage = React.createClass({
    componentDidMount: function() {
      document.title = this.props.title;
    },

    getInitialState: function() {
        return {
            user: [],
            userEmail: "",
            userPassword: ""
        }
    },

    searchUser: function(email) {
        this.props.service.findByEmail(email).done(function(result) {
            this.setState({
                userEmail: email,
                user: result,
            });
        }.bind(this));
    },

    getPassword: function(passwd) {
        this.setState({
            userPassword: passwd
        });
    },

    validateUser: function() {
        if(this.state.user.email === this.state.userEmail
           && this.state.user.password === this.state.userPassword) {
            alert("Okay");
            window.location.assign("#users/" + this.state.user.id);
        } else {
            alert("NG");
        };
    },

    render: function() {
        return(
            <div >
              <HeaderImg url = {url} />
              <EmailInput searchUser={this.searchUser} />
              <PasswordInput getPassword={this.getPassword} />
              <NextButton text="Next" validateUser={this.validateUser} />
              <HelpLink text="Need help?" />
              <Footer />
            </div>
        );
    }
});

var UserPage = React.createClass({
    componentDidMount: function() {
      document.title = this.props.title;
    },

    render: function() {
        return(
            <div>
                <HeaderImg url = {url} />
                <ApplicationList applications= {imgs} />
                <Footer />
            </div>
        );
    }
});

router.addRoute('', function() {
    ReactDOM.render(
        <HomePage title="Login" service={userService}/>,
        document.getElementById('container')
    );
});

router.addRoute('users/:id', function(id) {
    ReactDOM.render(
        <UserPage title="Dashboard" userId={id} service={userService}/>,
        document.getElementById('container')
    );
});
router.start();
