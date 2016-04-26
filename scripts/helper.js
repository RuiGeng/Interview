function saveUser(user) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("firstName", user.firstName);
        localStorage.setItem("lastName", user.lastName);
        localStorage.setItem("emailAddress", user.email);
        localStorage.setItem("pic", user.pic);
    } else {
        // Sorry! No Web Storage support..
    }
}

function getUser(user) {
    if (typeof(Storage) !== "undefined") {
        user.firstName = localStorage.getItem("firstName");
        user.lastName = localStorage.getItem("lastName");
        user.email = localStorage.getItem("emailAddress");
        user.pic = localStorage.getItem("pic");
    } else {
        return false;
    }
    return true;
}
