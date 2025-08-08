const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // to parse JSON body

// In-memory books array
let books = [];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST a new book
app.post('/books', (req, res) => {
  const { id, title, author } = req.body;
  books.push({ id, title, author });
  res.status(201).json({ message: 'Book added', book: { id, title, author } });
});

// PUT update a book
app.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  const { title, author } = req.body;

  const book = books.find(b => b.id === bookId);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }

  book.title = title;
  book.author = author;

  res.json({ message: 'Book updated', book });
});

// DELETE a book
app.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;
  books = books.filter(b => b.id !== bookId);

  res.json({ message: 'Book deleted' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
