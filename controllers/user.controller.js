const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const config = require('../config/db.config')
const db = require('../models');
const Users = db.users;

const addUser = async (req, res)=>{
    let Data ={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    const data = await Users.create(Data)

    if(!data){
        res.status(400).json({
            success: false
        })
    }   
    res.status(200).json(
            {results:data}
    )
}
const getAllusers = async (req, res) => {

    let users = await Users.findAll({})
    res.status(200).send(users)

}
const logIN = async (req, res)=>{
   

    const user = await Users.findOne({where:{email:req.body.email}});


    if(!user){
        return res.status(500).send('user not found')
    }
    
   // let pass =  bcrypt.compareSync(req.body.password, user.password)
   // console.log( pass,"     ", user.password,)
   console.log(config.SECRET)
   console.log( user.id)
   const secret = config.SECRET;
    if(user && bcrypt.compareSync(req.body.password, user.password)){
        const token = jwt.sign(
            {userId: user.id},
            secret,
            {expiresIn : '1d'}
        )
        res.status(200).send({
            user:user.email,
            token:token
        })
    
    }else{
        res.status(400).send('password is wrong');
    }
}
module.exports ={getAllusers, addUser, logIN}