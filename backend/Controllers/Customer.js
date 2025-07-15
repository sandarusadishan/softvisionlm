const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  company: { type: String, required: true },
  phone: String,
  email: String,
  address: String,
  city: String,
  groups: [String],
  amcDetails: {
    softwareName: String,
    version: String,
    users: Number,
    status: String,
    renewalMonth: String,
    renewalDate: Date,
    lastPaidDate: Date
  },
  blsDetails: {
    renewalDate: Date,
    renewalMonth: String,
    status: String,
    lastPaidDate: Date
  },
  cloudDetails: {
    renewalDate: Date,
    renewalMonth: String
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Customer', customerSchema);