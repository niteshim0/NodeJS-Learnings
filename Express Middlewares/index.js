const express = require('express');
const app = express();
const PORT = 8000;
const users = require('./MOCK_DATA.json');
const fs = require('fs');

//Middlewares-Plugins
app.use(express.urlencoded({extended:false}));//parse the form data
//BTS working //since middlewares have access to both req and res object it takes the req object and change or replace it to the value given by this middleware and this value is passed on to the next middleware(if any) in request-response cycle.

app.use((req,res,next)=>{
  console.log("I will make your program infinitely stuck since i am not calling next middleware or ending the req-res cycle");
});

app.use((req,res,next)=>{
  console.log("I am the part of your req-res cycle , do operations on me and move to next middleware in req-res cycle");
  next();
});
app.use((req,res,next)=>{
  return res.json({message : "Yeah I am the middleware that ends"});
});



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

app.post('/api/users',(req,res)=>{
  //Creates new User 
  const body = req.body;  
  users.push({...body,id:users.length+1});
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    return res.json({status:"success",
                    id: users.length});
  });
});
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