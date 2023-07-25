const express = require('express');
const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
    res.json({
        result: "DANG NHAP THANH CONG"
    }); 
});

authRouter.get('/:id', (req, res) => {
    res.json({
        name: 'BuiLeHoang',
        email: 'builehoang1997@gmail.com'
    });
});

module.exports = authRouter;