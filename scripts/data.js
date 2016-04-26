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

  findById = function(id) {
    var deferred = $.Deferred();
    var user = null;
    var l = users.length;
    for (var i = 0; i < l; i++) {
     if (users[i].id == id) {
      user = users[i];
      break;
     }
    }
    deferred.resolve(user);
    return deferred.promise();
   },

   users = [{
    "id": 1,
    "firstName": "Jeffery",
    "lastName": "Aramini",
    "email": "jeff_aramini@ihealthsolutions.net",
    "password": "12345678",
    "pic": "imgs/jeff-pic.png",
    "icon": "imgs/nav/jeff-copy.png"
   }, {
    "id": 2,
    "firstName": "Rui",
    "lastName": "Geng",
    "email": "gengr.r@gmail.com",
    "password": "12345678",
    "pic": "imgs/jeff-pic.png",
    "icon": "imgs/nav/jeff-copy.png"
   }];

 return {
  findById: findById,
  findByEmail: findByEmail
 };
}());

var url = 'imgs/washington-department-of-health-2151214158-std.png';

var imgs = [{
 "id": 1,
 "src": "imgs/app/iweb.png"
}, {
 "id": 2,
 "src": "imgs/app/phchub.png"
}, {
 "id": 3,
 "src": "imgs/app/immucast.png"
}, {
 "id": 4,
 "src": "imgs/app/sentinel.png"
}, {
 "id": 5,
 "src": "imgs/app/smart.png"
}, {
 "id": 6,
 "src": "imgs/app/immslink.png"
}, {
 "id": 7,
 "src": "imgs/app/myir_tm.png"
}, {
 "id": 8,
 "src": "imgs/app/oms.png"
}, {
 "id": 9,
 "src": "imgs/app/voms_web.png"
}];
