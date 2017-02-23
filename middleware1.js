'use strict';

const express = require('express');

const app = express();

let status = '';
function getstatus(req, res, next) {
	status =  req.method;
	next('a');
};

app.get('/',getstatus,(result,req,res)=>{
	console.log(status);
	res.send(status);
})

app.listen(3000,()=>{
	console.log('server start');
})