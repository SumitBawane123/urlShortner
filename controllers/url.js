const shortid = require('shortid');
const URL = require('../model/url')


async function handleGenerateURL(req,res){
    const longURL = req.body.url;
    if(!longURL) return res.status(400).json({error : 'URL is required'})
    const newShortID = shortid();
    await URL.create({
        shortID : newShortID,
        redirectURL : longURL,
        visitHistory : []
    });
   // await URL.create();  
    return res.json({ id : newShortID})
}

module.exports = { handleGenerateURL }