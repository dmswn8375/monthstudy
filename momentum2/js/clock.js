const clock = document.querySelector("h2#clock");

// clock.innerText ="lalalall";
//intervals
// function sayHello() {
//     console.log("hello");
// }

// //setInterval(sayHello, 5000); //두개의 argument를 받음(sayHello function 실행)/interval : 매 몇초마다 실행됨/5000ms >>5초마다 실행/함수=function

// setTimeout(sayHello, 5000); //5초 후에 실행

function getClock() {
    const date = new Date(); //date object
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
     }

getClock();//바로 시작
setInterval(getClock, 1000);