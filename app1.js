const express = require('express');
const route = express.Router();
//子路由
const subRoute = express.Router();
const app = express();


/*
	notice:
	调用res.send()之后不能再调用next()；或者说调用了res响应函数体之后就不能再调用next()函数
	可以通过：
	app.use('/address',middleware1);
	app.use('/address',middleware2);的方式调用多个中间件，为特定地址添加中间件
*/


//app调用路由，
app.use('/user',route); //路由第一层

//app调用的中间件
function middleware(req,res,next){
	console.log('app middleware');
	next();
}
//路由器调用的中间件
function routeMiddleware1(req,res,next){
	console.log('route middleware1');
	next();
}
function routeMiddleware2(req,res,next){
	console.log('route middleware2');
	next();
}
//子路由调用的中间件
function subMiddleware(req,res,next){
	console.log('subRoute middleware');
	next();
}

//app调用中间件
app.use(middleware);

//通过路由调用的中间件,调用多个中间件。
route.use(routeMiddleware1);
route.use(routeMiddleware2);

//通过路由的请求
route.get('/id',(req,res)=>{//127.0.0.1:3000/user/id
	res.send('user/id');
})

//不通过路由请求
app.get('/',(req,res)=>{
	res.send('home page!');
})

//路由调用子路由
route.use('/subRoute',subRoute);//路由第二层
//子路由调用子路由中间件
subRoute.use(subMiddleware);
//子路由请求
subRoute.get('/id',(req,res)=>{//具体请求地址，第三层  地址为127.0.0.1:3000/user/subRoute/id
	res.send('subroute page');
})


//监听端口号
app.listen(3000);