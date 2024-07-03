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

// app.use(cors({
//     origin: process.env.FRONT_END_URL,
//     credentials: true
// }));

const allowedOrigins = [
    'http://localhost:5173', 
    'https://schedule-lec-front-end.vercel.app'
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true
};


app.get('/',(req,res)=>{
    res.json({
        message : "Hello IDEAMAGIX"
    })
})

app.use('/Schedule/Lecture', router)

app.listen(PORT, ()=>{
    console.log("Server Running On Port "+PORT);
});