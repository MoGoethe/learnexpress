'use strict';

const express = require('express');
const app = express();

const route = express.Router();

const db = {
	'001':{'name':'seaseeyoul'},
	'002':{'name':'mogoethe'}
}

route.param('id',(req,res,next,id)=>{
	//设置 res.argName 可以全局获取，通过 res.argNAme;
	//也可以是 req.argName
	let username = res.locals.username = db[id].name;
	if(username){
		next();
	}else{
		res.sendStatus(404);
	}
})

route.use('/user/:id',(req,res,next)=>{
	//路由只返回响应结果，逻辑判断放到中间件中处理
	res.send(`hello ${res.locals.username}`)
})

app.use('/',route);

app.listen(3000,()=>{
	console.log('server start');
})