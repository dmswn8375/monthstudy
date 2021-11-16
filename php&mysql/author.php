<?php
$conn = mysqli_connect('localhost', 'root', '111111', 'opentutorials');



?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEB</title>
</head>
<body>
    <h1><a href="index.php">WEB</a></h1>
    <p><a href="index.php">topic</a></p>
    <table border="1">
        <tr>
            <td>id</td><td>name</td><td>profile</td>
            <?php
            $sql= "SELECT * FROM author"; //출력값 머나오지
            $result = mysqli_query($conn, $sql);
            ?>
        </tr>
    </table>
    
</body>
</html>