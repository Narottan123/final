const express = require('express');
const bodyParser = require ('body-parser');
const route =  require("./route/route");

const {default : mongoose}  = require('mongoose');
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


mongoose.connect("mongodb+srv://narattamsarkar91:pJO4W2WQoODI53Fn@cluster0.fqieqnn.mongodb.net/blog_projectS", {
useNewUrlParser: true 
}).then(()=> {
    console.log("MongoDB is Connected");

}).catch((err) => {
console.log(err);
})
app.use('/',route)


app.listen(process.env.PORT||3000,()=>{
    console.log(`Server is running on port ${process.env.PORT||3000}`)
})


