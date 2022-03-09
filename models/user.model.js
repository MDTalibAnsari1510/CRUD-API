module.exports = (sequelize, DataTypes)=>{
    const Users = sequelize.define('users', {
        firstName:{
            type:DataTypes.STRING,
            required: true
        },
        lastName:{
            type:DataTypes.STRING,
            required: true
        },
        email:{
            type:DataTypes.STRING,
            required: true
        },
        password:{
            type: DataTypes.STRING,
            required:true
        }

    },{
        timestamps: true
    })
    return Users
}