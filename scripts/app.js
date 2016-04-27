var HeaderImg = React.createClass({
    render: function() {
        return(
            <div className = "headerimg row" >
              <img className = "center-block" src = {this.props.url} />
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
          <div className = "emailinput row" >
            <input type = "email" className = "center-block" placeholder="EMAIL" onBlur={this.getUserEmail} />
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
            <div className = "passwordinput row" >
              <input type = "password" className = "center-block" placeholder="PASSWORD" onBlur={this.getUserPassword} />
            </div>
        );
    }
});

var NextButton = React.createClass({
    render: function() {
        return(
            <div className = "nextbutton row" >
              <button type="button" className = "center-block" onClick={this.props.validateUser}>{this.props.text}</button>
            </div>
        );
    }
});

var HelpLink = React.createClass({
    render: function() {
        return(
            <div className = "helplink row text-center" >
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
            <footer className = "row text-center">
              <p>&copy; Scientific Technologies Corporation 2016</p>
            </footer>
        );
    }
});

var HomePage = React.createClass({
    getInitialState: function() {
        return {
            user: {firstName: "", lastName: "", email: "", pic: ""},
            userEmail: "",
            userPassword: ""
        };
    },

    componentWillMount: function() {
      getUser(this.state.user);
      console.log("componentWillMount");
      console.log(this.state.user.firstName);
    },

    componentDidMount: function() {
      getUser(this.state.user);
      console.log("componentDidMount");
      console.log(this.state.user.firstName);
      document.title = this.props.title;
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

    validateUser: function(event) {
      if(this.state.user.email != null && this.state.user.firstName != null && this.state.user.lastName != null){
        if(this.state.user.email === this.state.userEmail
           && this.state.user.password === this.state.userPassword) {
             saveUser(this.state.user);
             window.location.assign("#user/" + this.state.user.id);
           } else {
           };
      }
      else{
      }
    },

    render: function() {
        var loginCondition;
        if( this.state.user.email != null && this.state.user.firstName != null && this.state.user.lastName != null){
          loginCondition = <UserInfo user={this.state.user}/>
        }else{
          loginCondition = <EmailInput searchUser={this.searchUser} />
        }

        return(
            <div >
              <HeaderImg url = {url} />
              <div className={"logincomponent "+ this.state.shake}>
                {loginCondition}
                <PasswordInput getPassword={this.getPassword} />
                <NextButton text="NEXT" validateUser={this.validateUser} />
              </div>
              <HelpLink text="Need help?" />
              <Footer />
            </div>
        );
    }
});

var UserInfo= React.createClass({
  render: function(){
    return(
          <div>
            <img src={this.props.user.pic} />
            <p>{this.props.user.firstName} {this.props.user.lastName}</p>
            <p>{this.props.user.email}</p>
          </div>
    );
  }
});

var UserPage = React.createClass({
    getInitialState: function() {
        return {
            user: []
        }
    },

    componentDidMount: function() {
      document.title = this.props.title;

      this.props.service.findById(this.props.userId).done(function(result) {
        this.setState({user: result});
      }.bind(this));
    },

    render: function() {
        return(
            <div>
                <NavBar user={this.state.user}/>
                <HeaderImg url = {url} />
                <ApplicationList applications= {imgs} />
                <Footer />
            </div>
        );
    }
});

var NavBar = React.createClass({
    render: function(){
      return(
        <nav>
          <a href="#"><img alt="help" src="imgs/nav/help.png" /></a>
          <a href="#"><img alt="notifications" src="imgs/nav/notifications.png" /></a>
          <a href="#"><img alt="apps" src="imgs/nav/apps.png" /></a>
          <a href="#"><img alt="icon" src={this.props.user.icon} /></a>
        </nav>
      );
    }
});


router.addRoute('', function() {
    ReactDOM.render(
        <HomePage title="Login" service={userService}/>,
        document.getElementById('container')
    );
});

router.addRoute('user/:id', function(id) {
    ReactDOM.render(
        <UserPage title="Dashboard" userId={id} service={userService}/>,
        document.getElementById('container')
    );
});
router.start();
