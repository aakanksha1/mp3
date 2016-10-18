var app = angular.module('mp3',['ngRoute']);

app.config(function ($routeProvider) {

	$routeProvider
		.when('/gallery', {	
			templateUrl : 'partials/gallery.html',
			controller: 'galleryController'
		})
		.when('/list/:rank', {	
			templateUrl : 'partials/details.html',
			controller: 'detailsController'
		})
		.when('/list/', {
			templateUrl : 'partials/list.html',
			controller: 'listController'
		})
		.otherwise({
			redirectTo: '/list'
		});

})