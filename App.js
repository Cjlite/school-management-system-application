const express = require('express');
const bodyParser = require('body-parser');
const studentRegistrationRoutes = require('./routes/api');
const db = require('./config/db');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', studentRegistrationRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
