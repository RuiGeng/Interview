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

var url = 'imgs/washington-department-of-health-2151214158-std.png';

var imgs = [
  {"id": 1, "src": "imgs/group-1.png"},
  {"id": 2, "src": "imgs/page-1.png"},
  {"id": 3, "src": "imgs/group-2.png"},
  {"id": 4, "src": "imgs/page-2.png"},
  {"id": 5, "src": "imgs/group-3.png"},
  {"id": 6, "src": "imgs/page-3.png"},
  {"id": 7, "src": "imgs/group-4.png"},
  {"id": 8, "src": "imgs/page-4.png"},
  {"id": 9, "src": "imgs/group-5.png"}
];
