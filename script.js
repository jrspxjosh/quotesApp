// Varibles



const $btn =('#btn');
const $quote =('#quote');
const $author =('#author');
const url = 'https//codingaddictla.github.io/random-quotes/quotes.json';

$btn.click(getData);

function getData() {
  $.getJSON(url,jsonData);
}

function jsonData(data) {
  let random = Math.floor(Math.random()*data.length)

  $quote.html('<span>"</span>' + data [random].quote + '<span>"</span>');
  $author.html('<span>"</span>' + data [random].author + '<span>"</span>');

}
