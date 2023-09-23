const http = require("http");
const fs   = require("fs");

const myServer = http.createServer((req,res)=>{
  const log = `${Date.now()} : ${req.url} New Request received\n`
  fs.appendFile('log.txt',log,(err,data)=> {
    switch(req.url){
      case '/' : res.end("Homepage");
      break;
      case '/about' : res.end("This is Nitesh Kushwaha");
      break;
      default :
      res.end("404 page not found")
    }
  });
});

myServer.listen(8000,()=> console.log('Server is running!'));