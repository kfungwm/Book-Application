var express = require('express');
var pug = require('pug');
var app = express();

var dataInMemory = [];
dataInMemory.push({
  title: "Harry Potter and the Sorcerer's Stone",
  slug: "Harry-Potter-and-the-Sorcerer's-Stone",
  imageURL: '../images/harry-book1.jpg',
  authorName: 'by J.K. Rowling, Mary GrandPré',
  description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.",
  numberOfPages: 320
});
dataInMemory.push({
  title: "Harry Potter and the Sorcerer's Stone",
  slug: "Harry-Potter-and-the-Sorcerer's-Stone",
  imageURL: '../images/harry-book2.jpg',
  authorName: 'by J.K. Rowling, Mary GrandPré',
  description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.",
  numberOfPages: 320
});
dataInMemory.push({
  title: "Harry Potter and the Sorcerer's Stone",
  slug: "Harry-Potter-and-the-Sorcerer's-Stone",
  imageURL: '../images/harry-book3.jpg',
  authorName: 'by J.K. Rowling, Mary GrandPré',
  description: "Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.",
  numberOfPages: 320
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
