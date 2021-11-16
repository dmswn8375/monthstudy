<?php
$conn = mysqli_connect("localhost", "root", "111111", "opentutorials");
mysqli_query($conn, "
 INSERT INTO topic2
    (title, description, created)
    VALUE(
        'MySQL',
        'MySQL is ..',
        NOW()
        )
");
?>
<!-- table에 data 추가 -->

<!-- <오류 찾아내는 법> -->
<?php
$conn = mysqli_connect("localhost", "root", "111111", "opentutorials");
$sql = "
INSER INTO topic2
   (title, description, created)
   VALUE(
       'MySQL',
       'MySQL is ..',
       NOW()
       )";
// // echo $sql;
// mysqli_query($conn, $sql);
// // 함수에 넣어서 >echo표시 후 복붙해서 cmd 에 명령어로 쳐봤을 떄
// // 뜨는 에러 확인하기
// echo mysqli_error($conn);
// //에러 바로 화면에서 확인가능
$result = mysqli_query($conn, $sql);
if($result === false){
    echo mysqli_error($conn);
    //실 업무에서 echo 쓰는 것 위험 > 파일에 저장
}
?>
