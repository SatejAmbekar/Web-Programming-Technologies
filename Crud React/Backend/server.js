const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "crud"
})

app.get('/', (req, resp)=> {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if(err) return resp.json(err);
        return resp.json(data);
    })
})

app.post('/create', (req,resp) => {
    const sql = "INSERT INTO student (name,email) VALUES (?)";
    const values =[
        req.body.name,
        req.body.email,
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return resp.json(err);
        return resp.json("created");
    })
})

app.put('/update/:id', (req,resp) => {
    const sql = "UPDATE student SET name = ?, email = ? WHERE id = ?";
    const id = req.params.id;
    const values =[
        req.body.name,
        req.body.email,
    ]
    db.query(sql, [...values, id], (err, data) => {
        if(err) return resp.json(err);
        return resp.json("updated");
    })
})

app.delete('/delete/:id', (req,resp) => {
    const sql = "DELETE FROM student WHERE id = ?";
    const id = req.params.id;
   
    db.query(sql, [ id], (err, data) => {
        if(err) return resp.json(err);
        return resp.json("deleted");
    })
})


app.listen(8081, ()=> {
    console.log("Listining...")
})