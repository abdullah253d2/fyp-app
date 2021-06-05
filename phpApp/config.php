<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "quadcore";
    
    // $username = "rkvjaefq_live";
    // $password = "dbAngle20";
    // $database = "rkvjaefq_live";
    $conn = mysqli_connect($server, $username, $password, $database);
    if(!$conn){
            echo "success";
        }
        else{
        die("Error". mysqli_connect_error());
        }
?>