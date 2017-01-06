<?php 
include 'connection.php';
$collection = $db->stars;
$search_params = array();
if(isset($_GET['Search']) && !empty($_GET['Search'])){
	foreach($_GET['Search'] as $key => $value){
		if(!empty($value)){
			$search_params[$key] = new MongoRegex("/$value/i");
		}
	}
}

$cursor = $collection->find($search_params);

$order = (isset($_GET['order']))? $_GET['order'] : '';
$sort = isset($_GET['sort'])?$_GET['sort']: '';
if(!empty($order)){
	$sort_order = ($sort == 'asc') ? 1 : -1;
	$cursor->sort(array(
		$order => $sort_order
	));
}
$playerList =  array();
foreach ( $cursor as $id => $value ) { 
	$playerList[] = $value;
}
header('Content-Type: application/json; charset=utf-8');
print_r(json_encode($playerList));die();