const mongoose = require('mongoose')
const validator = require('validator')
const {Schema} = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value)
            },
            massage: `{VALUE} is not an email`
        }
    },
    password: {
        type: String,
        minlength: 3,
        trim: true
    }
})

const user = mongoose.model('user', userSchema)

module.exports = user

