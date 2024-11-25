const mongoose = require('mongoose')
const Doctor = require('../models/doctorModel');
const Clinic = require('../models/clinicModel');
mongoose.set("strictQuery", false)

const generateFakeAppointments = () => {
  const appointments = [];
  const startDate = new Date();
  for (let i = 0; i < 7; i++) { // Generate for the next 7 days
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);
    
    const timeSlots = [];
    for (let hour = 9; hour <= 17; hour++) { // From 9:00 AM to 5:00 PM
      timeSlots.push({
        start: `${hour}:00`,
        end: `${hour + 1}:00`,
        available: Math.random() > 0.3, // Randomly mark slots as available or not
      });
    }

    appointments.push({
      date: day,
      time: timeSlots,
    });
  }
  return appointments;
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)


    const clinics = [
      { name: 'Clinic A' },
      { name: 'Clinic B' },
      { name: 'Clinic C' },
    ];
    const doctors = [
      {
        name: 'Dr. John Doe',
        specialization: 'Cardiology',
        about: 'Expert in heart health with over 10 years of experience.',
        photo: 'photo1.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Jane Smith',
        specialization: 'Neurology',
        about: 'Specializes in treating disorders of the brain and nervous system.',
        photo: 'photo2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Raj Patel',
        specialization: 'Orthopedics',
        about: 'Focuses on musculoskeletal injuries and conditions.',
        photo: 'photo3.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Maria Gonzalez',
        specialization: 'Pediatrics',
        about: 'Dedicated to providing care for children and young adults.',
        photo: 'photo4.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Ahmed Hassan',
        specialization: 'Dermatology',
        about: 'Experienced in treating skin, hair, and nail disorders.',
        photo: 'photo5.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Emily White',
        specialization: 'Ophthalmology',
        about: 'Specializes in eye care and vision health.',
        photo: 'photo6.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Kevin Brown',
        specialization: 'Psychiatry',
        about: 'Expert in mental health and psychiatric care.',
        photo: 'photo7.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Sofia Ivanov',
        specialization: 'Gynecology',
        about: 'Dedicated to women’s reproductive health.',
        photo: 'photo8.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Henry Liu',
        specialization: 'Internal Medicine',
        about: 'Focuses on the prevention, diagnosis, and treatment of adult diseases.',
        photo: 'photo9.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Chloe Martin',
        specialization: 'Endocrinology',
        about: 'Expert in hormonal and metabolic disorders.',
        photo: 'photo10.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
    ];
    // Doctor.insertMany(doctors);
    // Clinic.insertMany(clinics);
    // Promise.all([Doctor.insertMany(doctors), Clinic.insertMany(clinics)])
    //   .then(([insertedDoctors, insertedClinics]) => {
    //     const clinicUpdatePromises = insertedClinics.map(async (clinic) => {
    //       const doctorIds = [];
    //       for (let i = 0; i < 3; i++) { // Assign 3 doctors per clinic
    //         const randomIndex = Math.floor(Math.random() * insertedDoctors.length);
    //         doctorIds.push(insertedDoctors[randomIndex]._id);
    //         insertedDoctors.splice(randomIndex, 1); // Remove the used doctor from the list for future assignments
    //       }
    //       return await Clinic.findByIdAndUpdate(clinic._id, { $push: { doctors: doctorIds } });
    //     });

    //     return Promise.all(clinicUpdatePromises);
    //   })
    //   .then(() => {
    //     console.log('Doctors assigned to clinics successfully!');
    //     mongoose.connection.close();
    //   })
    //   .catch(err => console.error('Error assigning doctors:', err));

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
module.exports = connectDB