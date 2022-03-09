const db = require('../models');
const Product = db.products;

// 1. create product

const addProduct = async (req, res)=>{
    let info = {
        name:req.body.name,
        description:req.body.description,
        richDescription:req.body.richDescription,
        brand:req.body.brand,
        price:req.body.price,
        category:req.body.category,
        countInStock:req.body.countInStock,
        rating:req.body.rating,
        numReviews:req.body.numReviews,
        isFeatured:req.body.isFeatured
    }
    const product = await Product.create(info);
    if(!product){
        return res.status(400).json({
            success: false,
            err
        });
    }
    return res.status(200).json({
        success: true,
        result: product
    });
}

// 2. get all products

const getAllProducts = async (req, res) => {

    let products = await Product.findAll({})
    res.status(200).send(products)

}

// 3. get single product

const getOneProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.findOne({ where: { id: id }})
    res.status(200).send(product)

}

// 4. update Product

const updateProduct = async (req, res) => {

    let id = req.params.id

    const product = await Product.update(req.body, { where: { id: id }})

    res.status(200).send(product)
   

}

// 5. delete product by id

const deleteProduct = async (req, res) => {

    let id = req.params.id
    
    await Product.destroy({ where: { id: id }} )

    res.status(200).send('Product is deleted !')

}

module.exports = {addProduct, getAllProducts, getOneProduct, updateProduct, deleteProduct}