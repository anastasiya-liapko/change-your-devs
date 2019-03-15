<?php
date_default_timezone_set('Europe/Moscow');
include 'config.php';
include 'functions.php';

$data = json_decode(file_get_contents("php://input"));

if (isset($data)) {
  $request = $data->request;
  $id = isset($data->id) ? $data->id : '' ;

  if ($request === 1) {
    $response = getContacts($db);
  } else if ($request === 2) {
    $response = getQuestions($db);
  } else if ($request === 3) {
    $response = getResults($db);
  } else if ($request === 4) {
    $response = postResult($db, $id);
  }

  echo json_encode($response);
  exit;
}

