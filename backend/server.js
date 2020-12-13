import express from 'express';
import data from './data.js'; // in server, must add the ext (.js)

const app = express();

// get the products from data.js
app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Server is Ready');
});

//def a port and use it in listen
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Served at http://localhost:${port}`)
});