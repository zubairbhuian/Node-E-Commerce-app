const express = require("express");
const createError = require('http-errors')
const bodyParser = require('body-parser');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit')
const morgam = require("morgan");
const UserRouter = require("./routers/userRoute");
const seedRouter = require("./routers/seedRoute");
const baseRouter = require("./routers/baseRoute");
const multer = require('multer');
const app = express();

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 100, // 1 minute
  max: 5,
  message: 'Too many reuests from this IP'
})

app.use(xssClean());
app.use(rateLimiter);
app.use(morgam('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users', UserRouter);
app.use('/api/seed', seedRouter);
app.use('/', baseRouter);


// client Error handeling
app.use((req, res, next) => {
  createError(404, 'route not found')
  next();
})

// ***********
// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/upload', (req, res) => {
  res.send("this demo upload")
})

app.post('/upload', upload.single('file'), (req, res) => {
  // Handle FormData here
  const file = req.file;

  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  // Process the file (e.g., save it, manipulate it, etc.)
  // For demonstration, we are just sending back the file details
  res.send({
    originalname: file.originalname,
    encoding: file.encoding,
    mimetype: file.mimetype,
    size: file.size
  });
});

// ***********



// server Error handeling
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(505).send('Something Broken!')
  return res.status(err.status || 500).json({
    success: false, menubar: err.message
  })
})

module.exports = app;