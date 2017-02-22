'use strict';

const express = require('express');
const app = express();

app.locals.siteTitle = "EI'BOOK";
app.param('name',(req,res,next,name)=>{
	console.log(name,app.locals.siteTitle);
	next();
})

app.get('/user/:name',(req,res)=>{
	res.send(`hello ${req.params.name}`);
})

app.listen(3000,(req,res)=>{
	console.log(`server start`);
})