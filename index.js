const express = require('express');
const app = express(); //Com parentes para importar todas as funções do express
const petRotas = require('./routes/pet');

app.use(petRotas);

app.listen(3000, () => {
    console.log('carnaval');
});