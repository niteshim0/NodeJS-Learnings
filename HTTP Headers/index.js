const express = require('express');
const app = express();
const PORT = 8000;


//Custom Header Example
app.get('/api/users',(req,res)=>{
  //always use X with Custom Headers--GOOD PRACTICE
  res.setHeader("X-MyName","Nitesh-Kushwaha");//Custom Header
  return res.json({msg:"Learning HTTP Headers"});
});

app.listen(PORT,()=>console.log(`Server running at Port:${PORT}`));