<!--THIS PAGE CONNECTS LOGIN WHEN LOGOUT IS PERFORMED-->
<?php

   include 'connect.php';

   setcookie('tutor_id', '', time() - 1, '/');

   header('location:../admin/login.php');

?>
