const Doctor = require('../models/doctorSchema')
const { hashPassword, comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken')


//register endpoint
const registerDoctor = async (req,res) => {
    try {
        const {lastname, firstname, email, password} = req.body;
        // Check if name was entered
        if(!lastname || !firstname) {
            return res.json({
                error: 'lastname and fisrtname is required'
            })
        };
        //Check is password is good
        if(!password || password.length < 6){
            return res.json({
                error: 'Password id required and should be at least 6 characteres long'
            })
        };
        //Check email
        const exist = await Doctor.findOne({email})
        if(exist) {
            return res.json ({
                error : ' Email is taken already'
            })
        }

        const hashedPassword = await hashPassword(password) 
        //create user in database
        const user = await Doctor.create({
            lastname, 
            firstname,
            email, 
            password : hashedPassword
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

//login endpoint
const loginDoctor = async (req,res) => {
 try {
    const {email, password} = req.body;

    //Check if user exist
    const user = await Doctor.findOne({email});

    if(!user){
        return res.json({
            error: 'No user found'
        })
    }

    //Check if password match
    const match = await comparePassword(password, user.password)
    if(match){
        jwt.sign({
            email: user.email,
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            daily_patient_list: user.daily_patient_list
        }, process.env.JWT_SECRET, {}, (err,token) => {
            if(err) throw err;
            res.cookie('token', token).json(user)
        })
    }
    if(!match){
        res.json({
            error: "Password do not match"
        })
    }
 } catch (error) {
    console.log(error)
 }
}

const getProfile = (req,res) => {
    const {token} = req.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err,user)=>{
            if(err) throw err;
            console.log(user)
            res.json(user)
        })
    } else {
        res.json(null)
    }
}

module.exports = {
    registerDoctor, 
    loginDoctor,
    getProfile
}