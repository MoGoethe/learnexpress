'use strict';

const express= require('express');

const app = express();

app.get('/download',(req,res)=>{
	res.download('./myfiles/download.txt');
})

app.listen(3000,(req,res)=>{
	console.log('server start');
})