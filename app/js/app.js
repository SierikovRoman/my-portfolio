// Application module
(function () {

	var app = angular.module('MyApp', ['ngRoute']);
	var $window;
	app.config(function ($locationProvider, $routeProvider, $windowProvider, $sceDelegateProvider) {
		$window = $windowProvider.$get();
   		// console.log($window);
		$locationProvider.html5Mode(true);
		$routeProvider

		.when('/', {
			templateUrl: '/app/templates/video.html',
			controller: 'VideoController'
		})

		.when('/Photo', {
			templateUrl: '/app/templates/photo.html',
			controller: 'PhotoController'
		})

		.when('/Video', {
			templateUrl: '/app/templates/video.html',
			controller: 'VideoController'
		})
		
		.when('/Organization', {
			templateUrl: '/app/templates/organization.html',
			controller: 'OrganizationController'
		});

		// .otherwise({ redirectTo: '../../index.php' });
		
		/* For security links from Vimeo */

		$sceDelegateProvider.resourceUrlWhitelist([
		    // Allow same origin resource loads.
		    'self',
		    // Allow loading from outer templates domain.
		    'https://player.vimeo.com/video/**'
		]);

	});

	app.controller("MainController",['$scope','$http', function($scope,$http){
   		
	}]);


	app.controller("VideoController",['$scope','$http', function($scope,$http){

		getVideo();
		function getVideo(){
			$http.post('../../app/php/get_video.php').success(function(data){
				if(data != null){
					$scope.video = data;
					console.log($scope.video);
				};
			});
		};

	}]);

	app.controller("PhotoController",['$scope','$http', function($scope,$http){


	}]);

	app.controller("OrganizationController",['$scope','$http', function($scope,$http){


	}]);


})();	
























