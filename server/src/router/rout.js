const express = require('express');
const {createUse ,getUser ,login} = require('../controller/user')
const router = express.Router();


//----------------------customer API's
router.post('/create/user',createUse);
router.post('/login',login);
router.get('/get/user',getUser);

//--------------------------test API
router.get('/' , (_,res) => res.send({status:true, message:'server running'}));
//-------------------------BAD URLS
router.all('*',(_,res) => res.status(404).send({status:false, message:'URLS NOT FOUND'}));

module.exports = router;