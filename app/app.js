app = angular.module('sportsStars', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/", {
		templateUrl: "app/partials/players-list.html", 
		controller: "indexController"
	})
	.when("/player/view/:id", {
		templateUrl: "app/partials/player.html", 
		controller: "playerController",
	}).when("/player/edit/:id", {
		templateUrl: "app/partials/form.html", 
		controller: "formController"
	}).when("/player/add", {
		templateUrl: "app/partials/form.html", 
		controller: "formController"
	}).otherwise({redirectTo: '/'});
}]);