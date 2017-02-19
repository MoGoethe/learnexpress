'use strict';
const express =require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionFileStore = require('session-file-store')(session);

const app = express();

app.use(cookieParser());
app.use(session({
	store:new sessionFileStore(), //服务器重开有效，session文件存储。
	cookie:{maxAge:20000},//设置cookie存在的时间，关闭之后20000ms之内依然存在。浏览器关闭重新打开有效
	secret:'seseeyoul'  //加密字段，随意设置
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