const http = require('http');
const fs = require('fs');
const path = require('path');

const server=http.createServer((req,res)=>{
    let filepath='./public'+req.url;
    if(filepath==='./public/'){
        filepath='./public/index.html';
    }
    let ext=path.extname(filepath);
    let contentType='text/html';
    if(ext==='.css')contentType='text/css';

    fs.readFile(filepath,(err,data)=>{
        if(err){
            res.writeHead(404);
            res.end('File not found');
        }
        else{
            res.writeHead(200,{'content-type':contentType});
            res.end(data);
        }
    });
});

server.listen(3000,function(){
    console.log("Server is listening on port 3000");
});