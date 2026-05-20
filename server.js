const express = require('express');
const app = express();
const conenctdb = require('./db');
const port = 3000;

//connecting to the database
connectdb();

//sending message to the browser
app.get('/', (req, res) => {
  res.send('Hello World!');
}
);
//listening for the PORT
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}
);