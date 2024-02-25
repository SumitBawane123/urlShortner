const express = require('express');
const urlRoute = require("./routes/url")
const { connectDB } =  require("./connectDB")
const URL = require("./model/url")
const app = express();
const PORT = 3000;
const mongoDBURL = "mongodb://localhost:27017/shortID"

//creating connection to hte Database
connectDB(mongoDBURL)
.then((res)=>
console.log("DB Connected "))

app.use(express.json());

app.use("/url",urlRoute)

app.get('/:shortID', async(req,res)=>{
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({
        shortID
    },{
        $push :{
            visitHistory : {
                timestamp : Date.now()
            }
        }
    })
    console.log('Gettng URL : ', entry.redirectURL)
    res.redirect(entry.redirectURL)
})


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})