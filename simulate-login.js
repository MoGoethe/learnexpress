'use strict';
const express =require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const sessionFileStore = require('session-file-store')(session);
const consolidate = require('consolidate');

const app = express();

app.engine('html',consolidate.ejs);
app.set("views",__dirname+'/views');
app.set("view engine","html");


app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
	resave: false,
	saveUninitialized: false,
	//store:new sessionFileStore(), //服务器重开有效，session文件存储。
	cookie:{maxAge:20000},//设置cookie存在的时间，关闭之后20000ms之内依然存在。浏览器关闭重新打开有效
	secret:'seseeyoul'  //加密字段，随意设置
}));

const userDB = [
	{name:'seaseeyoul',password:'123456'},
	{name:'mogoethe',password:'123456'},
	{name:'dabao',password:'dabao'}
]

app.get('/',(req,res)=>{

	if(!req.session.userid){
		res.redirect('/login');
	}
	res.render('home');
});

app.get('/login',(req,res)=>{
	res.render('login');
})

app.post('/login',(req,res,next)=>{
	const loginname = req.body.loginname;
	const loginpassword = req.body.loginpassword;
	let usernameError,
		passwordError;
	for(let i=0;i<userDB.length;i++){
		if(userDB[i].name == loginname && userDB[i].password == loginpassword){
			req.session.userid = loginname;
		}else if(i==userDB.length){
			usernameError="用户名错误";
			passwordError="密码错误";
		}
	}
	if(req.session.userid){
		res.redirect('/');
	}else{
		res.render('login',{error:{usernameError:usernameError,passwordError:passwordError}});
	}
	
})


app.listen(3000,()=>{
	console.log('server start 15')
})






















