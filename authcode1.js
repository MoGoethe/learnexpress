'use strict';

const express = require('express');
const session =require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const consolidate = require('consolidate');

const app = express();

app.engine('html',consolidate.ejs);
app.set('view engine','html');
app.set('views',__dirname+'/views');

app.use(cookieParser());
app.use(session({
	secret:'xxxx',
	cookie:{
		maxAge:100000,
	}
}));

function randomNum(x){
	if(!x)x=10;
	return Math.round(Math.random()*x);
}

app.get('/validate',(req,res)=>{
	const a = randomNum();
	const b = randomNum();

	req.session.a = a;
	req.session.b = b;

	res.locals.msg = `
		${a}+${b} = 
	`;
	res.render('validate');
});

app.post('/validate',(req,res)=>{

})

app.listen(3000,()=>{
	console.log('seerver authcode start');
})