<?php
$conn = mysqli_connect('localhost', 'root', '111111', 'opentutorials');
//접속 : root는 모든 권한이 있기 때문에 공격당하기 쉬움 (주의필요)

settype($_POST['id'], 'integer');
$filtered = array(
  'id'=>mysqli_real_escape_string($conn, $_POST['id']),
  'title'=>mysqli_real_escape_string($conn, $_POST['title']),
  'description'=>mysqli_real_escape_string($conn, $_POST['description'])
  
);

$sql = "
    UPDATE topic
      SET
        title = '{$filtered['title']}',
        description = '{$filtered['description']}'
      WHERE
        id= {$filtered['id']}
    ";
$result = mysqli_query($conn, $sql);
//어느 서버에 query 를 할건지, 어떤 명령어 보낼건지
if($result === false){
  echo '저장하는 과정에서 문제가 생겼습니다. 관리자에게 문의해주세요';
  error_log(mysqli_error($conn));
  //error 를 log 에 저장 = error_log 관리자만 볼 수 있음<>사용자에게
  //메세지를 그대로 보여주면 안됨
} else {
  echo '성공했습니다. <a href="create.php">돌아가기</a>';
}
// echo $sql;//메세지를 그대로 보여주면 안됨
?>