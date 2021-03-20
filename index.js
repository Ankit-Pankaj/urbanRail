
const express = require('express');
const bodyParser= require('body-parser');
const Router= require("./routes/router");
const app= express();

app.use(express.static("public"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

var data= require("./data.json");
app.use("/", Router);

app.listen(3000, function(){
    console.log("Server is running perfectly on 3000");
});


