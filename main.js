let express = require('express');
let app = express();

app.listen(8080);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.render('index', {})
});