const express=require('express');
const app=express();
const http=require('http');
const port=4000;
console.log(__dirname);
app.use("/",express.static(__dirname));
app.use("/scripts",express.static(__dirname+'/scripts'));
http.createServer(app).listen(port,()=>{
    console.log("express server listening at "+port+' port.');
    //console.log("express server listening at ${port} port.");
});

