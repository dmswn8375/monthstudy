<?php
$conn = mysqli_connect('localhost', 'root', '111111', 'opentutorials');
$sql = "SELECT * FROM topic";

$result = mysqli_query($conn, $sql); //result 에는 table 정보가 담김
$list = '';
while($row = mysqli_fetch_array($result)) {
    $escaped_title = htmlspecialchars($row['title']); // 보안상 문자열로 만들어버림
    //<li><a href=\"index.php?id=19\">MySQL</a></li> // \" 끝난다는 표시 말고 단지 문자열이라는 표시
    $list = $list."<li><a href=\"index.php?id={$row['id']}\">{$escaped_title}</a></li>"; //list. = list+ /기존 list 에 title 을 더해서 출력>>최종적으로 연속적인 list 한꺼번에 출력
}

$sql = "SELECT * FROM author";
$result = mysqli_query($conn, $sql);
$select_form = '<select name="author_id">'; //이름은 author_id로
while($row = mysqli_fetch_array($result)){
    $select_form .= '<option value="'.$row['id'].'">'.$row['name'].'</option>'; //name의 id 값을 전송
    
}
$select_form .= '</select>';



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
    <ol>
        <?=$list?> 
        <!-- <?php echo $list ?> -->
    </ol>
    <form action="process_create.php" method="POST">
        <p><input type="text" name="title" placeholder="title"></p>
        <p><textarea name="description" placeholder="description"></textarea></p>
        <?=$select_form?>
        <p><input type="submit"></p>
    </form>
</body>
</html>