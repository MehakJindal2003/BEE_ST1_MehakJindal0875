const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const router=require('./routes/routes');

app.use(express.json());
app.use(cors());
app.use('/',router);

mongoose.connect("mongodb+srv://mehak0875be21:Mehak2003@cluster0.yfnoo31.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    app.listen(5000);
})
.then(()=>console.log("Database Connected"));