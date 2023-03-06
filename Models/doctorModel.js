const mongoose = require('mongoose');

const User = require('./userModel');

const Doctor = User.discriminator(
  'Doctor',
  new mongoose.Schema(
    {
      specialization: {
        type: String,
        required: [true, 'A doctor must have a specialization'],
        trim: true,
      },
      experience: Number,
      fees: {
        type: Number,
        default: 300,
      },
      timePerPatient: {
        type: Number,
        default: 15,
      },
      timeTable: [],
      patients: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Patient',
        },
      ],
      appointments: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'Appointment',
        },
      ],
      averageRating: {
        type: Number,
        default: 4.5,
      },
      status: {
        type: String,
        default: 'pending',
        enum: ['refused', 'pending', 'accepted'],
      },
    },
    { discriminatorKey: 'kind' }
  )
);

module.exports = Doctor;
