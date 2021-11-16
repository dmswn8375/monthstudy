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
$delete_link = '';
$author = '';
if(isset($_GET['id'])) { //id값 없을 때 error 뜸(ex) web 클릭시)
    $filltered_id = mysqli_real_escape_string($conn, $_GET['id']); // 들어오는 값을 다 문자열로 바꿈 <>sql 주입공격 injection 을 막을 수 있다.
    $sql = "SELECT * FROM topic LEFT JOIN author ON topic.author_id = author.id WHERE topic.id={$filltered_id}"; //(관계형데이터설명) 관계를 맺어줌 /topic.id(두표에 다 id 값 있어서)
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);
    $article['title'] = htmlspecialchars($row['title']);
    $article['description'] = htmlspecialchars($row['description']);
    $article['name'] = htmlspecialchars($row['name']);

    $update_link = '<a href="update.php?id='.$_GET['id'].'">update</a>';
    $delete_link = '
        <form action="process_delete.php" method="post">  
            <input type="hidden" name="id" value="'.$_GET['id'].'">
            <input type="submit" value="delete">
        </form>
    ';
    //url 전송시 delete 문제가 있기 때문에 post 방식으로
    $author = "<p>by {$article['name']}</p>";
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
    <a href="author.php">author</a>
    <ol>
        <?=$list?> 
        <!-- <?php echo $list ?> -->
    </ol>
    <a href="create.php">create</a>
    <?=$update_link?>
    <?=$delete_link?>
    <h2><?=$article['title']?></h2>
    <?=$article['description']?>
    <?=$author?>
</body>
</html>