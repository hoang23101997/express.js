const express = require('express');
const profileRouter = express.Router();

profileRouter.get('/:id/:name', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    res.send({data:`ID: ${id}, name: ${name}`})
})

module.exports = profileRouter;