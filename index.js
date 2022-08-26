const express = require('express');
const tronWeb = require('tronweb');

const app = express()
const port = 2228

app.get('/', async (req, res) => {
  let newAddress = await tronWeb.createAccount();
  res.send(newAddress);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})