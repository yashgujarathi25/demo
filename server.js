const express =require('express');
const app = express();

app.get("/",function(req,resp){
    resp.send("<h1>Hello World</h1>")
});

app.listen(3000);
console.log("Server running on port 3000 ");