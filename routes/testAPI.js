const express = require('express');
const axios = require('axios');
const router = express.Router();
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/", async (req, res) => {
    const search = req.query.q
    const response = await fetch('https://trefle.io/api/v1/plants/search?q=' + search + '&token=X7-v9NfqWUEXXW9mQ94jpeV1YOxvdvAnzc517FAvqFY');
    const json = await response.json();
    res.send(json);
})

module.exports=app;