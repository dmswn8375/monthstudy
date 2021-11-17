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
            <td>id</td><td>name</td><td>profile</td><td></td>
            <?php
            $sql= "SELECT * FROM author";
            $result = mysqli_query($conn, $sql);
            while($row = mysqli_fetch_array($result)){
                $filtered = array(
                    'id' =>htmlspecialchars($row['id']),
                    'name' =>htmlspecialchars($row['name']),
                    'profile' =>htmlspecialchars($row['profile'])
                );
                ?>
                <tr>
                    <td><?=$filtered['id']?></td>
                    <!-- <td></td>같은행끼리 모아줌 -->
                    <td><?=$filtered['name']?></td>
                    <td><?=$filtered['profile']?></td>
                    <td><a href="author.php?id=<?=$filtered['id']?>">update</a></td>
                    <td>
                    <!-- 삭제버튼 -->
                        <form action="process_delete_author.php" method="post" onsubmit="if(!confirm('sure?')){return false;}">
                            <!-- 전송행위가 일어났을 때 온서브밋의 (javascript)속성값을 실행해라 --><!-- confirm이 false 값을 받으면(!) >false return >"브라우저가 가진 기능(post 방식으로 전송)을 중지"-->
                            <input type="hidden" name="id" value="<?=$filtered['id']?>">
                            <input type="submit" value="delete">
                        </form>
                    </td>
                </tr>
                <?php
            }
            ?>
        </tr>
        
    </table>

    <?php
    $escaped = array(
        'name'=>'',
        'profile'=>''
    );
    $label_submit = 'Create author';
    $form_action = 'process_create_author.php'; //create 일때는 이거였다가, id 있으면 if문으로
    $form_id = '';
    if(isset($_GET['id'])){ //id 가 있을 때만 실행
        $filterd_id = mysqli_real_escape_string($conn, $_GET['id']);
        settype($filterd_id, 'integer'); //안전빵
        $sql = "SELECT * FROM author WHERE id = {$filterd_id}";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_array($result);
        $escaped['name'] = htmlspecialchars($row['name']); //row에서 name 불러옴
        $escaped['profile'] = htmlspecialchars($row['profile']);
        $label_submit = 'Update author';
        $form_action = 'process_update_author.php';
        $form_id = '<input type="hidden" name="id" value="'.$_GET['id'].'">';
    }

    ?>
    

    <form action="<?=$form_action?>" method="post">
        <?=$form_id?>
        <p><input type="text" name="name" placeholder="name" value="<?=$escaped['name']?>"></p>
        <!-- escaped 값이 value에 들어올때 form에 들어감 -->
        <p><textarea name="profile" placeholder="profile"><?=$escaped['profile']?></textarea></p>
        <p><input type="submit" value="<?=$label_submit?>"></p>    
    </form>
    
</body>
</html>