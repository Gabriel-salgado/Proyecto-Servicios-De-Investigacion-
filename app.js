// let a = 10;
// let b = 20;
// let result = a * b;
// console.log(`El valor resultado de multiplicar ${a} por ${b} es ${result}`);
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send(`<center><font size="50px" color="blue">Bienvenidos</font></center>
    <hr>
    <font size="6px" color="red"> Este Es Una Creacion  De API Basica Utilizando Express, Lo Cual Es Necesario Para Nuestro Proyecto De Brindar Servicios De Investigacion A Estudiantes De Informatica De La Universidad.</font>
    `);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})