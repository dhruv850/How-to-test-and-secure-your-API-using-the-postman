const express = require('express');
const router = express.Router();

const {
    requireSignin,isAuth, isAdmin
} =require('../controller/auth');

router.get('/secret/:userId',requireSignin,isAuth,isAdmin, (req,res) =>{
res.json({
    user: req.profile
    });
});


module.exports= router;