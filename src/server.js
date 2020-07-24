require('@babel/register')();

const express = require('express');
const app = express();

const render = require('./render').default;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Bookinist</title>
      </head>
      <body>
        <div id="root">${render()}</div>
      </body>
    </html>
  `)
});

app.listen(3000, () => console.log('Server is run on 3000 port'))