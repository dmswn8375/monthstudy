// const loginForm = document.querySelector("#login-form"); //querySelector 에서는 명확히 해줘야함 queryElementById 는 그냥 login-form
// const loginInput = loginForm.querySelector("input"); //loginForm : 변수에서 가져옴
// const loginButton = loginForm.querySelector("Button");

// =
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button"); //한 element 안에서 찾을 수 있음

function onLoginBtnClick() {
    // console.dir(loginInput);
    // console.log("click!!");
    console.log("hello",loginInput.value); //input에 있는속성 : value //+ 아무것도 안적었을때 처리 필요 >if else 로 해결가능
}

loginButton.addEventListener("click", onLoginBtnClick);