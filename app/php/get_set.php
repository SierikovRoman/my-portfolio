<?php

require_once 'db_connection.php'; 

$query = "SELECT * FROM set";

// $result = pg_query($con, $query);

// $arr = array();
// if(pg_num_rows($result) != 0) {
//     while($row = pg_fetch_assoc($result)) {
//         $arr[] = $row;
//     }
// }

// echo $json_info = json_encode($arr);


$response = array();
$sets = array();
$result=pg_query($query);
while($row=pg_fetch_array($result)) 
{ 
$id=$row['id'];
$name=$row['name']; 
$url=$row['url']; 

$sets[] = array('id'=> $id ,'name'=> $name, 'url'=> $url);

} 

$response['sets'] = $sets;

$fp = fopen('results.json', 'w');
fwrite($fp, json_encode($response));
fclose($fp);

?>