// <vairable 사용법>
// 1. const 이용
// const a = 2;
// const b = 5;

// console.log(a+b);
// console.log(a*b);
// console.log(a/b);

// // const myName = "nico";
// // console.log("hello "+myName);

// // 2. let 사용
// let myName = "nico"; //let 은 값을 업데이트 하고 싶을 때 사용
// myName = "nicolas"; //****
// console.log ("your name is "+ myName);

//3. 옜날에는 var 사용 >> 어디서나 변수값 고칠 수 있음 >>값을 보호할수가 없음
//    var사용시 var a=2; 값을 실수로 바꿔도 경고문 안뜸
//그래서 var 사용 ㄴㄴ const >>let


//<Booleans>>
// const amIFat =null; //true(""없이 씀) null 은 아무것도 없다는 뜻(=datax)
// console.log(amIFat);

// const amIFat = null; //의도적으로 없음을 의미
// let something; // 변수(공간)는 있는데 값은 없음 (undefined type)
// console. log(something, amIFat); //something/null/false/true=type


//<Arrays (데이터 정리하는 법)> list 만들기
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sund";


// const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]; 
// const nonsense = [1, 2, "hello", false, null, true, undefined];
// console.log(daysOfWeek, nonsense);

// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]; //위에 꺼랑 같은거(변수없음)
// console.log(daysOfWeek[5]); //0번째 1번째 ~
// // Get Item from Array.
// console.log(daysOfWeek);

// //Add one more day to the array
// daysOfWeek.push("sun"); //function

// console. log(daysOfWeek);

// //<Objects>
// const player ={
//     name:"nico",
//     points:10,
//     fat:true,
// };
//     console.log(player);
//     console.log(player.name);
//     console.log(player["name"]);//둘다 의미 같음

    //const 의 object 변경이 아닌 값 변경은 가능하다<> constant 전체를
    //하나의 값으로 업데이트 하려고 할때는 에러 발생한다.
// const player ={
//     name:"nico",//property 가짐
//     points:10,
//     fat:true,
// };
// //   console.log(player);
// //   player = false; //object>>boolean으로<> player.fat =false;는 상관없음
// //   console.log(player);

// //object 추가
// console.log(player);
// player.lastName="potato";
// console.log(player);


//object updates 방법
//  const player ={
//      name:"nico",//property 가짐
//      points:10,
//      fat:true,
//     };
//     console.log(player);
//     player.points = player.points + 15;
//     console.log(player);

//<Function part One>
 // function 만드는 법
    // function sayHello() {
    //     console.log("Hello!");
    // }

    // sayHello(); //()는 fuction을 나타내는 규칙>>실행버튼같은거
    // sayHello();
    // sayHello();
    // sayHello();
// function에 data 를 주고 받는
// function sayHello(nameOfPerson, age) {   //argument:nameOfPerson, age
//     console.log("Hello my name is " + nameOfPerson + " and I'm"+age);
// }
//     sayHello("nico", 10);
//     sayHello("dal", 23);
//     sayHello("lynn", 21);

//계산기 만들기
//  function plus(a, b){
//      console.log(a+ b);//밖에서는 존재할 수 없는 콘솔로
//  }
//  function divide(a, b){
//      console.log(a/b);
//  }

//  plus(8,60);
//  divide(60, 3)


//<function part 2 - 우리가 function 만들기>
// function sayHello()순서바뀜<<>>
// const player = {
//     name: "nico",
//     sayHello: function (otherPersonsName){
//         console.log("hello " + otherPersonsName + "nice to meet you")
//     }
// };

// player.sayHello("lynn") //우리만의 function 만듬 - object 내에서만 가능<<>>계산기


// <<recap>>***
// javascript에서 data
// "string", 5,
// -variable
// const a = 5; >>바꾸고 싶을때(update) let a= 5; a=6;(variable update 에선 let x)
// console.log(a);

// let hello; <<>>let hello = null;(비어있음이라는 값이 있음)
// console.log(hello); >> undefined
// const days = [];

// Array
// const toBuy = ["potato", "tomato", "pizza"];

