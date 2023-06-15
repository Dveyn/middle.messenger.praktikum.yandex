const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/dist`));

app.get('*', ( res: { sendFile: (arg0: any) => void; }) => {
  res.sendFile(path.join(__dirname, '/dist/', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`My Chat listening on port ${PORT}!`);
});
