'use strict';
const express =require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(cookieParser());
app.use(session({
	secret:'seseeyoul'
}));


app.get('/num',(req,res)=>{

	if(!req.session.num){
		req.session.num = 1;
	}
	req.session.num++;
	//res.send()不能直接发送数字，会被当作状态码！！！
	res.send('req.session.num is ' +req.session.num);
});

app.get('/num2',(req,res)=>{

	res.send('req.session.num is ' +req.session.num);
});


app.listen(3000,()=>{
	console.log('server start 14')
})