const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const router = require('./Router/index')
const app = express();
require('./DBconfig/ConnectionDB');
require('dotenv').config();

const PORT = process.env.PORT || 4545

app.use(express.json());
app.use(cookieparser());

app.use(cors({
    origin: process.env.FRONT_END_URL,
    credentials: true
}));


app.get('/',(req,res)=>{
    res.json({
        message : "Hello IDEAMAGIX"
    })
})

app.use('/Schedule/Lecture', router)

app.listen(PORT, ()=>{
    console.log("Server Running On Port "+PORT);
});