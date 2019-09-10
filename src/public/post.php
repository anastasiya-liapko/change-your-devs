<?php
date_default_timezone_set('Europe/Moscow');
include 'config.php';
include 'functions.php';

switch(intval($_GET['request'])){
  case 1:
    $response = getContacts($db);
  break;
  case 2:
    $response = getQuestions($db);
  break;
  case 3:
    $response = getResults($db);
  break;
  case 4:
    $id = intval($_GET['id']);
    $response = postResult($db, $id);
  break;
}

header('Access-Control-Allow-Origin:'.$_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST');
header('content-type: Application/JSON');

die(json_encode($response));

