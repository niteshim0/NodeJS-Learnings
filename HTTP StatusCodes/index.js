const express = require('express');
const app = express();
const PORT = 8000;
const users = require('./MOCK_DATA.json');
const fs = require('fs');


app.get('/api/users',(req,res)=>{
  return res.status(200).json(users);//everything is okay status code
});

app.post('/api/users',(req,res)=>{
  //Creates new User 
  const body = req.body;  
  if(!body){
    return res.json(400).json({msg:"input data is required"});//something wrond doing by client
  }
  users.push({...body,id:users.length+1});
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    return res.status(201).json({status:"success",
                    id: users.length});//something gets created
  });
});
app.route('/api/users/:id')
.get((req,res)=>{
  const id = Number(req.params.id);
  const user = users.find((user)=>user.id===id);
  if(!user) return res.json({error: "user not found"});
  return res.json(user);
})
.patch((req,res)=>{
  //Edit the user with id
  return res.json({status:"pending"})}
)
.delete((req,res)=>{
    //Delete the user with id
    return res.json({status:"pending"});
});



app.listen(PORT,()=>console.log(`Server running at Port:${PORT}`));