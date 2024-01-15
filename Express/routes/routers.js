const express=require("express");
var myrouter=express.Router();
//connection is same as mysqlconnection in dbconnet.js
var connection=require("../db/dbconnect")

//to display all products in tabular form
myrouter.get("/products",function(req,resp){
    connection.query("select * from products",(err,data,fileds)=>{
        if(err){
            resp.status(500).send("no data found");
        }
        else{
            //to create table view using data, write file
            //index.ejs in view folder, to access the file write as follows
            //console.log(data[0].pid+" "+data[0].pname+" "+data[0].qty);
            resp.render("index",{proddata:data})
        }
    })

});

//to display empty form to accept new product
myrouter.get("/addproduct",function(req,resp){
    resp.render("add-prod")
})

//to add new product in the table
myrouter.post("/insertprod",function(req,resp){
    connection.query("insert into products values(?,?,?,?)",[req.body.pid,req.body.pname,req.body.qty,req.body.price],(err,result)=>{
        if(err){
            resp.status(500).send("no data added");
        }else{
            resp.redirect("/products")
        }

    })
});

myrouter.get("/deleteprod/:prodid",function(req,resp){
    connection.query("delete from products where pid=?",[req.params.prodid],(err,result)=>{
        if(err){
            resp.status(500).send("no data deleted");
        }else{
            resp.redirect("/products")
        }
    })
});

myrouter.get("/updateprod/:prodid",(req,resp) =>{
    connection.query("select * from products where pid=?",[req.params.prodid],(err,data,fileds)=>{
        if(err){
            resp.status(500).send("no data found");
        }else{
            //console.log(data.pid+" "+data.pname+" "+data.qty);
            resp.render("update-prod",{pdata:data});
        }
    })
});

myrouter.post("/updateproduct",(req,resp)=>{
    connection.query("update products set pname=?,qty=?,price=? where pid=?",[req.body.pname,req.body.qty,req.body.price,req.body.pid],(err,result)=>{
        if(err){
            resp.status(500).send("Failed to update");
            console.log(err);
        }else{
            resp.redirect("/products")
        }
    })
});

//it will pass the reference of myrouter in router variable of app.js file
module.exports=myrouter;