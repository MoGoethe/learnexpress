'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

//app.use(bodyParser.urlencoded());//解析json
app.use(bodyParser.text());//解析文本，不常用
app.use(bodyParser.json());
//加入这一中间件 才会存在 req.body


app.post('/submit',(req,res)=>{
	console.log(req.headers);
	res.send(req.body);
	console.log(req.body)
})

app.listen(3000,(req,res)=>{
	console.log('server start');
})