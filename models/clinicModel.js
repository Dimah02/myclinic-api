// models/Clinic.js
const mongoose = require('mongoose')
const clinicSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    doctors:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
    }]
  },
)
module.exports = mongoose.model('Clinic', clinicSchema);