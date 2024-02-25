const mongoose = require('mongoose');
mongoose.set("strictQuery", true);
const schema = new mongoose.Schema({
    shortID : {
        type : String,
        required : true,
        unique : true
    },
    redirectURL : {
        type : String,
        required : true
    },
    visitHistory : [{ timestamp : { type : Number }}]
    },
    {timestamp : true}  
)

const URL = mongoose.model('url', schema);

module.exports = URL;