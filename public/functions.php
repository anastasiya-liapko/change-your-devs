<?php

/**
 * Return list of contacts
 *
 * @param $databaseLink
 * @return array of contacts
 */
function getContacts($databaseLink)
{
    $response = [];

    $sql = "
        SELECT
            *
        FROM
            `contacts`
    ";
    if ($res = mysqli_query($databaseLink, $sql)) {
        $response = mysqli_fetch_all($res, MYSQLI_ASSOC);
    }
    return $response;
}

;

/**
 * Return list of questions
 *
 * @param $databaseLink
 * @return array of questions
 */
function getQuestions($databaseLink)
{
    $response = [];

    $sql = "
        SELECT
            *
        FROM
            `questions`
    ";
    if ($res = mysqli_query($databaseLink, $sql)) {
        $response = mysqli_fetch_all($res, MYSQLI_ASSOC);
    }
    return $response;
}

;

/**
 * Return list of results
 *
 * @param $databaseLink
 * @return array of results
 */
function getResults($databaseLink)
{
    $response = [];

    $sql = "
        SELECT
            *
        FROM
            `results`
    ";
    if ($res = mysqli_query($databaseLink, $sql)) {
        $response = mysqli_fetch_all($res, MYSQLI_ASSOC);
    }
    return $response;
}

;

/**
 * Post result into Tests
 *
 * @param $databaseLink
 * @param $id int
 * @return boolean
 */
function postResult($databaseLink, $id)
{
    $date = date("ymdHis");

    $sqlId = "
        INSERT INTO
            `tests` (`result_id`, `date`)
        VALUES
            (?, $date)
    ";

    $stmt = mysqli_prepare($databaseLink, $sqlId);
    mysqli_stmt_bind_param($stmt, 'i', $id);
    $response = mysqli_stmt_execute($stmt);

    return $response;
}

;

