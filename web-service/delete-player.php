<?php 
  include 'connection.php';
  $collection = $db->stars;
  $data = json_decode(file_get_contents('php://input'),true);
  if(isset($data['id']) && !empty($data['id'])){
    $record = $collection->findOne(array('_id' => new MongoId($data['id'])));
    if(!empty($record)){
      $collection->remove( array('_id' => new MongoId($data['id'])) ) ;
      echo 'success';exit;
    }
  }
  echo 'faiure';exit;