// console.log(toBuy);
// toBuy[2]="water"; //바꾸기
// console.log(toBuy);
// console.log(toBuy[2]);
// toBuy.push("meat");//추가
// console.log(toBuy);

// <Recap 11>
// const player = {
//     name: "Nico",
//     age: 98,
// };

// 1.
// console.log((player.name = "nicolas")); //이름바꾸기
// console.log(player);

//2.
// player.name = "nicolas"; //바꾸기
// console. log(player);
// player.sexy ="soon";//추가하기
// console. log(player);

//3.
// function mi(potato){ >>potato 는 function 내부에서만 쓸수있음 console.log(potato);x 
//     console.log(potato-5);
// }
// mi(10, 10, 11) //두번째 자리수는 안들어감

// const calculator = {
//      add:function(a,b){
//          console.log(a+b);
//      }
//  }

//  calculator.add(2,2)

// const calculator = {
//     add:function(a,b){
//         console.log(a+b);
//     }
// }

// calculator.add(2,2)

// const calculator = { //>콘솔말고 우리에게 화면으로 보여주는 방법
//     add:function(a,b){  //object 내에서 function 실행하는 rule
//         alert(a+b);
//     }
// }

// calculator.add(2,2) //function 은 값:undefined / 내가 원하는 것을 해주는 것

// const age= 96;
// function calculateKrAge(age0Foreigner){
//     return age0Foreigner + 2; //console, alert 에서 뜨는 것 말고, 코드에서의 결과를 원할 경우
// }

// const krAge = calculateKrAge(age); //함수에 age 라는 값을 넣을 경우 / return 시= calculateKrAge(age)이 값을 age0Foreigner + 2로 대체 하는것

// console.log(krAge);  // console 에 띄우는 것 말고 다른 행위를 하기위해서 변수에 넣는다.



