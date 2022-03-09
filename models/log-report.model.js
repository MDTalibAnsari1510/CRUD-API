

module.exports = (sequelize, DataTypes)=>{
    const Reports = sequelize.define("reports",{
        userId:{
            type:DataTypes.INTEGER
        },
        entryDate:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        quizeId:{
            type: DataTypes.STRING
        },
        applicationName:{
            type:DataTypes.TEXT
        }
    });
    return Reports
}