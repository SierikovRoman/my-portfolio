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



</head>
<body ng-app="MyApp">

<div class="container-fluid cf" ng-controller="MainController">

	<ng-include src="'app/templates/top_block.html'"></ng-include>

	<div class="container">
	<ng-include src="'app/templates/nav-menu.html'"></ng-include>
		<ng-view></ng-view>
	</div>
	
	<ng-include src="'app/templates/emailUsModal.html'"></ng-include>
	<ng-include src="'app/templates/footer.html'"></ng-include>

</div>



<script src="app/libs/jquery/dist/jquery.min.js"></script> 
<script src="app/js/script.js"></script>

<script src="app/libs/slick-1.6.0/slick/slick.min.js"></script>  
<script src="app/libs/angular/angular.js"></script>
<script src="app/libs/angular/angular-route.min.js"></script>
<script src="app/libs/bootstrap/dist/js/bootstrap.min.js" async></script>
<script src="app/libs/sweetalert2/dist/sweetalert2.min.js" async></script>
<!-- <script src="app/libs/core-js/core.js" async></script> -->
<script src="app/libs/angular/ui-bootstrap-tpls-0.12.0.min.js" async></script>


<script src="app/js/app.js"></script>


	<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
</body>
</html>