'use strict';

const express = require('express');
const app = express();

var version = 100;

function freshHandle(req,res,next){
	res.set('etag',version);
	req.fresh?res.send():next();
} 

app.get('/test',(req,res)=>{
	res.send('version is '+ version);
	//第一次访问打印 100，状态码是200；第二次访问还是100，状态码是304；
	//访问一次 /update 之后更新vesion之后再次刷新 /test 打印101 状态码为200；刷新后状态码为304;可用于节省带宽
})

app.get('/update',(req,res)=>{
	++version;
	res.send('updated')
})

app.listen(3000,()=>{
	console.log('server start');
})