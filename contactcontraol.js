 const Contact = require('../models/contactmodel')


const contact_controller_for_post_mathod = (req, res, next) => {
    const contact = new Contact({
        name : 'sakib al hasan',
        phone: "01810324910",
        email: "aaaaaaa@gmail.com"
    })
    contact.save()
        .then(contact_data => {
            res.status(201).json({
                massage: 'data successfully saved on database',
                contact_data
            })
        })
        .catch(error => {
            res.status(500).json({
                massage: 'error found',
                error
            })
        })
}
const contact_controller_for_get_mathod = (req, res, next) => {
    Contact.find()
        .then(finded_data => {
            res.status(200).json({
                massage: 'you get all data and at this time you saw it',
                finded_data
            })
        })
        .catch(error => {
            res.status(500).json({
                massage: 'error found',
                error
            })
        })
}
const contact_controller_for_find_data_by_id = (req, res, next) => {
    let id = req.params.id
    Contact.findById(id)
        .then(find_data_by_id => {
            res.status(200).json({
                massage: 'your expected data found and at this time you saw it',
                find_data_by_id
            })
        })
        .catch(error => {
            res.status(500).json({
                massage: 'error found',
                error
            })
        })
}
const contact_controller_for_put_mathod = (req, res, next) => {
    let id = req.params.id
    Contact.findByIdAndUpdate(id,{
        $set : {
            name: "roman tech pro",
            phone: "01810325897",
            email: "fsddasdfjlskdk@gmail.com"
        }
    })
    .then(update_data => {
        res.status(200).json({
            massage:'you got update data right now',
            update_data
        })
    }) 
    .catch(error => {
        res.status(500).json({
            massage: 'error found',
            error
        })
    })
}
const contact_controller_for_delete_mathod = (req, res, next) => {
    let id = req.params.id
    Contact.findByIdAndRemove(id)
        .then(remove_data => {
            res.status(200).json({
                massage: "your expected data was deleted",
                remove_data
            })
        })
        .catch(error => {
            res.status(500).json({
                massage: 'error found',
                error
            })
        })
}
/*
const contact_controller_for_delete_mathod = (req, res, next) => {
    let id = req.params.id
    Contact.findByIdAndDelete(id)
        .then(delete_data => {
            res.status(200).json({
                massage: "your data completely deleted",
                delete_data
            })
        })
        .catch(error => {
            res.status(500).json({
                massage: 'error found',
                error
            })
        })
}
*/


module.exports = {
    contact_controller_for_post_mathod,
    contact_controller_for_get_mathod,
    contact_controller_for_find_data_by_id,
    contact_controller_for_put_mathod,
    contact_controller_for_delete_mathod
}