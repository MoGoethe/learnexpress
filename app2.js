var express= require('express');
var app =express();

var router = express.Router({
	mergeParams:true,    //是否合并副路由的信息
	caseSensitive:false,  //路由地址是否区分大小写。
	strict:false  //路径地址严格模式
});

app.get('/',(req,res)=>{
	res.send('home');
})

router.get('/',(req,res,next)=>{
	res.send('router info'+req.params.name+','+req.params.group);

})

app.get('/user/:name/:group',(req,res,next)=>{
	const name = req.params.name;
	const group = req.params.group;
	next();
})

app.use('/user/:name/:group',router);

app.listen(3000,()=>{
	console.log('server start');
})