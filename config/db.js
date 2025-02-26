const mongoose = require('mongoose')
const Doctor = require('../models/doctorModel');
const Clinic = require('../models/clinicModel');
mongoose.set("strictQuery", false)

const generateFakeAppointments = () => {
  const appointments = [];
  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);
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

const connectDataBase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Connected: ${conn.connection.host}`)


    const clinics = [
      { name: 'Cardiologist', image: "assets/clinics/Cardiologist.png" },
      { name: 'Dentists', image: "assets/clinics/Dentists.png" },
      { name: 'gastrologist', image: "assets/clinics/gastrologist.png" },
      { name: 'Heart specialist', image: "assets/clinics/Heart specialist.png" },
      { name: 'Hematologist', image: "assets/clinics/Hematologist.png" },
      { name: 'Hepatologist', image: "assets/clinics/Hepatologist.png" },
      { name: 'Nephrology Therapy', image: "assets/clinics/Nephrology.png" },
      { name: 'Nose specialist', image: "assets/clinics/Nose specialist.png" },
      { name: 'Opthalmologist ', image: "assets/clinics/Opthalmologist.png" },
      { name: 'Pulmonologist', image: "assets/clinics/Pulmonologist.png" },
      { name: 'Pancreatigist', image: "assets/clinics/Pancreatigist.png" },
      { name: 'Psychologist', image: "assets/clinics/Psychologist.png" },
    ];
    const doctors = [
      {
        name: 'Dr. Adam Johnson',
        specialization: 'Internal Medicine Specialist',
        about: 'Expert in managing chronic illnesses and complex medical conditions.',
        photo: 'internal_medicine1.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Sophia Williams',
        specialization: 'Internal Medicine Consultant',
        about: 'Focused on preventive care and improving overall adult health.',
        photo: 'internal_medicine2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Ethan Clark',
        specialization: 'Ear, Nose, and Throat Surgeon',
        about: 'Specializes in surgical treatments for ENT disorders.',
        photo: 'ent1.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Olivia Evans',
        specialization: 'ENT Specialist',
        about: 'Provides comprehensive care for hearing and sinus issues.',
        photo: 'ent2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Michael Scott',
        specialization: 'Dentist',
        about: 'Focused on restorative and cosmetic dental procedures.',
        photo: 'dental1.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Emily Brown',
        specialization: 'Orthodontist',
        about: 'Expert in braces and correcting dental alignment.',
        photo: 'dental2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Daniel Harris',
        specialization: 'Ophthalmologist',
        about: 'Specializes in cataract surgeries and vision correction.',
        photo: 'ophthalmology1.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Emma Robinson',
        specialization: 'Eye Care Specialist',
        about: 'Focused on diagnosing and managing glaucoma and other eye diseases.',
        photo: 'ophthalmology2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Noah Wilson',
        specialization: 'Clinical Psychologist',
        about: 'Provides therapy and mental health support for anxiety and depression.',
        photo: 'psychology1.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Ava Martinez',
        specialization: 'Counseling Psychologist',
        about: 'Focused on family therapy and stress management techniques.',
        photo: 'psychology2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Liam Thompson',
        specialization: 'Dermatologist',
        about: 'Experienced in treating acne and skin disorders.',
        photo: 'dermatology1.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Mia Garcia',
        specialization: 'Cosmetic Dermatologist',
        about: 'Expert in skin rejuvenation and anti-aging treatments.',
        photo: 'dermatology2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Lucas Walker',
        specialization: 'Occupational Therapist',
        about: 'Helps individuals regain independence after injuries.',
        photo: 'occupational_therapy1.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Lily Lewis',
        specialization: 'Pediatric Occupational Therapist',
        about: 'Specializes in therapy for children with developmental delays.',
        photo: 'occupational_therapy2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Benjamin Hill',
        specialization: 'Dietitian',
        about: 'Focused on creating customized nutrition plans for weight management.',
        photo: 'dietitian1.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Isabella Carter',
        specialization: 'Sports Dietitian',
        about: 'Expert in nutrition for athletes and performance enhancement.',
        photo: 'dietitian2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. James Turner',
        specialization: 'Orthopedic Surgeon',
        about: 'Specializes in joint replacement and sports injuries.',
        photo: 'orthopedic1.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Charlotte Baker',
        specialization: 'Orthopedic Consultant',
        about: 'Focused on spine health and rehabilitation therapies.',
        photo: 'orthopedic2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. William Anderson',
        specialization: 'Speech-Language Pathologist',
        about: 'Expert in treating speech disorders in children and adults.',
        photo: 'speech_pathology1.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Grace Parker',
        specialization: 'Voice Therapist',
        about: 'Focused on helping individuals with voice and fluency disorders.',
        photo: 'speech_pathology2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Grace Parker',
        specialization: 'Voice Therapist',
        about: 'Focused on helping individuals with voice and fluency disorders.',
        photo: 'speech_pathology2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Grace Parker',
        specialization: 'Voice Therapist',
        about: 'Focused on helping individuals with voice and fluency disorders.',
        photo: 'speech_pathology2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Grace Parker',
        specialization: 'Voice Therapist',
        about: 'Focused on helping individuals with voice and fluency disorders.',
        photo: 'speech_pathology2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
      {
        name: 'Dr. Grace Parker',
        specialization: 'Voice Therapist',
        about: 'Focused on helping individuals with voice and fluency disorders.',
        photo: 'speech_pathology2.jpg',
        reviews: [],
        averageRating: 0,
        appointments: generateFakeAppointments(),
      },
    ];
    const doctorImages = [
      "https://cdn-icons-png.flaticon.com/128/2922/2922510.png", // Doctor 1
      "https://cdn-icons-png.flaticon.com/128/2922/2922656.png", // Doctor 2
      "https://cdn-icons-png.flaticon.com/128/2922/2922561.png", // Doctor 3
      "https://cdn-icons-png.flaticon.com/128/2922/2922685.png", // Doctor 4
      "https://cdn-icons-png.flaticon.com/128/2922/2922536.png", // Doctor 5
      "https://cdn-icons-png.flaticon.com/128/2922/2922506.png", // Doctor 6
      "https://cdn-icons-png.flaticon.com/128/2922/2922597.png", // Doctor 7
      "https://cdn-icons-png.flaticon.com/128/2922/2922553.png", // Doctor 8
      "https://cdn-icons-png.flaticon.com/128/2922/2922608.png", // Doctor 9
      "https://cdn-icons-png.flaticon.com/128/2922/2922526.png", // Doctor 10
      "https://cdn-icons-png.flaticon.com/128/2922/2922546.png", // Doctor 11
      "https://cdn-icons-png.flaticon.com/128/2922/2922650.png", // Doctor 12
      "https://cdn-icons-png.flaticon.com/128/2922/2922517.png", // Doctor 13
      "https://cdn-icons-png.flaticon.com/128/2922/2922592.png", // Doctor 14
      "https://cdn-icons-png.flaticon.com/128/2922/2922564.png", // Doctor 15
      "https://cdn-icons-png.flaticon.com/128/2922/2922585.png", // Doctor 16
      "https://cdn-icons-png.flaticon.com/128/2922/2922539.png", // Doctor 17
      "https://cdn-icons-png.flaticon.com/128/2922/2922660.png", // Doctor 18
      "https://cdn-icons-png.flaticon.com/128/2922/2922673.png", // Doctor 19
      "https://cdn-icons-png.flaticon.com/128/2922/2922665.png", // Doctor 20
      "https://cdn-icons-png.flaticon.com/128/2922/2922665.png", // Doctor 21
      "https://cdn-icons-png.flaticon.com/128/2922/2922665.png", // Doctor 22
      "https://cdn-icons-png.flaticon.com/128/2922/2922665.png", // Doctor 23
      "https://cdn-icons-png.flaticon.com/128/2922/2922665.png", // Doctor 24
    ];
    doctors.forEach((doctor, index) => {
      doctor.photo = doctorImages[index];
    });
    
    
   
    // Promise.all([Doctor.insertMany(doctors), Clinic.insertMany(clinics)])
    //   .then(([insertedDoctors, insertedClinics]) => {
    //     const clinicUpdatePromises = insertedClinics.map((clinic, index) => {
    //       // Determine the slice of doctors for this clinic
    //       const doctorIds = insertedDoctors.slice(index * 2, index * 2 + 2).map(doctor => doctor._id);

    //       // Update the clinic with the assigned doctors
    //       return Clinic.findByIdAndUpdate(clinic._id, { $push: { doctors: { $each: doctorIds } } });
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
module.exports = connectDataBase