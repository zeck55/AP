import { update_await_block_branch } from 'svelte/internal';

const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = process.env.PORT || 80;
const path = require('path');

const url
 = "mongodb+srv://cluster0.0eoppxn.mongodb.net/myFirstDatabase"; --apiVersion1, --username, Admin;

async function connect(){
    try{
        await mongoose.connect(url);
        console.log("Connect to MongoDB");

    }
    catch (error){
        console.error(error);
    }
}

connect();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
});

app.listen(port, () => {
    console.log(`server is up port ${port}`)
});


