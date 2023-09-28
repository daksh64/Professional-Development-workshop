<!--THIS PAGE CONNECTS LOGOUT PAGE TO LOGIN FOR USER-->
<?php

   include 'connect.php';

   setcookie('user_id', '', time() - 1, '/');

   header('location:../home.php');

?>
