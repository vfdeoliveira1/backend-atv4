<<<<<<< Updated upstream:src/index.js
import express from 'express'
import dotenv from 'dotenv'
=======
import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import userRoute from './routes/user.route.js'

>>>>>>> Stashed changes:api/index.js

dotenv.config();

const app = express()

app.use(express.json());

app.use("/users", userRoute);
app.get('/', (req, res) => {
    res.send({message: 'Hello World!'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}/`);
});