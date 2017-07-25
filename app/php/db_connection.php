<?php

require 'config.php';

$con = pg_connect("
	host=ec2-107-20-255-96.compute-1.amazonaws.com 
	port=5432 
	dbname=d38omjdcqrpnjb
	user=kovtequyzrgzkl
	password=64814fa2532666cc5598d872e1aace8a2ee998ff40c4afcc83d0b3b75af15619
	") or die("Could not connect" . pg_last_error());
?>