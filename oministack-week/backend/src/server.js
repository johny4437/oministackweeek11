const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT,()=>{
    console.log("SERVER IS RUNNING ON ::", PORT);
});