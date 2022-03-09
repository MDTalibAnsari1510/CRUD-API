module.exports = (sequelize, DataTypes )=>{
    const Products = sequelize.define('products',{
        name:{
            type:DataTypes.STRING,
            allowNull: false
        },
        description:{
            type:DataTypes.STRING,
            allowNull: false
        },
        richDescription:{
            type:DataTypes.STRING
        },
        brand:{
            type:DataTypes.STRING
        },
        price:{
            type:DataTypes.INTEGER
        },
        category:{
            type:DataTypes.STRING,
            allowNull: false
        },
        countInStock:{
            type:DataTypes.INTEGER,
            allowNull: false,
            min:0,
            max:250
        },
        rating:{
            type:DataTypes.INTEGER
        },
        numReviews:{
            type:DataTypes.INTEGER
        },
        isFeatured:{
            type:DataTypes.BOOLEAN
        }
    },{
        timestamps: true
    });
    return Products;

}