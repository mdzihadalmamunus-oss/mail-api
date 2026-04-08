const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

// Gmail config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "YOUR_GMAIL@gmail.com",
    pass: "YOUR_APP_PASSWORD"
  }
});

// API route
app.get("/send", async (req, res) => {
  let to = req.query.to;
  let msg = req.query.msg || "Hi 😊";

  try {
    await transporter.sendMail({
      from: "YOUR_GMAIL@gmail.com",
      to: to,
      subject: "Hello 👋",
      text: msg
    });

    res.send({ status: "sent" });

  } catch (err) {
    res.send({ status: "error", error: err.toString() });
  }
});

app.listen(3000);
