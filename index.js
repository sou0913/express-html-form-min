const express = require('express');
const app = express();

const session = require('cookie-session');
app.use(
  session({
    name: "mysession",
    secret: "hogehoge",
  })
)

const parser = require("body-parser");
app.use(
  parser.urlencoded()
)

app.get('/', (req, res) => {
  req.session.views = {};
  req.session.views['userId'] = 1;
  res.send(`<form method="post" action="/"><input name="name"><input type="submit"></form>`);
})

app.post('/', (req, res) => {
  console.log(req.session.views['userId']);
  console.log(req.body.name);
  res.status(204).send();
})

app.listen(3000, () => {
  console.log('running: http://localhost:3000');
})