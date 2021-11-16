/**
 * 서버에 요청 
 * (2초걸림)
 * 응답 받기
 * 응답 결과 출력
 */

function serverApi() {
    let response = undefined;
    setTimeout(function () {
        response = 'My name is kim'; // 서버에서 응답 받음

        const promiseInstance = new Promise((resolve, reject) => {
            resolve(response)
        });

        promiseInstance.then(function(res) {
            console.log('결과 : ',res);
        })

    }, 2000);
}

// serverApi();

///////////////////////////////////////////
function serverApe(){
    

    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            resolve('시펄');
        }, 1000);
    })

}

async function sim () {
    const result = await serverApe();
    console.log(result);
}

sim();