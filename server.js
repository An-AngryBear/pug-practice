'use strict';

const express = require('express')
const app = express();

app.set('view engine', 'pug');

// In server.js, create a variable that stores an array of at least 5 objects. Each object 
// should contain a name and a price for a pastry. Using the res.render() method, send the 
// array to the template. Using Pug's iteration methods, display each pastry as a single 
// paragraph tag, e.g: Blueberry Muffin: 1.59 each

const pastries = [
    {name: 'Chocolate croissant',
    price: 1.99
    },
    {name: 'Doughnut',
    price: 1.15
    },
    {name: 'Souffle',
    price: 2.50
    },
    {name: 'Bear Claw',
    price: 1.99
    },
    {name: 'Scone',
    price: 1.00
    }
];

app.get('/', (req, res, next) => {
    res.render('index', {
        url: req.url
    });
});

app.get('/about', (req, res, next) => {
    res.render('about', {
        nowish: new Date(),
        url: req.url
    });

});

app.get('/inventory', (req, res, next) => {
    res.render('inventory', {
        pastries,
        url: req.url
    });
});


// Using Pug's conditional syntax in nav.pug, write logic to determine which page is currently 
// being displayed and only render the pages which are not being viewed.

app.listen(3000, () => console.log('listening on port 3000'));