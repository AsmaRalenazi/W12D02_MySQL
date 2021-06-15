
const express = require('express');
const app = express();
require('dotenv').config();

const db = require('./db');
const books=require('./books')
//const users = require('./users');
app.use(express.json());


app.post("/books",books.insert)
app.get("/books",books.get_all)
app.put("/books/:book_id",books.update)
app.delete("/books/:book_id",books.deleteBook)
app.get('/order',books.orderBooks);
app.get('/price',books.nullPrice);
app.get('/price2',books.allPrice);




const PORT = 3000;
app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});
