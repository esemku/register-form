require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// Config for only development
// if (process.env.NODE_ENV === 'development') {
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

app.use(morgan('dev'));
// }

app.use(express.static('public'));

// Load all routes
const authRouter = require('./routes/auth.route');

// Use Routes
app.use('/api/', authRouter);

app.use(cookieParser());

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Page Not Founded',
  });
});

const URI = process.env.ATLAS_URI;

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
  },
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
