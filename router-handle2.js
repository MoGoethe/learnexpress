'use strict';

const express = require('express');
const app = express();

app.param('id',(req,res,next,id)=>{
	//对id进行拦截处理
	if(id == 'abc' || id=='123'){
		res.send(404);
	}else{
		next();
	}
})

app.get('/user/:id',(req,res,next)=>{
	//这里只处理正常逻辑
	res.send('hello '+req.params.id);
})

app.listen(3000,()=>{
	console.log('server start');
})