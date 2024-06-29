const express = require('express')
const morgan=require('morgan');
const connectDB = require('./config/db');
const app = express()
const port = 3030

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

//middleware
app.use(express.json());
app.use(morgan("tiny"));

// app.use("/api",require("./routes/auth"));

//routes

app.use('/api', require("./routes/Createusers"));    //suraj


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//server
app.listen(port, async() => {

    try {
        await connectDB();
        console.log(`Example app listening on port ${port}`)
      }
      catch(err) {
        console.log(err);
      }
   
})