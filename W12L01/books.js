const db = require('./db');

const insert=(req,res)=>{
    const query = `INSERT INTO books (title,auther,publish_at,price) VALUES  (?,?,?,?);`;
    const {title,auther,publish_at,price} =req.body;
    const arr=[title,auther,publish_at,price];
    console.log("test1: ",title,auther,publish_at,price);
    db.query(query,arr,(err, result) => {
        console.log("test2: ",title,auther,publish_at,price);
      if (err) throw err;
      console.log('RESULT: ', result);
      res.json(result)
    });
}


const get_all=(req,res)=>{
    const query = `SELECT * FROM books`;
    db.query(query, (err, result) => {
      if (err) throw err;
      console.log('RESULT: ', result);
      res.json(result)
    });
}

const update=(req,res)=>{
    const id =req.params.id;
    const query = `UPDATE books SET title=req.body.title
    WHERE id =? `;
    db.query(query,id, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });

}
const deleteBook =(req,res)=>{
    const id =req.params.id;
    const query = `DELETE FROM books 
    WHERE id =? `;
    db.query(query,id, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });
    
}

const orderBooks =(req,res)=>{
    const query = `SELECT * FROM books
    ORDER BY id DESC;`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });
}

const nullPrice =(req,res)=>{
    const query = `SELECT price * ( ISNULL (price, 0))
    FROM books;`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });
}

const allPrice =(req,res)=>{
    const query = `SELECT price FROM books WHERE price !== null;`;
    db.query(query, (err, result) => {
        if (err) throw err;
        console.log('RESULT: ', result);
        res.json(result)
      });

module.exports={
    insert,
    get_all,
    update,
    deleteBook,
    orderBooks,
    nullPrice,
    allPrice,
}