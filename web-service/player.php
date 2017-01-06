<?php 
include 'connection.php';
$collection = $db->stars;
if(isset($_GET['id']) && !empty($_GET['id'])){
	$cursor = $collection->find(array(
		'_id' => new MongoId($_GET['id'])
	));

}
foreach ($cursor as $id => $value ) { 
	$player = $value;
}

header('Content-Type: application/json; charset=utf-8');
print_r(json_encode($player));die();