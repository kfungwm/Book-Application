var express = require('express');
var pug = require('pug');
var app = express();

var dataInMemory = [];
dataInMemory.push({
  title: "Harry Potter and the Sorcerer's Stone",
  slug: "harry-Potter-and-the-Sorcerer's-Stone",
  imageURL: '../images/harry-book1.jpg',
  authorName: 'by J.K. Rowling, Mary GrandPré',
  description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.",
  numberOfPages: 320
});
dataInMemory.push({
  title: "Harry Potter and the Chamber of Secrets",
  slug: "Harry-Potter-and-the-Chamber-of-Secrets",
  imageURL: '../images/harry-book2.jpg',
  authorName: 'by J.K. Rowling, Mary GrandPré',
  description: "The Dursleys were so mean and hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he's packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike.",
  numberOfPages: 352
});
dataInMemory.push({
  title: "Harry Potter and the Prisoner of Azkaban",
  slug: "Harry-Potter-and-the-Prisoner-of-Azkaban",
  imageURL: '../images/harry-book3.jpg',
  authorName: 'by J.K. Rowling, Mary GrandPré',
  description: "Harry Potter is lucky to reach the age of thirteen, since he has already survived the murderous attacks of the feared Dark Lord on more than one occasion. But his hopes for a quiet term concentrating on Quidditch are dashed when a maniacal mass-murderer escapes from Azkaban, pursued by the soul-sucking Dementors who guard the prison. It's assumed that Hogwarts is the safest place for Harry to be. But is it a coincidence that he can feel eyes watching him in the dark, and should he be taking Professor Trelawney's ghoulish predictions seriously?",
  numberOfPages: 435
});


function findBook(slug) {
  // iterate through the array as soon as ('books/' + slug) is the permalink
  // of the book in the loop return the book
  for (var i = 0; i < dataInMemory.length; i++) {
    if (dataInMemory[i].slug === slug) {
      return dataInMemory[i];
    }
  }
}

// lets us access files inside the public folder via http:
app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  response.redirect('/books');
});

app.get('/books', function(req, res) {
  console.log('Requesting /books');
  res.send(pug.renderFile('views/index.pug', { books: dataInMemory }));
});

app.get('/books/*', function(req, res) {
  var foundBook = findBook(req.params[0]);
  console.log(foundBook);
  res.send(pug.renderFile('views/book.pug', { book: foundBook }));
});

app.listen(3001, function() {
  console.log('Web server is now running on port 3001');
});
