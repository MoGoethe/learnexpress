'use strict';

const express = require('express');
const multer = require('multer');

const app =express();

app.use(express.static('public2'));

const upload = multer({ dest: 'myfiles' })

//app.use(upload.single('name2'));
app.use(upload.array('name2'));

app.post('/upload',(req,res)=>{
	console.log(req.body);
	//console.log(req.files);
	console.log(req.files);
	res.redirect('/');
})

app.listen(3000,(req,res)=>{
	console.log('server start12');
})