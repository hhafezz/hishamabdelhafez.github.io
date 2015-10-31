
var app = angular.module('PersonalApp', ['ngRoute']);

// app.controller('PublicationsCtrl', function($scope) {
//   $scope.hello = "HELLOW! publications";
// });
//
// app.controller('AboutCtrl', function($scope) {
//   $scope.hello = "HELLOW! about";
// });
//
// app.controller('HomeCtrl', function($scope) {
//   $scope.hello = "HELLOW! Home";
// });

// app.directive('bsActiveLink', ['$location', function($location) {
//   return {
//     restrict: '*', //use as attribute
//     replace: false,
//     link: function(scope, elem) {
//       //after the route has changed
//       scope.$on("$routeChangeSuccess", function() {
//         var hrefs = ['/#' + $location.path(),
//           '#' + $location.path(), //html5: false
//           $location.path()
//         ]; //html5: true
//         angular.forEach(elem.find('a'), function(a) {
//           a = angular.element(a);
//           if (-1 !== hrefs.indexOf(a.attr('href'))) {
//             a.parent().addClass('active');
//           } else {
//             a.parent().removeClass('active');
//           };
//         });
//       });
//     }
//   }
// }]);
//

app.config([ '$routeProvider', function($routeProvider) {
  $routeProvider
   .when('/publications', {
    templateUrl: 'app/views/publications.html'
  })
  .when('/home', {
    templateUrl: 'app/views/home.html'
  })
  .when('/contactme', {
    templateUrl: 'app/views/contactme.html'
    })
    .when('/resume', {
      templateUrl: 'app/views/resume.html'
      })
  .when('/bookshelf', {
    templateUrl: 'app/views/bookshelf.html'
    })
  .when('/blog', {
    templateUrl: 'app/views/blog.html'
    }).otherwise({
    redirectTo : '/home'
  });
}]);

angular.bootstrap(document, ['PersonalApp']);
