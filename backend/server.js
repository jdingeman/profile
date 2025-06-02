const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const usersRoutes = require('./routes/userRoutes');
app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
