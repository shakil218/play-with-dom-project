
  const quotes = [
    {
      quote: "The only limit to our realization of tomorrow is our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      person: "Martin Luther King Jr."
    },
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      person: "Ralph Waldo Emerson"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "The purpose of our lives is to be happy.",
      person: "Dalai Lama"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      person: "John Lennon"
    },
    {
      quote: "Get busy living or get busy dying.",
      person: "Stephen King"
    },
    {
      quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
      person: "Brian Tracy"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "Do not watch the clock. Do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "Keep your face always toward the sunshine—and shadows will fall behind you.",
      person: "Walt Whitman"
    },
    {
      quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      person: "Ralph Waldo Emerson"
    },
    {
      quote: "The best way to predict the future is to invent it.",
      person: "Alan Kay"
    },
    {
      quote: "You can't cross the sea merely by standing and staring at the water.",
      person: "Rabindranath Tagore"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      person: "Confucius"
    },
    {
      quote: "Everything you’ve ever wanted is on the other side of fear.",
      person: "George Addair"
    },
    {
      quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
      person: "C.S. Lewis"
    }
  ]





document.querySelector('#quote').addEventListener('click',function(){
  const quoteParagraph = document.querySelector('.quote-p')
  const quoteAuthor = document.querySelector('.person')

  const randomQuote = Math.floor(Math.random() * quotes.length)
  quoteParagraph.innerText = quotes[randomQuote].quote;
  quoteAuthor.innerText = quotes[randomQuote].person;
})