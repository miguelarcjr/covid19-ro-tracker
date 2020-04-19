const express = require('express');
const app = express();
const path = require('path');

app.get('/', (request, response) =>{  
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})
app.use(express.static(__dirname + '/public'));
app.listen(3000, () => {
    console.log('server http://localhost:3000');
})