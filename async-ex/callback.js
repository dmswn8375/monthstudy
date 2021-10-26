function serverApi(callback) {
    console.log('sent')
    let response = undefined;
    setTimeout(function () {
        response = 'My name is kim'; // 서버에서 응답 받음
        callback(response)
    }, 1000);
}
/**
 * serverApi 실행
 * sent
 * response - undefined
 * setTimeout
 * serverApi 종료
 * (1초후)
 * response - 값 할당
 * callback
 */

function start() {
    console.log('start')
}

function end(result) {
    console.log('end : ', result)
}

function main() {
    start();
    serverApi(end);
}

main()
