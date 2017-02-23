'use strict';

const express = require('express');
const app = express();

const contorl = require('./contorl');
const route = require('./router');
const data = require('./data');

app.use()

app.get('/',(req,res)=>{

	
	res.send('hello world');
})


app.listen(3000,()=>{
	console.log('server slice start');
})