// ORDER OF OPERATIONS
// Fs read file
// Parse file
// Edit file (push new entry, update existing entry)
// Stringify file
// Write file

// Require fs
// Use it to write a file of JSON that will contain the notes
// Stored to memory, and JSON file
// Every time there is a get a get request, do fs.readfile
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Listening on PORT: http://localhost:${PORT}`));
