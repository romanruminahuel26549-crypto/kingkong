const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 4000



app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
  .delete((req, res) => {
    res.send('delete the book')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
