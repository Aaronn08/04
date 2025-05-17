require('dotenv').config();
const express = require('express');
const axios = require('axios');


const app = express();
const PORT = 3000;
const OMDB_API_KEY = process.env.OMDB_API_KEY;

app.get("/", (req,res)=>{
    res.send("it works")
})

app.get("/search", async(req,res)=>{
    const movie = req.query.movie;
    if (!movie)
        return res.status(400).json({error : "movie query is required"});

    try{
        const response= await axios.get (`https://www.omdbapi.com/?s=${movie}&apikey=${OMDB_API_KEY}`);
        res.status(200).json(response.data);
    
    }
    catch(err)
    {   res.status(404).json({error:"movie is not found"})}
})


// -X GET "http://localhost:3000"
// npm run start
app.get("/details", async (req,res)=>{
    const movieId = req.query.movieId;
    If (!movieId)
        return res.status(400).json({error: "movie id is required"});
})

app.listen(PORT,()=>{
    console.log(`Server is running on https://localhost:${PORT}`);
})

