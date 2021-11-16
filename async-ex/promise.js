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
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            response = 'My name is kim'; // 서버에서 응답 받음
            // resolve(response)
            reject('에러다에러')
        }, 1000);
    })

    promise
        .then((res) => {
            end(res);
        })
        .catch((err) => {
            onError(err);
        })
    
}
function start() {
    console.log('start')
}
function end(result) {
    console.log('end : ', result)
}
function onError(err) {
    console.error('에러남 : ', err);
}
function main() {
    start();
    serverApi();
}
main()

