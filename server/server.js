const express = require('express')
const app = express()
const PORT = 8002
const cors = require("cors");
const cookieParser =require('cookie-parser')
require('dotenv').config()
require('./config/mongoose.config')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

// app.use(cors({
//     origin:"http://localhost:3001" 
// }));

// app.use(
//     cors({
//         origin:"htpp://localhost:3000",
//     }),
// )
require('./routes/travel.routes')(app)
require('./routes/user.routes')(app)

app.listen(PORT, ()=>{
    console.log(`server is up on port ${PORT}`)
})
