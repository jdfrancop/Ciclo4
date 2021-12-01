const express=require("express");
const app=express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("tu ruta aqui",(req,res)=>{
    //get news
});

app.get(
    "tu ruta aqui",
    (req,res)=>{
        //get news
    }
);

app.post("tu ruta aqui",(req,res)=>{
    //create village
});
module.exports=app;