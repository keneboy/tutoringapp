const mongoose = require("mongoose");

const bootcampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: /[a-zA-Z]{3,}/,
  },
  email: {
    type: String,
    required: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    unique: true,
  },
  country: {
    type: String,
    required: true,
    match: /[a-zA-Z]{3,}/,
  },
});

const Bootcamp = mongoose.model("bootcamp", bootcampSchema);

module.exports = Bootcamp;
