const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const schema = new Schema({
  logo: String,
  company_name: String,
  position: String,
  placement: String,
  description: String,
});

module.exports = mongoose.model('users', schema);