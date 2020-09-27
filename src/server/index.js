var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const app = express()
const dotenv = require('dotenv')
dotenv.config();
app.use(express.static('dist'))

console.log(__dirname)
app.use(cors());


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
    console.log(`Your API KEY is ${process.env.API_KEY}`);
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/sentiment', function (req, res) {
    console.log(req.query.url);
    postText(req.query.url)
        .then(function(result){
            res.send(result);
        });
})

const fetch = require("node-fetch");

const postText = async (address)=>{
    const res = await fetch(
        process.env.API_URL,
        {
            method: 'POST',
            credentials: 'same-origin',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(
            {
                "key" : process.env.API_KEY,
                "lang" : "auto",
                "url" : address
            })
        }
    );
    try{
        return await res.json();
    } catch(e){
        console.log("error", e);
    }
}


