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

$article = array(
    'title' => 'Welcome',
    'description' => 'Hello, web'
    ); //밑에 내용 error 안뜨게

$update_link = '';
if(isset($_GET['id'])) { //id값 없을 때 error 뜸(ex) web 클릭시)
    $filltered_id = mysqli_real_escape_string($conn, $_GET['id']); // 들어오는 값을 다 문자열로 바꿈 <>sql 주입공격 injection 을 막을 수 있다.
    $sql = "SELECT * FROM topic WHERE id={$filltered_id}";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    $article['title'] = htmlspecialchars($row['title']);
    $article['description'] = htmlspecialchars($row['description']);

    $update_link = '<a href="update.php?id='.$_GET['id'].'">update</a>';
}

//  $sql = "SELECT * FROM topic WHERE id={$_GET['id']}";
//  $result = mysqli_query($conn, $sql);
//  $row = mysqli_fetch_array($result);
//  $article = array(
//      'title' => $row['title'],
//      'description' => $row['description']
//  );
 
//  $article = array(
//      'title'=>$row['title'],
//      'description'=>$row['description']
//  );

//  print_r($article);
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
    <form action="process_update.php" method="POST">
        <input type="hidden" name="id" value="<?=$_GET['id']?>">
        <p><input type="text" name="title" placeholder="title" value="<?=$article['title']?>"></p>
        <p><textarea name="description" placeholder="description"><?=$article['description']?></textarea></p>
        <p><input type="submit"></p>
    </form>
</body>
</html>