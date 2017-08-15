<?php

// $data = json_decode(file_get_contents("php://input")); 

// $str_json = file_get_contents('php://input');



$result = $_POST['str_json'];

echo $result;

// $arr = array();
// if(pg_num_rows($result) != 0) {
//     while($row = pg_fetch_assoc($result)) {
//         $arr[] = $row;
//     }
// }

// echo $json_info = json_encode($arr);

// $fp = fopen('test.json', 'w');
// fwrite($fp, json_encode($arr));
// fclose($fp);

?>