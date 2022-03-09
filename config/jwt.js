const jwt = require('jsonwebtoken')
const config = require('./db.config');
verifyToken = (req, res, next) => {
    var token = req.headers["authorization"].replace("Bearer ", "");

    if (!token)
        return res.status(403).send({ auth: false, message: "No token provided." });
        
        const secret = config.SECRET ;
    jwt.verify(token,secret , (err, decoded) => {
        console.log(decoded.userId)
        req.userId= decoded.userId
        if (err){
            return res.status(500).send({
                 auth: false, message: "Failed"
            })
        }
        else{
            
            // res.status(200).send({auth:true, msg: decoded})
            next()
        }
    })

}

module.exports = verifyToken;