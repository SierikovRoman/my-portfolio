// Application module
(function () {

	var app = angular.module('MyApp', ['ngRoute', 'ng.group']);
	var $window;
	app.config(function ($locationProvider, $routeProvider, $windowProvider, $sceDelegateProvider) {
		$window = $windowProvider.$get();
   		// console.log($window);
		$locationProvider.html5Mode(false);
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
		
		.when('/Coming_soon', {
			templateUrl: '/app/templates/coming_soon.html',
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

		// getSet();
		// function getSet(){
		// 	$http.post('../../app/php/get_set.php').success(function(data){
		// 		if(data != null){
		// 			$scope.set = data;
		// 			$scope.length = $scope.set.length;
		// 			console.log($scope.length);

		// 		};
		// 	});
		// };
		

		getSet();
		function getSet(){
			$http.get('../../app/php/results.json').success(function(data){
				if(data != null){
					$scope.set = data;
					// $scope.length = $scope.set.length;
					console.log($scope.set);
					// console.log($scope.length);

				};
			});
		};

		$scope.getSetId = function(id){
			$scope.setId = id;
			console.log(id);
		}
	

		// getPhoto();
		// function getPhoto(){
		// 	$http.post('../../app/php/get_photo.php').success(function(data){
		// 		if(data != null){
		// 			$scope.photo = data;
		// 			console.log($scope.photo);
		// 		};
		// 	});
		// };

	}]);


	app.controller("OrganizationController",['$scope','$http', function($scope,$http){


	}]);


})();	
























