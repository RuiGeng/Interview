function saveUser(user) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("id", user.id);
        localStorage.setItem("firstName", user.firstName);
        localStorage.setItem("lastName", user.lastName);
        localStorage.setItem("emailAddress", user.email);
        localStorage.setItem("password", user.password);
        localStorage.setItem("pic", user.pic);
        localStorage.setItem("icon", user.icon);
    } else {
        // Sorry! No Web Storage support..
    }
};

function getUser(user) {
    if (typeof(Storage) !== "undefined") {
        user.id = localStorage.getItem("id");
        user.firstName = localStorage.getItem("firstName");
        user.lastName = localStorage.getItem("lastName");
        user.email = localStorage.getItem("emailAddress");
        user.password = localStorage.getItem("password");
        user.pic = localStorage.getItem("pic");
        user.icon = localStorage.getItem("icon");
    } else {
        user.id = "";
        user.firstName = "";
        user.lastName = "";
        user.email = "";
        user.password = "";
        user.pic = "";
        user.icon = "";
    }
};

function removeSakeLogincomponent(e){
  var target = e.target;
  var grandparent = target.parentElement.parentElement;
  grandparent.classList.remove("invalid");
}

function sakeLogincomponent(e){
  var target = event.target;
  var grandparent = target.parentElement.parentElement;
  grandparent.classList.add("invalid");
}
