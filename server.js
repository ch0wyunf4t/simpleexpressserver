const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(8080, () => { 
    console.log('Your node application is listening on port 8080. In your browser address bar, type in "http://localhost:8080" to see your app!')
})