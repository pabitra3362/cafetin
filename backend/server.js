import express from 'express';
import config from './config.js'
import payment from './routes/payment.js'
import cart from './routes/cart.js'
import order from './routes/order.js'
import mongoConnect from './database/db.js';
import cors from 'cors';


const app = express();
const port = config.port || 3000;

mongoConnect();

app.use(express.json()); // Middleware to parse JSON data
app.use(cors());


// Route to test if the server is working
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route for cart apis
app.use('/api/cart',cart)

// Route for payment apis
app.use('/api/payment',payment)

// Route for order apis
app.use('/api/order',order)

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
