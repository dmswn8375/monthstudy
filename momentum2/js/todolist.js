const toDoForm = document. getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document. getElementById("todo-list");

const TODOS_KEY ="todos"

let toDos = []; //밑에서 값 update 함

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos)); //toDos array의 내용을 넣음
}

function deleteToDo(event){
    const Li = event.target.parentElement; //target:html element 에는 하나이상의 property가 있다 :parentElement
    Li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(Li.id));//Li : 삭제했던것 // Li.id 는 string<>toDo.id는 number
    saveToDos(); // 삭제후 저장
} //target: button //parentElement : button의 부모

//list 만들기
function paintToDo(newTodo){ //값은 li에 추가
    const Li = document. createElement("Li");
    Li.id = newTodo.id; //object 의 id를 추가 (li 구별을 위해(삭제가 목적))
    const span = document. createElement("span"); //span, button(삭제) 만듬
    span.innerText = newTodo.text; //object에서 text 만 출력
    const button = document.createElement("button"); //입력시 버튼생성
    button.innerText = "x"
    button.addEventListener("click", deleteToDo);
    Li.appendChild(span); //Li 안에 sapn 을 넣음
    Li.appendChild(button);
    toDoList.appendChild(Li); // Li를 todolist 에 넣음(append는 마지막에!!)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj); //toDos array에 newTodo를 push
    paintToDo(newTodoObj); //paintToDo function 사용>>값 보냄
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item) {
    console.log("this is the turn of", item); // 꽁 기능 : item 받아옴
}

// 다하고 나서 localstorage 의 string 을 array로 가져올거다.
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) { //null이 아닐때
    const parsedToDos = JSON.parse(savedToDos); //string 을 다시 array 로 변환해줌
    toDos = parsedToDos;
    //parsedToDos.forEach(sayHello); //forEach : array에 있는 각 item(function)을 실행시킴
    parsedToDos.forEach(paintToDo); // sayhello function 대신 short version / =>화살표 함수
    //(item) => console.log("ths is ", item)>>출력으로 
}

// 지우고 싶은 itemd을 제외하는 기능
//.filter //array에 item 을 유지하고 싶은 return true 해야함
//const arr = [1,2,3,4]
//arr.filter(item => item > 2)
//[3, 4]
