const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const router = require('./Router/index')
const app = express();
require('./DBconfig/ConnectionDB');
require('dotenv').config();

const PORT = process.env.PORT || 4545

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

const customCors = (req, res, next) => {
    const allowedOrigins = ['http://localhost:4545', 'https://schedule-lec-front-end.vercel.app'];

    // Check if the request origin is allowed
    if (allowedOrigins.includes(req.headers.origin)) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
    }

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        return res.status(200).json({});
    }

    next();
};

// Use custom CORS middleware
app.use(customCors);

app.get('/',(req,res)=>{
    res.json({
        message : "Hello IDEAMAGIX"
    })
})

app.use('/Schedule/Lecture', router)

app.listen(PORT, ()=>{
    console.log("Server Running On Port "+PORT);
});