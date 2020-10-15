var express = require('express');
var app = express();

app.get('/', c_inicio);
app.get('/clientes', c_clientes);
app.get('/productos', c_productos);

function c_inicio(req, res) {
    res.send('<h1>Hola EXPRESS</h1>');
}

function c_clientes(req, res) {
    res.send(`<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <style type="text/css">
            h1 {text-align: center}
            h2 {text-align: left}
            h3 {text-align: right}
            h4 {text-align: justify}
   </style>
    </head>
    <body>
            <h1>Listado de Clientes</h1>
            </br>
            <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombres</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Teléfono</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mónica</td>
                <td>Torres</td>
                <td>986536584</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Steve</td>
                <td>Huarca</td>
                <td>986536584</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Carlos</td>
                <td>Huaynates</td>
                <td>986536584</td>
            </tr>
            </tbody>
        </table>
    </body>
</html>`);
}

function c_productos(req, res) {
    res.send(`<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title></title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <style type="text/css">
            h1 {text-align: center}
            h2 {text-align: left}
            h3 {text-align: right}
            h4 {text-align: justify}
   </style>
    </head>
    <body>
            <h1>Listado de Productos</h1>
            </br>
            <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombres</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Leguia</td>
                <td>2.50 soles</td>
                <td>30</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Detergente</td>
                <td>2.50 soles</td>
                <td>20</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Jabon</td>
                <td>3.00 soles</td>
                <td>40</td>
            </tr>
            </tbody>
        </table>
    </body>
</html>`);
}

function c_server(req, res) {
    var host = server.address().address;
    var port = server.address().port;
    console.log(host + ' : '+port);
}

var server = app.listen(5000,c_server);