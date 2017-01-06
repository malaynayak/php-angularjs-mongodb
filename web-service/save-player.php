<?php 
include 'connection.php';
$collection = $db->stars;

$data = json_decode(file_get_contents('php://input'),true);
if(isset($data['_id']) && !empty($data['_id'])){
	$data1 = $data;
	unset($data1['_id']);
	$collection->update( array('_id' => new MongoId($data['_id']['$id'])),$data1) ;
	echo 'success';die();
} else {
	$collection->insert($data);
	echo 'success';die();
}
