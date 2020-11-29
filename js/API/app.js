var express = require('express');
var path = require('path');
var app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.get('/all', function(req, res) {
    res.sendFile(path.normalize(__dirname + '/others/all.json'))
})

app.get('/publish', function(req, res) {
    res.sendFile(path.normalize(__dirname + '/others/publish.json'))
})

app.get('/category_info', function(req, res) {
    res.sendFile(path.normalize(__dirname + '/others/category_info.json'))
})

app.get('/products_url', function(req, res) {
    res.sendFile(path.normalize(__dirname + '/products/products_url.json'))
})

app.get('/products_info_url', function(req, res) {
    res.sendFile(path.normalize(__dirname + '/products/products_info_url.json'))
})

app.get('/products_info_comments', function(req, res) {
    res.sendFile(path.normalize(__dirname + '/products/products_info_comments.json'))
})

app.get('/cart_info', function(req, res) {
    res.sendFile(path.normalize(__dirname + '/cart/cart_info.json'))
})

app.get('/cart_buy', function(req, res) {
    res.sendFile(path.normalize(__dirname + '/cart/cart_buy.json'))
})


app.listen(8010);