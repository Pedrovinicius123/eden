const express = require('express');
const app = express();
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Jesus é Rei!")

})

app.get('/projeto', (req, res) => {
    res.json({site: "Projeto Eden"})

})

app.listen(port || 3000, () => {console.log("Servidor rodando")})
