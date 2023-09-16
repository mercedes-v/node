const express = require('express');
const app = express();
const port = 3000;

const myInfo = {
  name: 'Mercedes valencia Arana ',
  areasOfExpertise: ['HTML,CSS,Express'],
  hobbies: ['practice', 'research on the topics of study ', 'watch series'],
};

app.get('/', (req, res) => {
  res.json(myInfo);
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
