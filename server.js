const express = require('express');
const app = express();
const route = require('./routes/auth');
app.use('/auth',route);


// app.get('/',(req,res)=>(
//     res.status(200).send('Hello World')
// ))
app.listen(5173,()=>console.log('Server is running on port 3000'));