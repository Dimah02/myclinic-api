const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo:{
      type: String,
      required: true,
      default: 'https://cdn-icons-png.flaticon.com/128/847/847969.png'
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
    },
    gender:{
        type: String,
    },
    birth_date:{
        type: String,
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
module.exports = mongoose.model('User', userSchema);
