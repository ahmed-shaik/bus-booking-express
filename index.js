const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const Booking = require("./models/Booking");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/bus_booking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/book", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.send("Booking Successful!");
});

app.get("/bookings", async (req, res) => {
  const bookings = await Booking.find({});
  res.render("bookings", { bookings });
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
