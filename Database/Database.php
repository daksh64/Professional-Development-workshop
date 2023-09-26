<?php
$servername= "localhost:3306";
$username= "root";
$password= "password";
$database= "db_elearning";

$connection= new mysqli($servername, $username, $password);
if($connection->connect_errno)
{
    die("connection failed:".$connect_error);
}

$sql = "CREATE DATABASE IF NOT EXISTS $database";
if ($connection->query($sql) === TRUE) {
    echo "Database created successfully<br>";
} else {
    echo "Error creating database: " . $connection->error . "<br>";
}

$connection->select_db($database);
$sql_file="C:\Users\lenovo\Professional-Development-workshop\Database\db_elearning.sql";
$sql_connect= file_get_contents($sql_file);
if ($connection->multi_query($sql_content)) {
    echo "SQL dump executed successfully";
} else {
    echo "Error executing SQL dump: " . $connection->error;
}

// Close the database connection
$conn->close();
?>

