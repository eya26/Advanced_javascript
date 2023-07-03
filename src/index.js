console.log('Hello World!')

const express = require('express');

const App = express();

App.get('/',(request, response) => {
    return response.status(200).send('<h1>It works !</h1>');
});

App.listen(9000, () => {
    console.log('Server running on http://localhost:9000')
});



