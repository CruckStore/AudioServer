const express = require('express');
const path = require('path');
const app = express();

const soundsPath = path.join(__dirname, 'sounds');

app.use('/sounds', express.static(soundsPath));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur audio démarré sur http://localhost:${PORT}/sounds`);
});
