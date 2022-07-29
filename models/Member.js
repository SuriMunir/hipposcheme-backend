const mongoose = require('mongoose');
const memberSchema = new mongoose.Schema({
  'Member ID': {
    type: String,
    required: true,
  },
  'Member Name': {
    type: String,
    required: true,
  },
  'Member Status': {
    type: String,
    required: true,
  },
  'July Value': {
    type: String,
    default: '',
  },
  'August Value': {
    type: String,
    default: '',
  },
  'September Value': {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Member', memberSchema);
