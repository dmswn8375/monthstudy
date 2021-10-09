// const loginForm = document.querySelector("#login-form"); //querySelector 에서는 명확히 해줘야함 queryElementById 는 그냥 login-form
// const loginInput = loginForm.querySelector("input"); //loginForm : 변수에서 가져옴
// const loginButton = loginForm.querySelector("Button");

// =
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button"); //한 element 안에서 찾을 수 있음
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // string 저장하고 싶을시 대문자 변수에 저장(관습)/ 실수를 만들고 싶지 않은 stirng
const USERNAME_KEY ="username";

//const link = document.querySelector("a");

// function onLoginBtnClick() {
//     // console.dir(loginInput);
//     // console.log("click!!");
//     console.log("hello",loginInput.value); //input에 있는속성 : value :input에 입력되는 내용 //+ 아무것도 안적었을때 처리 필요 >if else 로 해결가능
// }

// loginButton.addEventListener("click", onLoginBtnClick);

//2.추가설정 (null, 긴이름)
// function onLoginBtnClick() {
//     const username = loginInput.value;
//     console.log(username);
    // if (username ===""){
    //     alert("Please write your name");
    // } else if(username.length > 15){  //string 길이 구하는 기능 .length
    //     alert("Your name is too long.")
    // }
//}
// function onLoginBtnClick(event) {
//     event.preventDefault(); //어떤 event의 기본행동을 발생하지 않도록 막는것 //ex) form 을 submit 하는 동작 시행시 브라우저는 자동으로 새로고침을 함
//     //preventDefault 는 기본행동을 막음 /기본 기능
//     console.log(loginInput.value);
   
// }
// function handleLinkClick(event){
//     event.preventDefault(); //클릭시 웹페이지 이동하는 기본동작
//     console.dir(event);
    
// }

function onLoginBtnClick(event) { //2
    event.preventDefault();  //event 정보를 가져오는데 거기 기본기능을 막을 수 있는 기능이 있고 실행함
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username) //string, 변수(받은 값)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username)
    greeting.innerText = "Hello " + username; //= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginButton.addEventListener("click", onLoginBtnClick);
//3. html에서 input 기능제공
//  <input 
//    required //필수항목
//    malength="15"
//    type="text"
//    placeholder="What is your name?"/>

// loginForm.addEventListener("submit", onLoginBtnClick); //sugmit 시 자동으로 브라우저가 function 을 기능시킴
//submit 발생시 onLoginBtnClick function 을 호출하는데, 막 발생하는 event 에 대한 정보를 지닌 argument 를 채워넣음
// loginForm.addEventListener("submit", onLoginBtnClick); //submitevent object 를 담은 정보를 가지고 function 을 호출함
// link.addEventListener("click", handleLinkClick)


function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//<<username 저장한 후, form 없애기>>
const savedUsername = localStorage.getItem(USERNAME_KEY); //1.  >>getItem 을 통해서 username key 를 이용해 value를 찾음

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginBtnClick);
}else {
    
    paintGreetings(savedUsername) // 중복된 거 앞에 있어서 함수로 만듬 / string 을 함수로 받음
}