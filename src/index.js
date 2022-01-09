// mandamos a llamar al modulo
const express = require('express');
// constante principal del programa
const app = express();

// configuraciones
app.set('port', 4000)

// servidor escuchando
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto',app.get('port'));
})