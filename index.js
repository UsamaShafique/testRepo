const express = require('express');
const dotenv =  require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send(`Server is listening on PORT ${PORT}`);
});

app.listen(PORT);