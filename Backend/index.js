import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import BookRoute from './Route/BookRoute.js'
import userRoute from './Route/SignupRoute.js'
import cors from 'cors'



const app = express()
dotenv.config();
app.use(cors());
app.use(express.json())

const port = process.env.PORT || 4000

const URI  = process.env.MangodbURI;
 
try {
    mongoose.connect(URI,{
        useNewUrlParser :true,
        useUnifiedTopology :true
    });
    console.log("Connected to MangoDB")
    
} catch (error) {
    console.log("Didnt connect",error)
}

// app.get('/', (req, res) => {
//   res.send('Hi World!')
// })

  app.use('/book',BookRoute)
  app.use('/user',userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})