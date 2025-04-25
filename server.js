const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const RESUME_PASSWORD = process.env.RESUME_PASSWORD;
const RESUME_LINK = process.env.RESUME_LINK;

app.post('/verify-password', (req, res) => {
  const { password } = req.body;

  if (password === RESUME_PASSWORD) {
    res.status(200).json({ success: true, link: RESUME_LINK });
  } else {
    res.status(401).json({ success: false, message: "Incorrect password" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
