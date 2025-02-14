const express = require('express')
const routes = express.Router()

let plantInfo = [
    {'name': 'Zamiacuca', 'info': 'Uma planta muito bonita!'},
    {'name': 'Zamiacuca', 'info': 'Uma planta muito bonita!'},
    {'name': 'Zamiacuca', 'info': 'Uma planta muito bonita!'},
    {'name': 'Zamiacuca', 'info': 'Uma planta muito bonita!'},
    {'name': 'Zamiacuca', 'info': 'Uma planta muito bonita!'},
    {'name': 'Zamiacuca', 'info': 'Uma planta muito bonita!'}
]

routes.get("/", (req, res) => {
    res.json({ola:'seja bem vindo'})

})

routes.get("/:name", (req, res) => {
    const plant = req.params.name
    const plantI = plantInfo.find(i => i.name == plant);
   
    if (!plantI){
        res.status(404).json(
            {error: "Plant not available", searchQuery:plant}

        );

    } else {
        res.status(200).json(plantI)

    }

})

module.exports = routes;
