// Handle web flow logic
  
/* Initialize AngularJS */
var app = angular.module('app', ['ngRoute', 'ngAnimate']);

/* Configure routing for anchor references */
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html'
    }).
    when('/bio', {
      templateUrl: 'partials/bio.html'
    }).
    when('/merch', {
      templateUrl: 'partials/merch.html'
    }).
    when('/videos', {
      templateUrl: 'partials/videos.html'
    }).
    when('/shows', {
      templateUrl: 'partials/shows.html'
    }).
    when('/contact', {
      templateUrl: 'partials/contact.html'
    }).
    when('/404', {
      templateUrl: 'partials/404.html'
    }).
    otherwise({
      redirectTo: '/404'
    });
}]);

console.log("Loaded AngularJS " + angular.version.full);

/* Initalize Bootstrap*/
console.log("Loaded Bootstrap 3.3.4");
  