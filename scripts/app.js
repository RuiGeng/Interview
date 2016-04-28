/* page main title log component */
var HeaderLogo = React.createClass({
    render: function() {
        return(
            <div className = "title row" >
              <img className = "title__logo title--center" src = {this.props.url} />
            </div>
        );
    }
});

/* user email input component */
var EmailInput = React.createClass({
    getInitialState: function() {
        return {
            userEmail: ""
        };
    },
    /* use searchUser function to get user information when user input the email address */
    getUserEmail: function(event) {
        var email = event.target.value;
        this.setState({
            userEmail: email
        });
        this.props.searchUser(email);
    },

    render: function() {
        return(
          <div className = "row" >
            <input id="emailinput" type = "email" className = "mainlogin mainlogin__emailinput main--center" placeholder="EMAIL" onBlur={this.getUserEmail} />
          </div>
        );
    }
});

/* user password input component */
var PasswordInput = React.createClass({
    getInitialState: function() {
        return {
            password: ""
        };
    },

/* set user password to state after user input the password */
    getUserPassword: function(event) {
        var passwd = event.target.value;
        this.setState({
            password: passwd
        });
        this.props.getPassword(passwd);
    },

    render: function() {
        return(
            <div className = "row" >
              <input id="passwordinput" type = "password" className = "mainlogin mainlogin__passwdinput main--center" placeholder="PASSWORD" onBlur={this.getUserPassword} />
            </div>
        );
    }
});

/* next or sign in button component */
var EnterButton = React.createClass({
    render: function() {
        return(
            <div className = "row" >
              <button type="button" className = "mainlogin mainlogin__nextbtn main--center" onClick={this.props.validateUser}>{this.props.text}</button>
            </div>
        );
    }
});

/* Helper link component */
var HelpLink = React.createClass({
    render: function() {
        return(
            <div className = "row mainlogin__helplink" >
              <a href="#">{this.props.text}</a>
            </div>
        );
    }
});

/* user appliction list items component */
var ApplicationListItem = React.createClass({
    render: function () {
        return (
          <div className = "col-lg-4 col-md-4 col-sm-4 col-xs-6 application__item" >
            <a href="#"><img className ="application_logo" src = {this.props.application.src} /></a>
          </div>
        );
    }
});

/* user application list container component */
var ApplicationList = React.createClass({
    render: function () {
        var items = this.props.applications.map(function (application) {
            return (
                <ApplicationListItem key={application.id} application={application} />
            );
        });
        return (
          <div className="applications container">
            <div className="row">
              {items}
            </div>
          </div>
        );
    }
});

/* footer component */
var Footer = React.createClass({
    render: function() {
        return(
            <footer className = "footer footer--font footer--center row">
              <p className = "footer__copyright">&copy; Scientific Technologies Corporation 2016</p>
            </footer>
        );
    }
});

/* main page component */
var HomePage = React.createClass({
    getInitialState: function() {
        return {
            user: { id: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    pic: "",
                    icon: ""},
            userEmail: "",
            userPassword: ""
        };
    },

/* before page mount get user from local storage */
    componentWillMount: function() {
      getUser(this.state.user);
    },

  /* before page mount get user from local storage */
  /* set user information which get from the local storage to the state */
    componentDidMount: function() {
      getUser(this.state.user);
      document.title = this.props.title;
      this.setState({
        userEmail: this.state.user.email
      });
    },

/* searchUser function to get userinformation from server */
/* in this program use data.js instead */
    searchUser: function(email) {
        this.props.service.findByEmail(email).done(function(result) {
            this.setState({
                userEmail: email,
                user: result,
            });
        }.bind(this));
    },

/* save the password to the state */
    getPassword: function(passwd) {
        this.setState({
            userPassword: passwd
        });
    },

/* validate user after user click next or sign in button */
/* if successful save the information to local storage */
/* if can not find user information from server then shake user email input */
/* if the password not match email then shake password input */
/* in this program use data.js instead server */
    validateUser: function(event) {
      if(this.state.user != null && this.state.user.email != null && this.state.user.firstName != null && this.state.user.lastName != null){
        if(this.state.user.email === this.state.userEmail
           && this.state.user.password === this.state.userPassword) {
             saveUser(this.state.user);
             window.location.assign("#user/" + this.state.user.id);
           } else {
             var target = document.getElementById('passwordinput');
             shakeElement(target);
           };
      }
      else{
        var target = document.getElementById('emailinput');
        shakeElement(target);
      }
    },

    render: function() {
        var loginCondition;
        var buttonText;
        if( this.state.user != null && this.state.user.email != null && this.state.user.firstName != null && this.state.user.lastName != null){
          loginCondition = <UserInfo user={this.state.user}/>
          buttonText = "SIGN IN";
        }else{
          loginCondition = <EmailInput searchUser={this.searchUser} />
          buttonText = "NEXT";
        }

        return(
            <div >
              <HeaderLogo url = {url} />
              <div className="main main--font row">
                {loginCondition}
                <PasswordInput getPassword={this.getPassword} />
                <EnterButton text={buttonText} validateUser={this.validateUser} />
                <HelpLink text="Need help?" />
              </div>
              <Footer />
            </div>
        );
    }
});

/* user information component */
var UserInfo= React.createClass({
  render: function(){
    return(
          <div className="main userinfo userinfo--font row">
            <img className = "userinfo_logo main--center" src={this.props.user.pic} />
            <p className = "userinfor__name">{this.props.user.firstName} {this.props.user.lastName}</p>
            <p className = "userinfor__email">{this.props.user.email}</p>
          </div>
    );
  }
});

/* user information page */
var UserPage = React.createClass({
    getInitialState: function() {
        return {
          user: { id: "",
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  pic: "",
                  icon: ""},
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
                <HeaderLogo url = {url} />
                <ApplicationList applications= {imgs} />
                <Footer />
            </div>
        );
    }
});

/* user nav component */
var NavBar = React.createClass({
    render: function(){
      return(
        <nav className="navbar navbar-fixed-top menu">
          <ul className="nav navbar-nav navbar-right" >
            <li><a href="#"><img className="menu__link" alt="help" src="imgs/nav/help.png" /></a></li>
            <li><a href="#"><img className="menu__link" alt="notifications" src="imgs/nav/notifications.png" /></a></li>
            <li><a href="#"><img className="menu__link" alt="apps" src="imgs/nav/apps.png" /></a></li>
            <li><a href="#"><img className="menu__logo" alt="icon" src={this.props.user.icon} /></a></li>
          </ul>
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
