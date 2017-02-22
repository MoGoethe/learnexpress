'use strict';

const express = require('express');
const app = express();

app.get('/user/:id/:action',(req,res)=>{
	res.send(`
		<ul>
			<li>mothod=${req.method}</li>
			<li>hostname=${req.hostname}</li>
			<li>originalUrl=${req.originalUrl}</li>
			<li>path=${req.path}</li>
			<li>req.query=${JSON.stringify(req.query)}</li>
			<li>protocol = ${req.protocol}</li>
			<li>params = ${req.params}</li>
		</ul>	
	`)
})

app.listen(3000,()=>{
	console.log('server start');
})