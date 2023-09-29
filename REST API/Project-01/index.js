const express = require('express');
const app = express();
const PORT = 8000;
const users = require('./MOCK_DATA.json');

//Getting HTML file
app.get("/users",(req,res)=>{
  const html = `
  <ul>
  ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
  </ul>
  `
  return res.send(html);
});
//Getting JSON File
app.get('/api/users',(req,res)=>{
  return res.json(users);
});
//Dynamic Path Parameters
// app.get('/api/users/:id',(req,res)=>{
//   const id = Number(req.params.id);
//   const user = users.find((user)=>user.id===id);
//   return res.json(user);
// });

// app.post('/api/users',(req,res)=>{
//   //Creates new User
//   return res.json({status:"pending"});
// });
// app.put('/api/users/:id',(req,res)=>{
//   //Edit the user with id
//   return res.json({status:"pending"});
// })
// app.patch('/api/users/:id',(req,res)=>{
//   //Edit the user with id
//   return res.json({status:"pending"});
// })
// app.delete('/api/users/:id',(req,res)=>{
//   //Delete the user with id
//   return res.json({status:"pending"});
// });
//If route of different HTTP methods are same
app.route('/api/users/:id')
.get((req,res)=>{
  const id = Number(req.params.id);
  const user = users.find((user)=>user.id===id);
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