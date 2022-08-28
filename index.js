// require("dotenv").config();
import express from 'express';

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hi!')
});

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK')
})