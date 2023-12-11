// btn = document.getElementById('btn');
// quote = document.getElementById('quote');
// author = document.getElementById('author');

var Quotes = [{
    quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: ' --Marilyn Monroe'
}, {
    quote: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: ' --Mahatma Gandhi'
}, {
    quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: ' --Ralph Waldo Emerson'
}, {
    quote: "“Be yourself; everyone else is already taken.”",
    author: ' --Oscar Wilde'
},
{
    quote: "“So many books, so little time.”",
    author: ' --Frank Zappa'
},
{
    quote: "“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”",
    author: ' --Albert Einstein'
},
{
    quote: "“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”",
    author: ' --Bernard M. Baruch'
},
{
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
    author: ' --Oscar Wilde'
},
{
    quote: "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”",
    author: ' -- H. Jackson Brown Jr.'
},
{
    quote: "“We accept the love we think we deserve.”",
    author: ' --Stephen Chbosky'
},
];

btns = document.querySelector("#Qbtn");
quote = document.querySelector(".quote");
author = document.querySelector(".author");


function addNewQuote() {
    var randomQuote = Math.floor(Math.random() * Quotes.length);
    quote.innerHTML = Quotes[randomQuote].quote;
    author.innerHTML = Quotes[randomQuote].author;


}
// function addNewauthor() {
//     var randomauthor = author[Math.floor(Math.random() * author.length)];
//     author.innerHTML = randomauthor;

// }

