userService = (function() {

    var findByEmail = function(email) {
            var deferred = $.Deferred();
            var user = null;
            var l = users.length;
            for (var i = 0; i < l; i++) {
                if (users[i].email == email) {
                    user = users[i];
                    break;
                }
            }
            deferred.resolve(user);
            return deferred.promise();
        },

        users = [
            {
                "id": 1,
                "firstName": "Jeffery",
                "lastName": "Aramini",
                "email": "jeff_aramini@ihealthsolutions.net",
                "password": "12345678",
                "pic": "imgs/jeff-pic.png"
            }, {
                "id": 2,
                "firstName": "Rui",
                "lastName": "Geng",
                "email": "gengr.r@gmail.com",
                "password": "12345678",
                "pic": "imgs/jeff-pic.png"
            }
        ];

    return {findByEmail: findByEmail};
}());
