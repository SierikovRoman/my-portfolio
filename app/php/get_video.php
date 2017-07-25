<?php

require_once 'db_connection.php'; 

$query = "SELECT * FROM video";

$result = pg_query($con, $query);

$arr = array();
if(pg_num_rows($result) != 0) {
    while($row = pg_fetch_assoc($result)) {
        $arr[] = $row;
    }
}

echo $json_info = json_encode($arr);

?>