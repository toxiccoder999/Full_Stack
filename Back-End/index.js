const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose'); 


const Movies = require('./Models/Movies');
const Student = require('./Models/Student');
const app = express();
app.use(cors());
app.use(express.json());

const port = 3000;


mongoose.connect("mongodb+srv://om:h30Uu40jgPedohki@cluster0.v483u.mongodb.net/yourDatabaseName")
    .then(() => console.log("Connected to MongoDB!"))
    .catch((error) => console.error("MongoDB connection error:", error));


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/movies',async(req,res)=>{
  try
  {
    const newData=await Movies.find({});
    res.status(200).json(newData);
    console.log(newData);
  }
  catch
  {
    res.status(500).json({message:"Internal"});
  }
});

app.post('/getMovies', async (req, res) => {
    try {
        const newData = new Movies(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/getStud',async(req,res)=>{
  try
  {
    const newData=await Student.find({});
    res.status(200).json(newData);
    console.log(newData);
  }
  catch
  {
    res.status(500).json({message:"Internal"});
  }
});
app.post('/postStudent', async (req, res) => {
  try {
      const newData = new Student(req.body);
      await newData.save();
      res.status(201).json(newData);
  } catch (error) {
      console.error("Error fetching movies:", error);
      res.status(500).send('Internal Server Error');
  }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
