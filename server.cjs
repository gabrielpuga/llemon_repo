const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let bookings = []; // Array to store bookings

app.post('/bookings', (req, res) => {
    bookings.push(req.body);
    res.status(201).json({ message: 'Booking successful!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


