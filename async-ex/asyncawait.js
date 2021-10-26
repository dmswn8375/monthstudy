// class Person {
//     constructor(gender) {
//         this.gender = gender
//     }

//     age = 10;
//     name = 'kim';
//     gender = null;

//     getName() {
//         return this.name;
//     }
// }

// const person1 = new Person('man')
// console.log(person1)


function serverApi() {
    console.log('sent')
    let response = undefined;
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            response = 'My name is kim'; // 서버에서 응답 받음
            resolve(response)
        }, 1000);
    })
}
function start() {
    console.log('start')
}
function end(result) {
    console.log('end : ', result)
}
async function main() {
    start();
    const response = await serverApi();
    end(response);
}
main()

/**
 * main 실행
 * start함수 실행
 * start콘솔찍기
 * start함수 종료
 * 
 * await serverApi함수 실행 
 * sent 콘솔
 * response - undefined
 * return Promise객체
 * serverApi함수 종료
 * 
 * (Promise 객체가 resolve 또는 reject될때까지 기다리기)
 * 
 * 기다린 결과를 response에 할당
 * 
 * end 함수 실행
 * reponse 콘솔로 찍기
 * end 함수 종료
 */

/**
 * async/await이 기다리는 대상 : Promise 객체를 return 하는 함수
 * async/await은 언제까지 '그' 함수를 기다릴까? : Promise객체가 resolve 또는 reject될때까지
 */
