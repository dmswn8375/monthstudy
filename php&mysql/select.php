<?php
$conn = mysqli_connect('localhost', 'root', '111111', 'opentutorials');
// 1 row
// $sql = "SELECT * FROM topic WHERE id = 5 LIMIT 1000";
// $result = mysqli_query($conn, $sql);
// // var_dump($result->num_rows);
// // print_r(mysqli_fetch_array($result));
// $row = mysqli_fetch_array($result);
// print_r($row);
// // echo $row['title']; //연관배열
// // echo $row[0];//배열

// echo'<h1>'.$row['title'].'</h1>';
// echo $row['description'];

// all row
// $sql = "SELECT * FROM topic";
// $result = mysqli_query($conn, $sql);
// $row = mysqli_fetch_array($result);
// echo'<h1>'.$row['title'].'</h1>';
// echo $row['description'];

// //mysqli_fetch_array에는 실행시 한행씩 출력한다/줄게 없을 때는 NULL을 준다.
// $row = mysqli_fetch_array($result);
// echo'<h1>'.$row['title'].'</h1>';
// echo $row['description'];

// $row = mysqli_fetch_array($result);
// echo'<h1>'.$row['title'].'</h1>';
// echo $row['description'];

// $row = mysqli_fetch_array($result);
// echo'<h1>'.$row['title'].'</h1>';
// echo $row['description'];

// $row = mysqli_fetch_array($result);
// echo'<h1>'.$row['title'].'</h1>';
// echo $row['description'];

// $row = mysqli_fetch_array($result);
// echo'<h1>'.$row['title'].'</h1>';
// echo $row['description'];
// var_dump($row);


//<WHILE 문으로 다 불러오기>
$sql = "SELECT * FROM topic";
$result = mysqli_query($conn, $sql);

while($row = mysqli_fetch_array($result)) { //false나 NULL이 아닌 이상 참으로침
    echo'<h1>'.$row['title'].'</h1>';
    echo $row['description'];
}