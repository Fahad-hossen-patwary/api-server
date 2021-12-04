const mongoose = require('mongoose')
const validator = require('validator')
const {Schema} = mongoose

const contactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        length: 11
    },
    email: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        validate: {
            validator : (value) => {
                return validator.isEmail(value)
            },
            massage : `{VALUE} is not valid!`
        }
    }
})

const contact = mongoose.model('contact', contactSchema)

module.exports = contact