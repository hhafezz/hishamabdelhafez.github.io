
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

app.config([ '$routeProvider', function($routeProvider) {
  $routeProvider
   .when('/publications', {
    templateUrl: 'app/views/publications.html'
  })
  .when('/home', {
    templateUrl: 'app/views/home.html'
  })
  .when('/about', {
    templateUrl: 'app/views/about.html'
    }).otherwise({
    redirectTo : '/home'
  });
}]);

angular.bootstrap(document, ['PersonalApp']);
