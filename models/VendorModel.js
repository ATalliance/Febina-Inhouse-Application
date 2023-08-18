// models/User.js



const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 100
  },

  Mobilenumber: {
    type: Number,
    required: true,
    unique: true,
    match: /^[0-9]{10}$/
  },
  GST: {
    type: Number,
    required: true
  },
  country: {
    type: String, // You can use the appropriate data type based on your use case
    required: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
