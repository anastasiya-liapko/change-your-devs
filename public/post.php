<?php
include 'config.php';
include 'functions.php';

$data = json_decode(file_get_contents("php://input"));

$request = $data->request;
// $value = $data->data;

if ($request === 1) {
  $response = getContacts($db);
} else if ($request === 2) {
  $response = getQuestions($db);
} else if ($request === 3) {
  $response = getResults($db);
} else if ($request === 4) {
  $response = postResult($db);
}



echo json_encode($response);
exit;
