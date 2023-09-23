const http = require("http");
const fs   = require("fs");
const url = require("url");

const myServer = http.createServer((req,res)=>{
  const log = `${Date.now()} : ${req.url} New Request received\n`
  const myUrl = url.parse(req.url,true);
  console.log(myUrl);

  fs.appendFile('log.txt',log,(err,data)=> {
    if(req.url=='/favicon.ico') res.end();
    switch(myUrl.pathname){
      case '/' : res.end("Homepage");
      break;
      case '/about' : 
      const username = myUrl.query.myname;
      res.end(`hi ${username}`);
      break;
      case '/search':
        const search = myUrl.query.search_query;
        res.end("Here are your results" + search);
      default :
      res.end("404 page not found")
    }
  });
});

myServer.listen(8000,()=> console.log('Server is running!'));