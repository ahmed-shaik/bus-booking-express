const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  passenger_name: String,
  journey_date: Date,
  from_city: String,
  to_city: String,
  bus_type: String,
  tickets: Number,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