// const calculator = {
//     add: function (a, b) {
//     return a + b; //return 후에는 코드 멈춤!! >다음 코드 실행안함
//     },
//     minus: function (a, b) {
//     return a - b;
//     },
//     div: function (a, b) {
//     return a / b;
//     },
//     multi: function (a, b) {
//     return a * b;
//     },
//     power: function (a, b) {
//     return a ** b;
//     },
//     };

    // console.log(calculator.add(2,3)); //CONSOLE 을 거치지 않고  코드들끼리 상호의존적인 관계
    // const plusResult = calculator.add(2,3);  //return 을 통해서 외부에서 값을 받을 수 있게함<>console.log(a+b)일 경우에는 보이기는 하는데 멀하진 못함
    // const minusResult = calculator.minus(plusResult, 10);
    
    //<Conditionals>
    // const age = prompt("How old are you?") //>prompt : message를 띠우고 string을 받음 / defalt에 stirng받음 //답변 받을 때 까지 콘솔안하고 기다림
    // console.log(age);
    //ㄴ옜날 방법  
    // console.log(typeof age);  //>>대답에 대한 type 을 알고싶다면 : typeof  / variable 의 type 보는 방법
    // console.log(typeof "15", typeof parseInt("15")); //parseInt 는 type을 변환시키는 기능을 가짐

    // const age = prompt("How old are you?");
    // console.log(age, parseInt(age)); //parseInt로 숫자로 변경해주면서 크기비교가 가능해짐/ 숫자인지 아닌지를 구별해줌/숫자 아닐때는 NaN**
    // const age = parseInt(prompt("How old are you?"));
    // console.log(age);

    // <conditionals two>
    // const age = parseInt(prompt("How old are you?"));
    // console.log(isNaN(age)); //age가 숫자면 false/age가 문자면 true

    // const age = parseInt(prompt("How old are you?"));
    // if(isNaN(age)){                              //조건
    //     console.log("Please write a number");
    // } else{
    //     console.log("Thank you for writing your age.");
    // }

    // if(condition){ //condition은 true or false 여야 함 >true 면은 아래 코딩실행/ false 면 실행안됨

    // }

    // const age = parseInt(prompt("How old are you?"));
    // if(isNaN(age)){                              //조건
    //     console.log("Please write a number");
    // } else if(age < 18){                         //if문이 숫자라고 하면 
    //     console.log("You are too young.");
    // } else {
    //     console.log("You can drink");
    // }

    // const age = parseInt(prompt("How old are you?"));
    // if(isNaN(age)|| age< 0){                              //조건
    //     console.log("Please write a real positive number");
    // } else if(age < 18){                         //if문이 숫자라고 하면 
    //     console.log("You are too young.");
    // } else if(age >=18 && age <=50){             //&&=and :둘다 ture 여야 됨/AND operator(연산자)// ||=or 하나 또는 두개가 true 인경우
    //     console.log("You can drink");
    // } else if (age>80){
    //     console.log("You can't dirnk");
    // } else if(age ===100) {             // age>80때문에 실행안됨. ===: 은 ~인가??<> !== / =은 변수 cost a = b
    //     console.log("wow you are wise")
    // }


    // } else if(age ===100) {             // 순서 바뀌면됨
    // console.log("wow you are wise")
    // }else if (age>80){
    //     console.log("You can't dirnk");
    // }


    // <document object>
    // document.title >>Momentum 나옴 //javascript에는 html에 접근하고 읽을 수 있게 설정되어있음
    // document.title = "lalalala" //변경가능
    // document 가 모든 시작점 /document는 web site를 의미 =java 에서 html 로 접근할 수 있는 방법
    // html 과 javascript 와의 관계 공부


    // document.getElementById("title") >>console 에서
    // <<id를 통해서 html 항목들을 가져오는 방법>>
    // const title = document.getElementById("title");  //***정보가져옴 document object 에서 getElemmentById라는 함수로 가져온 것
    // console.log(title);                                   
    // console.dir(title); //title h1 에서 가져올수 있는 정보들 // html 을 javascript 형식으로 본다.

    // title.innerText ="Got you!"; // title 이라는 변수에 가져왔기 때문에 가능 //수정가능
    // console.log(title.id);
    // console.log(title.className);

    // const hellos = document.getElementsByClassName("hello");  //getElementsByClassName >>많은 것들을 동시에 들고와야할때
    // console.log(hellos) //list 라서 값을 가져올 수 없음 (=array를 가져다줌 )

    // const title = document.getElementsByTagName("h1"); //이것도 array로 가져다줌
    // console.log(title);

    //<<2.css selector 사용 >>
    // const title = document.querySelector(".hello h1"); //CSS selector 를 이용해서 class hello 찾음*******중요
    //                                                  //querySelector 함수는 (hollo 내부에 h1 이 여러개일때) 중복되는게 여러개라도 첫번째 element 만 가져옴 
    // console.log(title);

    // const title = document.querySelectorAll(".hello h1"); //중복 h1 을 가져오고 싶을 때
    // console.log(title);

    // html 에서 <h1 name="" 도 array 로 가져다줌> getElementsByName 사용
    //const title = document.querySelector(".hello h1")
    //const title = document.getElementById("hello"); 두개 주로 사용
    // title.innerText ="Hello"; >>내용 변경

    // <<2.3 Events>>
    // const title = document.querySelector("div.hello:first-child h1"); //더 자세히
    // console.log(title);
    // title.innerText ="Hello"; //수정가능해짐
    // console.dir(title); //h1에 대해 더 자세히 알고싶을 때 = dir (object로 표시한 element )
    //  ㄴ on 으로 시작하는 속성들 = event

    //const title = document.querySelector("div.hello:first-child h1");
    // console.dir(title);
    // title.style.color ="blue" //title의 style 속성의 color 속성 
    // //javascript는 event 를 listening 할 수 있다. 

    //<click event>
    // title.addEventListener("click") //click 하는 것을 듣게한다.*****
    // function handleTitleClick() {
    //      title.style.color="blue"; //기능만듬 
    //  }
    //  title.addEventListener("click", handleTitleClick); //클릭시 문자 뜨게 title = vairvable / .add 는 function >> 클릭시 FUNCTION 을 나 대신 실행해줌
    //  //ㄴ 리스너 호출, function 호출 /괄호:버튼 안넣음 >대신 눌러줌
    

    //  //정리 : title 이라는 html element를 불러워서 h1(title)의 object로 색상, 변경 가능
    //  //       html에서 element를 불러와서 리스너를 추가하고 event 를 할당 > 반응
    //  console.dir(title);
    // function handleMouseEnter() {
    //     title.innerText = "Mouse is here!";
    // }
    //  function handleMouseLeave() {
    //     title.innerText = "Mouse is gone!";
    //  }
    //  function handleWindowResize() {
    //      document.body.style.backgroundColor = "tomato";
    //  }
    //  function handleWindowCopy() {
    //      alert("copier!");
    //  }
    //  function handleWindowOffline() {
    //      alert("SOS no WIFI");
    //  }
    //  function handleWindowOnline() {
    //      alert("ALL GOOOD")
    //  }
    //  //<mouseenter, mouseleave event>
    //  title.addEventListener("mouseenter", handleMouseEnter);
    //  title.addEventListener("mouseleave", handleMouseLeave); //리스너를 추가함

    //title.addEventListener("click", handleTitleClick); //= title.onclick = handleTitleClick;
    // //  .removeEventListener 은 addEventListener 만 사용가능
    // //<resize event>
    // window.addEventListener("resize", handleWindowResize); //기본적으로 window 는 javascript 에서 제공하는것 document 와 같이/resize는 화면크기 변경시>>window 만 risize 가능
    // // ***documnet 의 경우 .head, .body, .title 만 불러올 수 있음 div 같은 element는 querySelector, getElementByid 등으로 찾아와야함
    // window.addEventListener("copy", handleWindowCopy);
    // window.addEventListener("offline", handleWindowOffline);
    // window.addEventListener("online", handleWindowOnline);

    // const title = document.querySelector("div.hello:first-child h1");

    // function handleTitleClick() {
    //     console.log(title.style.color);
    //     title.style.color = "blue";
    //     console.log(title.style.color);
    // }

    // title.addEventListener("click", handleTitleClick);

    //조건문
    //첫번째 방법
    //const title = document.querySelector("div.hello:first-child h1");

    // function handleTitleClick() {
    //     const currentColor = title.style.color;
    //     let newColor;
    //     if (title.style.color ==="blue"){
    //         title.style.color = "tomato";
    //     }else {
    //         title.style.color ="blue";
    //     }
    //     title.style.color =newColor;
    // }

    // title.addEventListener("click", handleTitleClick);

    //두번째 방법 <<적은 코드사용 가능
    // const title = document.querySelector("div.hello:first-child h1");

    // function handleTitleClick() {
    //     title.className ="active"; //추가 >>html 에서 먼저 변경후 css 기능하게함/ css 와 소통 x
    // }

    // title.addEventListener("click", handleTitleClick);

    //색깔계속 바꾸는 방법
//     const title = document.querySelector("div.hello:first-child h1");

//     function handleTitleClick() {
//         const clickedClass = "clicked"; //오류줄이는 방법 /css 에서 한번만 복사해오면 됨 /변수 스펠링 틀리면 콘솔로에서 오류 잡아줌
//         if (title.className ===clickedClass){
//             title.className = "";
//         } else {
//             title.className = clickedClass;
//         }
//     }

//     title.addEventListener("click", handleTitleClick);

//     //class 이름 없애지 않고 class name 을 바꾸는 방법
//    const title = document.querySelector("div.hello:first-child h1");

//     function handleTitleClick() {
//         const clickedClass = "clicked"; 
//         if (title.classList.contains(clickedClass)){ //classList : class 들의 목록으로 작업하게 함
//             title.classList.remove(clickedClass);
            
//         } else {
//             title.classList.add(clickedClass);
//         }
//     }

//     title.addEventListener("click", handleTitleClick);


    //<toggle>
    const title = document.querySelector("div.hello:first-child h1");

    function handleTitleClick() {
        
        title.classList.toggle("clicked");
    }

    title.addEventListener("click", handleTitleClick);