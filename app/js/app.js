// Application module
(function () {

	var app = angular.module('MyApp', ['ngRoute', 'ui.bootstrap']);
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

		.when('/Contacts', {
			templateUrl: '/app/templates/contacts.html',
			controller: 'ContactsController'
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

	app.controller("LoaderController",['$scope', function($scope){

		$scope.show = function(){
			$('.description').show('slow');	
		};

	}]);

	app.controller("MainController",['$scope','$http', function($scope,$http){

	getStatistic();
	function getStatistic(){
		$http.get('../../app/php/statistic.php').success(function(data){
				if(data != null){
					console.log(data);
				};
			});
	};	

	setToLocalStorage();
		function setToLocalStorage(){

			$scope.localVideo = localStorage.getItem('video');
			$scope.localSet = localStorage.getItem('set');
			$scope.localPhoto = localStorage.getItem('photo');

			if ($scope.localVideo == null || $scope.localSet == null || $scope.localPhoto == null) {

				/* set video data to local storage */
				$http.post('../../app/php/get_video.php').success(function(data){
					if(data != null){
						$scope.serv_video = data;
						localStorage.setItem('video', JSON.stringify(data));
					};
				});

				/* set photo set data to local storage */
				$http.post('../../app/php/get_set.php').success(function(data){
					if(data != null){
						$scope.set_video = data;
						localStorage.setItem('set', JSON.stringify(data));
					};
				});

				/* set photos data to local storage */
				$http.post('../../app/php/get_photo.php').success(function(data){
					if(data != null){
						$scope.photo_video = data;
						localStorage.setItem('photo', JSON.stringify(data));
					};
				});

				console.log("local was null");
			} else{
				console.log("local is full");
			}

		};

	}]);

	app.controller("MailUsController",['$scope','$http', function($scope,$http){

	$scope.sendEmail = function(info){
		var reName = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/;
		var	reEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		$scope.name = info.userName;
		$scope.email = info.userEmail;

		var validName = reName.test($scope.name);
		var validEmail = reEmail.test($scope.email);

		if(!validName){
			$('.err-name').removeClass('hide');
			// console.log("not valid name");
		}else if(!validEmail){
			$('.err-email').removeClass('hide');
			// console.log("not valid email");
		}else{
			$('.err-name').addClass('hide');
			$('.err-email').addClass('hide');
			$http.post('../../app/php/sendEmail.php',{

			"name":info.userName,
			"email":info.userEmail,
			"text":info.userText

			});
			$('#emailUs').modal('hide');
			swal({
		          title: 'Thanks for email us!',
		          text: 'We will reply you soon as possible.',
		          type: 'success',
		          timer: 3000
		        });
			};
		};


	}]);

	app.controller("NavigationController",['$scope','$http', function($scope,$http){

	$scope.openNavigation = function(){
		document.getElementById("sidenav-mobile").style.width = "320px";
		console.log("open");
	};

	$scope.closeNavigation = function(){
		document.getElementById("sidenav-mobile").style.width = "0";
		console.log("close");
	};

	}]);

	app.controller("VideoController",['$scope','$http', function($scope,$http){

		getVideo();
		function getVideo(){

			/* get data from Local Storage */
			$scope.getVideoJson = localStorage.getItem('video');
			$scope.doneVideo = JSON.parse($scope.getVideoJson);

			if ($scope.doneVideo != null){
				$scope.video = $scope.doneVideo;
				// console.log("local");
			} else{
				$http.post('../../app/php/get_video.php').success(function(data){
					if(data != null){
						$scope.video = data;
						// console.log("server");
					};
				});
			}
		};

	}]);

	app.controller("PhotoController",['$scope','$http','$filter','$modal', function($scope,$http,$filter,$modal){
		
		getSet();
		function getSet(){

			/* get data from Local Storage */
			$scope.getSetJson = localStorage.getItem('set');
			$scope.doneSet = JSON.parse($scope.getSetJson);
			// console.log($scope.doneSet);

			if ($scope.doneSet != null){
				$scope.set = $scope.doneSet;
				// console.log("local");
			} else{
				$http.post('../../app/php/get_set.php').success(function(data){
					if(data != null){
						$scope.set = data;
						// console.log("server");
					};
				});
			}
		};

		$scope.checkItem = "";

		$scope.getPhoto = function (set) {

			$scope.setName = set['name'];
			$scope.setId = set['id'];
			$scope.photo = [];
	        $scope.checkItem = "yes";
	        $modal.open({
	            templateUrl: '/app/templates/sliderModal.html',
	            controller: 'PhotoController',
	            scope: $scope
	        })

	        /* get data from Local Storage */
	        $scope.getPhotoJson = localStorage.getItem('photo');
			$scope.donePhoto = JSON.parse($scope.getPhotoJson);

			if ($scope.donePhoto != null){
				for (var i = 0, a=0; i < $scope.donePhoto.length; i++, a++) {
						if($scope.donePhoto[i].set===$scope.setId){
							$scope.photo[a] = $scope.donePhoto[i].url;
						}else{
								a--;
						};
					};
				console.log("local");
			} else{
				$http.get('../../app/php/results_photos.json').success(function(data){
					for (var i = 0, a=0; i < data.length; i++, a++) {
						if(data[i].set===$scope.setId){
							$scope.photo[a] = data[i].url;
						}else{
								a--;
						};
					};
				});
				console.log("server");
			}
    	};


	}]);

	app.controller("ContactsController",['$scope','$http', function($scope,$http){

	}]);

	app.controller("OrganizationController",['$scope','$http', function($scope,$http){


	}]);

})();	
























