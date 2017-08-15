<?php

require_once 'db_connection.php'; 

$data = json_decode(file_get_contents("php://input")); 

$query = "SELECT url, set FROM photo ORDER BY id ";

$result = pg_query($con, $query);

$arr = array();
if(pg_num_rows($result) != 0) {
    while($row = pg_fetch_assoc($result)) {
        $arr[] = $row;
    }
}

echo $json_info = json_encode($arr);

$fp = fopen('results_photos.json', 'w');
fwrite($fp, json_encode($arr));
fclose($fp);

?>