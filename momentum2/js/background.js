const images = [
    "0.PNG",
    "1.PNG",
    "2.PNG"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

console.log(bgImage)

bgImage.src = `img/${chosenImage}`; //javascript에서 src를 추가해줌/img : 파일이름

console.log(bgImage);

document.body.appendChild(bgImage) //appendchild()는 body 에 html 추가 <<>>prepend:body 맨 위에 추가