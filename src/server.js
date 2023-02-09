const express = require('express');
const port = process.env.PORT || 8080;

const app = express();

app.get('/', (request, response) => {
  response.send(`<!DOCTYPE html>
<html>
  <head>
    <title>Welcome to Korifi</title>
  </head>
  <body style="background-color: #292929;">
    <img style="display: block; margin-left: auto; margin-right: auto; width: 50%;" src="https://www.cloudfoundry.org/img/Korifi-logo-white.png"></img>
  </body>
</html>`);
});

app.listen(port);