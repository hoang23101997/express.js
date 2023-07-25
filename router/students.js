const express = require('express');
const studentsRouter = express.Router();

studentsRouter.get('/', (req, res) => {
    res.send("THIS IS STUDENTS PAGE")
})

studentsRouter.get('/:id', (req, res) => {
    const studentId = req.params.id;
    res.send(`Studen ID: ${studentId}`)
})



module.exports = studentsRouter;