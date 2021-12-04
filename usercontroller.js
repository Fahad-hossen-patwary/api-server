const User = require('../models/usermodel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registercontroller = (req, res, next) => {


    let email = req.body.email
    let password = req.body.password
    
    bcrypt.hash(password, 10, (err, hash) => {
        if(err){
            res.json({
                massage: 'error occurd',
                err
            })
        }
        let user = new User({
            email: email,
            password: hash
        })
        user.save()
            .then(user_data => {
                res.json({
                    massage: 'user data save successfully on database',
                    user_data
                })
            })
            .catch(err => {
                res.status(500).json({
                    massage: 'error occurd',
                    err
                })
            })
    })  
    
}

const loginController = (req, res, next) => {
    
    let email = req.body.email
    let password = req.body.password


    User.findOne({email})
        .then(user => {
            if(user){
                bcrypt.compare(password, user.password, function(err, result) {
                    if(err){
                        res.status(500).json({
                            massage: 'uncompared',
                            err
                        })
                        next()
                    }
                    if(result){
                        let token = jwt.sign({email: user.email}, 'SECRET',
                        {expiresIn: '2h'})
                        res.json({
                            massage: 'login successful',
                            token
                        })
                    }else{
                        res.json({
                            massage: 'password don\'t match'
                        })
                    }
                   
                })
            }else{
                res.json({
                    massage:'your email is wrong'
                })
            }
        })
        .catch(err => {
            res.json({
                massage: 'findone error',
                err
            })
        })
        
}


const get_all_user_data = (req, res, next) =>{
    User.find()
        .then(all_data => {
            res.status(200).json({
                massage: 'All user data found and you saw it',
                all_data
            })
        })
        .catch(error => {
            res.status(500).json({
                massege: 'error occurd',
                error
            })
        })
}
const get_user_data_by_id = (req, res, next) => {
    let id = req.params.id
    User.findById(id)
        .then(find_by_id => {
            res.status(200).json({
                massage: "you can find user data by id",
                find_by_id
            })
        })
        .catch(err => {
            res.status(500).json({
                massage: "error found",
                err
            })
        })
}

const get_data_by_id_and_update = (req, res, next) => {
    let id = req.params.id
    User.findByIdAndUpdate(id)
        .then(update_data => {
            res.status(200).json({
                massage: "your data is updated",
                update_data
            })
        })
        .catch(err => {
            res.status(500).json({
                massage: "error found",
                err
            })
        })
}
const delete_user_data = (req, res, next) => {
    let id = req.params.id
    User.findByIdAndRemove(id)
        .then(removed_data => {
            res.status(200).json({
                massage: "Your expected user data was successfully deleted",
                removed_data
            })
        })
        .catch(err => {
            res.status(500).json({
                massage: "error found",
                err
            })
        })
}

module.exports = {
    registercontroller,
    get_all_user_data,
    loginController,
    get_user_data_by_id,
    get_data_by_id_and_update,
    delete_user_data
}

