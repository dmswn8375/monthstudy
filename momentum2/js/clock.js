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
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0"); //string()은 숫자>string / padStart(2, "0")2자리 길이로 하고 빈곳은 0추가(string일때 가능)
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
     }

getClock();//바로 시작
setInterval(getClock, 1000);