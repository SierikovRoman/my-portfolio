<?php

require 'config.php';


$con = pg_connect("
	host='$host'
	port='$port' 
	dbname='$dbname'
	user='$user'
	password='$password'
	") or die("Could not connect" . pg_last_error());

// $stat = pg_connection_status($con);
// if ($stat === PGSQL_CONNECTION_OK) {
//   echo 'Connection status ok';
// } else {
//   echo 'Connection status bad';
// }
?>