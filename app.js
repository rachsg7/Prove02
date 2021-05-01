const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

const prove02Routes = require('./prove02-routes');

app.set('view engine', 'ejs'); // Tell the express engine that you're using pug for dynamic html content
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // This is what allows us to serve static files

app.use(prove02Routes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404 Page Not Found', path: 'None' });
});



app.listen(process.env.PORT || 3000);