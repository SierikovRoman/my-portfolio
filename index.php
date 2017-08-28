<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Portfolio</title>
	<!-- <base href="/"> -->

	<link rel="stylesheet" type="text/css" href="app/libs/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="app/libs/slick-1.6.0/slick/slick.css">
	<link rel="stylesheet" type="text/css" href="app/libs/slick-1.6.0/slick/slick-theme.css">
	<link rel="stylesheet" type="text/css" href="app/libs/sweetalert2/dist/sweetalert2.min.css">
	<link rel="stylesheet" type="text/css" href="app/css/style.css">
	<link rel="stylesheet" type="text/css" href="app/css/animate.css">
	<link rel="stylesheet" type="text/css" href="app/libs/Hover-master/css/hover-min.css">

	<script src="app/libs/jquery/dist/jquery.min.js"></script>
	<script src="app/js/script.js"></script>

</head>
<body ng-app="MyApp">
<div class="preloader hide">
	<img src="app/images/waller.jpg" class="myimg">
	<div class="col-xs-12 start-btn" align="center" ng-controller="LoaderController">
		<button class="start" ng-click="show()">JUST TOUCH ME</button>
		<h3 class="description">Be patient - we'll opened soon ;)</h3>
	</div>
</div>	
	<style type="text/css">
		.preloader {
		    position: absolute;
		    height: 100%;
		    width: 100%;
		    overflow: hidden;
		}
		.myimg {
		    height: inherit;
		    filter: blur(0.5px);
		}
		.start-btn{
			position: absolute;
			top: 49%;
		}
		.start{
			background-color: transparent;
			color: rgba(255, 255, 255, 0.9);
			text-shadow: 2px 2px 5px rgba(0,0,0,0.9);
			font-family: Roboto Light;
			font-size: 28px;
			border: 2px solid rgba(255, 255, 255, 0.9);
			box-shadow: 5px 5px 25px rgba(0,0,0,0.5);
			border-radius: 0px;
			padding: 0 5px 0 5px;
		}
		.start:focus{
			outline: none !important;
		}
		.description{
			display: none;
			font-family: Roboto Light;
			font-size: 16px;
			color: rgba(255, 255, 255, 0.9);
			text-shadow: 2px 2px 5px rgba(0,0,0,0.9);
		}
	</style>
	<script>
		$(document).ready(function(){

		$('.start').hover(
			function(){
				$(this).addClass('animated pulse');
			},
			function(){
				$(this).removeClass('animated pulse');
			}
		)
		});
	</script>
</div>

<div class="container-fluid cf " ng-controller="MainController">

	<ng-include src="'app/templates/top_block.html'"></ng-include>

	
	<ng-include src="'app/templates/nav-menu.html'"></ng-include>
	<div class="container">
		<ng-view></ng-view>
	</div>
	
	<ng-include src="'app/templates/emailUsModal.html'"></ng-include>
	<ng-include src="'app/templates/footer.html'"></ng-include>

<button class="top"></button>
</div>

<!-- <button class="top"></button> -->

<script src="app/libs/slick-1.6.0/slick/slick.min.js"></script>  
<script src="app/libs/angular/angular.js"></script>
<script src="app/libs/angular/angular-route.min.js"></script>
<script src="app/libs/bootstrap/dist/js/bootstrap.min.js" async></script>
<script src="app/libs/sweetalert2/dist/sweetalert2.min.js" async></script>
<script src="app/libs/angular/ui-bootstrap-tpls-0.12.0.min.js" async></script>


<script src="app/js/app.js"></script>


	<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
</body>
</html>







