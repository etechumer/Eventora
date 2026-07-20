const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth')
const eventRoutes = require('./routes/events')
const bookingRoutes = require('./routes/bookings')
const dns = require('dns');

dns.setServers(["1.1.1.1", "8.8.8.8"]);

// making server using express
const app = express();

// to read json formats
app.use(express.json());

// allow web applications loaded in one domain to securely request and access resources from a different domain.
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events',eventRoutes);
app.use('/api/bookings',bookingRoutes);


module.exports = app;