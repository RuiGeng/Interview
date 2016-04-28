/* save user information to local Storage space */
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

/* get user information from local Storage space */
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

/* shake animation by element fuction */
shakeElement = function(element) {
    var x = -1;
    var marginLeft = element.getBoundingClientRect().left;
    interval = setInterval(function() {
        if (x == -1) {
            element.style.marginLeft="auto";
        } else {
            switch (x) {
                case 0:
                    element.style.marginLeft = (marginLeft - 10) + "px";
                    break;
                case 1:
                    element.style.marginLeft = (marginLeft + 20) + "px";
                    break;
                case 2:
                    element.style.marginLeft = (marginLeft - 10) + "px";
                    break;
                case 3:
                    element.style.marginLeft = (marginLeft + 20) + "px";
                    break;
                case 4:
                    element.style.marginLeft = (marginLeft - 10) + "px";
                    break;
                default:
                    element.style.marginLeft="auto";
                    clearInterval(interval);
            }
        }
        x++;
    }, 50);
    element.style.marginLeft="auto";
}
