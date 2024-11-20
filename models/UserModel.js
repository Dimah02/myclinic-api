const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    blood_type:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    birth_date:{
        type: String,
        required: true
    },
    allergy_to_medications:{
        type: String,
    },
    medical_history:{
        type: String,
    },
    height:{
        type: String,
    },
    weight:{
        type: String,
    }
  },
)
module.exports = mongoose.model('User', userSchema)