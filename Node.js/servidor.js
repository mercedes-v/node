const http = require('http');
const chalk = require('chalk');

const hostname = 'localhost';
const port = 8000; 

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  const responseData = {
    name: 'Mercedes ',
    message: 'Hola desde mi servidor Node.js!',
  };

  res.end(JSON.stringify(responseData));

  console.log(chalk.green(`Servidor en funcionamiento en http://${hostname}:${port}`));
});

server.listen(port, hostname, () => {
  console.log(chalk.green(`Servidor escuchando en http://${hostname}:${port}`));
});
