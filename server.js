const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {
    Recipes
} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

// we're going to add some items to ShoppingList
// so there's some data to look at
Recipes.create('Chocolate milk', ['chocolate', 'milk', 'sugar']);
Recipes.create('Peanutbutter and Jelly', ['peanutbutter', 'jelly', 'bread']);
Recipes.create('Omlette', ['eggs', 'cheese', 'peppers', 'onions']);

// when the root of this router is called with GET, return
// all current ShoppingList items
app.get('/Recipies', (req, res) => {
    res.json(Recipes.get());
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
