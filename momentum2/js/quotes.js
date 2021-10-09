const quotes = [
    {
        quote: "1",
        author: "Walt Disney"
    },
    {
        quote: "2",
        author: "Walt Disney"
    },
    {
        quote: "3",
        author: "Walt Disney"
    },
    {
        quote: "4",
        author: "Walt Disney"
    },
    {
        quote: "5",
        author: "Walt Disney"
    },
    {
        quote: "6",
        author: "Walt Disney"
    },
    {
        quote: "7",
        author: "Walt Disney"
    },
    {
        quote: "8",
        author: "Walt Disney"
    },
    {
        quote: "9",
        author: "Walt Disney"
    },
    {
        quote: "10",
        author: "Walt Disney"
    },
    

    ];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //Math.random 은 0에서 1사이의 랜덤한 숫자
console.log(Math.floor(Math.random() * quotes.length )) // object 내에서 10번째 가지고 올 수 있음 >>0부터 시작하기 때문에

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;