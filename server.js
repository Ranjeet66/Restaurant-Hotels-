const express = require('express');
const app= express();
const PORT = 3000;
const db = require('./dbConnection/db');
const Person = require('./models/person');
const MenuItem = require('./models/MenuItem');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req, res){
res.send("Welcome to my hotel");

});


const personRoutes = require('./Router/personRouter');
app.use('/person',personRoutes);

const menuItemRouter  = require('./Router/menuItemRouter');
app.use('/menuItem',menuItemRouter);

app.listen(PORT,(err,res)=>{
    if (err) {
        console.log('Internal server error',err);
    } else {
        console.log('Server is running on',PORT);
    }
});
