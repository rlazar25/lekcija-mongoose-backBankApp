const express = require('express');
const mongoose = require('./database/config');

const app = express();

app.use(express.json());
app.use('/api/v1', require('./routes/index'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 