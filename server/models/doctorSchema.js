const mongoose = require('mongoose')
const { Schema } = mongoose
const uniqueValidator = require('mongoose-unique-validator')

const doctorSchema = new Schema({
    lastname: {type: String, required: true},
    firstname: {type: String, required: true},
    email: {type: String, required:true, unique:true},
    phone: {type: String},
    adress: {type: String},
    arrondissement: {type: Number},
    password: {type: String, required:true},
    role:{type: String, default: 'doctor'}, 
    subscription:{
        status: {type: String},
        payment_method: {type:String}
    },
    daily_patient_limit:{type: Number, default:0},
    daily_patient_list:[{
        patientId: {type:String, required:true},
        patientName: {type: String, required:true},
        date:{type: Date, default:Date.now}

    }],
    
});

doctorSchema.plugin(uniqueValidator);

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;