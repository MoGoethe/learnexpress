'use strict';

const express = require('express');
const multer = require('multer');

const app = express();
const upload = multer({dest:'myfiles'});//指定存储目录
app.use(express.static('public3'));		//访问的页面(静态目录访问设置)

 app.use(upload.array('file1',3)); //不允许提交不同标签名的文件（）

app.post('/upload',(req,res)=>{
	console.log(req.body);
	console.log(req.file);
	console.log(req.files);
	res.redirect('/');
})

app.listen(3000,(req,res)=>{
	console.log('server upload2 start');
})