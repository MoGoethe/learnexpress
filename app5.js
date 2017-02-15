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
/*
1.	abc?d  表示c可有可无
2.  abc+d  表示c至少出现一次，末尾为d
3.  abc\*d  表示 cd中间可以加入任意字符，末尾是d
4. ／正则表达式／

*/
app.get('/user/:id',(req,res,next)=>{
	//这里只处理正常逻辑
	res.send('hello '+req.params.id);
})

app.listen(3000,()=>{
	console.log('server start');
})