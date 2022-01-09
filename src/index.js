// mandamos a llamar al modulo
const express = require('express');
// constante principal del programa
const app = express();

// configuraciones
app.set('port', 4000)

// rutas
app.get('/',(req,res) => {
    res.send('Bienvenido');
})

// servidor escuchando
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto',app.get('port'));
})