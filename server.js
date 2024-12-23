const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const soundsPath = path.join(__dirname, 'sounds');

app.use('/sounds', express.static(soundsPath));

app.get('/sounds', (req, res) => {
  fs.readdir(soundsPath, (err, files) => {
    if (err) {
      return res.status(500).send('Error reading files');
    }
    
    const fileLinks = files.map(file => `<li><a href="/sounds/${file}">${file}</a></li>`).join('');
    const html = `
      <html>
        <head>
          <title>Available Audio Files</title>
        </head>
        <body>
          <h1>Available Audio Files</h1>
          <ul>
            ${fileLinks}
          </ul>
        </body>
      </html>
    `;
    res.send(html);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Audio server started at http://localhost:${PORT}/sounds`);
});
