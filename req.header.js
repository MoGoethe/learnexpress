'use strict';

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
	console.log(req.headers);
})

app.listen(3000,()=>{
	console.log('server start');
})