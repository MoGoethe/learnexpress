'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded());

app.post('/submit',(req,res)=>{
	res.send(req.body);
})

app.listen(3000,(req,res)=>{
	console.log('server start');
})