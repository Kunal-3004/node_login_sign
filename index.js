const express = require('express');
const app = express();
const cors = require('cors');
var bodyParser=require('body-parser');

app.use(cors());



app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
const userRouter = require('./user');
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log("Your server started on port 3000");
});
